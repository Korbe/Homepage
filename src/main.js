import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { routes, scrollBehavior } from './router/index.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const createApp = ViteSSG(
  App,
  { routes, base: '/', scrollBehavior }
)
