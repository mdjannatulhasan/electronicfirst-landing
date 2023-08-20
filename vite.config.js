// vite.config.js
export default {
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/scss/style.scss";`, // Import your global SCSS file
			},
		},
	},
	base: "electronicfirst-landing", // Replace with your GitHub repository name
	build: {
		outDir: "docs", // Change the output directory to "docs" for GitHub Pages
	},
};
