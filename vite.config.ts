import { sveltekit } from '@sveltejs/kit/vite'
import type { UserConfig } from 'vite'

const config: UserConfig = {
    plugins: [sveltekit()],
    server: {
        proxy: {
            '^/assets/(konshuu|video)/.*': {
                target: 'https://cal.moe',
                changeOrigin: true
            }
        }
    }
}

export default config
