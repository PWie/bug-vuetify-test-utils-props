import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'

export const vuetify = createVuetify()

createApp(App).use(vuetify).mount('#app')
