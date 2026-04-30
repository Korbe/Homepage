<template>
    <section class="pt-10 pb-32 bg-neutral-900/95 text-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">

            <div class="space-y-16">

                <div v-for="project in projects" :key="project.name" class="group">

                    <!-- CARD -->
                    <div
                        class="relative border border-neutral-800 group-hover:border-brand rounded-3xl bg-neutral-800/60 overflow-hidden flex flex-col md:flex-row transition duration-300 group-hover:shadow-lg group-hover:shadow-brand/20">

                        <!-- IMAGE -->
                        <div @click="open(project)"
                            class="cursor-pointer md:w-1/2 relative overflow-hidden h-[260px] md:h-[400px]">

                            <img :src="project.image"
                                class="w-full h-full object-cover object-top transition duration-300 group-hover:scale-[1.02]" />

                            <!-- Fade unten -->
                            <div
                                class="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-neutral-900 to-transparent">
                            </div>

                            <!-- Hover Overlay -->
                            <div
                                class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center text-white text-sm">
                                Vorschau öffnen →
                            </div>

                        </div>

                        <!-- CONTENT -->
                        <div class="md:w-1/2 p-8 flex flex-col justify-between">

                            <div>

                                <!-- LOGO -->
                                <img :src="project.logo"
                                    class="h-10 mb-4 opacity-80 transition group-hover:opacity-100" />

                                <!-- TITLE -->
                                <h3 class="text-2xl md:text-3xl font-semibold mb-4">
                                    {{ project.name }}
                                </h3>

                                <!-- DESCRIPTION -->
                                <p class="text-neutral-300 mb-6 leading-relaxed">
                                    {{ project.long }}
                                </p>

                                <!-- TECH -->
                                <div class="flex items-center gap-3 mb-6">
                                    <img v-for="(tech, i) in project.tech" :key="i" :src="tech"
                                        class="h-6 opacity-80" />
                                </div>

                                <!-- QUOTE -->
                                <div v-if="project.quote"
                                    class="border-l border-neutral-700 pl-4 text-sm text-neutral-400 mb-6">
                                    <p class="italic">"{{ project.quote.text }}"</p>
                                    <p class="mt-2 text-neutral-500">
                                        {{ project.quote.author }}
                                    </p>
                                </div>

                            </div>

                            <!-- FOOTER -->
                            <div>
                                <p class="text-neutral-500 text-sm mb-2">
                                    {{ project.role }}
                                </p>

                                <a :href="project.url" target="_blank" @click.stop class="text-brand hover:underline">
                                    {{ project.url }}
                                </a>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

            <!-- LIGHTBOX -->
            <div v-if="active" class="fixed inset-0 z-50 flex items-center justify-center">

                <div class="absolute inset-0 bg-black/80 backdrop-blur cursor-zoom-out" @click="close"></div>

                <div class="relative z-10 flex justify-center items-center px-6">

                    <button class="absolute top-6 right-6 text-white text-2xl" @click="close">
                        ✕
                    </button>

                    <img :src="active.image" class="max-h-[80vh] w-auto object-contain rounded-xl" />

                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

import PetrilogLogo from '@/assets/petrilog-logo.png'
import PetrilogShowCase from '@/assets/petrilog-showcase1.png'

import FCGLogo from '@/assets/fcg-logo.png'
import FCGShowCase from '@/assets/fcg-showcase.png'

import GilgenreinerLogo from '@/assets/gilgenreiner-logo.png'
import GilgenreinerShowCase from '@/assets/gilgenreiner-showcase.png'

import VueLogo from '@/assets/vue-logo.svg'
import LaravelLogo from '@/assets/laravel-logo.svg'

const active = ref(null)

const projects = [
    {
        name: 'Dronenservice',
        role: 'Landingpage Entwicklung',
        long: 'Performance-optimierte Landingpage zur Präsentation eines Drohnenservices mit Fokus auf Klarheit und Conversion.',
        image: GilgenreinerShowCase,
        logo: GilgenreinerLogo,
        url: 'https://gilgenreiner.at',
        tech: [VueLogo]
    },
    {
        name: 'FCG Villach',
        role: 'Webentwicklung & Umsetzung',
        long: 'Moderne Landingpage mit eigenem Content-System zur Verwaltung und Darstellung von Neuigkeiten und Predigten inklusive Audio.',
        image: FCGShowCase,
        logo: FCGLogo,
        url: 'https://fcg-villach.at',
        tech: [VueLogo, LaravelLogo],
        quote: {
            text: 'Die Homepage wurde modern und benutzerfreundlich umgesetzt – klar strukturiert und ansprechend.',
            author: 'Markus Kirisits, WebAdmin'
        }
    },
    {
        name: 'Petrilog',
        role: 'Founder & Creator',
        long: 'Ich habe dieses Projekt gestartet, damit Angler ihre Fangerlebnisse sicher dokumentieren und ihre Erfolge mit anderen teilen können.',
        image: PetrilogShowCase,
        logo: PetrilogLogo,
        url: 'https://petrilog.com',
        tech: [VueLogo, LaravelLogo]
    }
]

function open(project) {
    active.value = project
}

function close() {
    active.value = null
}

function handleKey(e) {
    if (e.key === 'Escape') close()
}

onMounted(() => {
    window.addEventListener('keydown', handleKey)
})

onUnmounted(() => {
    window.removeEventListener('keydown', handleKey)
})
</script>