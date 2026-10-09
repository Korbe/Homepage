<template>
    <section class="relative overflow-hidden border-t border-neutral-900 bg-neutral-900/95 py-24 text-white">

        <div class="pointer-events-none absolute inset-0" aria-hidden="true">
            <div class="absolute -bottom-40 right-0 h-[520px] w-[520px] rounded-full bg-brand/15 blur-[150px]"></div>
        </div>

        <div class="relative mx-auto max-w-6xl px-6 lg:px-12">

            <!-- Überschrift -->
            <div v-reveal class="mx-auto mb-14 max-w-2xl text-center">
                <p class="mb-4 text-sm uppercase tracking-wide text-brand">Anfrage starten</p>
                <h2 class="mb-4 text-3xl font-bold md:text-4xl">Worum geht's?</h2>
                <p class="text-lg text-neutral-400">
                    Such dir dein Thema aus - die Nachricht ist schon vorbereitet,
                    du musst nur noch abschicken.
                </p>
            </div>

            <!-- Themen -->
            <div class="grid gap-6 md:grid-cols-3">
                <article v-for="(t, i) in topics" :key="t.title" v-reveal="{ delay: i * 100 }"
                    class="group relative flex flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-800/50 p-8 transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-brand/10">

                    <div class="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand/10 blur-2xl transition group-hover:bg-brand/25"></div>

                    <IconBadge :icon="t.icon" size="lg" :color="t.color" class="mb-6" />
                    <h3 class="mb-2 text-xl font-semibold">{{ t.title }}</h3>
                    <p class="mb-8 text-neutral-400">{{ t.text }}</p>

                    <div class="mt-auto flex items-center gap-3">
                        <a :href="t.mail"
                            class="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-sm font-semibold text-black transition hover:opacity-90">
                            <EnvelopeIcon class="h-5 w-5" /> Per Mail
                        </a>
                        <a :href="t.wa" target="_blank" rel="noopener" :aria-label="`${t.title} per WhatsApp anfragen`"
                            class="flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-700 text-green-400 transition hover:border-green-500 hover:bg-green-500/10">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.59 5.96L0 24l6.31-1.65a11.8 11.8 0 0 0 5.75 1.47h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.44-8.45Z" />
                            </svg>
                        </a>
                    </div>
                </article>
            </div>

            <!-- Direkt + Ablauf -->
            <div class="mt-8 grid gap-6 lg:grid-cols-5">

                <!-- Kontaktdaten -->
                <div v-reveal class="rounded-3xl border border-neutral-800 bg-neutral-800/50 p-8 lg:col-span-3">
                    <h3 class="mb-6 text-xl font-semibold">Direkt erreichbar</h3>

                    <ul class="mb-8 grid gap-4 sm:grid-cols-2">
                        <li>
                            <a href="mailto:info@korbitsch.at" class="flex items-center gap-3 transition hover:text-brand">
                                <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
                                    <EnvelopeIcon class="h-5 w-5" />
                                </span>
                                <span>
                                    <span class="block text-xs text-neutral-500">E-Mail</span>
                                    info@korbitsch.at
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+436701923388" class="flex items-center gap-3 transition hover:text-brand">
                                <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                                    <PhoneIcon class="h-5 w-5" />
                                </span>
                                <span>
                                    <span class="block text-xs text-neutral-500">Telefon</span>
                                    +43 670 1923388
                                </span>
                            </a>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/15 text-brand">
                                <MapPinIcon class="h-5 w-5" />
                            </span>
                            <span>
                                <span class="block text-xs text-neutral-500">Standort</span>
                                Villach, Österreich
                            </span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent">
                                <ClockIcon class="h-5 w-5" />
                            </span>
                            <span>
                                <span class="block text-xs text-neutral-500">Antwortzeit</span>
                                meist innerhalb von 24 h
                            </span>
                        </li>
                    </ul>

                    <div class="flex flex-wrap gap-3 border-t border-neutral-700/60 pt-6">
                        <a href="https://www.facebook.com/profile.php?id=61589133460488" target="_blank" rel="noopener"
                            class="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm transition hover:border-brand hover:text-brand">
                            <i class="fa-brands fa-facebook text-brand"></i> Facebook
                        </a>
                        <a href="https://www.instagram.com/korbitsch.it" target="_blank" rel="noopener"
                            class="inline-flex items-center gap-2 rounded-full border border-neutral-700 px-4 py-2 text-sm transition hover:border-brand hover:text-brand">
                            <i class="fa-brands fa-instagram text-brand"></i> Instagram
                        </a>
                    </div>
                </div>

                <!-- Ablauf -->
                <div v-reveal="{ delay: 120 }"
                    class="rounded-3xl border border-brand/30 bg-linear-to-br from-brand/10 to-transparent p-8 lg:col-span-2">
                    <h3 class="mb-6 text-xl font-semibold">Und danach?</h3>

                    <ol class="relative space-y-6">
                        <span class="absolute bottom-3 left-[15px] top-3 w-px bg-brand/30"></span>
                        <li v-for="(s, i) in steps" :key="s" class="relative flex gap-4">
                            <span class="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-sm font-bold text-black">
                                {{ i + 1 }}
                            </span>
                            <p class="pt-1 text-neutral-200">{{ s }}</p>
                        </li>
                    </ol>

                    <p class="mt-8 flex items-center gap-2 text-sm text-neutral-400">
                        <CheckBadgeIcon class="h-5 w-5 text-brand" /> Unverbindlich & kostenlos
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import {
    CheckBadgeIcon,
    ClockIcon,
    CodeBracketIcon,
    CpuChipIcon,
    EnvelopeIcon,
    MapPinIcon,
    PhoneIcon,
    WrenchScrewdriverIcon
} from '@heroicons/vue/24/outline'
import IconBadge from '@/components/ui/IconBadge.vue'

const MAIL = 'info@korbitsch.at'
const WA = '436701923388'

// Vorbereitete Nachrichten: Mail mit Betreff + Text, WhatsApp mit Starttext
const build = (subject, intro) => {
    const body = `Hallo Lukas,\n\n${intro}\n\nKurz zu meinem Anliegen:\n`
    return {
        mail: `mailto:${MAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        wa: `https://wa.me/${WA}?text=${encodeURIComponent(`Hallo Lukas, ${intro}`)}`
    }
}

const topics = [
    {
        title: 'Website / Web-App',
        text: 'Neue Unternehmenswebsite oder individuelle Web-App - schnell, sichtbar und ohne Baukasten.',
        icon: CodeBracketIcon,
        color: 'brand',
        ...build('Anfrage Website / Web-App', 'ich interessiere mich für eine neue Website bzw. Web-App.')
    },
    {
        title: 'PC Hilfe vor Ort',
        text: 'PC, Smartphone oder Drucker macht Probleme? Ich komme zu dir und löse es.',
        icon: WrenchScrewdriverIcon,
        color: 'accent',
        ...build('Anfrage PC Hilfe vor Ort', 'ich hätte gerne Hilfe bei einem technischen Problem.')
    },
    {
        title: 'Gaming PC Build',
        text: 'Ein individuell abgestimmter Gaming PC für dein Budget und deine Games.',
        icon: CpuChipIcon,
        color: 'brand',
        ...build('Anfrage Gaming PC Build', 'ich interessiere mich für einen individuellen Gaming PC.')
    }
]

const steps = [
    'Du schickst mir deine Nachricht - per Mail, Telefon oder WhatsApp.',
    'Ich melde mich persönlich bei dir, meist innerhalb von 24 Stunden.',
    'Wir besprechen alles unverbindlich und finden gemeinsam die beste Lösung.'
]
</script>
