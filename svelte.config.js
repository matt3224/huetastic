import adapter from '@sveltejs/adapter-netlify';
import replace from '@rollup/plugin-replace';
import fs from 'fs';

const { version } = JSON.parse(fs.readFileSync('./package.json'));

const replaceconfig = {
	preventAssignment: false,
	values: { 'pkg.version': version }
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter(),
		target: '#svelte',
		vite: {
			plugins: [replace(replaceconfig)]
		}
	}
};

export default config;
