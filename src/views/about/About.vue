<template>
    <Layout>
        <Hero />
        <StorySection />
        <WorkSection />
        <PersonalSection />
        <Cta />
    </Layout>
    
</template>
<script setup>
import Layout from '@/components/layout/Layout.vue'
import Hero from './components/Hero.vue';
import StorySection from './components/StorySection.vue';
import WorkSection from './components/WorkSection.vue';
import PersonalSection from './components/PersonalSection.vue';
import Cta from './components/Cta.vue';
</script>