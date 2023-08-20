// vite.config.js
export default {
	css: {
		preprocessorOptions: {
			scss: {
				additionalData: `@import "@/scss/style.scss";`, // Import your global SCSS file
			},
		},
	},
};
