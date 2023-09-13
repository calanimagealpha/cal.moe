import { redirect } from '@sveltejs/kit'

export function load() {
    throw redirect(302, 'https://discordapp.com/invite/Xp4MUjG')
}
