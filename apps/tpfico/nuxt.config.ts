// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: ['nuxt3-websites-package'],
	css: ['vuetify/lib/styles/main.sass'],
	build: {
		transpile: ['vuetify'],
	},

	runtimeConfig: {
		// Private keys are only available on the server

		// Public keys that are exposed to the client
		public: {
			API_BASE_URL: process.env.API_BASE_URL,
		}
	},
})
