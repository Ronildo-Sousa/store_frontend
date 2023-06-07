import { link } from "fs";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head: {
            script: [
                // {src: '/_nuxt/assets/js/darkmode.js'}
            ]
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ]
})
