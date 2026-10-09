<template>
    <section class="pg-section">
        <div class="pg-glow -top-40 -left-40"></div>

        <div class="pg-wrap">

            <div v-reveal class="pg-head">
                <p class="pg-tag">05 · Warum ich?</p>
                <h2 class="pg-title">
                    Kein Zufall. Kein Marketing. <span class="pg-grad">Nur Performance.</span>
                </h2>
                <p class="pg-lead">
                    Ich baue keine Systeme nach Trends - sondern nach Logik, Erfahrung und echter Performance.
                </p>
            </div>

            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <article v-for="(t, i) in items" :key="t.title" v-reveal="{ delay: i * 90 }" class="pg-card p-7">
                    <span class="pg-icon mb-6"><component :is="t.icon" class="h-6 w-6" /></span>
                    <h3 class="pg-font mb-3 text-lg font-bold uppercase italic tracking-wide">{{ t.title }}</h3>
                    <p class="text-sm leading-relaxed text-neutral-400">{{ t.text }}</p>
                </article>
            </div>

            <div v-reveal class="pg-banner mt-14 px-8 py-10 text-center">
                <p class="pg-font text-xl font-bold italic leading-snug md:text-2xl">
                    Ich baue keine PCs für Marketing - <span class="pg-grad">sondern Systeme, die in der Praxis funktionieren.</span>
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { BanknotesIcon, Cog6ToothIcon, CpuChipIcon, RocketLaunchIcon } from '@heroicons/vue/24/outline'
import '@fontsource/chakra-petch/500.css'
import '@fontsource/chakra-petch/700.css'
import '@fontsource/chakra-petch/700-italic.css'
import '@/styles/gaming.css'

const items = [
    {
        title: 'Technisches Verständnis',
        text: 'Erfahrung in Softwareentwicklung & Systemarchitektur - nicht nur „PC zusammenstecken“.',
        icon: CpuChipIcon
    },
    {
        title: 'Keine Bottlenecks',
        text: 'Jede Komponente wird aufeinander abgestimmt - für maximale Leistung ohne Schwachstellen.',
        icon: Cog6ToothIcon
    },
    {
        title: 'Ehrliche Beratung',
        text: 'Kein Upselling, keine unnötigen Teile - du bekommst genau das, was du brauchst.',
        icon: BanknotesIcon
    },
    {
        title: 'Performance Fokus',
        text: 'Ziel ist nicht ein „schöner PC“, sondern ein System, das wirklich performt.',
        icon: RocketLaunchIcon
    }
]
</script>
