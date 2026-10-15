<template>
    <HeroShell tag="Websites & Web-Apps · Villach" :lines="['Websites, die', 'Kunden']" hot="bringen."
        sr-title="Websites, die Kunden bringen" :marquee="marquee">

        <p class="hx-rise mt-8 max-w-xl text-lg leading-relaxed text-neutral-300 md:text-xl" style="--d: 700ms">
            Deine Website sollte Kunden bringen - nicht nur gut aussehen. Ich entwickle moderne
            Unternehmenswebsites und Web-Apps, die schnell laden, bei Google gefunden werden und exakt zu
            deinem Unternehmen passen - ohne WordPress oder Baukasten.
        </p>

        <div class="hx-rise mt-10 flex flex-wrap items-center gap-4" style="--d: 820ms">
            <router-link to="/contact"
                class="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-brand px-7 py-4 font-semibold text-black transition hover:scale-[1.03]">
                <span class="relative z-10">Kostenloses Erstgespräch</span>
                <ArrowUpRightIcon
                    class="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                <span
                    class="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 group-hover:translate-x-full"></span>
            </router-link>

            <a href="#pricing"
                class="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 font-medium text-neutral-100 backdrop-blur transition hover:border-brand hover:text-brand">
                Preise ansehen
            </a>
        </div>

        <p class="hx-rise mt-8 text-sm text-neutral-400" style="--d: 940ms">
            Auch privat für dich da:
            <router-link to="/pc-hilfe" class="text-brand hover:underline">PC Hilfe vor Ort →</router-link>
        </p>

        <!-- Rechts: Browser-Szene -->
        <template #scene>
            <div class="relative ml-auto aspect-[1/1.08] w-full max-w-[520px]">

                <!-- Browser-Fenster -->
                <div class="hx-par absolute inset-x-[2%] top-[14%]" style="--k: 1">
                    <div class="hx-rise" style="--d: 600ms">
                        <div class="animate-float-soft">
                            <div class="win-border">
                                <div class="overflow-hidden rounded-[22px] bg-neutral-900/90 backdrop-blur-xl">

                                    <!-- Chrome -->
                                    <div class="flex items-center gap-3 border-b border-white/10 bg-white/5 px-4 py-3">
                                        <div class="flex gap-1.5">
                                            <span class="h-2.5 w-2.5 rounded-full bg-red-400/70"></span>
                                            <span class="h-2.5 w-2.5 rounded-full bg-yellow-400/70"></span>
                                            <span class="h-2.5 w-2.5 rounded-full bg-green-400/70"></span>
                                        </div>
                                        <div
                                            class="flex flex-1 items-center gap-2 rounded-full bg-black/30 px-3 py-1.5 font-mono text-[11px] text-neutral-300">
                                            <LockClosedIcon class="h-3 w-3 text-brand" />
                                            ihre-firma.at
                                        </div>
                                    </div>

                                    <!-- Website entsteht -->
                                    <div class="space-y-4 p-5">
                                        <div class="build flex items-center justify-between" style="--b: 1.0s">
                                            <span class="h-5 w-5 rounded-md bg-linear-to-br from-brand to-accent"></span>
                                            <div class="flex items-center gap-2">
                                                <span class="h-1.5 w-8 rounded-full bg-white/20"></span>
                                                <span class="h-1.5 w-8 rounded-full bg-white/20"></span>
                                                <span class="h-1.5 w-8 rounded-full bg-white/20"></span>
                                                <span class="h-5 w-14 rounded-full bg-brand"></span>
                                            </div>
                                        </div>

                                        <div class="build space-y-2.5 py-3" style="--b: 1.25s">
                                            <div class="h-3.5 w-4/5 rounded-full bg-white/80"></div>
                                            <div class="h-3.5 w-3/5 rounded-full bg-linear-to-r from-brand to-[#7ff3e3]"></div>
                                            <div class="mt-3 h-2 w-11/12 rounded-full bg-white/15"></div>
                                            <div class="h-2 w-3/4 rounded-full bg-white/10"></div>
                                            <div class="mt-4 flex gap-2">
                                                <span class="h-7 w-24 rounded-full bg-brand"></span>
                                                <span class="h-7 w-20 rounded-full border border-white/20"></span>
                                            </div>
                                        </div>

                                        <div class="grid grid-cols-3 gap-3">
                                            <div v-for="(c, i) in 3" :key="c" class="build rounded-xl border border-white/10 bg-white/5 p-3"
                                                :style="{ '--b': 1.5 + i * 0.18 + 's' }">
                                                <span class="mb-2 block h-5 w-5 rounded-md"
                                                    :class="i === 1 ? 'bg-accent/80' : 'bg-brand/80'"></span>
                                                <span class="mb-1.5 block h-1.5 w-3/4 rounded-full bg-white/25"></span>
                                                <span class="block h-1.5 w-1/2 rounded-full bg-white/10"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Ladezeit -->
                <div class="hx-par absolute -right-2 top-[0%] w-[44%]" style="--k: 1.8">
                    <div class="hx-rise" style="--d: 900ms">
                        <div class="animate-float-soft-slow">
                            <div
                                class="rounded-2xl border border-white/10 bg-neutral-900/80 p-4 shadow-2xl shadow-black/50 backdrop-blur-xl">
                                <p class="text-[11px] uppercase tracking-widest text-neutral-400">Ladezeit</p>
                                <p class="mb-3 text-2xl font-bold text-brand">0,8 s</p>
                                <div class="h-1.5 overflow-hidden rounded-full bg-white/10">
                                    <div class="bar-fill h-full rounded-full bg-linear-to-r from-brand to-accent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Code -->
                <div class="hx-par absolute -left-6 bottom-[4%]" style="--k: 2.2">
                    <div class="hx-rise" style="--d: 1050ms">
                        <div class="animate-float-soft">
                            <div
                                class="rounded-2xl border border-white/10 bg-neutral-900/85 p-4 pr-6 font-mono text-[12px] leading-relaxed shadow-2xl shadow-black/50 backdrop-blur-xl">
                                <p><span class="text-brand">const</span> seite = <span class="text-accent">'schnell'</span></p>
                                <p><span class="text-neutral-500">// ohne Baukasten</span></p>
                                <p><span class="text-brand">await</span> deploy(seite)<span class="caret"></span></p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Chips -->
                <div class="hx-par absolute bottom-[12%] right-[0%]" style="--k: 1.4">
                    <div class="hx-rise" style="--d: 1150ms">
                        <div class="animate-float-soft-slow">
                            <div
                                class="flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/80 py-2 pl-3 pr-4 text-sm shadow-xl shadow-black/40 backdrop-blur-xl">
                                <CheckBadgeIcon class="h-5 w-5 text-brand" />
                                Ohne WordPress
                            </div>
                        </div>
                    </div>
                </div>

                <div class="hx-par absolute left-[6%] top-[3%]" style="--k: 1.2">
                    <div class="hx-rise" style="--d: 1250ms">
                        <div class="animate-float-soft-slow">
                            <div
                                class="flex items-center gap-2 rounded-full border border-brand/30 bg-brand/10 py-2 pl-3 pr-4 text-sm text-brand shadow-xl shadow-black/40 backdrop-blur-xl">
                                <CodeBracketIcon class="h-4 w-4" />
                                Vue 3 + Laravel
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </HeroShell>
</template>

