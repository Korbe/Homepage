<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- Glow -->
        <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div class="absolute bottom-0 left-0
               -translate-x-1/2 translate-y-1/2
               h-[900px] w-[900px]
               rounded-full
               bg-brand
               opacity-25
               blur-[140px]
               mix-blend-screen">
            </div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Heading -->
            <div v-reveal class="max-w-3xl mx-auto text-center mb-16">

                <p class="text-brand text-sm uppercase tracking-wide mb-4">
                    Deine Vorteile
                </p>

                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    Eine Website, die für dein <span class="text-brand">Unternehmen</span> arbeitet
                </h2>

                <p class="text-neutral-400 text-lg">
                    Eine gute Website sieht nicht nur modern aus - sie überzeugt Besucher,
                    wird bei Google gefunden und hilft dir dabei, neue Kunden zu gewinnen.
                </p>

            </div>

            <!-- Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                <!-- Card -->
                <div v-reveal="{ delay: 0 }" class="group bg-neutral-800/60 border border-neutral-800 rounded-2xl p-8 hover:border-brand hover:-translate-y-1 transition">
                    <IconBadge :icon="BoltIcon" class="mb-5" />

                    <h3 class="text-xl font-semibold mb-3">
                        Schnell & performant
                    </h3>

                    <p class="text-neutral-400">
                        Kurze Ladezeiten sorgen für eine bessere Nutzererfahrung
                        und wirkt sich positiv auf dein Google-Ranking aus.
                    </p>
                </div>

                <!-- Card -->
                <div v-reveal="{ delay: 80 }" class="group bg-neutral-800/60 border border-neutral-800 rounded-2xl p-8 hover:border-brand hover:-translate-y-1 transition">
                    <IconBadge :icon="ArrowTrendingUpIcon" class="mb-5" />

                    <h3 class="text-xl font-semibold mb-3">
                        Mehr Anfragen
                    </h3>

                    <p class="text-neutral-400">
                        Klare Strukturen und ein durchdachter Seitenaufbau helfen
                        Besuchern dabei, schneller Kontakt mit dir aufzunehmen.
                    </p>
                </div>

                <!-- Card -->
                <div v-reveal="{ delay: 160 }" class="group bg-neutral-800/60 border border-neutral-800 rounded-2xl p-8 hover:border-brand hover:-translate-y-1 transition">
                    <IconBadge :icon="MagnifyingGlassIcon" class="mb-5" />

                    <h3 class="text-xl font-semibold mb-3">
                        Besser bei Google
                    </h3>

                    <p class="text-neutral-400">
                        Sauber entwickelte Websites bieten die Grundlage,
                        damit deine Inhalte von Suchmaschinen optimal verstanden werden.
                    </p>
                </div>

                <!-- Card -->
                <div v-reveal="{ delay: 240 }" class="group bg-neutral-800/60 border border-neutral-800 rounded-2xl p-8 hover:border-brand hover:-translate-y-1 transition">
                    <IconBadge :icon="DevicePhoneMobileIcon" class="mb-5" />

                    <h3 class="text-xl font-semibold mb-3">
                        Perfekt auf jedem Gerät
                    </h3>

                    <p class="text-neutral-400">
                        Egal ob Smartphone, Tablet oder Desktop -
                        deine Website sieht überall professionell aus.
                    </p>
                </div>

                <!-- Card -->
                <div v-reveal="{ delay: 320 }" class="group bg-neutral-800/60 border border-neutral-800 rounded-2xl p-8 hover:border-brand hover:-translate-y-1 transition">
                    <IconBadge :icon="RocketLaunchIcon" class="mb-5" />

                    <h3 class="text-xl font-semibold mb-3">
                        Zukunftssicher
                    </h3>

                    <p class="text-neutral-400">
                        Deine Website wächst mit deinem Unternehmen und
                        kann jederzeit erweitert werden.
                    </p>
                </div>

                <!-- Card -->
                <div v-reveal="{ delay: 400 }" class="group bg-neutral-800/60 border border-neutral-800 rounded-2xl p-8 hover:border-brand hover:-translate-y-1 transition">
                    <IconBadge :icon="UserGroupIcon" class="mb-5" />

                    <h3 class="text-xl font-semibold mb-3">
                        Persönlicher Ansprechpartner
                    </h3>

                    <p class="text-neutral-400">
                        Kein Ticketsystem und keine Agentur -
                        du arbeitest direkt mit dem Entwickler deiner Website.
                    </p>
                </div>

            </div>

            <!-- Bottom Statement -->
            <div class="mt-14 border border-brand/30 rounded-2xl bg-neutral-800/60 p-8 text-center">

                <p class="text-xl font-medium leading-relaxed">
                    Eine Website ist keine Ausgabe -
                    <span class="text-brand">sie ist eine Investition in neue Kunden und langfristiges Wachstum.</span>
                </p>

            </div>

        </div>
    </section>
</template>

<script setup>
import { BoltIcon, ArrowTrendingUpIcon, MagnifyingGlassIcon, DevicePhoneMobileIcon, RocketLaunchIcon, UserGroupIcon } from '@heroicons/vue/24/outline'
import IconBadge from '@/components/ui/IconBadge.vue'
</script>