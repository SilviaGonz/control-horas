/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "var(--color-primary)",
				secondary: "var(--color-secondary)",
				accent: "var(--color-accent)",
				twitch: "var(--color-twitch)",
				ice: "var(--color-twitch-ice)",
			},
			screens: {
				mobile: "440px",
			},
		},
	},
	plugins: [],
}
