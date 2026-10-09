<script setup>
import gilgenreinerLogo from '@/assets/gilgenreiner-logo.png'
import fcgLogo from '@/assets/fcg-logo.png'
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'

const testimonials = [
    {
        name: "Dominik Gilgenreiner",
        company: "Dronenservice Gilgenreiner",
        text: "Man merkt sofort, dass hier nicht mit Baukästen gearbeitet wird. Die Anwendung ist sauber aufgebaut, extrem schnell und genau auf meine Anforderungen zugeschnitten.",
        logo: gilgenreinerLogo,
        link: "https://gilgenreiner.at"
    },
    {
        name: "Markus Kirisits",
        company: "FCG Villach",
        text: "Lukas Korbitsch hat unsere Plattform modern und benutzerfreundlich umgesetzt. Seine technische Stärke zeigt sich in der klaren Struktur und Performance.",
        logo: fcgLogo,
        link: "https://fcg-villach.at"
    },
];
</script>

<template>
    <section class="wa-section">
        <div class="wa-glow -bottom-40 -left-40"></div>

        <div class="wa-wrap">

            <div v-reveal class="wa-head">
                <p class="wa-pill">Kundenstimmen</p>
                <h2 class="wa-title">
                    Web-Apps, die wirklich <span class="wa-grad">funktionieren</span>
                </h2>
                <p class="wa-lead">Keine Templates. Keine Baukästen. Sondern echte Systeme mit Performance.</p>
            </div>

            <div class="grid gap-6 md:grid-cols-2">
                <figure v-for="(t, i) in testimonials" :key="t.name" v-reveal="{ delay: i * 120 }" v-spot
                    class="wa-card flex flex-col p-8 md:p-10">

                    <span class="wa-q" aria-hidden="true">“</span>

                    <div v-if="t.logo" class="mb-8">
                        <img :src="t.logo" :alt="`Logo ${t.company}`" class="h-14 object-contain opacity-80" />
                    </div>

                    <blockquote class="mb-8 text-lg leading-relaxed text-neutral-100 md:text-xl">
                        {{ t.text }}
                    </blockquote>

                    <figcaption class="mt-auto flex items-end justify-between gap-4">
                        <div>
                            <p class="font-semibold">{{ t.name }}</p>
                            <p class="text-sm text-neutral-400">{{ t.company }}</p>
                        </div>
                        <a :href="t.link" target="_blank" rel="noopener"
                            class="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:underline">
                            Zur Website <ArrowUpRightIcon class="h-4 w-4" />
                        </a>
                    </figcaption>
                </figure>
            </div>
        </div>
    </section>
</template>

<style scoped>
.wa-q {
    position: absolute !important;
    right: 1.8rem;
    top: -0.4rem;
    font-family: 'Bricolage Grotesque Variable', Georgia, serif;
    font-size: 8rem;
    font-weight: 800;
    line-height: 1;
    color: rgb(31 171 171 / 0.14);
    pointer-events: none;
}
</style>
