<template>
    <section class="py-24 bg-neutral-900/95 text-white">
        <div class="max-w-4xl mx-auto px-6 text-center">

            <GamingTowerIllo v-reveal class="w-28 h-24 mx-auto mb-2" />

            <!-- Headline -->
            <h2 v-reveal class="text-3xl md:text-4xl font-bold leading-tight mb-6">
                Bereit für deinen Gaming PC ohne Kompromisse?
            </h2>

            <!-- Subtext -->
            <p v-reveal class="text-neutral-300 text-lg mb-8">
                Kein Zufall. Kein Bottleneck. Kein unnötiger Overkill.
                Du bekommst ein System, das exakt zu dir passt - abgestimmt auf dein Budget und deine Anforderungen.
            </p>

            <!-- CTA Buttons -->
            <div v-reveal class="flex flex-col sm:flex-row justify-center gap-4 mb-8">

                <RouterLink to="/contact"
                    class="bg-brand text-black font-medium px-8 py-4 rounded-xl hover:opacity-90 hover:scale-105 transition">
                    Gaming Setup anfragen
                </RouterLink>

                <a href="https://wa.me/436701923388" target="_blank"
                    class="border border-neutral-600 px-8 py-4 rounded-xl hover:border-neutral-400 hover:scale-105 transition">
                    WhatsApp schreiben
                </a>

            </div>

            <!-- Trust Line -->
            <p class="text-neutral-400 text-sm">
                💬 Antwort meist innerhalb von 24 Stunden
            </p>

        </div>
    </section>
</template>

<script setup>
import GamingTowerIllo from '@/components/illustrations/GamingTowerIllo.vue'
</script>