import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from "$env/static/private"

const API_ENDPOINT = 'https://discord.com/api/v10'

export const redirectUrl = import.meta.env.MODE === 'production' ?
    'https://cal.moe/api/auth/discord' : 'http://localhost:5173/api/auth/discord'

export type User = {
    id: string,
    username: string,
    discriminator: string,
    global_name: string | null,
    avatar: string | null,
}

export async function getCurrentUser(token: string): Promise<User> {
    return await fetch(
        `${API_ENDPOINT}/users/@me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then(r => r.json())
}

export async function refreshToken(refreshToken: string) {
    const tokenRefreshParams = new URLSearchParams()
    tokenRefreshParams.append('client_id', DISCORD_CLIENT_ID)
    tokenRefreshParams.append('client_secret', DISCORD_CLIENT_SECRET)
    tokenRefreshParams.append('grant_type', 'refresh_token')
    tokenRefreshParams.append('refresh_token', refreshToken)

    const {
        access_token: accessToken,
        expires_in: expiresIn,
        refresh_token: newRefreshToken
    } = await fetch(
        `${API_ENDPOINT}/oauth2/token`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: tokenRefreshParams
    }
    ).then(r => r.json()) as {
        access_token: string,
        expires_in: number,
        refresh_token: string
    }

    const expiryDate = new Date(Date.now() + expiresIn * 1000)

    return {
        accessToken,
        refreshToken: newRefreshToken,
        expiryDate
    }
}