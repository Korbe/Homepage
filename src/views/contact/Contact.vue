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
</script>