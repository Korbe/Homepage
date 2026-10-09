<template>
    <section class="sb-section sb-section-alt">
        <div class="sb-glow left-1/2 top-0 -translate-x-1/2"></div>

        <div class="sb-wrap max-w-5xl text-center">

            <div v-reveal>
                <MailIllo class="mx-auto mb-2 h-24 w-auto" />
                <p class="sb-kicker sb-hand mx-auto">dein zug</p>
                <h2 class="sb-title mb-5">
                    Jetzt kennst du <em>mich</em> - wer bist <em class="sb-em-accent">du</em>?
                </h2>
                <p class="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-neutral-300">
                    Egal ob du eine Idee hast, ein Problem lösen willst oder einfach nur eine Frage -
                    schreib mir. Ich freue mich, von dir zu hören.
                </p>
            </div>

            <!-- Schnellwege -->
            <div class="mb-12 grid gap-8 text-left sm:grid-cols-3 sm:gap-6">
                <router-link v-for="(p, i) in paths" :key="p.title" :to="p.to" v-reveal="{ delay: i * 100 }"
                    class="sb-paper sb-path group" :class="[p.tone, p.rot]">
                    <span class="sb-tape" aria-hidden="true"></span>
                    <component :is="p.icon" class="mb-3 h-8 w-8 text-[#0f7d7d]" />
                    <p class="sb-hand text-3xl leading-none">{{ p.title }}</p>
                    <p class="mt-2 text-[15px] leading-snug text-neutral-700">{{ p.text }}</p>
                    <span class="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#0f7d7d]">
                        {{ p.cta }}
                        <ArrowRightIcon class="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                </router-link>
            </div>

            <div v-reveal class="mb-9 flex flex-wrap items-center justify-center gap-4">
                <a href="mailto:info@korbitsch.at" class="sb-btn sb-btn-main">
                    Mail schreiben
                    <ArrowUpRightIcon class="h-5 w-5" />
                </a>
                <a href="https://wa.me/436701923388" target="_blank" rel="noopener" class="sb-btn sb-btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.59 5.96L0 24l6.31-1.65a11.8 11.8 0 0 0 5.75 1.47h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.44-8.45Z" />
                    </svg>
                    Oder per WhatsApp
                </a>
            </div>

            <ul class="flex flex-col items-center justify-center gap-3 text-sm text-neutral-400 sm:flex-row sm:gap-8">
                <li class="flex items-center gap-2"><EnvelopeIcon class="h-4 w-4 text-brand" /> info@korbitsch.at</li>
                <li class="flex items-center gap-2"><PhoneIcon class="h-4 w-4 text-brand" /> +43 670 1923388</li>
                <li class="flex items-center gap-2"><ClockIcon class="h-4 w-4 text-brand" /> Antwort meist innerhalb von 24 Stunden</li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import {
    ArrowRightIcon,
    ArrowUpRightIcon,
    ChatBubbleLeftRightIcon,
    ClockIcon,
    CodeBracketIcon,
    EnvelopeIcon,
    PhoneIcon,
    WrenchScrewdriverIcon
} from '@heroicons/vue/24/outline'
import MailIllo from '@/components/illustrations/MailIllo.vue'
import '@fontsource-variable/fraunces/wght.css'
import '@fontsource-variable/fraunces/wght-italic.css'
import '@fontsource/caveat/700.css'
import '@/styles/scrapbook.css'

const paths = [
    {
        title: 'Eine Website?',
        text: 'Moderne Websites und Web-Apps - schnell, sichtbar, ohne Baukasten.',
        cta: 'Mehr erfahren',
        to: '/webapps',
        icon: CodeBracketIcon,
        tone: 'sb-paper-teal',
        rot: 'rot-l'
    },
    {
        title: 'Technik-Hilfe?',
        text: 'Ich komme zu dir und löse das Problem direkt vor Ort.',
        cta: 'Hausbesuch anfragen',
        to: '/it-hilfe',
        icon: WrenchScrewdriverIcon,
        tone: '',
        rot: 'rot-r'
    },
    {
        title: 'Nur eine Frage?',
        text: 'Schreib mir einfach - ich melde mich persönlich bei dir.',
        cta: 'Zum Kontakt',
        to: '/contact',
        icon: ChatBubbleLeftRightIcon,
        tone: 'sb-paper-amber',
        rot: 'rot-l'
    }
]
</script>

<style scoped>
.sb-path {
    display: block;
    padding: 2rem 1.6rem 1.6rem;
}

.rot-l {
    transform: rotate(-1.6deg);
}

.rot-r {
    transform: rotate(1.6deg);
}

.sb-path:hover {
    transform: rotate(0) translateY(-6px);
}

@media (prefers-reduced-motion: reduce) {

    .rot-l,
    .rot-r,
    .sb-path:hover {
        transform: none;
    }
}
</style>
