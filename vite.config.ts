import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	server: {
		proxy: {
			'^/assets/(konshuu|video)/.*': {
				target: 'https://cal.moe',
				changeOrigin: true
			},
			'^/api/.*': {
				target: 'http://localhost:5000',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, '')
			}
		}
	}
};

export default config;
