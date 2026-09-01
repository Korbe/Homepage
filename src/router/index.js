export const routes = [
  { path: '/', name: 'Home', component: () => import('../views/home/Home.vue') },
  { path: '/about', name: 'About', component: () => import('../views/about/About.vue') },
  { path: '/portfolio', name: 'Portfolio', component: () => import('../views/portfolio/Portfolio.vue') },
  { path: '/webapps', name: 'Webapps', component: () => import('../views/webapps/Webapps.vue') },
  { path: '/it-hilfe', name: 'HomeVisits', component: () => import('../views/homevisits/Homevisits.vue') },
  { path: '/pc-builds', name: 'PCBuilds', component: () => import('../views/pcbuilds/PCBuilds.vue') },
  { path: '/contact', name: 'Contact', component: () => import('../views/contact/Contact.vue') },

  // Blog
  { path: '/blog', name: 'Blog', component: () => import('../views/blog/Blog.vue') },
  { path: '/blog/web-app-oder-klassische-website', name: 'BlogWebAppOderWebsite', component: () => import('../views/blog/WebAppOderKlassischeWebsite.vue') },
  { path: '/blog/excel-chaos-zur-web-app', name: 'BlogExcelChaosZurWebApp', component: () => import('../views/blog/ExcelChaosZurWebApp.vue') },
  { path: '/blog/schnelle-website-mehr-kunden', name: 'BlogSchnelleWebsiteMehrKunden', component: () => import('../views/blog/SchnelleWebsiteMehrKunden.vue') },
  { path: '/blog/fehler-bei-website-neuentwicklung', name: 'BlogFehlerBeiWebsiteNeuentwicklung', component: () => import('../views/blog/FehlerBeiWebsiteNeuentwicklung.vue') },

  // Rechtliches
  { path: '/impressum', name: 'Imprint', component: () => import('../views/Imprint.vue') },
  { path: '/terms', name: 'Terms', component: () => import('../views/Terms.vue') },
  { path: '/datenschutz', name: 'Privacy', component: () => import('../views/Privacy.vue') },

  // Redirects
  { path: '/homevisits', redirect: '/it-hilfe' },
  { path: '/projects', redirect: '/portfolio' },

  // 404
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue') },
]

export function scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
    return savedPosition
  }

  return {
    top: 0,
    behavior: 'smooth'
  }
}