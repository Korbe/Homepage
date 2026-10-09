<template>
    <section class="wa-section">
        <div class="wa-glow -left-40 top-0"></div>

        <div class="wa-wrap">

            <div v-reveal class="wa-head">
                <p class="wa-pill">Ablauf</p>
                <h2 class="wa-title">So läuft es <span class="wa-grad">ab</span></h2>
            </div>

            <ol class="relative grid gap-6 md:grid-cols-3 md:gap-0">
                <li v-for="(s, i) in steps" :key="s.text" v-reveal="{ delay: i * 130 }" class="step">
                    <span class="step-no" aria-hidden="true">0{{ i + 1 }}</span>
                    <span class="wa-icon mb-5"><component :is="s.icon" class="h-6 w-6" /></span>
                    <p class="text-lg leading-snug text-neutral-100">{{ s.text }}</p>
                </li>
            </ol>
        </div>
    </section>
</template>

<script setup>
import { ChatBubbleLeftRightIcon, CheckBadgeIcon, PhoneArrowUpRightIcon } from '@heroicons/vue/24/outline'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'

const steps = [
    { text: 'Du schreibst mir dein Problem oder dein Projekt', icon: ChatBubbleLeftRightIcon },
    { text: 'Ich melde mich persönlich bei dir', icon: PhoneArrowUpRightIcon },
    { text: 'Wir lösen das Problem oder setzen dein Projekt um', icon: CheckBadgeIcon }
]
</script>

<style scoped>
.step {
    position: relative;
    padding: 2.5rem 2rem 2rem;
}

@media (min-width: 768px) {
    .step + .step {
        border-left: 1px dashed rgb(255 255 255 / 0.12);
    }
}

.step-no {
    position: absolute;
    top: 0;
    right: 1.5rem;
    font-family: 'Bricolage Grotesque Variable', ui-sans-serif, sans-serif;
    font-size: 6.5rem;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.05em;
    color: transparent;
    -webkit-text-stroke: 1.5px rgb(31 171 171 / 0.35);
}

</style>
