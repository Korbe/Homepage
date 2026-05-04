<template>
    <Layout>
        <Hero />
        <GridSection />
        <Cta />
    </Layout>

</template>
<script setup>
import Layout from '@/components/layout/Layout.vue'
import Hero from './components/Hero.vue'
import GridSection from './components/GridSection.vue'
import Cta from './components/Cta.vue'
import { useHead } from '@unhead/vue'

useHead({
    title: 'Portfolio - Webanwendungen & Projekte | Ing. Lukas Korbitsch',
    meta: [
        {
            name: 'description',
            content: 'Portfolio von individuellen Webanwendungen, SaaS-Plattformen und Websites. Entwickelt mit Vue & Laravel - performant, skalierbar und ohne Baukasten-Systeme.'
        },

        // Open Graph
        {
            property: 'og:title',
            content: 'Portfolio - Webanwendungen & Projekte'
        },
        {
            property: 'og:description',
            content: 'Echte Webprojekte statt Templates: SaaS-Systeme, Plattformen und performante Websites für reale Anforderungen.'
        },
        {
            property: 'og:image',
            content: 'https://korbitsch.at/images/logo.png'
        },
        {
            property: 'og:url',
            content: 'https://korbitsch.at/portfolio'
        },
        {
            property: 'og:type',
            content: 'website'
        },

        // SEO Basics
        {
            name: 'robots',
            content: 'index, follow'
        }
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://korbitsch.at/portfolio'
        }
    ]
})
</script>