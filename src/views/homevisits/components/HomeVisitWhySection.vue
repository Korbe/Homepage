<template>
    <section class="wk-section wk-section-alt">
        <div class="wk-glow wk-glow-amber -left-40 -top-40"></div>

        <div class="wk-wrap">

            <div class="wk-head">
                <div v-reveal>
                    <p class="wk-kicker">02 / Warum vor Ort?</p>
                    <h2 class="wk-title">Keine Hotline. Kein <mark class="wk-mark">Rätselraten.</mark></h2>
                </div>
                <p v-reveal="{ delay: 80 }" class="wk-lead">
                    Ich komme direkt zu dir und löse das Problem dort, wo es entsteht.
                </p>
            </div>

            <!-- Vergleich als "diff" -->
            <div class="grid gap-6 md:grid-cols-2">

                <div v-reveal class="wk-diff wk-diff-bad">
                    <div class="wk-diff-head wk-mono">
                        <span class="flex items-center gap-2"><XMarkIcon class="h-4 w-4" /> selbst-probieren</span>
                        <span>- 3 Zeilen</span>
                    </div>
                    <ul class="wk-mono">
                        <li v-for="l in bad" :key="l"><span>-</span>{{ l }}</li>
                    </ul>
                </div>

                <div v-reveal="{ delay: 120 }" class="wk-diff wk-diff-good">
                    <div class="wk-diff-head wk-mono">
                        <span class="flex items-center gap-2"><CheckIcon class="h-4 w-4" /> vor-ort-hilfe</span>
                        <span>+ 3 Zeilen</span>
                    </div>
                    <ul class="wk-mono">
                        <li v-for="l in good" :key="l"><span>+</span>{{ l }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import '@fontsource-variable/jetbrains-mono'
import '../werkstatt.css'

const bad = ['Stundenlang googeln', 'Unsichere Lösungen', 'Frust & Zeitverlust']
const good = ['Problem sofort gelöst', 'Verständliche Erklärung', 'Kein Stress']
</script>

<style scoped>
.wk-diff {
    overflow: hidden;
    border: 2px solid;
    border-radius: 14px;
    background: #121214;
}

.wk-diff-bad {
    border-color: rgb(248 113 113 / 0.5);
}

.wk-diff-good {
    border-color: rgb(245 165 36 / 0.7);
    box-shadow: 8px 8px 0 var(--color-brand);
}

.wk-diff-head {
    display: flex;
    justify-content: space-between;
    padding: 0.75rem 1.4rem;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
}

.wk-diff-bad .wk-diff-head {
    color: rgb(252 165 165);
    background: rgb(248 113 113 / 0.12);
}

.wk-diff-good .wk-diff-head {
    color: #0b0b0c;
    background: var(--color-accent);
}

.wk-diff ul {
    padding: 0.6rem 0 1rem;
    list-style: none;
}

.wk-diff li {
    display: flex;
    gap: 1.1rem;
    padding: 0.7rem 1.4rem;
    font-size: 1rem;
}

.wk-diff li span {
    font-weight: 800;
}

.wk-diff-bad li {
    color: rgb(252 165 165);
    background: rgb(248 113 113 / 0.07);
    text-decoration: line-through;
    text-decoration-color: rgb(248 113 113 / 0.4);
}

.wk-diff-bad li + li,
.wk-diff-good li + li {
    margin-top: 2px;
}

.wk-diff-good li {
    color: rgb(153 246 228);
    background: rgb(31 171 171 / 0.12);
}
</style>
