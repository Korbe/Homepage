<template>
    <section class="wa-section wa-section-alt">
        <div class="wa-glow -left-40 top-1/4"></div>

        <div class="wa-wrap">

            <div v-reveal class="wa-head">
                <p class="wa-pill">Ablauf</p>
                <h2 class="wa-title">
                    In nur <span class="wa-grad">4 Schritten</span> zu deiner neuen Website
                </h2>
                <p class="wa-lead">
                    Kein komplizierter Prozess, keine Agentur-Meetings - wir halten den Ablauf einfach und effizient.
                </p>
            </div>

            <ol class="wa-timeline">
                <li v-for="(s, i) in steps" :key="s.title" v-reveal="{ delay: i * 120 }" class="wa-step">
                    <span class="wa-dot">
                        <component :is="s.icon" class="h-6 w-6" />
                        <b>{{ i + 1 }}</b>
                    </span>
                    <h3 class="mb-3 mt-6 text-xl font-semibold">{{ s.title }}</h3>
                    <p class="text-sm leading-relaxed text-neutral-400">{{ s.text }}</p>
                </li>
            </ol>

            <div v-reveal v-spot class="wa-card mx-auto mt-16 max-w-3xl p-8 text-center md:p-10">
                <h3 class="mb-3 text-xl font-semibold">Du musst kein Technik-Profi sein.</h3>
                <p class="leading-relaxed text-neutral-400">
                    Ich begleite dich durch den gesamten Prozess, erkläre alles verständlich
                    und kümmere mich um die technische Umsetzung. Du konzentrierst dich auf dein
                    Unternehmen - ich mich auf deine Website.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ChatBubbleLeftRightIcon, LightBulbIcon, CodeBracketIcon, RocketLaunchIcon } from '@heroicons/vue/24/outline'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'

const steps = [
    {
        title: 'Erstgespräch',
        text: 'Du erzählst mir von deinem Unternehmen, deinen Zielen und deinen Vorstellungen.',
        icon: ChatBubbleLeftRightIcon
    },
    {
        title: 'Konzept',
        text: 'Ich entwickle ein individuelles Konzept, das zu deinem Unternehmen passt.',
        icon: LightBulbIcon
    },
    {
        title: 'Entwicklung',
        text: 'Deine Website wird von Grund auf entwickelt - modern, schnell und individuell.',
        icon: CodeBracketIcon
    },
    {
        title: 'Launch',
        text: 'Nach deiner Freigabe geht die Website online und ist sofort für deine Kunden erreichbar.',
        icon: RocketLaunchIcon
    }
]
</script>

<style scoped>
.wa-timeline {
    position: relative;
    display: grid;
    gap: 3rem;
    list-style: none;
}

@media (min-width: 768px) {
    .wa-timeline {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .wa-timeline {
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
    }

    /* leuchtende Linie hinter den Punkten */
    .wa-timeline::before {
        content: '';
        position: absolute;
        left: 12.5%;
        right: 12.5%;
        top: 2.25rem;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--color-brand), var(--color-brand), transparent);
        box-shadow: 0 0 20px rgb(31 171 171 / 0.6);
        opacity: 0.7;
    }
}

.wa-step {
    position: relative;
    text-align: center;
}

.wa-dot {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    color: var(--color-brand);
    background: #0a0d0d;
    box-shadow: 0 0 0 2px rgb(31 171 171 / 0.6), 0 0 36px rgb(31 171 171 / 0.35);
    transition: transform 0.3s, box-shadow 0.3s;
}

.wa-step:hover .wa-dot {
    transform: scale(1.08);
    box-shadow: 0 0 0 2px var(--color-brand), 0 0 50px rgb(31 171 171 / 0.6);
}

.wa-dot b {
    position: absolute;
    right: -0.2rem;
    top: -0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.6rem;
    height: 1.6rem;
    font-family: 'Bricolage Grotesque Variable', ui-sans-serif, sans-serif;
    font-size: 0.8rem;
    font-weight: 800;
    color: #04201f;
    background: var(--color-brand);
    border-radius: 50%;
}
</style>
