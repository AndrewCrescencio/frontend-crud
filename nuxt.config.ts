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
  sourcemap: {
    client: true,
    server: true,
  },
  compatibilityDate: '2024-11-01',
  vite: {
    build: {
      sourcemap: 'inline',
    },

    plugins: [
      istanbul({
        cypress: true,
        include: 'src/*',
        exclude: ['**/*.test.*', '**/*.spec.*', 'node_modules'],
        extension: ['.js', '.ts'],
        requireEnv: false,
        forceBuildInstrument: true,
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
