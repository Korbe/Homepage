<template>
    <section id="pricing" class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- Glow -->
        <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div class="absolute top-0 left-0
               -translate-x-1/2 -translate-y-1/2
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
            <div class="max-w-3xl mx-auto text-center mb-16">

                <p class="text-brand text-sm uppercase tracking-wide mb-4">
                    Preise
                </p>

                <h2 class="text-3xl md:text-5xl font-bold mb-6">
                    Die passende <span class="text-brand">Website</span>
                    für dein Unternehmen
                </h2>

                <p class="text-neutral-400 text-lg">
                    Egal ob Landingpage oder Unternehmenswebsite –
                    jede Website wird individuell entwickelt und exakt auf dein
                    Unternehmen abgestimmt.
                </p>

            </div>

            <!-- Kategorie-Label: statische Websites -->
            <div class="flex items-center gap-4 mb-8">
                <span
                    class="inline-flex items-center rounded-full border border-neutral-700 bg-neutral-800/60 px-4 py-1.5 text-xs uppercase tracking-wide text-neutral-300">
                    Statische Websites
                </span>
                <span class="h-px flex-1 bg-neutral-800"></span>
                <span class="text-sm text-neutral-500 hidden sm:block">
                    Ohne Datenbank & Backend-Logik
                </span>
            </div>

            <!-- Pricing Cards -->
            <div class="grid lg:grid-cols-3 gap-8">

                <!-- ONE PAGER -->
                <div
                    class="rounded-3xl border border-neutral-800 bg-neutral-800/60 backdrop-blur p-8 hover:border-brand transition flex flex-col">

                    <div>

                        <p class="text-brand text-sm uppercase tracking-wide mb-2">
                            Für Selbstständige
                        </p>

                        <h3 class="text-2xl font-bold mb-3">
                            One Pager
                        </h3>

                        <p class="text-neutral-400 mb-6">
                            Ideal für Selbstständige, Vereine und kleine Unternehmen,
                            die professionell online sichtbar werden möchten.
                        </p>

                        <p class="text-5xl font-bold mb-8">
                            ab 1.000€
                        </p>

                        <ul class="space-y-4 text-neutral-300">

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Individuell entwickelte Website
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Eine Seite mit bis zu 6 Inhaltsbereichen
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Modernes UI/UX-Design
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Responsive auf allen Geräten
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Conversionoptimierte Struktur
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                SEO-Basisoptimierung
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Google Analytics & Cookie Banner
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Basis Impressum & Datenschutz
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Hosting-Unterstützung
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Skalierbar für zukünftige Erweiterungen
                            </li>

                        </ul>

                    </div>

                    <RouterLink to="/contact"
                        class="mt-10 bg-neutral-900 border border-neutral-700 rounded-xl py-3 text-center hover:border-brand transition">

                        One Pager anfragen

                    </RouterLink>

                </div>

                <!-- STARTER -->
                <div
                    class="relative rounded-3xl border border-brand bg-neutral-800/70 backdrop-blur p-8 flex flex-col shadow-xl shadow-brand/10">

                    <!-- Badge -->

                    <div
                        class="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand text-black text-xs font-semibold px-4 py-2">

                        Am beliebtesten

                    </div>

                    <div>

                        <p class="text-brand text-sm uppercase tracking-wide mb-2">
                            Für Unternehmen
                        </p>

                        <h3 class="text-2xl font-bold mb-3">
                            Starter Website
                        </h3>

                        <p class="text-neutral-400 mb-6">
                            Perfekt für Unternehmen,
                            die professionell auftreten und neue Kunden gewinnen möchten.
                        </p>

                        <p class="text-5xl font-bold mb-8">
                            ab 2.500€
                        </p>

                        <ul class="space-y-4 text-neutral-300">


                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Alles aus dem One Pager Paket
                            </li>


                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Bis zu 5 Unterseiten
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Bis zu 8 Inhaltsbereichen pro Seite
                            </li>

                        </ul>

                    </div>

                    <RouterLink to="/contact"
                        class="mt-10 bg-brand text-black rounded-xl py-3 text-center font-semibold hover:opacity-90 transition">

                        Website anfragen

                    </RouterLink>

                </div>

                <!-- BUSINESS -->
                <div
                    class="rounded-3xl border border-neutral-800 bg-neutral-800/60 backdrop-blur p-8 hover:border-brand transition flex flex-col">

                    <div>

                        <p class="text-brand text-sm uppercase tracking-wide mb-2">
                            Für Wachstum
                        </p>

                        <h3 class="text-2xl font-bold mb-3">
                            Business Website
                        </h3>

                        <p class="text-neutral-400 mb-6">
                            Für Unternehmen,
                            die langfristig wachsen und ihre Website aktiv als
                            Vertriebswerkzeug nutzen möchten.
                        </p>

                        <p class="text-5xl font-bold mb-8">
                            ab 3.500€
                        </p>

                        <ul class="space-y-4 text-neutral-300">

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Alles aus dem Starter Paket
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Bis zu 10 Unterseiten
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Bis zu 10 Inhaltsbereichen pro Seite
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Priorisierter Support
                            </li>

                        </ul>

                    </div>

                    <RouterLink to="/contact"
                        class="mt-10 bg-neutral-900 border border-neutral-700 rounded-xl py-3 text-center hover:border-brand transition">

                        Business Website anfragen

                    </RouterLink>

                </div>

            </div>

            <!-- In jedem Projekt enthalten -->
            <div class="mt-24">

                <div class="max-w-3xl mx-auto text-center mb-12">

                    <p class="text-brand text-sm uppercase tracking-wide mb-4">
                        Immer inklusive
                    </p>

                    <h3 class="text-3xl font-bold mb-4">
                        In jedem Projekt enthalten
                    </h3>

                    <p class="text-neutral-400">
                        Egal für welches Paket du dich entscheidest –
                        diese Leistungen gehören bei jedem Projekt dazu.
                    </p>

                </div>

                <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div class="rounded-2xl border border-neutral-800 bg-neutral-800/50 p-6">
                        <CheckIcon class="h-6 w-6 text-brand mb-4" />
                        <h4 class="font-semibold mb-2">
                            Persönliche Beratung
                        </h4>

                        <p class="text-sm text-neutral-400">
                            Direkter Kontakt während des gesamten Projekts –
                            ohne Agentur oder Hotline.
                        </p>
                    </div>

                    <div class="rounded-2xl border border-neutral-800 bg-neutral-800/50 p-6">
                        <CheckIcon class="h-6 w-6 text-brand mb-4" />
                        <h4 class="font-semibold mb-2">
                            Individuelles Design
                        </h4>

                        <p class="text-sm text-neutral-400">
                            Keine Templates oder Themes –
                            jede Website wird speziell für dein Unternehmen gestaltet.
                        </p>
                    </div>

                    <div class="rounded-2xl border border-neutral-800 bg-neutral-800/50 p-6">
                        <CheckIcon class="h-6 w-6 text-brand mb-4" />
                        <h4 class="font-semibold mb-2">
                            Optimiert für Google
                        </h4>

                        <p class="text-sm text-neutral-400">
                            Saubere technische Grundlagen für schnelle Ladezeiten
                            und gute Auffindbarkeit.
                        </p>
                    </div>

                    <div class="rounded-2xl border border-neutral-800 bg-neutral-800/50 p-6">
                        <CheckIcon class="h-6 w-6 text-brand mb-4" />
                        <h4 class="font-semibold mb-2">
                            Unterstützung beim Launch
                        </h4>

                        <p class="text-sm text-neutral-400">
                            Ich unterstütze dich beim Hosting,
                            Deployment und der Veröffentlichung.
                        </p>
                    </div>

                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
</script>