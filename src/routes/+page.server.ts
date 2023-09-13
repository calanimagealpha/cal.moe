import { getUserToken } from "$lib/api/db/client";
import { getCurrentUser } from "$lib/api/discord";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
    const sessionId = cookies.get('DISCORD_SESSION_ID')

    if (!sessionId) {
        return
    }

    try {
        const accessToken = await getUserToken(sessionId)

        return {
            user: await getCurrentUser(accessToken)
        }
    } catch (err) { }
}