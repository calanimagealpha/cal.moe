import { PrismaClient } from "@prisma/client";
import { refreshToken } from "../discord";
import { NotLoggedInException } from "$lib/errors";

const prisma = new PrismaClient()

export async function insertNewUserToken({
    sessionId,
    accessToken,
    refreshToken,
    expiryDate
}: {
    sessionId: string,
    accessToken: string,
    refreshToken: string,
    expiryDate: Date
}) {
    await prisma.userToken.upsert({
        where: { sessionId },
        update: {
            accessToken,
            refreshToken,
            expiresAt: expiryDate
        },
        create: {
            sessionId,
            accessToken,
            refreshToken,
            expiresAt: expiryDate
        }
    })

}

export async function getUserToken(sessionId: string): Promise<string> {
    const userToken = await prisma.userToken.findUnique({
        where: { sessionId }
    })

    if (!userToken) {
        throw NotLoggedInException()
    }

    const { accessToken, expiresAt } = userToken

    if (expiresAt.getTime() < Date.now()) {
        throw NotLoggedInException()
    }

    if (expiresAt.getTime() + 3600 * 1000 < Date.now()) {
        const newToken = await refreshToken(userToken.refreshToken)

        await insertNewUserToken({
            sessionId,
            ...newToken
        })

        return newToken.accessToken
    }

    return accessToken
}

export async function removeUserToken(sessionId: string) {
    try {
        await prisma.userToken.delete({
            where: { sessionId }
        })
    } catch (e) { }
}