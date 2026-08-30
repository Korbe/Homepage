<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- Glow -->
        <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div class="absolute top-1/2 left-1/2
               -translate-x-1/2 -translate-y-1/2
               h-[700px] w-[700px]
               rounded-full
               bg-brand
               opacity-10
               blur-[160px]
               mix-blend-screen">
            </div>
        </div>

        <!-- Glow -->
        <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div class="absolute bottom-0 right-0
               translate-x-1/2 translate-y-1/2
               h-[900px] w-[900px]
               rounded-full
               bg-brand
               opacity-25
               blur-[140px]
               mix-blend-screen">
            </div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Kategorie-Label -->
            <div class="flex items-center gap-4 mb-8">
                <span
                    class="inline-flex items-center rounded-full border border-brand/50 bg-brand/10 px-4 py-1.5 text-xs uppercase tracking-wide text-brand">
                    Web-App
                </span>
                <span class="h-px flex-1 bg-neutral-800"></span>
                <span class="text-sm text-neutral-500 hidden sm:block">
                    Mit Datenbank & individueller Logik
                </span>
            </div>

            <!-- Heading -->
            <div class="max-w-3xl mx-auto text-center mb-16">

                <h2 class="text-3xl md:text-5xl font-bold mb-6">
                    Deine Website braucht <span class="text-brand">mehr als nur Inhalte</span>?
                </h2>

                <p class="text-neutral-400 text-lg">
                    Funnel bzw. verbesserte Kontaktformulare mit Datenbank-Anbindung, Benutzerverwaltung,
                    individuelle Logik oder eigene Systeme – dafür entwickle ich
                    eine vollwertige Web-App statt einer klassischen Website.
                </p>

            </div>

            <!-- Web-App Card -->
            <div
                class="relative rounded-3xl border border-brand bg-gradient-to-br from-neutral-800/80 to-neutral-900/80 backdrop-blur p-8 lg:p-12 shadow-xl shadow-brand/10">

                <div class="grid lg:grid-cols-3 gap-10 items-start">

                    <!-- Left: Info & Price -->
                    <div class="lg:col-span-1">

                        <p class="text-brand text-sm uppercase tracking-wide mb-2">
                            Für individuelle Anforderungen
                        </p>

                        <h3 class="text-2xl font-bold mb-3">
                            Web-App Paket
                        </h3>

                        <p class="text-neutral-400 mb-6">
                            Für Unternehmen, die eine Website mit eigener
                            Logik, Datenbank und individuellen Funktionen
                            benötigen – kein statisches Template.
                        </p>

                        <p class="text-5xl font-bold mb-2">
                            ab 3.500€
                        </p>

                        <p class="text-sm text-neutral-500 mb-8">
                            Preis abhängig vom Funktionsumfang
                        </p>

                        <RouterLink to="/contact"
                            class="w-full inline-flex items-center justify-center bg-brand text-black rounded-xl py-3 px-6 text-center font-semibold hover:opacity-90 transition">

                            Web-App anfragen

                        </RouterLink>

                    </div>

                    <!-- Right: Features -->
                    <div class="lg:col-span-2">

                        <p class="text-sm uppercase tracking-wide text-neutral-500 mb-6">
                            Inklusive
                        </p>

                        <ul class="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-neutral-300">

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                1 Custom Funktion oder Feature nach Wahl
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Kontaktformular oder Funnel mit Datenbank-Anbindung
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Benutzerverwaltung & Login-System
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Individuelle Backend-Logik (Laravel)
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Datenbank (MySQL)
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Eigenes Content-Management möglich
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Skalierbare, erweiterbare Architektur
                            </li>

                            <li class="flex gap-3">
                                <CheckIcon class="w-5 h-5 text-brand shrink-0" />
                                Beratung zur passenden Systemarchitektur
                            </li>

                        </ul>

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
