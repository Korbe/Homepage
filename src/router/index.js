import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/home/Home.vue') },
  { path: '/about', name: 'About', component: () => import('../views/about/About.vue') },
  { path: '/portfolio', name: 'Portfolio', component: () => import('../views/portfolio/Portfolio.vue') },
  
  { path: '/homevisits', name: 'HomeVisits', component: () => import('../views/homevisits/Homevisits.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/contact/Contact.vue') },
  { path: '/impressum', name: 'Imprint', component: () => import('../views/Imprint.vue') },
  { path: '/datenschutz', name: 'Privacy', component: () => import('../views/Privacy.vue') },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes,

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

export default router