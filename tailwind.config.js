/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#092757",
				secondary: "#706FE50F",
				icon: "#2E3E5C",
				"icon-footer": "#706FE5",
				footer: "#1E1F4B",
			},
		},
	},
	plugins: [],
};
