<template>
    <section class="py-24 bg-neutral-900/95 text-white border-t border-neutral-900">
        <div class="max-w-3xl mx-auto px-6 text-center">

            <FramesIllo v-reveal class="w-28 h-24 mx-auto mb-2" />

            <!-- Headline -->
            <h2 v-reveal class="text-3xl md:text-4xl font-bold mb-4">
                Willst auch du dein Projekt hier sehen?
            </h2>

            <!-- Subtext -->
            <p v-reveal class="text-neutral-400 text-lg mb-8">
                Ich entwickle individuelle Webanwendungen und digitale Lösungen -
                von der Idee bis zur Umsetzung.
            </p>

            <!-- CTA -->
            <div v-reveal class="flex flex-wrap justify-center gap-4">

                <router-link to="/contact"
                    class="bg-brand text-black font-medium px-8 py-4 rounded-xl hover:opacity-90 hover:scale-105 transition">
                    Projekt anfragen
                </router-link>

                <a href="https://wa.me/436701923388" target="_blank"
                    class="border border-neutral-700 px-6 py-3 rounded-xl text-neutral-300 hover:border-green-500 hover:text-green-400 hover:scale-105 transition">
                    Oder per WhatsApp
                </a>

            </div>

            <div class="text-neutral-400 text-sm mt-5 space-y-2">
                <p class="flex items-center justify-center gap-2"><EnvelopeIcon class="w-4 h-4 text-brand" /> info@korbitsch.at</p>
                <p class="flex items-center justify-center gap-2"><PhoneIcon class="w-4 h-4 text-brand" /> +43 670 1923388</p>
                <p class="text-neutral-300 mt-4"> Antwort meist innerhalb von 24 Stunden </p>
            </div>

        </div>
    </section>
</template>

<script setup>
import { EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import FramesIllo from '@/components/illustrations/FramesIllo.vue'
</script>