<script setup>
import { ArrowUpRightIcon, LockClosedIcon, CheckBadgeIcon, CodeBracketIcon } from '@heroicons/vue/24/outline'
import HeroShell from '@/components/hero/HeroShell.vue'

const marquee = [
    'Vue 3',
    'Laravel',
    'Tailwind CSS',
    'Ladezeit unter 1 Sekunde',
    'Bei Google gefunden werden',
    'Kein WordPress',
    'Hosting & Domain',
    'Persönlich aus Villach'
]
</script>

<style scoped>
.win-border {
    padding: 1.5px;
    border-radius: 24px;
    background: linear-gradient(135deg, rgb(31 171 171 / 0.9), rgb(255 255 255 / 0.08) 35%, rgb(255 255 255 / 0.04) 65%, rgb(245 165 36 / 0.7));
    box-shadow: 0 30px 80px -20px rgb(0 0 0 / 0.8), 0 0 80px -20px rgb(31 171 171 / 0.35);
}

/* Die Website „baut“ sich nacheinander auf */
.build {
    opacity: 0;
    transform: translateY(14px) scale(0.97);
    animation: build 0.7s var(--b, 1s) cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.bar-fill {
    width: 0;
    animation: fill 1.6s 1.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

.caret {
    display: inline-block;
    width: 7px;
    height: 14px;
    margin-left: 3px;
    vertical-align: -2px;
    background: var(--color-brand);
    animation: blink 1s step-end infinite;
}

@keyframes build {
    to {
        opacity: 1;
        transform: none;
    }
}

@keyframes fill {
    to {
        width: 92%;
    }
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

@media (prefers-reduced-motion: reduce) {

    .build,
    .bar-fill,
    .caret {
        animation: none;
    }

    .build {
        opacity: 1;
        transform: none;
    }

    .bar-fill {
        width: 92%;
    }
}
</style>
