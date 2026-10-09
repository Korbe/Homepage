<template>
    <HeroShell tag="Webentwicklung · Villach" :lines="['Ich mach', 'Unternehmen', 'online']" hot="sichtbar."
        sr-title="Ich mach Unternehmen online sichtbar" :marquee="marquee">

        <!-- Text + Buttons unter der Headline -->
        <p class="hx-rise mt-8 max-w-xl text-lg leading-relaxed text-neutral-300 md:text-xl" style="--d: 700ms">
            Websites & Web-Apps, die in unter einer Sekunde laden, bei Google ganz oben stehen und
            aus Besuchern Anfragen machen - persönlich aus Villach, ohne Baukasten.
        </p>

        <div class="hx-rise mt-10 flex flex-wrap items-center gap-4" style="--d: 820ms">
            <router-link to="/contact"
                class="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-brand px-7 py-4 font-semibold text-black transition hover:scale-[1.03]">
                <span class="relative z-10">Jetzt sichtbar werden</span>
                <ArrowUpRightIcon
                    class="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span
                    class="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>
            </router-link>

            <router-link to="/portfolio"
                class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-medium text-neutral-100 backdrop-blur transition hover:border-brand hover:text-brand">
                Projekte ansehen
            </router-link>
        </div>

        <p class="hx-rise mt-8 flex items-center gap-3 text-sm text-neutral-400" style="--d: 940ms">
            <span class="flex text-accent" aria-hidden="true">★★★★★</span>
            Kunden aus Villach & Umgebung vertrauen mir
        </p>

        <!-- Rechts: Such-Szene -->
        <template #scene>
            <div class="scene relative ml-auto aspect-[1/1.08] w-full max-w-[520px]">

                <!-- Haupt-Suchergebnis -->
                <div class="hx-par absolute inset-x-[2%] top-[18%]" style="--k: 1">
                    <div class="hx-rise" style="--d: 600ms">
                        <div class="animate-float-soft">
                            <div class="serp-border">
                                <div class="rounded-[22px] bg-neutral-900/90 p-5 backdrop-blur-xl">

                                    <!-- Suchleiste -->
                                    <div
                                        class="mb-5 flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-neutral-300">
                                        <MagnifyingGlassIcon class="h-4 w-4 shrink-0 text-neutral-400" />
                                        <span class="typing font-mono">unternehmen villach</span>
                                    </div>

                                    <!-- Treffer #1 -->
                                    <div class="relative rounded-2xl border border-brand/40 bg-brand/10 p-4">
                                        <span
                                            class="absolute -left-3 -top-3 flex h-9 w-9 items-center justify-center rounded-xl bg-brand font-bold text-black shadow-lg shadow-brand/40">#1</span>
                                        <div class="mb-2 flex items-center gap-2 pl-6 text-xs text-neutral-400">
                                            <span class="h-5 w-5 rounded-full bg-linear-to-br from-brand to-accent"></span>
                                            ihre-firma.at › leistungen
                                        </div>
                                        <p class="mb-1 text-[15px] font-semibold text-brand">Ihre Firma - Service & Beratung in Villach</p>
                                        <div class="mb-3 flex items-center gap-2 text-xs text-neutral-400">
                                            <span class="text-accent">★★★★★</span> 4,9 · 126 Bewertungen
                                        </div>
                                        <div class="space-y-1.5">
                                            <div class="h-2 w-full rounded-full bg-white/15"></div>
                                            <div class="h-2 w-4/5 rounded-full bg-white/10"></div>
                                        </div>
                                    </div>

                                    <!-- gedimmte Konkurrenz -->
                                    <div class="mt-3 space-y-2 opacity-40">
                                        <div class="rounded-xl border border-white/5 p-3">
                                            <div class="mb-2 h-2 w-1/3 rounded-full bg-white/20"></div>
                                            <div class="h-2 w-5/6 rounded-full bg-white/10"></div>
                                        </div>
                                        <div class="rounded-xl border border-white/5 p-3 opacity-60">
                                            <div class="mb-2 h-2 w-2/5 rounded-full bg-white/20"></div>
                                            <div class="h-2 w-3/4 rounded-full bg-white/10"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Wachstum -->
                <div class="hx-par absolute -right-2 top-[2%] w-[46%]" style="--k: 1.8">
                    <div class="hx-rise" style="--d: 900ms">
                        <div class="animate-float-soft-slow">
                            <div
                                class="rounded-2xl border border-white/10 bg-neutral-900/80 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl">
                                <p class="text-[11px] uppercase tracking-widest text-neutral-400">Anfragen</p>
                                <p class="mb-1 text-2xl font-bold text-brand">+248 %</p>
                                <svg viewBox="0 0 120 40" class="h-10 w-full overflow-visible">
                                    <defs>
                                        <linearGradient id="heroSpark" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="0" stop-color="var(--color-brand)" stop-opacity=".35" />
                                            <stop offset="1" stop-color="var(--color-brand)" stop-opacity="0" />
                                        </linearGradient>
                                    </defs>
                                    <path class="spark-area"
                                        d="M0 34 C15 32 20 28 32 26 S52 24 62 18 S84 14 94 8 S110 4 120 2 V40 H0Z"
                                        fill="url(#heroSpark)" />
                                    <path class="spark-line"
                                        d="M0 34 C15 32 20 28 32 26 S52 24 62 18 S84 14 94 8 S110 4 120 2"
                                        pathLength="1" fill="none" stroke="var(--color-brand)" stroke-width="2.5"
                                        stroke-linecap="round" />
                                    <circle cx="120" cy="2" r="3.5" fill="var(--color-accent)" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Performance -->
                <div class="hx-par absolute -left-6 bottom-[6%]" style="--k: 2.2">
                    <div class="hx-rise" style="--d: 1050ms">
                        <div class="animate-float-soft">
                            <div
                                class="flex items-center gap-4 rounded-2xl border border-white/10 bg-neutral-900/80 p-4 pr-6 shadow-2xl shadow-black/50 backdrop-blur-xl">
                                <svg viewBox="0 0 44 44" class="h-14 w-14 -rotate-90">
                                    <circle cx="22" cy="22" r="18" fill="none" stroke="white" stroke-opacity=".1"
                                        stroke-width="4" />
                                    <circle class="gauge" cx="22" cy="22" r="18" fill="none"
                                        stroke="var(--color-accent)" stroke-width="4" stroke-linecap="round"
                                        pathLength="100" />
                                </svg>
                                <div>
                                    <p class="text-2xl font-bold leading-none">100</p>
                                    <p class="mt-1 text-[11px] uppercase tracking-widest text-neutral-400">Performance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Standort -->
                <div class="hx-par absolute bottom-[14%] right-[2%]" style="--k: 1.4">
                    <div class="hx-rise" style="--d: 1150ms">
                        <div class="animate-float-soft-slow">
                            <div
                                class="flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/80 py-2 pl-3 pr-4 text-sm shadow-xl shadow-black/40 backdrop-blur-xl">
                                <span class="relative flex h-6 w-6 items-center justify-center">
                                    <span class="absolute h-full w-full animate-ping rounded-full bg-brand/40"></span>
                                    <MapPinIcon class="relative h-4 w-4 text-brand" />
                                </span>
                                Villach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </HeroShell>
