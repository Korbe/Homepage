import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/home/Home.vue') },
  { path: '/about', name: 'About', component: () => import('../views/about/About.vue') },
  { path: '/portfolio', name: 'Portfolio', component: () => import('../views/portfolio/Portfolio.vue') },
  
  { path: '/homevisits', name: 'HomeVisits', component: () => import('../views/homevisits/Homevisits.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/contact/Contact.vue') },
  { path: '/imprint', name: 'Imprint', component: () => import('../views/imprint.vue') },
  { path: '/privacy', name: 'Privacy', component: () => import('../views/privacy.vue') },
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