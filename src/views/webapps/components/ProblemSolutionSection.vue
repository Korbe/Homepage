<template>
    <section class="wa-section">
        <div class="wa-glow -bottom-40 -right-40"></div>

        <div class="wa-wrap">

            <div v-reveal class="wa-head">
                <p class="wa-pill">Das Problem</p>
                <h2 class="wa-title">
                    Warum viele Unternehmenswebsites nie <span class="wa-grad">erfolgreich</span> werden
                </h2>
                <p class="wa-lead">
                    Viele Websites sehen zwar gut aus, sind aber langsam, technisch eingeschränkt oder kaum bei
                    Google sichtbar. Das Ergebnis: Weniger Besucher, weniger Anfragen und unnötige laufende Kosten.
                </p>
            </div>

            <div class="relative grid gap-6 lg:grid-cols-2 lg:gap-10">

                <!-- VS -->
                <div class="wa-vs hidden lg:flex" aria-hidden="true">VS</div>

                <!-- Standardlösung -->
                <div v-reveal v-spot class="wa-card p-8 lg:p-10">
                    <p class="mb-8 flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-red-300/80">
                        <span class="h-px w-8 bg-red-400/50"></span> Typische Standardlösung
                    </p>

                    <ul class="space-y-4">
                        <li v-for="item in bad" :key="item" class="flex items-center gap-3 text-neutral-400">
                            <span class="wa-x"><XMarkIcon class="h-3.5 w-3.5" /></span>
                            {{ item }}
                        </li>
                    </ul>
                </div>

                <!-- Individuelle Entwicklung -->
                <div v-reveal="{ delay: 120 }" v-spot class="wa-card wa-card-hot p-8 lg:p-10">
                    <p class="mb-8 flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-brand">
                        <span class="h-px w-8 bg-brand/60"></span> Individuelle Entwicklung
                    </p>

                    <ul class="space-y-4">
                        <li v-for="item in good" :key="item" class="wa-check text-neutral-100">
                            <CheckIcon />
                            {{ item }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'

const bad = [
    'WordPress',
    'Baukastensysteme',
    'Immer die gleichen Themes',
    'Langsame Ladezeiten',
    'Plugins',
    'Regelmäßige Sicherheitsupdates',
    'Hoher Wartungsaufwand',
    'Schlechte Erweiterbarkeit'
]

const good = [
    'Maximale Performance',
    'Höhere Sicherheit',
    'Individuell entwickelt',
    'Für Google optimiert',
    'Zukunftssicher & erweiterbar',
    'Keine unnötigen Plugins'
]
</script>

<style scoped>
.wa-x {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.3rem;
    height: 1.3rem;
    flex-shrink: 0;
    border-radius: 50%;
    color: rgb(248 113 113);
    background: rgb(248 113 113 / 0.12);
}

.wa-vs {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 5;
    align-items: center;
    justify-content: center;
    width: 3.6rem;
    height: 3.6rem;
    transform: translate(-50%, -50%);
    font-family: 'Bricolage Grotesque Variable', ui-sans-serif, sans-serif;
    font-weight: 800;
    font-size: 0.95rem;
    color: #04201f;
    background: var(--color-brand);
    border-radius: 50%;
    box-shadow: 0 0 0 8px #08090a, 0 0 40px rgb(31 171 171 / 0.6);
}
</style>
