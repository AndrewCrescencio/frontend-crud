import process from 'node:process'
import { isDevelopment, isWindows } from 'std-env'

import istanbul from 'vite-plugin-istanbul'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ...(isDevelopment || isWindows) ? [] : ['nuxt-security'],
    '@nuxt/eslint',
    '@vee-validate/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/google-fonts',
    '@formkit/nuxt',
  ],
  ssr: false,
  devtools: { enabled: true },
  css: [
    '@/styles/main.css',
  ],
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:5433',
    },
  },
  srcDir: 'src/',
  compatibilityDate: '2024-11-01',
  vite: {
    vue: {
      template: {
        transformAssetUrls: true,
      },
    },
    plugins: [
      istanbul({
        exclude: ['node_modules', 'test/', 'coverage/'],
        extension: ['.js', '.ts', '.vue'],
        cypress: true,
      }),
    ],
  },
  eslint: {
    config: {
      standalone: false,
      nuxt: {
        sortConfigKeys: true,
      },
    },
  },
  formkit: {
    autoImport: true,

  },
  googleFonts: {
    families: {
      Ubuntu: true,
    },
  },
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },
})
