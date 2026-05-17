<template>
    <Layout>
        <Hero />
        <ImageSection />
        <StorySection />
        <WorkSection />
        <PersonalSection />
        <Cta />
        <SocialSection />
    </Layout>

</template>
<script setup>
import Layout from '@/components/layout/Layout.vue'
import Hero from './components/Hero.vue';
import ImageSection from './components/ImageSection.vue';
import StorySection from './components/StorySection.vue';
import WorkSection from './components/WorkSection.vue';
import PersonalSection from './components/PersonalSection.vue';
import Cta from './components/Cta.vue';
import { useHead } from '@unhead/vue'
import SocialSection from '../../components/SocialSection.vue';

useHead({
    title: 'Über mich - Lukas Korbitsch | Webentwickler & IT-Dienstleister Villach',
    meta: [
        {
            name: 'description',
            content: 'Lukas Korbitsch aus Villach - Webentwickler für High-Performance Webanwendungen und IT-Dienstleister für Vor-Ort Hilfe. Persönlich, verständlich und lösungsorientiert.'
        },

        // Open Graph
        {
            property: 'og:title',
            content: 'Über Lukas Korbitsch - Webentwickler & IT-Dienstleister'
        },
        {
            property: 'og:description',
            content: 'Webentwicklung mit Fokus auf Performance und skalierbare Systeme sowie IT-Hilfe direkt vor Ort in Villach.'
        },
        {
            property: 'og:image',
            content: 'https://korbitsch.at/images/logo.png'
        },
        {
            property: 'og:url',
            content: 'https://korbitsch.at/about'
        },
        {
            property: 'og:type',
            content: 'profile'
        },

        // SEO Basics
        {
            name: 'robots',
            content: 'index, follow'
        },
        {
            name: 'author',
            content: 'Lukas Korbitsch'
        }
    ],
    link: [
        {
            rel: 'canonical',
            href: 'https://korbitsch.at/about'
        }
    ]
})
</script>