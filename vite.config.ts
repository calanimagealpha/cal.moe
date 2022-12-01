import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig, ViteDevServer } from 'vite';

import glob from 'glob';
import path from 'path';

const konshuuServer = {
	name: 'konshuuServer',
	configureServer(server: ViteDevServer) {
		server.middlewares.use(async (req, res, next) => {
			if (req.url === '/assets/konshuu/index.php') {
				const pdfs = await new Promise<string[]>((resolve, reject) => {
					glob('static/assets/konshuu/*/*.pdf', (err, pdfs) => {
						if (err) {
							return reject(err);
						}

						resolve(pdfs);
					});
				});

				res.writeHead(200);

				return res.end(
					JSON.stringify(
						pdfs.map((pdf) => ({
							volume: path.basename(path.dirname(pdf)),
							issue: path.basename(pdf, '.pdf')
						}))
					)
				);
			}

			next();
		});
	}
};

const config: UserConfig = {
	plugins: [konshuuServer, sveltekit()]
};

export default config;
