import { defineNuxtModule, addPlugin, createResolver, installModule, extendViteConfig, addComponent, addComponentsDir, addImportsDir } from '@nuxt/kit'


// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'my-module',
    configKey: 'myModule',
  },
  // Default configuration options of the Nuxt module
  defaults: {},
  async setup(_options, _nuxt) {
    const resolver = createResolver(import.meta.url)

    // Do not add the extension since the `.ts` will be transpiled to `.mjs` after `npm run prepack`
    addPlugin(resolver.resolve('./runtime/plugin'))
    addComponentsDir({
      path: resolver.resolve('./components'),
      pattern: '*.vue',
    })
    addImportsDir(resolver.resolve('./composables'))
    await installModule('@element-plus/nuxt')
    _nuxt.options.css.unshift(resolver.resolve('./runtime/styles/_variables.scss'))
    _nuxt.options.css.unshift(resolver.resolve('./runtime/styles/main.scss'))
    _nuxt.options.css.unshift(resolver.resolve('./runtime/styles/override.scss'))
    _nuxt.options.css.unshift(resolver.resolve('./runtime/styles/element/index.scss'))
    extendViteConfig((conifg) => {
      conifg.css = {
        preprocessorOptions: {
          scss: {
            additionalData: '@use "./runtime/styles/element/index.scss" as element; @use "./runtime/styles/_variables.scss" as *;',
          },
        },
      }
    })
  },
})
