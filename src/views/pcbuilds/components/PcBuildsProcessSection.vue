<template>
    <section class="pg-section">
        <div class="pg-glow -left-40 top-1/3"></div>

        <div class="pg-wrap">

            <div v-reveal class="pg-head">
                <p class="pg-tag">03 · Ablauf</p>
                <h2 class="pg-title">
                    So bekommst du deinen perfekten <span class="pg-grad">Gaming PC</span>
                </h2>
                <p class="pg-lead">
                    Klarer Prozess, keine Überraschungen - von der Anfrage bis zum fertigen Setup.
                </p>
            </div>

            <ol class="pg-steps">
                <li v-for="(s, i) in steps" :key="s.title" v-reveal="{ delay: i * 110 }" class="pg-step">
                    <span class="pg-node" aria-hidden="true"></span>
                    <article class="pg-card h-full p-7">
                        <div class="mb-6 flex items-center justify-between">
                            <span class="pg-no pg-font">0{{ i + 1 }}</span>
                            <span class="pg-icon"><component :is="s.icon" class="h-6 w-6" /></span>
                        </div>
                        <h3 class="pg-font mb-3 text-xl font-bold uppercase italic tracking-wide">{{ s.title }}</h3>
                        <p class="text-sm leading-relaxed text-neutral-400">{{ s.text }}</p>
                    </article>
                </li>
            </ol>
        </div>
    </section>
</template>

<script setup>
import { ChatBubbleLeftRightIcon, ClipboardDocumentListIcon, HandThumbUpIcon, WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'
import '@fontsource/chakra-petch/500.css'
import '@fontsource/chakra-petch/700.css'
import '@fontsource/chakra-petch/700-italic.css'
import '@/styles/gaming.css'

const steps = [
    { title: 'Anfrage', text: 'Du schreibst mir dein Budget, deine Games und deine Anforderungen.', icon: ChatBubbleLeftRightIcon },
    { title: 'Planung', text: 'Ich stelle dir ein perfekt abgestimmtes Setup zusammen - ohne Bottlenecks.', icon: ClipboardDocumentListIcon },
    { title: 'Abstimmung', text: 'Wir gehen alles gemeinsam durch und passen das Setup an deine Wünsche an.', icon: HandThumbUpIcon },
    { title: 'Umsetzung', text: 'Auf Wunsch baue ich deinen PC zusammen und richte alles für dich ein.', icon: WrenchScrewdriverIcon }
]
</script>

<style scoped>
.pg-steps {
    position: relative;
    display: grid;
    gap: 2rem 1.5rem;
    list-style: none;
}

@media (min-width: 768px) {
    .pg-steps {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .pg-steps {
        grid-template-columns: repeat(4, 1fr);
        padding-top: 2.2rem;
    }

    /* Neon-Strecke über den vier Schritten */
    .pg-steps::before {
        content: '';
        position: absolute;
        left: 4%;
        right: 4%;
        top: 0.55rem;
        height: 2px;
        background: linear-gradient(90deg, #1fabab, #3fd9d0 50%, #f5a524);
        box-shadow: 0 0 16px rgb(63 217 208 / 0.7);
    }
}

.pg-step {
    position: relative;
}

.pg-node {
    display: none;
}

@media (min-width: 1024px) {
    .pg-node {
        position: absolute;
        top: -2.2rem;
        left: 2rem;
        z-index: 3;
        display: block;
        width: 14px;
        height: 14px;
        background: #3fd9d0;
        transform: rotate(45deg);
        box-shadow: 0 0 0 4px #05090a, 0 0 16px #3fd9d0;
    }
}

.pg-no {
    font-size: 2.6rem;
    font-weight: 700;
    font-style: italic;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1.5px rgb(63 217 208 / 0.7);
}
</style>
