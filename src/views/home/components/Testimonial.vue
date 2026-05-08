<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Heading -->
            <div class="text-center max-w-2xl mx-auto mb-16">
                <p class="text-brand text-sm uppercase tracking-wide mb-4">
                    Kundenstimmen
                </p>

                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    Das sagen meine Kunden
                </h2>

                <p class="text-neutral-400 text-lg">
                    Ehrliches Feedback von echten Kunden - von schneller IT-Hilfe bis zu kompletten Webprojekten.
                </p>
            </div>

            <!-- Highlight -->
            <div v-if="highlight" class="mb-12">
                <div
                    class="hover:bg-neutral-900/50 bg-neutral-900 border border-brand/50 rounded-2xl p-8 md:p-10 relative overflow-hidden">

                    <!-- Accent -->
                    <div class="absolute inset-0 bg-linear-to-br from-brand/10 to-transparent opacity-70"></div>

                    <div class="relative">

                        <!-- Stars -->
                        <div class="flex gap-1 text-brand mb-4">
                            <span v-for="i in 5" :key="i">★</span>
                        </div>

                        <p class="text-lg md:text-xl text-neutral-200 mb-6 leading-relaxed">
                            {{ highlight.text }}
                        </p>

                        <p class="text-neutral-400 text-sm">
                            — {{ highlight.name }}
                        </p>

                    </div>
                </div>
            </div>

            <!-- Grid -->
            <div class="grid md:grid-cols-3 gap-6">

                <div v-for="(item, index) in normalItems" :key="index"
                    class="hover:bg-neutral-900/50 bg-neutral-800/40 border border-neutral-800 rounded-2xl p-6">
                    <!-- Stars -->
                    <div class="flex gap-1 text-brand mb-3 text-sm">
                        <span v-for="i in 5" :key="i">★</span>
                    </div>

                    <p class="text-neutral-300 text-sm mb-4">
                        {{ item.text }}
                    </p>

                    <p class="text-neutral-500 text-xs">
                        — {{ item.name }}
                    </p>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'

const testimonials = [
    {
        name: "FCG Villach",
        text: "Unsere Website, PC-Build und laufende Betreuung - alles perfekt umgesetzt. Schnell, professionell und zuverlässig.",
        highlight: true
    },
    {
        name: "Alex",
        text: "Ich bin absolut begeistert! Die PetriLog-App ist extrem benutzerfreundlich und läuft technisch einwandfrei. Zusätzlich hat mir Lukas schnell und kompetent bei PC- und Smartphone-Problemen geholfen - verständlich erklärt und absolut zuverlässig."
    },
    {
        name: "Hanno Hofmeister",
        text: "Schnell vor Ort und das Problem direkt gelöst. Kompetent und absolut zuverlässig."
    },
    {
        name: "Andrea Kirisits",
        text: "Schnell, kompetent und freundlich - genau so sollte IT-Service sein."
    },
    {
        name: "Strayner Menne",
        text: "Sehr sympathischer Auftritt - auf korbitsch.at schaue immer wieder gerne vorbei 😁"
    }
]

// Highlight extrahieren
const highlight = computed(() =>
    testimonials.find(t => t.highlight)
)

// Normale Items
const normalItems = computed(() =>
    testimonials.filter(t => !t.highlight)
)
</script>