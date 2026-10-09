<template>
    <section class="wa-section">
        <div class="wa-glow left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>

        <div class="wa-wrap">

            <div class="mb-10 flex items-center gap-4">
                <span class="wa-pill !mb-0">Web-App</span>
                <span class="h-px flex-1 bg-white/10"></span>
                <span class="hidden text-sm text-neutral-500 sm:block">Mit Datenbank &amp; individueller Logik</span>
            </div>

            <div v-reveal class="wa-head">
                <h2 class="wa-title">
                    Deine Website braucht <span class="wa-grad">mehr als nur Inhalte</span>?
                </h2>
                <p class="wa-lead">
                    Funnel bzw. verbesserte Kontaktformulare mit Datenbank-Anbindung, Benutzerverwaltung,
                    individuelle Logik oder eigene Systeme – dafür entwickle ich
                    eine vollwertige Web-App statt einer klassischen Website.
                </p>
            </div>

            <div v-reveal v-spot class="wa-card wa-card-hot p-8 lg:p-12">
                <div class="grid items-start gap-10 lg:grid-cols-3 lg:gap-14">

                    <!-- Preis -->
                    <div>
                        <p class="mb-2 text-sm font-medium uppercase tracking-widest text-brand">
                            Für individuelle Anforderungen
                        </p>
                        <h3 class="wa-num mb-3 text-3xl">Web-App Paket</h3>
                        <p class="mb-8 leading-relaxed text-neutral-300">
                            Für Unternehmen, die eine Website mit eigener
                            Logik, Datenbank und individuellen Funktionen
                            benötigen – kein statisches Template.
                        </p>

                        <p class="wa-num text-5xl md:text-6xl">
                            <span class="text-2xl font-semibold text-neutral-400">ab </span>3.500<span class="text-3xl text-neutral-400">€</span>
                        </p>
                        <p class="mb-8 mt-2 text-sm text-neutral-500">Preis abhängig vom Funktionsumfang</p>

                        <RouterLink to="/contact" class="wa-btn wa-btn-primary w-full">Web-App anfragen</RouterLink>
                    </div>

                    <!-- Features -->
                    <div class="lg:col-span-2">
                        <p class="mb-6 text-sm font-medium uppercase tracking-widest text-neutral-500">Inklusive</p>

                        <ul class="grid gap-x-8 gap-y-4 text-neutral-100 sm:grid-cols-2">
                            <li v-for="f in features" :key="f" class="wa-check"><CheckIcon />{{ f }}</li>
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
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'

const features = [
    '1 Custom Funktion oder Feature nach Wahl',
    'Kontaktformular oder Funnel mit Datenbank-Anbindung',
    'Benutzerverwaltung & Login-System',
    'Individuelle Backend-Logik (Laravel)',
    'Datenbank (MySQL)',
    'Eigenes Content-Management möglich',
    'Skalierbare, erweiterbare Architektur',
    'Beratung zur passenden Systemarchitektur'
]
</script>
