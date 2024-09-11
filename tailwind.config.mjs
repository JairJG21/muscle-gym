/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				blackOpsOne: ['Black Ops One', 'system-ui'],
				rubikGlitch: ['Rubik Glitch', 'system-ui'],
				lacquer: ['Lacquer', 'system-ui'],
				robotoMono: ['Roboto Mono Variable', 'system-ui'],
				protestRevolution: ['Protest Revolution', 'system-ui']
			},
			colors: {
				'custom-red': '#ED1C24',
				'custom-red2': '#871015',
			},
		},
	},
	plugins: [
		require('daisyui')
	],
}