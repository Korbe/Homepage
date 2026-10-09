<template>
    <section class="wa-section wa-section-alt">
        <div class="wa-glow -bottom-40 -left-40"></div>

        <div class="wa-wrap">

            <div v-reveal class="wa-head">
                <p class="wa-pill">Warum mit mir arbeiten?</p>
                <h2 class="wa-title">Kein Standard-Service - sondern <span class="wa-grad">echte Lösungen</span></h2>
                <p class="wa-lead">
                    Ich arbeite nicht wie eine Agentur oder ein klassischer IT-Service -
                    sondern fokussiere mich auf Lösungen, die wirklich funktionieren.
                </p>
            </div>

            <!-- Bento -->
            <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
                <article v-for="(c, i) in cards" :key="c.title" v-reveal="{ delay: i * 80 }" v-spot
                    class="wa-card flex flex-col p-8" :class="c.span">
                    <span class="wa-icon mb-6">
                        <component :is="c.icon" class="h-6 w-6" />
                    </span>
                    <h3 class="mb-3 text-xl font-semibold">{{ c.title }}</h3>
                    <p class="leading-relaxed text-neutral-400">{{ c.text }}</p>
                </article>
            </div>

            <div v-reveal class="wa-statement mt-14">
                <p class="text-xl font-medium leading-relaxed md:text-2xl">
                    Ich löse keine Probleme halb - <span class="wa-grad">ich sorge dafür, dass sie wirklich erledigt sind.</span>
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { Cog6ToothIcon, LightBulbIcon, MapPinIcon, RocketLaunchIcon } from '@heroicons/vue/24/outline'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'

const cards = [
    {
        title: 'Kein Fachchinesisch',
        text: 'Ich erkläre dir alles so, dass du es wirklich verstehst - ohne unnötige Komplexität.',
        icon: LightBulbIcon,
        span: 'lg:col-span-4'
    },
    {
        title: 'Individuelle Lösungen',
        text: 'Keine Templates, keine Baukastensysteme - alles wird exakt auf dich zugeschnitten.',
        icon: Cog6ToothIcon,
        span: 'lg:col-span-2'
    },
    {
        title: 'Vor Ort & persönlich',
        text: 'Direkter Kontakt, schnelle Termine und echte Hilfe - ohne Hotline oder Ticketsystem.',
        icon: MapPinIcon,
        span: 'lg:col-span-2'
    },
    {
        title: 'Fokus auf Ergebnisse',
        text: 'Ziel ist nicht „es funktioniert irgendwie“ - sondern dass es wirklich performant läuft.',
        icon: RocketLaunchIcon,
        span: 'lg:col-span-4'
    }
]
</script>

<style scoped>
.wa-statement {
    padding: 3rem 2rem;
    text-align: center;
    border: 1px solid rgb(31 171 171 / 0.3);
    border-radius: 28px;
    background:
        radial-gradient(ellipse 60% 140% at 50% 120%, rgb(31 171 171 / 0.2), transparent 70%),
        rgb(255 255 255 / 0.02);
}
</style>
