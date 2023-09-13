import { redirect } from '@sveltejs/kit'
import type { PageServerLoad } from './$types'
import { DISCORD_CLIENT_ID, DISCORD_CLIENT_SECRET } from '$env/static/private'
import { insertNewUserToken } from '$lib/api/db/client'
import { redirectUrl } from '$lib/api/discord'
import { v4 as uuid } from 'uuid'

export const load: PageServerLoad = async ({ url, cookies }) => {
    const code = url.searchParams.get('code') ?? '' // TODO login fail page

    const tokenExchangeParams = new URLSearchParams()
    tokenExchangeParams.append('client_id', DISCORD_CLIENT_ID)
    tokenExchangeParams.append('client_secret', DISCORD_CLIENT_SECRET)
    tokenExchangeParams.append('grant_type', 'authorization_code')
    tokenExchangeParams.append('code', code)
    tokenExchangeParams.append('redirect_uri', redirectUrl)

    const {
        access_token: accessToken,
        expires_in: expiresIn,
        refresh_token: refreshToken
    } = await fetch('https://discord.com/api/v10/oauth2/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: tokenExchangeParams
    }).then((r) => r.json())

    const expiryDate = new Date(Date.now() + expiresIn * 1000)

    let sessionId = cookies.get('DISCORD_SESSION_ID')

    if (!sessionId) {
        sessionId = uuid()

        cookies.set('DISCORD_SESSION_ID', sessionId, {
            path: '/'
        })
    }

    await insertNewUserToken({
        sessionId,
        accessToken,
        refreshToken,
        expiryDate
    })

    throw redirect(308, '/')
}
