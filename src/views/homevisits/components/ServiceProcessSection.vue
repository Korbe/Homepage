<template>
    <section class="wk-section">
        <div class="wk-glow wk-glow-teal -right-40 top-0"></div>

        <div class="wk-wrap">

            <div class="wk-head">
                <div v-reveal>
                    <p class="wk-kicker">03 / Ablauf</p>
                    <h2 class="wk-title">So läuft ein <mark class="wk-mark">Hausbesuch</mark> ab</h2>
                </div>
                <p v-reveal="{ delay: 80 }" class="wk-lead">
                    Einfach, transparent und ohne komplizierte Abläufe - damit du genau weißt, was passiert.
                </p>
            </div>

            <ol class="wk-steps">
                <li v-for="(s, i) in steps" :key="s.title" v-reveal="{ delay: i * 100 }" class="wk-card wk-step p-7">
                    <div class="mb-6 flex items-center justify-between">
                        <span class="wk-num wk-mono">0{{ i + 1 }}</span>
                        <component :is="s.icon" class="h-6 w-6 text-accent" />
                    </div>
                    <h3 class="mb-3 text-xl font-semibold">{{ s.title }}</h3>
                    <p class="text-sm leading-relaxed text-neutral-400">{{ s.text }}</p>
                </li>
            </ol>
        </div>
    </section>
</template>

<script setup>
import { CalendarDaysIcon, ChatBubbleLeftRightIcon, CheckBadgeIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import '@fontsource-variable/jetbrains-mono'
import '../werkstatt.css'

const steps = [
    {
        title: 'Anfrage',
        text: 'Du kontaktierst mich per Mail oder Telefon und beschreibst dein Problem.',
        icon: ChatBubbleLeftRightIcon
    },
    {
        title: 'Termin',
        text: 'Wir vereinbaren einen passenden Termin - schnell und unkompliziert.',
        icon: CalendarDaysIcon
    },
    {
        title: 'Vor Ort Analyse',
        text: 'Ich komme zu dir und schaue mir das Problem direkt bei dir an.',
        icon: MagnifyingGlassIcon
    },
    {
        title: 'Lösung',
        text: 'Ich löse das Problem direkt vor Ort - verständlich erklärt und sofort umgesetzt.',
        icon: CheckBadgeIcon
    }
]
</script>

<style scoped>
.wk-steps {
    position: relative;
    display: grid;
    gap: 1.5rem;
    list-style: none;
}

@media (min-width: 768px) {
    .wk-steps {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .wk-steps {
        grid-template-columns: repeat(4, 1fr);
    }

    /* gestrichelte Strecke durch alle Schritte */
    .wk-steps::before {
        content: '';
        position: absolute;
        left: 6%;
        right: 6%;
        top: -1.4rem;
        border-top: 2px dashed rgb(245 165 36 / 0.5);
    }

    .wk-step::before {
        content: '';
        position: absolute;
        top: -1.65rem;
        left: 2rem;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        background: var(--color-accent);
        box-shadow: 0 0 0 4px #0b0b0c;
    }
}

.wk-num {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 2.8rem;
    height: 2.8rem;
    font-size: 1.1rem;
    font-weight: 800;
    color: #0b0b0c;
    background: var(--color-accent);
    border-radius: 8px;
    box-shadow: 3px 3px 0 var(--color-brand);
}
</style>
