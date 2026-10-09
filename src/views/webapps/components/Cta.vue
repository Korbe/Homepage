<template>
    <section id="kontakt" class="wa-section wa-section-alt">
        <div class="wa-glow left-1/2 top-0 -translate-x-1/2"></div>

        <div class="wa-wrap">
            <div v-reveal class="wa-final">

                <CodeWindowIllo class="mx-auto mb-2 h-24 w-auto" />

                <h2 class="wa-title mb-5 text-[clamp(2rem,4.4vw,3.4rem)]">
                    Lass uns dein <span class="wa-grad">Projekt umsetzen</span>
                </h2>

                <p class="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-neutral-300">
                    Ob Web-Anwendung oder technische Unterstützung - ich melde mich persönlich bei dir zurück.
                </p>

                <div class="mb-10 flex flex-wrap items-center justify-center gap-4">
                    <a href="mailto:info@korbitsch.at" class="wa-btn wa-btn-primary">
                        Projekt anfragen
                        <ArrowUpRightIcon class="h-5 w-5" />
                    </a>
                    <a href="https://wa.me/436701923388" target="_blank" rel="noopener" class="wa-btn wa-btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.59 5.96L0 24l6.31-1.65a11.8 11.8 0 0 0 5.75 1.47h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.44-8.45Z" />
                        </svg>
                        Schreib mir auf WhatsApp
                    </a>
                </div>

                <ul class="flex flex-col items-center justify-center gap-3 text-sm text-neutral-400 sm:flex-row sm:gap-8">
                    <li class="flex items-center gap-2">
                        <EnvelopeIcon class="h-4 w-4 text-brand" /> info@korbitsch.at
                    </li>
                    <li class="flex items-center gap-2">
                        <PhoneIcon class="h-4 w-4 text-brand" /> +43 670 1923388
                    </li>
                    <li class="flex items-center gap-2">
                        <ClockIcon class="h-4 w-4 text-brand" /> Antwort meist innerhalb von 24 Stunden
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowUpRightIcon, ClockIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import CodeWindowIllo from '@/components/illustrations/CodeWindowIllo.vue'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'
</script>

<style scoped>
.wa-final {
    position: relative;
    overflow: hidden;
    padding: 4.5rem 2rem;
    text-align: center;
    border: 1px solid rgb(31 171 171 / 0.35);
    border-radius: 36px;
    background:
        radial-gradient(ellipse 80% 90% at 50% -10%, rgb(31 171 171 / 0.3), transparent 70%),
        rgb(255 255 255 / 0.025);
}
</style>
