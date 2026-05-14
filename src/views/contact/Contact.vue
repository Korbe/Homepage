<template>
    <Layout>
        <Hero />
        <ContactMainSection />
        <Faq />
    </Layout>
</template>
<script setup>
import ContactMainSection from './components/ContactMainSection.vue';
import Hero from './components/Hero.vue';
import Layout from '@/components/layout/Layout.vue';
import Faq from './components/Faq.vue';
import { useHead } from '@unhead/vue'
import SocialSection from '../../components/SocialSection.vue';

useHead({
    title: 'Kontakt - Webentwicklung & IT Hilfe Villach | Korbitsch',
    meta: [
        {
            name: 'description',
            content: 'Kontakt zu Lukas Korbitsch in Villach. Anfrage für Webanwendungen, IT-Hilfe vor Ort oder Gaming PC Builds - schnelle Rückmeldung, persönlich und unkompliziert.'
        },

        // Open Graph
        {
            property: 'og:title',
            content: 'Kontakt - Webentwicklung & IT Hilfe Villach'
        },
        {
            property: 'og:description',
            content: 'Jetzt unverbindlich anfragen: Webentwicklung, IT-Service oder Gaming PC Builds in Villach. Schnelle Antwort & persönlicher Kontakt.'
        },
        {
            property: 'og:image',
            content: 'https://korbitsch.at/images/logo.png'
        },
        {
            property: 'og:url',
            content: 'https://korbitsch.at/contact'
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
            href: 'https://korbitsch.at/contact'
        }
    ]
})
</script>