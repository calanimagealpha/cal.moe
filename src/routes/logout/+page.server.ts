import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";
import { removeUserToken } from "$lib/api/db/client";

export const load: PageServerLoad = async ({ cookies }) => {
    const sessionId = cookies.get('DISCORD_SESSION_ID')

    if (sessionId) {
        await removeUserToken(sessionId)
    }

    throw redirect(307, '/')
}