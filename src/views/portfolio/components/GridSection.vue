<template>
    <section id="projekte" class="pf-section relative isolate overflow-hidden bg-[#0a0d0d] pb-32 pt-24 text-white">

        <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div class="pf-cols2 absolute inset-0"></div>
            <div class="absolute -right-40 top-1/4 h-[520px] w-[520px] rounded-full bg-brand/12 blur-[150px]"></div>
        </div>

        <div class="mx-auto max-w-7xl px-6 lg:px-12">

            <div v-reveal class="mb-20 flex flex-col justify-between gap-6 md:flex-row md:items-end">
                <div>
                    <p class="pf-mono mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand">
                        <span class="h-px w-10 bg-brand"></span> Ausgewählte Arbeiten
                    </p>
                    <h2 class="pf-h2">Projekte, die <em>laufen.</em></h2>
                </div>
                <p class="max-w-sm text-neutral-400">
                    Fahre mit der Maus über ein Fenster - die komplette Seite scrollt von allein durch.
                </p>
            </div>

            <div class="space-y-28">
                <article v-for="(p, i) in projects" :key="p.name" v-reveal
                    class="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">

                    <!-- Browser-Fenster -->
                    <div class="lg:col-span-7" :class="i % 2 ? 'lg:order-2' : ''">
                        <button type="button" class="pf-device group" :aria-label="`${p.name} Vorschau öffnen`"
                            @click="open(p)">
                            <div class="pf-bar">
                                <i></i><i></i><i></i>
                                <span>{{ p.url.replace('https://', '') }}</span>
                            </div>

                            <div class="pf-viewport">
                                <img :src="p.image" :alt="`Screenshot ${p.name}`" loading="lazy"
                                    class="pf-shot" />
                                <span class="pf-hint">
                                    <ArrowsPointingOutIcon class="h-5 w-5" /> Vorschau öffnen
                                </span>
                            </div>
                        </button>
                    </div>

                    <!-- Info -->
                    <div class="lg:col-span-5" :class="i % 2 ? 'lg:order-1' : ''">
                        <div class="mb-6 flex items-center gap-4">
                            <span class="pf-no">0{{ i + 1 }}</span>
                            <span class="h-px flex-1 bg-white/15"></span>
                        </div>

                        <img :src="p.logo" :alt="`Logo ${p.name}`" class="mb-6 h-20 w-auto max-w-[260px] object-contain object-left md:h-24" />

                        <h3 class="pf-h3 mb-3">{{ p.name }}</h3>
                        <p class="pf-mono mb-5 text-xs uppercase tracking-[0.2em] text-brand">{{ p.role }}</p>

                        <p class="mb-7 text-lg leading-relaxed text-neutral-300">{{ p.long }}</p>

                        <ul class="mb-7 flex flex-wrap items-center gap-2.5">
                            <li v-for="t in p.tech" :key="t.label" class="pf-tech">
                                <img :src="t.icon" alt="" class="h-4 w-4" /> {{ t.label }}
                            </li>
                        </ul>

                        <blockquote v-if="p.quote" class="pf-quote mb-8">
                            <p class="italic text-neutral-200">„{{ p.quote.text }}“</p>
                            <footer class="mt-2 text-sm text-neutral-400">{{ p.quote.author }}</footer>
                        </blockquote>

                        <div class="flex flex-wrap gap-3">
                            <a :href="p.url" target="_blank" rel="noopener" class="pf-link pf-link-main">
                                Live ansehen <ArrowUpRightIcon class="h-4 w-4" />
                            </a>
                            <button type="button" class="pf-link pf-link-ghost" @click="open(p)">
                                Vorschau
                            </button>
                        </div>
                    </div>
                </article>
            </div>
        </div>

        <!-- Vollbild-Vorschau: die ganze Seite zum Durchscrollen -->
        <Transition name="pf-modal">
            <div v-if="active" class="pf-modal" role="dialog" aria-modal="true" :aria-label="`${active.name} Vorschau`"
                @click.self="close">
                <div class="pf-modal-box">
                    <div class="pf-bar pf-bar-lg">
                        <i></i><i></i><i></i>
                        <span>{{ active.url.replace('https://', '') }}</span>
                        <a :href="active.url" target="_blank" rel="noopener" class="pf-modal-live">
                            Live <ArrowUpRightIcon class="h-4 w-4" />
                        </a>
                        <button type="button" class="pf-modal-close" aria-label="Schließen" @click="close">
                            <XMarkIcon class="h-5 w-5" />
                        </button>
                    </div>
                    <div class="pf-modal-scroll">
                        <img :src="active.image" :alt="`Screenshot ${active.name}`" class="block w-full" />
                    </div>
                </div>
            </div>
        </Transition>
    </section>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import { ArrowsPointingOutIcon, ArrowUpRightIcon, XMarkIcon } from '@heroicons/vue/24/outline'

