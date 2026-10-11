/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,ts,md,mdx}"],
	theme: {
		screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl: "1280px",
		},
		// Legacy palette: only used by the CityKlub legal pages (src/pages/products/cityklub/*).
		colors: {
			black: "#000000",
			white: "#FFFFFF",
			transparent: "transparent",
			current: "currentColor",
			lime: "#B9FF66",
			zinc: {
				100: "#F3F3F3",
				300: "#D9D9D9",
				900: "#191A23",
			},
		},
		extend: {
			colors: {
				// Design tokens. Values live in src/styles/global.css so light/dark can swap them.
				canvas: "rgb(var(--canvas) / <alpha-value>)",
				panel: "rgb(var(--panel) / <alpha-value>)",
				ink: "rgb(var(--ink) / <alpha-value>)",
				muted: "rgb(var(--muted) / <alpha-value>)",
				line: "rgb(var(--line) / <alpha-value>)",
				accent: "rgb(var(--accent) / <alpha-value>)",
				onaccent: "rgb(var(--onaccent) / <alpha-value>)",
			},
			fontFamily: {
				display: ["var(--font-display)", '"Space Grotesk"', "ui-sans-serif", "system-ui", "sans-serif"],
				mono: ["var(--font-mono)", '"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
			},
			borderRadius: {
				card: "var(--radius-card)",
				ctl: "var(--radius-ctl)",
			},
			maxWidth: { site: "1200px" },
		},
	},
};
