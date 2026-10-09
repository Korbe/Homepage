<template>
    <section id="pricing" class="wa-section wa-section-alt">
        <div class="wa-glow -left-40 -top-40"></div>
        <div class="wa-glow wa-glow-amber -bottom-40 -right-40"></div>

        <div class="wa-wrap">

            <div v-reveal class="wa-head">
                <p class="wa-pill">Preise</p>
                <h2 class="wa-title">
                    Die passende <span class="wa-grad">Website</span> für dein Unternehmen
                </h2>
                <p class="wa-lead">
                    Egal ob Landingpage oder Unternehmenswebsite –
                    jede Website wird individuell entwickelt und exakt auf dein Unternehmen abgestimmt.
                </p>
            </div>

            <!-- Kategorie -->
            <div class="mb-10 flex items-center gap-4">
                <span class="wa-pill !mb-0">Statische Websites</span>
                <span class="h-px flex-1 bg-white/10"></span>
                <span class="hidden text-sm text-neutral-500 sm:block">Ohne Datenbank &amp; Backend-Logik</span>
            </div>

            <div class="grid items-stretch gap-8 lg:grid-cols-2">

                <!-- One Pager -->
                <article v-reveal v-spot class="wa-card flex flex-col p-8 lg:p-10">
                    <p class="mb-2 text-sm font-medium uppercase tracking-widest text-brand">Für Selbstständige</p>
                    <h3 class="wa-num mb-3 text-3xl">One Pager</h3>
                    <p class="mb-8 text-neutral-400">
                        Ideal für Selbstständige, Vereine und kleine Unternehmen,
                        die professionell online sichtbar werden möchten.
                    </p>

                    <p class="wa-num mb-8 text-5xl md:text-6xl">1.000<span class="text-3xl text-neutral-500">€</span></p>

                    <ul class="mb-10 space-y-3.5 text-neutral-300">
                        <li v-for="f in onePager" :key="f" class="wa-check"><CheckIcon />{{ f }}</li>
                    </ul>

                    <RouterLink to="/contact" class="wa-btn wa-btn-ghost mt-auto w-full">One Pager anfragen</RouterLink>
                </article>

                <!-- Website -->
                <article v-reveal="{ delay: 120 }" v-spot class="wa-card wa-card-hot flex flex-col p-8 lg:p-10">
                    <div class="wa-abs absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-brand px-5 py-2 text-xs font-bold uppercase tracking-wider text-black shadow-lg shadow-brand/40">
                        Am beliebtesten
                    </div>

                    <p class="mb-2 text-sm font-medium uppercase tracking-widest text-brand">Für Unternehmen</p>
                    <h3 class="wa-num mb-3 text-3xl">Website</h3>
                    <p class="mb-8 text-neutral-300">
                        Perfekt für Unternehmen,
                        die professionell auftreten und neue Kunden gewinnen möchten.
                    </p>

                    <p class="wa-num mb-8 text-5xl md:text-6xl">
                        <span class="text-2xl font-semibold text-neutral-400">ab </span>2.500<span class="text-3xl text-neutral-400">€</span>
                    </p>

                    <ul class="mb-10 space-y-3.5 text-neutral-100">
                        <li v-for="f in website" :key="f" class="wa-check"><CheckIcon />{{ f }}</li>
                    </ul>

                    <RouterLink to="/contact" class="wa-btn wa-btn-primary mt-auto w-full">Website anfragen</RouterLink>
                </article>
            </div>

            <!-- Immer inklusive -->
            <div class="mt-28">
                <div v-reveal class="wa-head !mb-12">
                    <p class="wa-pill">Immer inklusive</p>
                    <h3 class="wa-title text-[clamp(1.7rem,3.4vw,2.7rem)]">In jedem Projekt <span class="wa-grad">enthalten</span></h3>
                    <p class="wa-lead">
                        Egal für welches Paket du dich entscheidest – diese Leistungen gehören bei jedem Projekt dazu.
                    </p>
                </div>

                <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                    <article v-for="(a, i) in always" :key="a.title" v-reveal="{ delay: i * 80 }" v-spot
                        class="wa-card p-7">
                        <span class="wa-icon mb-5"><component :is="a.icon" class="h-6 w-6" /></span>
                        <h4 class="mb-2 font-semibold">{{ a.title }}</h4>
                        <p class="text-sm leading-relaxed text-neutral-400">{{ a.text }}</p>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { CheckIcon, MagnifyingGlassIcon, PaintBrushIcon, RocketLaunchIcon, UserGroupIcon } from '@heroicons/vue/24/outline'
import { RouterLink } from 'vue-router'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'

const onePager = [
    'Individuell entwickelte Website',
    'Eine Seite mit mindestens 5 Inhaltsbereichen',
    'Modernes UI/UX-Design',
    'Responsive auf allen Geräten',
    'Conversionoptimierte Struktur',
    'SEO-Basisoptimierung',
    'Google Analytics & Cookie Banner',
    'Basis Impressum & Datenschutz',
    'Hosting-Unterstützung',
    'Skalierbar für zukünftige Erweiterungen'
]

const website = [
    'Alles aus dem One Pager Paket',
    'Unterseiten werden auf dein Unternehmen zugeschnitten',
    'Individuelle Unterseiten mit eigenem Design'
]

const always = [
    {
        title: 'Persönliche Beratung',
        text: 'Direkter Kontakt während des gesamten Projekts – ohne Agentur oder Hotline.',
        icon: UserGroupIcon
    },
    {
        title: 'Individuelles Design',
        text: 'Keine Templates oder Themes – jede Website wird speziell für dein Unternehmen gestaltet.',
        icon: PaintBrushIcon
    },
    {
        title: 'Optimiert für Google',
        text: 'Saubere technische Grundlagen für schnelle Ladezeiten und gute Auffindbarkeit.',
        icon: MagnifyingGlassIcon
    },
    {
        title: 'Unterstützung beim Launch',
        text: 'Ich unterstütze dich beim Hosting, Deployment und der Veröffentlichung.',
        icon: RocketLaunchIcon
    }
]
</script>
