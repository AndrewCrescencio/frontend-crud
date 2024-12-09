// @ts-check
import antfu from '@antfu/eslint-config'
import nuxt from './.nuxt/eslint.config.mjs'

export default nuxt(
  antfu(
    {
      unocss: false,
      formatters: true,
      ignores: ['instrumented/*', 'coverage/*', 'cypress/*'],
    },
  ),
)
