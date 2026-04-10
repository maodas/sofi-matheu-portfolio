/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
				serif: ['Lora', 'serif'],
			},
			colors: {
				primary: '#6B46C1',
				'earth-bg': '#FAEDCD',
				'earth-text': '#4A3F35',
				terracotta: '#D4A373',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(15px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				}
			},
			animation: {
				'fade-in': 'fade-in 0.8s ease-out forwards',
			}
		},
	},
	plugins: [],
}
