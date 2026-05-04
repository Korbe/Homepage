<template>
    <Layout>
        <Hero />

        <ServiceEntrySection />

        <ProblemSolutionSection />

        <TechStackSection />

        <ArchitectureSection />

        <ProjectsSection />

        <PhilosophySection />

        <Testimonial />

        <Pricing />

        <Faq />

        <Cta />

    </Layout>
</template>
<script setup>
import Layout from '@/components/layout/Layout.vue';
import Hero from './components/Hero.vue';
import ServiceEntrySection from './components/ServiceEntrySection.vue';
import ProblemSolutionSection from './components/ProblemSolutionSection.vue';
import TechStackSection from './components/TechStackSection.vue';
import ArchitectureSection from './components/ArchitectureSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import Cta from './components/Cta.vue';
import PhilosophySection from './components/PhilosophySection.vue';
import Faq from './components/Faq.vue';
import Pricing from './components/Pricing.vue';
import Testimonial from './components/Testimonial.vue';
import { useHead } from '@unhead/vue'

useHead({
    title: 'Webanwendungen & IT-Dienstleister Villach - Ing. Lukas Korbitsch',
    meta: [
        {
            name: 'description',
            content: 'High-Performance Webanwendungen & IT-Service in Villach. Maßgeschneiderte Web-Apps sowie PC-Notdienst & Vor-Ort Hilfe - schnell, skalierbar und zuverlässig.'
        },

        // Open Graph
        {
            property: 'og:title',
            content: 'Webanwendungen & IT-Dienstleister Villach - Ing. Lukas Korbitsch'
        },
        {
            property: 'og:description',
            content: 'Individuelle Web-Apps für Unternehmen + IT-Hilfe bei dir vor Ort. Performance, Skalierung und echte Lösungen statt Baukasten-Systeme.'
        },
        {
            property: 'og:image',
            content: 'https://korbitsch.at/images/logo.png'
        },
        {
            property: 'og:url',
            content: 'https://korbitsch.at/'
        },
        {
            property: 'og:type',
            content: 'website'
        },

        // SEO Basics
        {
            name: 'robots',
            content: 'index, follow'
        },
        {
            name: 'author',
            content: 'Lukas Korbitsch'
        },
        {
            name: 'keywords',
            content: 'Webentwicklung Villach, Website erstellen, SaaS Entwicklung Österreich, IT Dienstleister Villach, PC Hilfe Villach'
        }
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://korbitsch.at/'
        }

    ]
})
</script>