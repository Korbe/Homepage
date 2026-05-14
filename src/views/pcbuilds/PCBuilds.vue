<template>
    <Layout>
        <Hero />

        <PcBuildsAudienceSection />

        <PcBuildsWhyNotPrebuiltSection />

        <PcBuildsProcessSection />

        <PcBuildsExamplesSection />

        <PcBuildsTrustSection />

        <PricingGamingPC />

        <Faq />

        <Cta />

        <SocialSection />
    </Layout>
</template>
<script setup>
import Layout from "@/components/layout/Layout.vue";
import Hero from "./components/Hero.vue";
import PricingGamingPC from "./components/PricingGamingPC.vue";
import PcBuildsAudienceSection from "./components/PcBuildsAudienceSection.vue";
import PcBuildsWhyNotPrebuiltSection from "./components/PcBuildsWhyNotPrebuiltSection.vue";
import PcBuildsProcessSection from "./components/PcBuildsProcessSection.vue";
import PcBuildsExamplesSection from "./components/PcBuildsExamplesSection.vue";
import PcBuildsTrustSection from "./components/PcBuildsTrustSection.vue";
import Cta from "./components/Cta.vue";
import { useHead } from '@unhead/vue'
import Faq from "./components/Faq.vue";
import SocialSection from "../../components/SocialSection.vue";

useHead({
  title: 'Gaming PC bauen lassen - Custom Builds ohne Kompromisse | Korbitsch',
  meta: [
    {
      name: 'description',
      content: 'Gaming PC bauen lassen in Österreich: Individuelle High-End Builds für maximale Performance. Perfekt abgestimmt auf Budget, Games und Anforderungen - kein Bottleneck, keine Fertiglösungen.'
    },

    // Open Graph
    {
      property: 'og:title',
      content: 'Gaming PC Builds - Custom High-End Systeme ohne Kompromisse'
    },
    {
      property: 'og:description',
      content: 'Individuelle Gaming PCs mit perfekter Balance aus CPU, GPU & RAM. Maximale FPS, saubere Builds und Beratung - abgestimmt auf deine Anforderungen.'
    },
    {
      property: 'og:image',
      content: 'https://korbitsch.at/images/logo.png'
    },
    {
      property: 'og:url',
      content: 'https://korbitsch.at/pcbuilds'
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

    // Optional Keywords
    {
      name: 'keywords',
      content: 'Gaming PC bauen lassen, Gaming PC Österreich, Custom Gaming PC, High End Gaming PC, PC Build Service'
    }
  ],
  link: [
    {
      rel: 'canonical',
      href: 'https://korbitsch.at/pcbuilds'
    }
  ]
})
</script>