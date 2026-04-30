### Create new Project with

    npm create vite@latest

### Add Tailwindcss
    
    npm install tailwindcss @tailwindcss/vite

Öffne deine vite.config.js und füge das Plugin hinzu:
    
    import { defineConfig } from 'vite'
    import vue from '@vitejs/plugin-vue'
    import tailwindcss from '@tailwindcss/vite'

    export default defineConfig({
    plugins: [
        vue(),
        tailwindcss(),
    ],
    })

In vite.config.js folgendes einfügen

    @import "tailwindcss";

    @theme {
        --color-brand: #YOURHEX;
        --color-brand-dark: #YOURHEX;
    }

### Vue Router hinzufügen

    npm install vue-router

unter src router folder erstellen und index.js anlegen folgenden code einfügen

    import { createRouter, createWebHistory } from 'vue-router'

    import Home from '../views/Home/Home.vue'

    const routes = [
    { path: '/', name: 'Home', component: () => import('../views/home/Home.vue') }, //lazy loading
    { path: '/:pathMatch(.*)*', component: NotFound }
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

In App.vue folgendes einfügen

    <template>
        <router-view />
    </template>
    <script setup>
    </script>