</template>

<script setup>
import { ArrowUpRightIcon, MagnifyingGlassIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import HeroShell from '@/components/hero/HeroShell.vue'

const marquee = [
    'Websites',
    'Web-Apps',
    'Bei Google gefunden werden',
    'Ladezeit unter 1 Sekunde',
    'Kein WordPress',
    'Persönlich aus Villach',
    'PC Hilfe vor Ort',
    'Gaming PC Builds'
]
</script>

<style scoped>
@property --angle {
    syntax: '<angle>';
    inherits: false;
    initial-value: 0deg;
}

.serp-border {
    padding: 1.5px;
    border-radius: 24px;
    background: conic-gradient(from var(--angle), rgb(255 255 255 / 0.08) 0 60%, var(--color-brand) 82%, #bffcf3 92%, rgb(255 255 255 / 0.08) 100%);
    animation: spin 6s linear infinite;
    box-shadow: 0 30px 80px -20px rgb(0 0 0 / 0.8), 0 0 80px -20px rgb(31 171 171 / 0.35);
}

.typing {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    border-right: 2px solid var(--color-brand);
    width: 0;
    animation: typing 1.6s 1.1s steps(19, end) forwards, caret 0.9s 1.1s step-end 6;
}

.spark-line {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: draw 1.6s 1.4s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

.spark-area {
    opacity: 0;
    animation: fade 1s 2.4s forwards;
}

.gauge {
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: draw 1.6s 1.6s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

@keyframes draw {
    to {
        stroke-dashoffset: 0;
    }
}

@keyframes fade {
    to {
        opacity: 1;
    }
}

@keyframes spin {
    to {
        --angle: 360deg;
    }
}

@keyframes typing {
    to {
        width: 19ch;
    }
}

@keyframes caret {
    50% {
        border-color: transparent;
    }
}

@media (prefers-reduced-motion: reduce) {

    .spark-line,
    .spark-area,
    .gauge,
    .typing,
    .serp-border {
        animation: none;
    }

    .spark-line,
    .gauge {
        stroke-dashoffset: 0;
    }

    .spark-area {
        opacity: 1;
    }

    .typing {
        width: 19ch;
        border-right-color: transparent;
    }
}
</style>
