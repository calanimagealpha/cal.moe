import { redirect } from '@sveltejs/kit'

export function load() {
    throw redirect(307, 'https://discordapp.com/invite/Xp4MUjG')
}
