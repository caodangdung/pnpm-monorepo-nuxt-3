// plugins/vuetify.js
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md1 } from 'vuetify/blueprints'

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    // blueprint: md1,
  })

  nuxtApp.vueApp.use(vuetify)
})
