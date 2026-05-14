import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index.js'
import { createHead } from '@unhead/vue'
import '@fortawesome/fontawesome-free/css/all.min.css'

const app = createApp(App)
const head = createHead()

app.use(router)
app.use(head)
app.mount('#app')