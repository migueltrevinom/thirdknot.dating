/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
	presets: [require("nativewind/preset")],
	theme: {
		extend: {
			colors: {
				background: "#030014",
				primary: "#FFD700", // Gold
				secondary: "#00FFFF", // Cyan
				glass: "rgba(255, 255, 255, 0.05)",
			},
		},
	},
	plugins: [],
};
