import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const app = createApp(App)
const pinia = createPinia()

// Activer le plugin de persistance
pinia.use(piniaPluginPersistedstate)

app.use(pinia)
app.mount('#app')
