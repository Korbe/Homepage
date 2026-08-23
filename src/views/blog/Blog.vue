<template>
    <Layout>
        <Hero />
        <BlogListSection />
        <Cta />
        <SocialSection />
    </Layout>
</template>
<script setup>
import Layout from '@/components/layout/Layout.vue'
import Hero from './components/Hero.vue'
import BlogListSection from './components/BlogListSection.vue'
import Cta from './components/Cta.vue'
import { useHead } from '@unhead/vue'
import SocialSection from '../../components/SocialSection.vue'

useHead({
    title: 'Blog - Webentwicklung | Ing. Korbitsch',
    meta: [
        {
            name: 'description',
            content: 'Praxisnahe Artikel zu Webentwicklung und Digitalisierung von Ing. Lukas Korbitsch - verständlich erklärt, ohne Fachchinesisch.'
        },

        // Open Graph
        {
            property: 'og:title',
            content: 'Blog - Webentwicklung | Ing. Korbitsch'
        },
        {
            property: 'og:description',
            content: 'Tipps, Einblicke und Gedanken zu Websites, Web-Apps und Digitalisierung.'
        },
        {
            property: 'og:image',
            content: 'https://korbitsch.at/images/logo.png'
        },
        {
            property: 'og:url',
            content: 'https://korbitsch.at/blog'
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
            href: 'https://korbitsch.at/blog'
        }
    ]
})
</script>
