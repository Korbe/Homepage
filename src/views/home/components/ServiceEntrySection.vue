<template>
    <section class="wa-section">
        <div class="wa-glow -bottom-40 -right-40"></div>

        <div class="wa-wrap">

            <div v-reveal class="wa-head">
                <p class="wa-pill">Leistungen</p>
                <h2 class="wa-title">Wobei kann ich dir <span class="wa-grad">helfen</span>?</h2>
                <p class="wa-lead">
                    Drei klare Wege - je nachdem, ob du eine digitale Lösung brauchst,
                    Unterstützung vor Ort suchst oder einen Gaming PC willst.
                </p>
            </div>

            <div class="grid gap-6 lg:grid-cols-3 lg:grid-rows-2">

                <!-- Schwerpunkt: Web Apps -->
                <router-link to="/webapps" v-reveal v-spot
                    class="wa-card wa-card-hot group flex flex-col p-8 lg:col-span-2 lg:row-span-2 lg:p-12">
                    <span class="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">
                        Schwerpunkt
                    </span>

                    <div class="flex flex-1 flex-col gap-8 md:flex-row md:items-center">
                        <div class="flex-1">
                            <p class="mb-2 text-sm font-medium uppercase tracking-widest text-brand">Web Development</p>
                            <h3 class="wa-num mb-4 text-3xl md:text-4xl">High-Performance Websites &amp; Web Apps</h3>
                            <p class="mb-8 max-w-md text-lg leading-relaxed text-neutral-300">
                                Maßgeschneiderte Websites, SaaS-Plattformen und Tools - gebaut für Geschwindigkeit und Skalierung.
                            </p>
                            <span class="inline-flex items-center gap-2 font-semibold text-brand">
                                Mehr erfahren
                                <ArrowRightIcon class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                            </span>
                        </div>
                        <CodeWindowIllo class="mx-auto h-44 w-auto shrink-0 transition-transform duration-500 group-hover:scale-105 md:h-56" />
                    </div>
                </router-link>

                <!-- PC Hilfe -->
                <router-link to="/pc-hilfe" v-reveal="{ delay: 100 }" v-spot class="wa-card group flex flex-col p-8">
                    <div class="mb-5 flex items-start justify-between">
                        <p class="text-sm font-medium uppercase tracking-widest text-neutral-400">Vor Ort Service</p>
                        <ToolboxIllo class="h-16 w-auto transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
                    </div>
                    <h3 class="wa-num mb-3 text-2xl">PC Hilfe bei dir zu Hause</h3>
                    <p class="mb-6 text-neutral-400">Hilfe bei PC, Smartphone und Technikproblemen - direkt bei dir vor Ort.</p>
                    <span class="mt-auto inline-flex items-center gap-2 font-medium text-neutral-200 group-hover:text-brand">
                        Hilfe anfragen
                        <ArrowRightIcon class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                </router-link>

                <!-- Gaming PC -->
                <router-link to="/pc-builds" v-reveal="{ delay: 200 }" v-spot class="wa-card group flex flex-col p-8">
                    <div class="mb-5 flex items-start justify-between">
                        <p class="text-sm font-medium uppercase tracking-widest text-neutral-400">Gaming Setup</p>
                        <GamingTowerIllo class="h-16 w-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" />
                    </div>
                    <h3 class="wa-num mb-3 text-2xl">Gaming PC Builds</h3>
                    <p class="mb-6 text-neutral-400">
                        Individuelle Gaming PCs ohne Bottlenecks - perfekt abgestimmt auf dein Budget und deine Games.
                    </p>
                    <span class="mt-auto inline-flex items-center gap-2 font-medium text-neutral-200 group-hover:text-brand">
                        Setup anfragen
                        <ArrowRightIcon class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </span>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import CodeWindowIllo from '@/components/illustrations/CodeWindowIllo.vue'
import ToolboxIllo from '@/components/illustrations/ToolboxIllo.vue'
import GamingTowerIllo from '@/components/illustrations/GamingTowerIllo.vue'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'
</script>
