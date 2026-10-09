<template>
    <section ref="root" class="pf relative isolate flex min-h-svh flex-col overflow-hidden bg-[#070909] text-white">

        <!-- Hintergrund: Galerie-Raster -->
        <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div class="pf-cols absolute inset-0"></div>
            <div class="absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-brand/20 blur-[150px]"></div>
            <div class="absolute -right-32 -top-20 h-[440px] w-[440px] rounded-full bg-accent/12 blur-[150px]"></div>
            <div class="pf-grain absolute inset-0"></div>
        </div>

        <div
            class="relative z-10 mx-auto grid w-full max-w-7xl flex-1 grid-cols-1 items-center gap-14 px-6 pb-14 pt-32 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pt-36">

            <!-- Text -->
            <div class="min-w-0 lg:col-span-7">
                <p class="pf-in pf-mono mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand"
                    style="--d: 80ms">
                    <span class="h-px w-10 bg-brand"></span> Portfolio · Ausgewählte Projekte
                </p>

                <h1 class="pf-title">
                    <span class="pf-in block" style="--d: 160ms">Echte</span>
                    <span class="pf-in block" style="--d: 260ms">Anwendungen.</span>
                    <span class="pf-in block" style="--d: 360ms">
                        <span class="mr-[0.22em] text-neutral-500">Keine</span>
                        <span class="pf-strike">Templates.</span>
                    </span>
                </h1>

                <p class="pf-in mt-8 max-w-lg text-lg leading-relaxed text-neutral-400" style="--d: 520ms">
                    Webanwendungen, Plattformen und Systeme, die im Alltag genutzt werden -
                    entwickelt für Performance, Skalierung und reale Anforderungen.
                </p>

                <ul class="pf-in mt-7 flex flex-wrap gap-3" style="--d: 620ms">
                    <li v-for="c in chips" :key="c" class="pf-chip">{{ c }}</li>
                </ul>

                <div class="pf-in mt-10 flex flex-wrap items-center gap-4" style="--d: 740ms">
                    <a href="#projekte" class="pf-btn pf-btn-main">
                        Projekte ansehen
                        <ArrowDownIcon class="h-5 w-5" />
                    </a>
                    <router-link to="/contact" class="pf-btn pf-btn-ghost">Projekt anfragen</router-link>
                </div>
            </div>

            <!-- Galerie-Fächer -->
            <div class="relative lg:col-span-5" aria-hidden="true">
                <div class="pf-scene relative ml-auto w-full max-w-[480px] lg:translate-x-2">
                    <div v-for="(f, i) in frames" :key="f.url" class="pf-par absolute" :class="f.pos"
                        :style="{ '--k': f.k }">
                        <div class="pf-in" :style="{ '--d': 400 + i * 150 + 'ms' }">
                            <div :class="f.float">
                                <div class="pf-frame" :style="{ transform: `rotate(${f.r}deg)` }">
                                    <div class="pf-bar">
                                        <i></i><i></i><i></i>
                                        <span>{{ f.url }}</span>
                                    </div>
                                    <img :src="f.img" :alt="''" width="800" height="500" loading="eager"
                                        class="aspect-[16/10] w-full object-cover object-top" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Laufband -->
        <div class="relative z-10 border-t border-white/10 bg-[#070909]/70 backdrop-blur" aria-hidden="true">
            <div class="pf-marquee py-4">
                <div class="pf-marquee-track">
                    <template v-for="n in 2" :key="n">
                        <span v-for="m in marquee" :key="n + m" class="pf-marquee-item">{{ m }}</span>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { ArrowDownIcon } from '@heroicons/vue/24/outline'
import fcg from '@/assets/fcg-showcase.webp'
import petrilog from '@/assets/petrilog-showcase1.webp'
import gilgenreiner from '@/assets/gilgenreiner-showcase.webp'
import '@fontsource-variable/bricolage-grotesque'

const chips = ['Vue & Laravel', 'Individuelle Entwicklung', 'Keine Baukästen']

const frames = [
    { url: 'fcg-villach.at', img: fcg, pos: 'left-0 top-[4%] w-[62%]', r: -7, k: 1.2, float: 'animate-float-soft-slow' },
    { url: 'petrilog.com', img: petrilog, pos: 'right-0 top-[10%] w-[60%]', r: 8, k: 1.8, float: 'animate-float-soft' },
    { url: 'gilgenreiner.at', img: gilgenreiner, pos: 'left-[14%] top-[42%] w-[72%] z-10', r: -2, k: 0.7, float: 'animate-float-soft-slow' }
]

const marquee = [
    'Webanwendungen',
    'SaaS-Plattformen',
    'Landingpages',
    'CMS-Systeme',
    'Vue.js',
    'Laravel',
    'Inertia.js',
    'Server-Side Rendering'
]

const root = ref(null)
let cleanup = () => { }

// leichte Parallaxe der Fenster
onMounted(() => {
    const el = root.value
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onMove = (e) => {
        const r = el.getBoundingClientRect()
        el.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5).toFixed(3))
        el.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5).toFixed(3))
    }
    el.addEventListener('pointermove', onMove, { passive: true })
    cleanup = () => el.removeEventListener('pointermove', onMove)
})

