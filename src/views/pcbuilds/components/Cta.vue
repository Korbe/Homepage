<template>
    <section class="pg-section pg-section-alt">
        <div class="pg-glow left-1/2 top-0 -translate-x-1/2"></div>

        <div class="pg-wrap">
            <div v-reveal class="pg-banner px-6 py-16 text-center md:px-12">

                <GamingTowerIllo class="mx-auto mb-2 h-28 w-auto" />

                <h2 class="pg-title mb-6 text-[clamp(1.8rem,4vw,3.1rem)]">
                    Bereit für deinen Gaming PC <span class="pg-grad">ohne Kompromisse?</span>
                </h2>

                <p class="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-neutral-300">
                    Kein Zufall. Kein Bottleneck. Kein unnötiger Overkill.
                    Du bekommst ein System, das exakt zu dir passt - abgestimmt auf dein Budget und deine Anforderungen.
                </p>

                <div class="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <RouterLink to="/contact" class="pg-btn pg-btn-main">
                        Gaming Setup anfragen
                        <ArrowUpRightIcon class="h-5 w-5" />
                    </RouterLink>

                    <a href="https://wa.me/436701923388" target="_blank" rel="noopener" class="pg-btn pg-btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.59 5.96L0 24l6.31-1.65a11.8 11.8 0 0 0 5.75 1.47h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.44-8.45Z" />
                        </svg>
                        WhatsApp schreiben
                    </a>
                </div>

                <p class="flex items-center justify-center gap-2 text-sm text-neutral-400">
                    <ChatBubbleLeftEllipsisIcon class="h-5 w-5 text-teal-300" />
                    Antwort meist innerhalb von 24 Stunden
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ArrowUpRightIcon, ChatBubbleLeftEllipsisIcon } from '@heroicons/vue/24/outline'
import GamingTowerIllo from '@/components/illustrations/GamingTowerIllo.vue'
import '@fontsource/chakra-petch/500.css'
import '@fontsource/chakra-petch/700.css'
import '@fontsource/chakra-petch/700-italic.css'
import '@/styles/gaming.css'
</script>
