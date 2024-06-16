import { addPlugin, defineNuxtModule, createResolver } from '@nuxt/kit'
import { join } from 'path'

export default defineNuxtModule({
  setup(_, nuxt) {
    nuxt.hook('components:dirs', dirs => {
      dirs.push({
        path: join(__dirname, 'lib/components'),
        prefix: 'nx3',
      })
    })

    const { resolve } = createResolver(import.meta.url)

    // add the helper plugin
    addPlugin(resolve('lib/plugins/helper.ts'))

    // add the vuetify plugin
    addPlugin(resolve('lib/plugins/vuetify.ts'))

    // add animate.css file from animate.css library
    nuxt.options.css.push('animate.css')

    // add animate.css file from animate.css library
    nuxt.options.css.push('vuetify/lib/styles/main.sass')

    // add animate.css file from animate.css library
    nuxt.options.css.push('@mdi/font/css/materialdesignicons.min.css')
  },
})