import PetrilogLogo from '@/assets/petrilog-logo.png'
import PetrilogShowCase from '@/assets/petrilog-showcase1.webp'

import FCGLogo from '@/assets/fcg-logo.png'
import FCGShowCase from '@/assets/fcg-showcase.webp'

import GilgenreinerLogo from '@/assets/gilgenreiner-logo.png'
import GilgenreinerShowCase from '@/assets/gilgenreiner-showcase.webp'

import VueLogo from '@/assets/vue-logo.svg'
import LaravelLogo from '@/assets/laravel-logo.svg'
import '@fontsource-variable/bricolage-grotesque'

const vue = { label: 'Vue.js', icon: VueLogo }
const laravel = { label: 'Laravel', icon: LaravelLogo }

const projects = [
    {
        name: 'Dronenservice',
        role: 'Landingpage Entwicklung',
        long: 'Performance-optimierte Landingpage zur Präsentation eines Drohnenservices mit Fokus auf Klarheit und Conversion.',
        image: GilgenreinerShowCase,
        logo: GilgenreinerLogo,
        url: 'https://gilgenreiner.at',
        tech: [vue]
    },
    {
        name: 'FCG Villach',
        role: 'Webentwicklung & Umsetzung',
        long: 'Moderne Landingpage mit eigenem Content-System zur Verwaltung und Darstellung von Neuigkeiten und Predigten inklusive Audio.',
        image: FCGShowCase,
        logo: FCGLogo,
        url: 'https://fcg-villach.at',
        tech: [vue, laravel],
        quote: {
            text: 'Die Homepage wurde modern und benutzerfreundlich umgesetzt - klar strukturiert und ansprechend.',
            author: 'Markus Kirisits, WebAdmin'
        }
    },
    {
        name: 'Petrilog',
        role: 'Founder & Creator',
        long: 'Petrilog ist eine WebApp für Angler, mit der sie ihre Fänge inklusive GPS-Daten dokumentieren und mit anderen teilen können.',
        image: PetrilogShowCase,
        logo: PetrilogLogo,
        url: 'https://petrilog.com',
        tech: [vue, laravel]
    }
]

const active = ref(null)

const open = (p) => (active.value = p)
const close = () => (active.value = null)

const onKey = (e) => {
    if (e.key === 'Escape') close()
}

// Hintergrund nicht mitscrollen, solange die Vorschau offen ist
watch(active, (v) => {
    document.body.style.overflow = v ? 'hidden' : ''
})

onMounted(() => window.addEventListener('keydown', onKey))

onUnmounted(() => {
    window.removeEventListener('keydown', onKey)
    document.body.style.overflow = ''
})
</script>

<style scoped>
.pf-mono {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}

