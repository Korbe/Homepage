<template>
    <section class="wa-section">
        <div class="wa-glow -right-40 top-0"></div>

        <div class="wa-wrap">

            <div v-reveal class="wa-head">
                <p class="wa-pill">Referenzen</p>
                <h2 class="wa-title">
                    Projekte, die echte <span class="wa-grad">Probleme</span> lösen
                </h2>
                <p class="wa-lead">
                    Von SaaS-Plattformen bis individuellen Web-Systemen - jedes Projekt ist maßgeschneidert.
                </p>
            </div>

            <div class="grid gap-6 md:grid-cols-3">
                <router-link v-for="(p, i) in projects" :key="p.name" to="/portfolio" v-reveal="{ delay: i * 100 }"
                    v-spot class="wa-card group flex flex-col p-5">

                    <!-- Mini-Browser -->
                    <div class="wa-mock mb-6" :style="{ '--a': p.a, '--b': p.b }" aria-hidden="true">
                        <div class="wa-mock-bar"><i></i><i></i><i></i><span></span></div>
                        <div class="wa-mock-body">
                            <span class="wa-mock-title"></span>
                            <span class="wa-mock-line"></span>
                            <span class="wa-mock-line short"></span>
                            <span class="wa-mock-btn"></span>
                        </div>
                    </div>

                    <div class="flex flex-1 flex-col px-3 pb-3">
                        <p class="mb-2 text-xs font-medium uppercase tracking-widest text-brand">{{ p.type }}</p>
                        <h3 class="mb-3 text-xl font-semibold leading-snug">{{ p.name }}</h3>
                        <p class="mb-5 text-sm leading-relaxed text-neutral-400">{{ p.text }}</p>

                        <ul class="mb-6 flex flex-wrap gap-2">
                            <li v-for="t in p.tags" :key="t"
                                class="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-300">
                                {{ t }}
                            </li>
                        </ul>

                        <span class="mt-auto inline-flex items-center gap-2 text-sm font-medium text-brand">
                            {{ p.cta }}
                            <ArrowRightIcon class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'

const projects = [
    {
        type: 'SaaS / Web Application',
        name: 'Petrilog - Fischertagebuch Plattform',
        text: 'Vollwertige Web-App für Fischer zur Dokumentation von Fängen inkl. GPS, Datenmanagement und Benutzerverwaltung.',
        tags: ['Vue.js', 'Inertia.js', 'Laravel', 'SSR'],
        cta: 'SaaS System Entwicklung',
        a: '#1fabab',
        b: '#0b3d3d'
    },
    {
        type: 'Content / CMS System',
        name: 'FCG Villach - WebApp',
        text: 'Unternehmensseite mit dynamischem Content-System für Neuigkeiten und Predigten mit Audio-Upload sowie automatischer Darstellung auf der Startseite.',
        tags: ['Vue.js', 'Inertia.js', 'Laravel', 'Eigenes CMS'],
        cta: 'CMS & Content Systeme',
        a: '#f5a524',
        b: '#4a2f06'
    },
    {
        type: 'Landingpage',
        name: 'Dronenservice Gilgenreiner - Landingpage',
        text: 'Moderne, performante Landingpage zur Präsentation eines Drohnenservice-Unternehmens mit Fokus auf Conversion und Geschwindigkeit.',
        tags: ['Vue.js', 'Performance', 'Conversion'],
        cta: 'Marketing Landingpage',
        a: '#7ff3e3',
        b: '#0d3a45'
    }
]
</script>

<style scoped>
.wa-mock {
    overflow: hidden;
    aspect-ratio: 16 / 10;
    border: 1px solid rgb(255 255 255 / 0.1);
    border-radius: 16px;
    background: linear-gradient(145deg, var(--b), #0a0d0d);
    transition: transform 0.4s;
}

.wa-card:hover .wa-mock {
    transform: scale(1.02);
}

.wa-mock-bar {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0.55rem 0.8rem;
    background: rgb(0 0 0 / 0.3);
}

.wa-mock-bar i {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgb(255 255 255 / 0.25);
}

.wa-mock-bar span {
    flex: 1;
    height: 8px;
    margin-left: 0.5rem;
    border-radius: 99px;
    background: rgb(255 255 255 / 0.08);
}

.wa-mock-body {
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    padding: 1.2rem 1.1rem;
}

.wa-mock-title {
    width: 70%;
    height: 14px;
    border-radius: 99px;
    background: linear-gradient(90deg, #fff, var(--a));
}

.wa-mock-line {
    width: 90%;
    height: 7px;
    border-radius: 99px;
    background: rgb(255 255 255 / 0.18);
}

.wa-mock-line.short {
    width: 60%;
}

.wa-mock-btn {
    width: 5.5rem;
    height: 22px;
    margin-top: 0.4rem;
    border-radius: 99px;
    background: var(--a);
}
</style>
