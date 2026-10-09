<template>
    <section class="wa-section wa-section-alt">
        <div class="wa-glow -right-40 top-1/4"></div>

        <div class="wa-wrap">

            <div v-reveal class="wa-head">
                <p class="wa-pill">Kundenstimmen</p>
                <h2 class="wa-title">Das sagen meine <span class="wa-grad">Kunden</span></h2>
                <p class="wa-lead">
                    Ehrliches Feedback von echten Kunden - von schneller IT-Hilfe bis zu kompletten Webprojekten.
                </p>
            </div>

            <!-- Highlight -->
            <figure v-if="highlight" v-reveal v-spot class="wa-card wa-card-hot mb-6 p-8 md:p-12">
                <span class="wa-q" aria-hidden="true">“</span>
                <div class="stars mb-6" aria-label="5 von 5 Sternen">★★★★★</div>
                <blockquote class="mb-8 max-w-4xl text-2xl font-medium leading-snug md:text-3xl">
                    {{ highlight.text }}
                </blockquote>
                <figcaption class="flex items-center gap-4">
                    <span class="avatar">{{ initials(highlight.name) }}</span>
                    <span class="font-medium">{{ highlight.name }}</span>
                </figcaption>
            </figure>

            <!-- weitere -->
            <div class="grid gap-6 md:grid-cols-3">
                <figure v-for="(t, i) in normalItems" :key="t.name" v-reveal="{ delay: i * 100 }" v-spot
                    class="wa-card flex flex-col p-7">
                    <div class="stars mb-4 text-sm" aria-label="5 von 5 Sternen">★★★★★</div>
                    <blockquote class="mb-6 leading-relaxed text-neutral-300">{{ t.text }}</blockquote>
                    <figcaption class="mt-auto flex items-center gap-3">
                        <span class="avatar !h-9 !w-9 !text-xs">{{ initials(t.name) }}</span>
                        <span class="text-sm text-neutral-400">{{ t.name }}</span>
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'

const testimonials = [
    {
        name: "FCG Villach",
        text: "Unsere Website, PC-Build und laufende Betreuung - alles perfekt umgesetzt. Schnell, professionell und zuverlässig.",
        highlight: true
    },
    {
        name: "Alex",
        text: "Ich bin absolut begeistert! Unsere Website ist extrem benutzerfreundlich und läuft technisch einwandfrei. Zusätzlich hat mir Lukas schnell und kompetent bei PC- und Smartphone-Problemen geholfen - verständlich erklärt und absolut zuverlässig."
    },
    {
        name: "Hanno Hofmeister",
        text: "Schnell vor Ort und das Problem direkt gelöst. Kompetent und absolut zuverlässig."
    },
    {
        name: "Andrea Kirisits",
        text: "Schnell, kompetent und freundlich - genau so sollte IT-Service sein."
    },
]

const highlight = computed(() => testimonials.find(t => t.highlight))
const normalItems = computed(() => testimonials.filter(t => !t.highlight))

// Initialen für den Avatar (Namen/Firmen ohne Foto)
const initials = (name) =>
    name.split(' ').filter(Boolean).slice(0, 2).map(p => p[0].toUpperCase()).join('')
</script>

<style scoped>
.stars {
    letter-spacing: 0.2em;
    color: var(--color-accent);
}

.avatar {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.8rem;
    height: 2.8rem;
    font-family: 'Bricolage Grotesque Variable', ui-sans-serif, sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    color: #04201f;
    background: linear-gradient(135deg, var(--color-brand), #7ff3e3);
    border-radius: 50%;
}

.wa-q {
    position: absolute !important;
    right: 2rem;
    top: -0.5rem;
    font-family: 'Bricolage Grotesque Variable', Georgia, serif;
    font-size: 10rem;
    font-weight: 800;
    line-height: 1;
    color: rgb(31 171 171 / 0.14);
    pointer-events: none;
}
</style>
