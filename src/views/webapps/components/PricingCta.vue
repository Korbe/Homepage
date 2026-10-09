<template>
    <section class="wa-section wa-section-alt !py-20">
        <div class="wa-glow -right-40 top-0"></div>

        <div class="wa-wrap">
            <div v-reveal class="wa-cta">
                <h3 class="wa-title mb-5 text-[clamp(1.8rem,3.6vw,2.8rem)]">
                    Nicht sicher, welches Paket <span class="wa-grad">zu dir passt?</span>
                </h3>

                <p class="mx-auto mb-9 max-w-2xl text-lg leading-relaxed text-neutral-300">
                    Kein Problem. Im kostenlosen Erstgespräch finden wir gemeinsam
                    heraus, welche Lösung für dein Unternehmen sinnvoll ist –
                    egal ob klassische Website oder Web-App.
                </p>

                <RouterLink to="/contact" class="wa-btn wa-btn-primary">
                    Kostenlos beraten lassen
                    <ArrowUpRightIcon class="h-5 w-5" />
                </RouterLink>

                <p class="mt-8 text-sm text-neutral-500">
                    Alle Preise verstehen sich als Richtwerte.
                    Umfang und Preis werden individuell auf dein Projekt abgestimmt.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'
</script>

<style scoped>
.wa-cta {
    position: relative;
    overflow: hidden;
    padding: 4rem 2rem;
    text-align: center;
    border: 1px solid rgb(31 171 171 / 0.35);
    border-radius: 32px;
    background:
        radial-gradient(ellipse 70% 120% at 50% -20%, rgb(31 171 171 / 0.28), transparent 70%),
        rgb(255 255 255 / 0.025);
}
</style>
