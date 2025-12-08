// https://nuxt.com/docs/api/configuration/nuxt-config
const target = "http://localhost:41520"

export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    devServer: {
        port: 4882,
    },

    nitro: {
        routeRules: {
            '/api/**': { proxy: `${target}/api/**` }
        },
    },

    experimental: {
        viewTransition: true,
        payloadExtraction: true
    },
})
