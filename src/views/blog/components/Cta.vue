<template>
    <section class="py-24 bg-neutral-900/95 text-white">
        <div class="max-w-5xl mx-auto px-6 lg:px-12 text-center">

            <RocketIllo v-reveal class="w-28 h-24 mx-auto mb-2" />

            <h2 v-reveal class="text-3xl md:text-4xl font-bold mb-4">
                Dein Projekt braucht mehr als nur einen Blogartikel?
            </h2>

            <p v-reveal class="text-neutral-400 text-lg mb-10 max-w-2xl mx-auto">
                Lass uns über deine Website oder Web-App sprechen - ich melde mich persönlich bei dir zurück.
            </p>

            <router-link to="/contact" v-reveal
                class="inline-block bg-brand text-black font-medium px-8 py-4 rounded-xl hover:opacity-90 hover:scale-105 transition">
                Kontakt aufnehmen
            </router-link>

        </div>
    </section>
</template>

<script setup>
import RocketIllo from '@/components/illustrations/RocketIllo.vue'
</script>
