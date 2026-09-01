import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { routes, scrollBehavior } from './router/index.js'
import { reveal } from './directives/reveal.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const createApp = ViteSSG(
  App,
  { routes, base: '/', scrollBehavior },
  ({ app, router, isClient }) => {
    app.directive('reveal', reveal)

    if (isClient) {
      router.afterEach((to) => {
        if (typeof window.gtag === 'function') {
          window.gtag('event', 'page_view', {
            page_path: to.fullPath,
            page_location: window.location.href,
            page_title: document.title
          })
        }
      })
    }
  }
)
