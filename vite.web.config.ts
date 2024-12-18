import { defineConfig } from "vite";

// https://vitejs.dev/config
export default defineConfig({
	build: {
		rollupOptions: {
			input: {
				app: "./index.web.html",
			},
		},
	},
	server: {
		open: "./index.web.html",
	},
});
