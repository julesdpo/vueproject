import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import router from '@/router'

const app = createApp(App)
const pinia = createPinia()

app.use(router)
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.mount('#app')