onBeforeUnmount(() => cleanup())
</script>

<style scoped>
.pf {
    --px: 0;
    --py: 0;
}

.pf-mono {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}

.pf-cols {
    background-image: linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px);
    background-size: 25% 100%;
    mask-image: linear-gradient(to bottom, #000, transparent 90%);
    -webkit-mask-image: linear-gradient(to bottom, #000, transparent 90%);
}

.pf-grain {
    opacity: 0.07;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}

/* ───── Headline ───── */
.pf-title {
    font-family: 'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif;
    font-size: clamp(2.3rem, min(5.6vw, 10vh), 5.4rem);
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.04em;
}

.pf-strike {
    position: relative;
    display: inline-block;
    color: transparent;
    -webkit-text-stroke: 1.5px rgb(255 255 255 / 0.75);
}

.pf-strike::after {
    content: '';
    position: absolute;
    left: -2%;
    right: -2%;
    top: 55%;
    height: 0.09em;
    background: var(--color-accent);
    transform: scaleX(0);
    transform-origin: left;
    animation: strike 0.6s 1.3s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

.pf-chip {
    padding: 0.45rem 0.95rem;
    font-size: 0.82rem;
    color: rgb(212 212 212);
    border: 1px solid rgb(255 255 255 / 0.14);
    border-radius: 999px;
    background: rgb(255 255 255 / 0.04);
}

/* ───── Buttons ───── */
.pf-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 1rem 1.7rem;
    font-weight: 600;
    border-radius: 999px;
    transition: transform 0.2s, box-shadow 0.2s, color 0.2s, border-color 0.2s;
}

.pf-btn-main {
    color: #04201f;
    background: var(--color-brand);
}

.pf-btn-main:hover {
    transform: translateY(-2px);
    box-shadow: 0 14px 40px -10px rgb(31 171 171 / 0.7);
}

.pf-btn-main:hover svg {
    animation: nudge 0.6s ease-in-out infinite;
}

.pf-btn-ghost {
    border: 1px solid rgb(255 255 255 / 0.22);
}

.pf-btn-ghost:hover {
    color: var(--color-brand);
    border-color: var(--color-brand);
}

/* ───── Galerie ───── */
.pf-scene {
    aspect-ratio: 1 / 1;
}

.pf-par {
    transform: translate3d(calc(var(--px) * var(--k, 1) * -26px), calc(var(--py) * var(--k, 1) * -18px), 0);
    transition: transform 0.2s ease-out;
}

.pf-frame {
    overflow: hidden;
    border: 1px solid rgb(255 255 255 / 0.14);
    border-radius: 14px;
    background: #0d1111;
    box-shadow: 0 40px 70px -25px rgb(0 0 0 / 0.85), 0 0 60px -20px rgb(31 171 171 / 0.35);
}

.pf-bar {
    display: flex;
    align-items: center;
    gap: 5px;
    padding: 0.5rem 0.75rem;
    background: rgb(255 255 255 / 0.06);
}

.pf-bar i {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgb(255 255 255 / 0.25);
}

.pf-bar span {
    flex: 1;
    margin-left: 0.5rem;
    padding: 0.1rem 0.6rem;
    font-size: 0.62rem;
    color: rgb(163 163 163);
    border-radius: 99px;
    background: rgb(0 0 0 / 0.35);
}

/* ───── Laufband ───── */
.pf-marquee {
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}

.pf-marquee-track {
    display: flex;
    width: max-content;
    animation: marquee 36s linear infinite;
}

.pf-marquee-item {
    display: inline-flex;
    align-items: center;
    gap: 2rem;
    padding-right: 2rem;
    font-family: 'Bricolage Grotesque Variable', ui-sans-serif, sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: rgb(212 212 212 / 0.75);
    white-space: nowrap;
}

.pf-marquee-item::after {
    content: '✦';
    color: var(--color-brand);
}

/* ───── Auftritt ───── */
.pf-in {
    opacity: 0;
    animation: rise 0.9s var(--d, 0ms) cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes rise {
    from {
        opacity: 0;
        transform: translateY(30px);
    }

    to {
        opacity: 1;
        transform: none;
    }
}

@keyframes strike {
    to {
        transform: scaleX(1);
    }
}

@keyframes marquee {
    to {
        transform: translateX(-50%);
    }
}

@keyframes nudge {

    0%,
    100% {
        transform: translateY(0);
    }

    50% {
        transform: translateY(3px);
    }
}

@media (max-width: 1023px) {
    .pf-scene {
        aspect-ratio: 1 / 0.95;
        max-width: 420px;
    }
}

@media (prefers-reduced-motion: reduce) {

    .pf-in,
    .pf-strike::after,
    .pf-marquee-track {
        animation: none;
    }

    .pf-in {
        opacity: 1;
    }

    .pf-strike::after {
        transform: scaleX(1);
    }
}
</style>
