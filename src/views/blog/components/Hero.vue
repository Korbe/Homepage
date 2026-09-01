<template>
    <section class="relative pt-48 pb-24 overflow-hidden text-white">

        <!-- Glow -->
        <div class="pointer-events-none absolute inset-0">
            <div
                class="absolute top-[-150px] left-[-150px] h-[400px] w-[400px] rounded-full bg-brand opacity-20 blur-[140px]">
            </div>
        </div>

        <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">

            <BookIllo v-reveal class="w-28 h-24 mx-auto mb-2" />

            <p v-reveal="{ delay: 60 }" class="text-sm text-brand uppercase tracking-wide mb-4">
                Blog
            </p>

            <h1 v-reveal="{ delay: 120 }" class="text-4xl md:text-5xl font-bold mb-6">
                Wissen rund um <span class="text-brand">Web Programmierung</span>
            </h1>

            <p v-reveal="{ delay: 180 }" class="text-neutral-400 text-lg max-w-2xl mx-auto">
                Praxisnahe Einblicke, Tipps und Gedanken zu Webentwicklung und Digitalisierung -
                verständlich erklärt, ohne Fachchinesisch.
            </p>

        </div>
    </section>
</template>

<script setup>
import BookIllo from '@/components/illustrations/BookIllo.vue'
</script>
