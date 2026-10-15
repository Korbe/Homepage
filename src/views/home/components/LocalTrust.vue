<template>
    <section class="wa-section wa-section-alt">
        <div class="wa-glow -right-40 -top-40"></div>

        <div class="wa-wrap">
            <div class="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

                <!-- Text -->
                <div v-reveal>
                    <p class="wa-pill">Vor Ort Service</p>
                    <h2 class="wa-title mb-6">
                        PC Hilfe in <span class="wa-grad">Villach &amp; Umgebung</span>
                    </h2>
                    <p class="mb-8 text-lg leading-relaxed text-neutral-400">
                        Kein Einschicken, kein Warten, kein Rätselraten -
                        ich komme direkt zu dir und löse das Problem vor Ort.
                    </p>

                    <ul class="mb-10 space-y-4 text-neutral-200">
                        <li v-for="p in points" :key="p" class="wa-check"><CheckIcon />{{ p }}</li>
                    </ul>

                    <router-link to="/pc-hilfe" class="wa-btn wa-btn-primary">
                        Hausbesuch anfragen
                        <ArrowUpRightIcon class="h-5 w-5" />
                    </router-link>
                </div>

                <!-- Einsatzgebiet als Radar -->
                <div v-reveal="{ delay: 120 }" v-spot class="wa-card p-8 sm:p-10">
                    <div class="mb-6 flex items-center justify-between">
                        <h3 class="text-lg font-semibold">Einsatzgebiet</h3>
                        <span class="inline-flex items-center gap-2 text-xs text-neutral-400">
                            <span class="h-2 w-2 animate-pulse rounded-full bg-green-400"></span> aktiv
                        </span>
                    </div>

                    <div class="radar mx-auto" aria-hidden="true">
                        <span class="ring r3"></span>
                        <span class="ring r2"></span>
                        <span class="ring r1"></span>
                        <span class="sweep"></span>
                        <span class="pin">
                            <span class="pin-ping"></span>
                            <MapPinIcon class="relative h-7 w-7" />
                        </span>
                        <span class="tag t1">Villach Stadt</span>
                        <span class="tag t2">Villach Land</span>
                        <span class="tag t3">Umgebung auf Anfrage</span>
                    </div>

                    <p class="mt-8 border-t border-white/10 pt-6 text-sm text-neutral-400">
                        Ich bin hauptsächlich in Villach und Umgebung unterwegs. Außerhalb von Villach Land
                        20€ Anfahrtspauschale.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowUpRightIcon, CheckIcon, MapPinIcon } from '@heroicons/vue/24/outline'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'

const points = [
    'Schnelle Termine - oft am selben oder nächsten Tag',
    'Direkt bei dir zu Hause - kein Abbau nötig',
    'Verständliche Hilfe ohne Fachchinesisch',
    'Persönlicher Ansprechpartner statt Hotline'
]
</script>

<style scoped>
.radar {
    position: relative;
    width: 100%;
    max-width: 340px;
    aspect-ratio: 1;
}

.ring {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px dashed rgb(31 171 171 / 0.4);
    border-radius: 50%;
    transform: translate(-50%, -50%);
}

.r1 {
    width: 34%;
    height: 34%;
    background: rgb(31 171 171 / 0.12);
    border-style: solid;
}

.r2 {
    width: 66%;
    height: 66%;
}

.r3 {
    width: 98%;
    height: 98%;
    border-color: rgb(255 255 255 / 0.15);
}

.sweep {
    position: absolute;
    inset: 1%;
    border-radius: 50%;
    background: conic-gradient(from 0deg, rgb(31 171 171 / 0.35), transparent 28%);
    animation: spin 5s linear infinite;
}

.pin {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.2rem;
    height: 3.2rem;
    transform: translate(-50%, -50%);
    color: #04201f;
    background: var(--color-brand);
    border-radius: 50%;
    box-shadow: 0 0 30px rgb(31 171 171 / 0.7);
}

.pin-ping {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: var(--color-brand);
    animation: ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
}

.tag {
    position: absolute;
    padding: 0.3rem 0.7rem;
    font-size: 0.72rem;
    font-weight: 500;
    white-space: nowrap;
    color: #fff;
    border: 1px solid rgb(255 255 255 / 0.15);
    border-radius: 999px;
    background: rgb(10 13 13 / 0.85);
    backdrop-filter: blur(6px);
}

.t1 {
    top: 33%;
    left: 56%;
}

.t2 {
    top: 14%;
    left: 8%;
}

.t3 {
    bottom: 3%;
    right: 2%;
    color: rgb(163 163 163);
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes ping {
    75%,
    100% {
        transform: scale(1.9);
        opacity: 0;
    }
}

@media (prefers-reduced-motion: reduce) {
    .sweep,
    .pin-ping {
        animation: none;
    }
}
</style>
