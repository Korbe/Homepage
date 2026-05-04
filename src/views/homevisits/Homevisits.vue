<template>
  <Layout>

    <Hero />

    <ServiceOverview />

    <ServiceProcessSection />

    <PricingHomevisits />

    <GamingPCBuildsSection />

    <PricingGamingPC />



    <Cta />

  </Layout>
</template>
<script setup>
import Layout from '@/components/layout/Layout.vue';
import GamingPCBuildsSection from './components/GamingPCBuildsSection.vue';
import Hero from './components/Hero.vue';
import ServiceOverview from './components/ServiceOverview.vue';
import ServiceProcessSection from './components/ServiceProcessSection.vue';
import Cta from './components/Cta.vue';
import PricingHomevisits from './components/PricingHomevisits.vue';
import PricingGamingPC from './components/PricingGamingPC.vue';
import { useHead } from '@unhead/vue'

useHead({
  title: 'PC Hilfe Villach - IT Hausbesuch & Gaming PC Builds | Ing. Korbitsch',
  meta: [
    {
      name: 'description',
      content: 'PC Hilfe in Villach direkt bei dir zu Hause. Unterstützung bei Computer-, Smartphone- und Druckerproblemen sowie individuelle Gaming PC Builds - verständlich, schnell und zuverlässig.'
    },

    // Open Graph
    {
      property: 'og:title',
      content: 'PC Hilfe Villach - IT Hausbesuch & Gaming PC Builds | Ing. Korbitsch'
    },
    {
      property: 'og:description',
      content: 'IT Hilfe bei dir vor Ort in Villach + individuelle Gaming PCs ohne Kompromisse. Schnell, verständlich und direkt gelöst.'
    },
    {
      property: 'og:image',
      content: 'https://korbitsch.at/images/logo.png'
    },
    {
      property: 'og:url',
      content: 'https://korbitsch.at/homevisits'
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
      href: 'https://korbitsch.at/homevisits'
    }
  ]
})
</script>