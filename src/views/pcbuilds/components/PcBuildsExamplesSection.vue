<template>
    <section class="pg-section pg-section-alt">
        <div class="pg-glow pg-glow-amber -bottom-40 -left-40"></div>

        <div class="pg-wrap">

            <div v-reveal class="pg-head">
                <p class="pg-tag">04 · Beispiel Builds</p>
                <h2 class="pg-title">
                    Was du für dein <span class="pg-grad">Budget</span> erwarten kannst
                </h2>
                <p class="pg-lead">
                    Jeder PC wird individuell geplant - diese Beispiele geben dir eine realistische Orientierung.
                </p>
            </div>

            <div class="grid items-stretch gap-6 md:grid-cols-3">
                <article v-for="(b, i) in builds" :key="b.price" v-reveal="{ delay: i * 110 }"
                    class="pg-card flex flex-col p-8" :class="b.hot ? 'pg-card-hot md:-my-4 md:py-12' : ''">

                    <span v-if="b.hot" class="pg-badge pg-font">Beliebt</span>

                    <p class="mb-2 text-sm font-medium uppercase tracking-[0.2em]" :class="b.hot ? 'text-amber-300' : 'text-neutral-400'">
                        {{ b.label }}
                    </p>

                    <h3 class="pg-font mb-6 text-3xl font-bold italic">{{ b.price }}</h3>

                    <!-- Stufen-Anzeige -->
                    <div class="mb-7 flex gap-1.5" aria-hidden="true">
                        <span v-for="n in 5" :key="n" class="pg-seg" :class="n <= b.level ? 'on' : ''"></span>
                    </div>

                    <ul class="space-y-3 text-neutral-300">
                        <li v-for="f in b.features" :key="f" class="pg-check"><CheckIcon />{{ f }}</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/outline'
import '@fontsource/chakra-petch/500.css'
import '@fontsource/chakra-petch/700.css'
import '@fontsource/chakra-petch/700-italic.css'
import '@/styles/gaming.css'

const builds = [
    {
        label: 'Einsteiger',
        price: '~1500€ Setup',
        level: 2,
        features: ['1080p / 1440p Gaming', 'Hohe FPS in aktuellen Spielen', 'Sehr gutes Preis-Leistungs-Verhältnis']
    },
    {
        label: 'Beliebt',
        price: '~2500€ Setup',
        level: 4,
        hot: true,
        features: ['High-End Performance', 'Ideal für Streaming & Competitive Gaming', 'Zukunftssicher für mehrere Jahre']
    },
    {
        label: 'High-End',
        price: '3000€+ Setup',
        level: 5,
        features: ['4K Gaming & maximale Details', 'Extrem hohe FPS & Leistung', 'Für Enthusiasten & Profis']
    }
]
</script>

<style scoped>
.pg-seg {
    flex: 1;
    height: 8px;
    background: rgb(255 255 255 / 0.1);
    clip-path: polygon(0 0, 100% 0, calc(100% - 5px) 100%, 0 100%);
}

.pg-seg.on {
    background: linear-gradient(90deg, #1fabab, #3fd9d0);
    box-shadow: 0 0 10px #3fd9d0;
}

.pg-badge {
    position: absolute !important;
    top: 0;
    right: 1.6rem;
    padding: 0.35rem 0.9rem;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #05090a;
    background: #f5a524;
    clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%);
}
</style>