.pf-cols2 {
    background-image: linear-gradient(to right, rgb(255 255 255 / 0.04) 1px, transparent 1px);
    background-size: 25% 100%;
    mask-image: linear-gradient(to bottom, transparent, #000 15%, #000 85%, transparent);
    -webkit-mask-image: linear-gradient(to bottom, transparent, #000 15%, #000 85%, transparent);
}

.pf-h2 {
    font-family: 'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif;
    font-size: clamp(2.2rem, 5vw, 4rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.04em;
}

.pf-h2 em {
    font-style: normal;
    color: var(--color-brand);
}

.pf-h3 {
    font-family: 'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif;
    font-size: clamp(1.8rem, 3.2vw, 2.6rem);
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -0.03em;
}

.pf-no {
    font-family: 'Bricolage Grotesque Variable', ui-sans-serif, sans-serif;
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 1;
    color: transparent;
    -webkit-text-stroke: 1.5px rgb(31 171 171 / 0.7);
}

/* ───── Browser-Fenster mit Auto-Scroll ───── */
.pf-device {
    display: block;
    width: 100%;
    overflow: hidden;
    text-align: left;
    border: 1px solid rgb(255 255 255 / 0.14);
    border-radius: 18px;
    background: #0d1111;
    box-shadow: 0 50px 80px -35px rgb(0 0 0 / 0.9), 0 0 80px -30px rgb(31 171 171 / 0.35);
    transition: transform 0.4s, border-color 0.3s;
    cursor: zoom-in;
}

.pf-device:hover {
    transform: translateY(-6px);
    border-color: rgb(31 171 171 / 0.6);
}

.pf-bar {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 0.7rem 1rem;
    background: rgb(255 255 255 / 0.06);
}

.pf-bar i {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: rgb(255 255 255 / 0.25);
}

.pf-bar span {
    flex: 1;
    margin-left: 0.6rem;
    padding: 0.15rem 0.8rem;
    font-size: 0.72rem;
    color: rgb(163 163 163);
    border-radius: 99px;
    background: rgb(0 0 0 / 0.35);
}

.pf-viewport {
    position: relative;
    overflow: hidden;
    aspect-ratio: 16 / 10;
    container-type: size;
}

.pf-shot {
    display: block;
    width: 100%;
    height: auto;
    transform: translateY(0);
    transition: transform 0.6s ease-out;
}

/* Die komplette Seite fährt hoch - Dauer abhängig von der Bildhöhe */
.pf-device:hover .pf-shot {
    transform: translateY(calc(-100% + 100cqh));
    transition: transform 9s linear;
}

.pf-hint {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 0.9rem;
    font-size: 0.78rem;
    font-weight: 600;
    color: #fff;
    border-radius: 999px;
    background: rgb(7 9 9 / 0.75);
    backdrop-filter: blur(8px);
    opacity: 0;
    transform: translateY(8px);
    transition: opacity 0.3s, transform 0.3s;
}

.pf-device:hover .pf-hint {
    opacity: 1;
    transform: none;
}

/* ───── Details ───── */
.pf-tech {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.85rem;
    font-size: 0.8rem;
    color: rgb(229 229 229);
    border: 1px solid rgb(255 255 255 / 0.14);
    border-radius: 999px;
    background: rgb(255 255 255 / 0.04);
}

.pf-quote {
    padding-left: 1.2rem;
    border-left: 2px solid var(--color-accent);
}

.pf-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.8rem 1.4rem;
    font-size: 0.9rem;
    font-weight: 600;
    border-radius: 999px;
    transition: transform 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.pf-link-main {
    color: #04201f;
    background: var(--color-brand);
}

.pf-link-main:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 34px -10px rgb(31 171 171 / 0.7);
}

.pf-link-ghost {
    border: 1px solid rgb(255 255 255 / 0.22);
}

.pf-link-ghost:hover {
    color: var(--color-brand);
    border-color: var(--color-brand);
}

/* ───── Vollbild-Vorschau ───── */
.pf-modal {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem;
    background: rgb(3 5 5 / 0.88);
    backdrop-filter: blur(12px);
}

.pf-modal-box {
    display: flex;
    flex-direction: column;
    width: min(1100px, 100%);
    height: min(90vh, 100%);
    overflow: hidden;
    border: 1px solid rgb(255 255 255 / 0.16);
    border-radius: 18px;
    background: #0d1111;
    box-shadow: 0 60px 120px -30px rgb(0 0 0 / 0.9);
}

.pf-bar-lg {
    flex-shrink: 0;
    padding: 0.8rem 1.1rem;
}

.pf-modal-scroll {
    flex: 1;
    overflow-y: auto;
    overscroll-behavior: contain;
}

.pf-modal-live,
.pf-modal-close {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    padding: 0.35rem 0.8rem;
    font-size: 0.78rem;
    font-weight: 600;
    color: var(--color-brand);
    border-radius: 99px;
    background: rgb(31 171 171 / 0.12);
    transition: background 0.2s, color 0.2s;
}

.pf-modal-close {
    padding: 0.4rem;
    margin-left: 0.2rem;
    color: #fff;
    background: rgb(255 255 255 / 0.1);
}

.pf-modal-live:hover,
.pf-modal-close:hover {
    color: #04201f;
    background: var(--color-brand);
}

.pf-modal-enter-active,
.pf-modal-leave-active {
    transition: opacity 0.25s ease;
}

.pf-modal-enter-active .pf-modal-box,
.pf-modal-leave-active .pf-modal-box {
    transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.pf-modal-enter-from,
.pf-modal-leave-to {
    opacity: 0;
}

.pf-modal-enter-from .pf-modal-box,
.pf-modal-leave-to .pf-modal-box {
    transform: translateY(24px) scale(0.97);
}

@media (hover: none) {

    /* Touch: kein Hover-Scroll, Tippen öffnet die Vorschau */
    .pf-device:hover .pf-shot {
        transform: none;
    }
}

@media (prefers-reduced-motion: reduce) {

    .pf-device:hover .pf-shot,
    .pf-shot {
        transition: none;
        transform: none;
    }
}
</style>
