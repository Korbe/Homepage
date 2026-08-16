<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- Glow -->
        <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div class="absolute top-0 right-0
               translate-x-1/2 -translate-y-1/2
               h-[900px] w-[900px]
               rounded-full
               bg-brand
               opacity-25
               blur-[140px]
               mix-blend-screen">
            </div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

            <div class="rounded-3xl border border-brand/30 bg-neutral-800/60 backdrop-blur p-10 text-center">

                <h3 class="text-3xl font-bold mb-4">
                    Nicht sicher, welches Paket zu dir passt?
                </h3>

                <p class="max-w-2xl mx-auto text-neutral-400 text-lg mb-8">
                    Kein Problem. Im kostenlosen Erstgespräch finden wir gemeinsam
                    heraus, welche Lösung für dein Unternehmen sinnvoll ist –
                    egal ob klassische Website oder Web-App.
                </p>

                <RouterLink to="/contact"
                    class="inline-flex items-center rounded-xl bg-brand px-8 py-4 font-semibold text-black transition hover:opacity-90">

                    Kostenlos beraten lassen

                </RouterLink>

                <p class="mt-6 text-sm text-neutral-500">
                    Alle Preise verstehen sich als Richtwerte.
                    Umfang und Preis werden individuell auf dein Projekt abgestimmt.
                </p>

            </div>

        </div>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
