<template>
    <Layout>

        <Hero />

        <ServiceOverview />

        <ServiceProcessSection />

        <PricingHomevisits />

        <GamingPCBuildsSection />

        <PricingGamingPC/>



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
</script>