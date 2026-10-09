<template>
    <section class="wa-section wa-section-alt">
        <div class="wa-glow -top-40 left-1/2 -translate-x-1/2"></div>

        <div class="wa-wrap">
            <div v-reveal v-spot class="wa-card wa-card-hot wa-honest mx-auto max-w-4xl p-10 text-center md:p-16">

                <span class="wa-quote" aria-hidden="true">“</span>

                <p class="wa-pill">Ehrlich gesagt</p>

                <h2 class="wa-title mx-auto mb-8 max-w-3xl">
                    Nicht jedes Projekt braucht eine <span class="wa-grad">individuelle Entwicklung.</span>
                </h2>

                <p class="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-neutral-300">
                    Für viele kleine Websites oder private Projekte ist WordPress oder ein Baukastensystem
                    eine vollkommen vernünftige Lösung.
                </p>

                <p class="mx-auto max-w-2xl text-lg leading-relaxed text-neutral-400">
                    Wenn deine Website jedoch ein wichtiger Bestandteil deines Unternehmens ist,
                    neue Kunden gewinnen soll oder langfristig mit deinem Business wachsen muss,
                    stoßen Standardlösungen häufig an ihre Grenzen.
                </p>

                <div class="mt-10 inline-flex items-center gap-3 rounded-full border border-brand/40 bg-brand/10 px-6 py-3 text-brand">
                    <SparklesIcon class="h-5 w-5" />
                    <span class="font-medium">Genau für solche Projekte entwickle ich individuelle Lösungen.</span>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { SparklesIcon } from '@heroicons/vue/24/outline'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'
</script>

<style scoped>
.wa-honest {
    position: relative;
}

.wa-quote {
    position: absolute;
    left: 2rem;
    top: -1.2rem;
    font-family: 'Bricolage Grotesque Variable', Georgia, serif;
    font-size: 11rem;
    font-weight: 800;
    line-height: 1;
    color: rgb(31 171 171 / 0.12);
    pointer-events: none;
}
</style>
