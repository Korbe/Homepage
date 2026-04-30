<template>
    <Layout>
        <Hero />

         <ServiceEntrySection />

        <ProblemSolutionSection />

        <TechStackSection />

        <ArchitectureSection />

        <ProjectsSection />

        <PhilosophySection />

        <Testimonial />

        <Pricing />

        <Faq /> 

        <Cta />

    </Layout>
</template>
<script setup>
import Layout from '@/components/layout/Layout.vue';
import Hero from './components/Hero.vue';
import ServiceEntrySection from './components/ServiceEntrySection.vue';
import ProblemSolutionSection from './components/ProblemSolutionSection.vue';
import TechStackSection from './components/TechStackSection.vue';
import ArchitectureSection from './components/ArchitectureSection.vue';
import ProjectsSection from './components/ProjectsSection.vue';
import Cta from './components/Cta.vue';
import PhilosophySection from './components/PhilosophySection.vue';
import Faq from './components/Faq.vue';
import Pricing from './components/Pricing.vue';
import Testimonial from './components/Testimonial.vue';
</script>