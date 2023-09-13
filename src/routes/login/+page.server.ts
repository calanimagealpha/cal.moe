import { redirect } from '@sveltejs/kit'
import { DISCORD_CLIENT_ID } from '$env/static/private'
import { redirectUrl } from '$lib/api/discord'

export function load() {
    const authorizeUrl = new URL('https://discord.com/api/oauth2/authorize')

    authorizeUrl.searchParams.append('client_id', DISCORD_CLIENT_ID)
    authorizeUrl.searchParams.append('redirect_url', redirectUrl)
    authorizeUrl.searchParams.append('response_type', 'code')
    authorizeUrl.searchParams.append('scope', 'identify guilds')

    throw redirect(302, authorizeUrl.href)
}