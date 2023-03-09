import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Vuetify
import '@mdi/font/css/materialdesignicons.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components/VIcon'

const vuetify = createVuetify({
    components,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
    },
})

const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')

