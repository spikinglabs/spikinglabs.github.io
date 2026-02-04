/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	safelist: [
		'bg-sky-50',
		'bg-sky-100',
		'bg-sky-200',
		'bg-sky-300',
		'bg-sky-400',
		'bg-orange-200',
		'bg-lime',
		'bg-black',
		'bg-zinc-100',
		'text-black',
		'text-white',
	],
	theme: {
	  screens: {
		sm: "480px",
		md: "768px",
		lg: "976px",
		xl: "1440px",
	  },
	  colors: {
		black: "#000000",
		white: "#FFFFFF",
		gray: "#0D0C22",
		stone: "#231F20",
		lime: "#B9FF66",
		blue: "#87CEEB",
		orange: {
		  50: "#FFF7ED",
		  100: "#FFEDD5",
		  200: "#FED7AA",
		  300: "#FDBA74",
		  400: "#FB923C",
		},
		sky: {
		  50: "#E0F6FF",
		  100: "#B3E9FF",
		  200: "#87CEEB",
		  300: "#5AB3E8",
		  400: "#4A9FD8",
		},
		zinc: {
		  100: "#F3F3F3",
		  200: "#F0F0F0",
		  300: "#D9D9D9",
		  400: "#D8D8D8",
		  500: "#898989",
		  600: "#B0B0B0",
		  700: "#787878",
		  800: "#292A32",
		  900: "#191A23",
		},
	  },
	  boxShadow:{
        'card':'0px 5px 0px 0px #191A23'
      },
	  extend: {
		fontFamily: {
			SpaceGrotesk: ["Space Grotesk", "sans-serif"],
		},
	  },
	},
  };