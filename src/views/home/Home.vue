<template>
    <Layout>
        <Hero />

        <ServiceEntrySection />

        <LocalTrust />

        <QuickAvailability />

        <WhyMeSection />

        <ProcessSection />

        <Testimonial />

        <SoundsGoodCta />

        <Faq />

        <Cta />

    </Layout>
</template>
<script setup>
import Layout from '@/components/layout/Layout.vue';
import Hero from './components/Hero.vue';
import ServiceEntrySection from './components/ServiceEntrySection.vue';
import Cta from './components/Cta.vue';
import Faq from './components/Faq.vue';
import Testimonial from './components/Testimonial.vue';
import { useHead } from '@unhead/vue'
import WhyMeSection from './components/WhyMeSection.vue';
import LocalTrust from './components/LocalTrust.vue';
import SoundsGoodCta from './components/SoundsGoodCta.vue';
import QuickAvailability from './components/QuickAvailability.vue';
import ProcessSection from './components/ProcessSection.vue';

useHead({
    title: 'IT Hilfe, Webentwicklung & Gaming PC Builds in Villach | Lukas Korbitsch',

    meta: [
        {
            name: 'description',
            content: 'IT Hilfe in Villach, individuelle Websites & Web-Apps sowie Gaming PC Builds. Vor-Ort Service für PC & Smartphone - schnell, verständlich und ohne Baukastensysteme.'
        },

        // Open Graph
        {
            property: 'og:title',
            content: 'IT Hilfe, Webentwicklung & Gaming PC Builds in Villach'
        },
        {
            property: 'og:description',
            content: 'Schnelle IT Hilfe vor Ort in Villach, maßgeschneiderte Websites & Gaming PC Builds - alles aus einer Hand.'
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

        // Twitter
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:title',
            content: 'IT Hilfe, Webentwicklung & PC Builds in Villach'
        },
        {
            name: 'twitter:description',
            content: 'IT Hilfe vor Ort, Websites & Gaming PCs - persönlich und ohne Baukastensysteme.'
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
            content: 'IT Hilfe Villach, PC Hilfe Villach, Gaming PC Villach, PC Build Villach, Webentwicklung Villach, Website erstellen Villach, Web Apps Österreich'
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