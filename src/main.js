import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
import { routes, scrollBehavior } from './router/index.js'
import { reveal } from './directives/reveal.js'
import { spot } from './directives/spot.js'
import '@fortawesome/fontawesome-free/css/all.min.css'

export const createApp = ViteSSG(
  App,
  { routes, base: '/', scrollBehavior },
  ({ app, router, isClient }) => {
    app.directive('reveal', reveal)
    app.directive('spot', spot)

    if (isClient) {
      // Nach einem Deploy existieren alte Chunk-Dateien nicht mehr: einmal neu laden
      window.addEventListener('vite:preloadError', (event) => {
        event.preventDefault()
        if (!sessionStorage.getItem('chunk-reload')) {
          sessionStorage.setItem('chunk-reload', '1')
          window.location.reload()
        }
      })

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
