<template>
    <section class="relative bg-neutral-900/95 py-24 sm:py-32 overflow-visible">

        <div class="pointer-events-none absolute inset-0 z-0">
            <div
                class="absolute top-[-200px] left-[-200px] h-[500px] w-[500px] rounded-full bg-brand opacity-25 blur-[140px] mix-blend-screen">
            </div>
        </div>

        <!-- Content -->
        <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

            <!-- Header -->
            <div class="mx-auto max-w-4xl text-center">
                <h2 class="text-base font-semibold text-brand">Preise</h2>
                <p class="mt-2 text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                    Klare <span class="text-brand">Pakete</span>. Keine Überraschungen.
                </p>
            </div>

            <p class="mx-auto mt-6 max-w-2xl text-center text-lg text-neutral-400">
                Du bekommst keine Baukasten-Seite, sondern eine performante, moderne Website -
                strukturiert in klaren Sections und auf dein Business zugeschnitten.
            </p>

            <!-- Cards -->
            <div class="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 gap-x-5 lg:max-w-none lg:grid-cols-3">

                <div v-for="(tier, tierIdx) in tiers" :key="tier.id" :class="[
                    tier.mostPopular ? 'lg:z-10' : 'lg:mt-8',
                    'flex flex-col justify-between rounded-3xl bg-neutral-800/60 p-8 ring-1 ring-inset ring-neutral-800 backdrop-blur transition hover:bg-neutral-900/80 hover:ring-brand/40 xl:p-10'
                ]">

                    <div>
                        <div class="flex items-center justify-between">
                            <h3 :class="[tier.mostPopular ? 'text-brand' : 'text-white', 'text-lg font-semibold']">
                                {{ tier.name }}
                            </h3>

                            <span v-if="tier.mostPopular"
                                class="rounded-full bg-brand/10 px-2 py-1 text-xs font-semibold text-brand">
                                Beliebt
                            </span>
                        </div>

                        <p class="mt-4 text-sm text-neutral-400">
                            {{ tier.description }}
                        </p>

                        <p class="mt-6 text-4xl font-bold text-white">
                            {{ tier.price }}
                        </p>

                        <ul class="mt-8 space-y-3 text-sm text-neutral-300">
                            <li v-for="feature in tier.features" :key="feature" class="flex gap-3">
                                <CheckIcon class="h-5 w-5 text-brand" />
                                {{ feature }}
                            </li>
                        </ul>
                    </div>

                    <RouterLink to="contact" :class="[
                        tier.mostPopular
                            ? 'bg-brand text-black hover:opacity-90'
                            : 'border border-neutral-700 hover:border-brand hover:text-brand',
                        'mt-8 block rounded-xl px-4 py-3 text-center text-sm font-semibold transition'
                    ]">
                        Projekt anfragen
                    </RouterLink>

                </div>

            </div>
        </div>
    </section>
</template>

<script setup>
import { CheckIcon } from '@heroicons/vue/20/solid'

const tiers = [
    {
        name: 'Starter',
        id: 'starter',
        price: '2.500 €',
        description: 'Perfekt für kleine Unternehmen, die online sichtbar werden wollen.',
        features: [
            'Bis zu 5 Seiten',
            'Bis zu 10 Sections',
            'Individuelles UI/UX Design',
            'Mobil optimiert',
            'SEO inklusive',
            'Schnelle Ladezeiten',
            'Hosting & Deployment',
        ],
        mostPopular: false,
    },
    {
        name: 'Business',
        id: 'business',
        price: '3.900 €',
        description: 'Für Unternehmen, die aktiv Kunden über ihre Website gewinnen wollen.',
        features: [
            'Bis zu 7 Seiten',
            'Bis zu 25 Sections',
            'Individuelles UI/UX Design',
            'Mobil optimiert',
            'Conversion-optimierte Struktur',
            'SEO inklusive',
            'Schnelle Ladezeiten',
            'Hosting & Deployment',
        ],
        mostPopular: true,
    },
    {
        name: 'Pro',
        id: 'pro',
        price: 'ab 4.900 €',
        description: 'Für komplexere Projekte mit Logik, Wachstum und Skalierung.',
        features: [
            'Bis zu 10 Seiten',
            'Bis zu 40 Sections',
            'Individuelles UI/UX Design',
            'Mobil optimiert',
            'SEO inklusive',
            'Laravel Backend möglich',
            'API / dynamische Inhalte',
            'Performance & Skalierbarkeit',
            'Komplexe Logik & Funktionen',
            'Datenbank-Integration',
            'SSR möglich',
            'Hosting & Deployment',
        ],
        mostPopular: false,
    },
]
</script>