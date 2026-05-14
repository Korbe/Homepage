<template>
    <Layout>
        <Hero />

        <WebIntroSection />

        <ProblemSolutionSection />

        <TechStackSection />

        <ArchitectureSection />

        <ProjectsSection />

        <PhilosophySection />

        <Testimonial />

        <Pricing />

        <Faq />

        <Cta />

        <SocialSection />

    </Layout>
</template>
<script setup>
import Layout from '@/components/layout/Layout.vue';
import Hero from './components/Hero.vue';
import ProblemSolutionSection from './components/ProblemSolutionSection.vue';
import TechStackSection from './components/TechStackSection.vue';
import ArchitectureSection from './components/ArchitectureSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import Cta from './components/Cta.vue';
import PhilosophySection from './components/PhilosophySection.vue';
import Faq from './components/Faq.vue';
import Pricing from './components/Pricing.vue';
import Testimonial from './components/Testimonial.vue';
import WebIntroSection from './components/WebIntroSection.vue';
import { useHead } from '@unhead/vue'
import SocialSection from '../../components/SocialSection.vue';

useHead({
    title: 'Webentwicklung in Villach | Websites & Web-Apps ohne Baukasten - Lukas Korbitsch',

    meta: [
        {
            name: 'description',
            content: 'Moderne Websites & Web-Apps in Villach - individuell entwickelt mit Vue & Laravel. Schnell, SEO-optimiert und ohne Baukastensysteme. Für Unternehmen, die online Kunden gewinnen wollen.'
        },

        // Open Graph
        {
            property: 'og:title',
            content: 'Webentwicklung Villach | Websites & Web-Apps - Lukas Korbitsch'
        },
        {
            property: 'og:description',
            content: 'Individuelle Websites & Web-Apps ohne Baukasten-Systeme. Performance, SEO und skalierbare Lösungen für dein Business.'
        },
        {
            property: 'og:image',
            content: 'https://korbitsch.at/images/logo.png'
        },
        {
            property: 'og:url',
            content: 'https://korbitsch.at/webapps'
        },
        {
            property: 'og:type',
            content: 'website'
        },

        // Twitter
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:title',
            content: 'Webentwicklung in Villach - Websites & Web-Apps'
        },
        {
            name: 'twitter:description',
            content: 'Websites & Web-Apps ohne Baukasten-Systeme - schnell, SEO-optimiert und skalierbar.'
        },
        {
            name: 'twitter:image',
            content: 'https://korbitsch.at/images/logo.png'
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
            content: 'Webentwicklung Villach, Website erstellen Villach, Web Apps Entwicklung, SaaS Entwicklung Österreich, Vue Laravel Entwickler, Website Agentur Villach'
        }
    ],

    link: [
        {
            rel: 'canonical',
            href: 'https://korbitsch.at/webapps'
        }
    ]
})
</script>