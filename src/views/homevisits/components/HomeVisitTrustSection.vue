<template>
    <section class="wk-section wk-section-alt">
        <div class="wk-glow wk-glow-amber -bottom-40 -left-40"></div>

        <div class="wk-wrap">

            <div class="wk-head">
                <div v-reveal>
                    <p class="wk-kicker">04 / Warum ich?</p>
                    <h2 class="wk-title">
                        Verständlich. Ehrlich. <mark class="wk-mark">Direkt bei dir</mark> vor Ort.
                    </h2>
                </div>
                <p v-reveal="{ delay: 80 }" class="wk-lead">
                    Kein Fachchinesisch, keine unnötigen Lösungen - ich erkläre dir alles so, dass du es wirklich
                    verstehst.
                </p>
            </div>

            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <article v-for="(t, i) in items" :key="t.title" v-reveal="{ delay: i * 80 }" class="wk-card p-7">
                    <span class="wk-icon mb-6">
                        <component :is="t.icon" class="h-6 w-6" />
                    </span>
                    <h3 class="mb-3 text-lg font-semibold">{{ t.title }}</h3>
                    <p class="text-sm leading-relaxed text-neutral-400">{{ t.text }}</p>
                </article>
            </div>

            <!-- Statement -->
            <div v-reveal class="wk-statement mt-14">
                <div class="wk-hazard"></div>
                <p class="wk-mono">
                    <span class="text-accent">&gt;</span> Du musst kein Technik-Profi sein - dafür bin ich da.<span class="wk-cursor"></span>
                </p>
                <div class="wk-hazard"></div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { BanknotesIcon, BoltIcon, HomeIcon, LightBulbIcon } from '@heroicons/vue/24/outline'
import '@fontsource-variable/jetbrains-mono'
import '../werkstatt.css'

const items = [
    {
        title: 'Verständlich erklärt',
        text: 'Ich erkläre dir alles ohne Fachbegriffe - so, dass du es wirklich nachvollziehen kannst.',
        icon: LightBulbIcon
    },
    {
        title: 'Direkt bei dir',
        text: 'Kein Hin- und Herfahren - ich komme zu dir und löse das Problem vor Ort.',
        icon: HomeIcon
    },
    {
        title: 'Ehrliche Preise',
        text: 'Du zahlst nur die tatsächliche Arbeitszeit - keine versteckten Kosten.',
        icon: BanknotesIcon
    },
    {
        title: 'Schnelle Hilfe',
        text: 'Ich versuche dein Problem direkt beim Termin zu lösen - ohne lange Wartezeiten.',
        icon: BoltIcon
    }
]
</script>

<style scoped>
.wk-statement {
    overflow: hidden;
    border: 2px solid rgb(245 165 36 / 0.55);
    border-radius: 14px;
    background: #121214;
    text-align: center;
}

.wk-statement p {
    padding: 2rem 1.5rem;
    font-size: clamp(1.1rem, 2.4vw, 1.6rem);
    font-weight: 700;
    letter-spacing: -0.03em;
}

.wk-cursor {
    display: inline-block;
    width: 0.5em;
    height: 1em;
    margin-left: 0.2em;
    vertical-align: -0.15em;
    background: var(--color-brand);
    animation: blink 1s step-end infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

@media (prefers-reduced-motion: reduce) {
    .wk-cursor {
        animation: none;
    }
}
</style>
