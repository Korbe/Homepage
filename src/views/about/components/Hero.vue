<template>
    <section ref="root"
        class="ab relative isolate flex min-h-svh flex-col overflow-hidden bg-[#0d0f0f] text-white">

        <!-- ───────── Hintergrund ───────── -->
        <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div class="absolute -bottom-48 -left-40 h-[560px] w-[560px] rounded-full bg-brand/20 blur-[150px]"></div>
            <div class="absolute -right-40 -top-32 h-[520px] w-[520px] rounded-full bg-accent/15 blur-[150px]"></div>
            <svg class="ab-ring absolute right-[6%] top-1/2 hidden h-[760px] w-[760px] -translate-y-1/2 lg:block"
                viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="98" stroke="rgb(255 255 255 / 0.14)" stroke-width="0.6"
                    stroke-dasharray="1.5 4" />
                <circle cx="100" cy="100" r="80" stroke="rgb(31 171 171 / 0.35)" stroke-width="0.6"
                    stroke-dasharray="6 5" />
            </svg>
            <div class="ab-grain absolute inset-0"></div>
        </div>

        <!-- ───────── Inhalt ───────── -->
        <div
            class="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-14 px-6 pb-16 pt-32 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pt-36">

            <!-- Text -->
            <div class="lg:col-span-7">

                <p class="ab-in mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-brand"
                    style="--d: 80ms">
                    <span class="h-px w-10 bg-brand"></span>
                    Über mich · Villach
                </p>

                <h1 class="ab-title">
                    <span class="ab-in block" style="--d: 180ms">Technik ist</span>
                    <span class="ab-in block" style="--d: 280ms">mein <em class="ab-em-brand">Alltag</em></span>
                    <span class="ab-in block" style="--d: 380ms">
                        und mein
                        <em class="ab-em-accent">Werkzeug
                            <svg class="ab-scribble" viewBox="0 0 200 14" preserveAspectRatio="none">
                                <path d="M2 9 C 40 2, 70 13, 105 6 S 170 3, 198 8" pathLength="1" />
                            </svg>
                        </em>
                    </span>
                </h1>

                <p class="ab-in mt-9 max-w-xl text-lg leading-relaxed text-neutral-300" style="--d: 560ms">
                    Hey, ich heiße Ing. Lukas Korbitsch. Ich entwickle High-Performance Webanwendungen
                    und helfe direkt vor Ort bei technischen Problemen - klar, verständlich und ohne
                    Fachchinesisch.
                </p>

                <div class="ab-in mt-9 flex flex-wrap items-center gap-4" style="--d: 680ms">
                    <router-link to="/contact"
                        class="group inline-flex items-center gap-3 rounded-full bg-brand px-7 py-4 font-semibold text-black transition hover:scale-[1.03]">
                        Kontakt aufnehmen
                        <ArrowUpRightIcon
                            class="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </router-link>
                    <router-link to="/portfolio"
                        class="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 font-medium text-neutral-100 transition hover:border-brand hover:text-brand">
                        Projekte ansehen
                    </router-link>
                </div>

                <p class="ab-in mt-8 text-sm text-neutral-400" style="--d: 800ms">
                    Webentwicklung & IT-Hilfe - zwei Seiten derselben Sache: Probleme lösen.
                </p>
            </div>

            <!-- Foto-Collage -->
            <div class="relative lg:col-span-5">
                <div class="ab-scene relative mx-auto w-full">

                    <!-- Handschrift + Pfeil -->
                    <div class="ab-par absolute -top-10 right-0 z-30 hidden sm:block" style="--k: 1.6">
                        <div class="ab-pop" style="--d: 1500ms">
                            <p class="ab-hand text-3xl text-brand" style="transform: rotate(7deg)">das bin ich!</p>
                            <svg class="ab-arrow -ml-6 h-14 w-20" viewBox="0 0 80 56" fill="none" stroke="var(--color-brand)"
                                stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M70 4 C 62 30, 40 44, 12 46" pathLength="1" />
                                <path d="M24 36 L10 46 L26 54" pathLength="1" />
                            </svg>
                        </div>
                    </div>

                    <!-- Polaroid -->
                    <div class="ab-par relative" style="--k: 0.6">
                        <div class="ab-in" style="--d: 400ms">
                            <div class="ab-card">
                                <div class="ab-card-back"></div>
                                <figure class="ab-polaroid">
                                    <span class="ab-tape"></span>
                                    <div class="overflow-hidden bg-[#e9e4d8]">
                                        <img :src="me" alt="Lukas Korbitsch" width="800" height="800"
                                            class="aspect-[4/5] w-full object-cover object-[50%_28%]" />
                                    </div>
                                    <figcaption class="ab-hand">
                                        <span class="text-2xl leading-none">Lukas Korbitsch</span>
                                        <span class="block text-base text-neutral-500">Villach, Kärnten</span>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>

                    <!-- Klebezettel -->
                    <div v-for="note in notes" :key="note.text" class="ab-par absolute z-20"
                        :class="note.pos" :style="{ '--k': note.k }" aria-hidden="true">
                        <div class="ab-pop" :style="{ '--d': note.d }">
                            <div :class="note.float">
                                <div class="ab-note ab-hand" :class="note.tone" :style="{ transform: `rotate(${note.r}deg)` }">
                                    <span class="ab-pin"></span>
                                    {{ note.text }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Scroll-Hinweis -->
        <div class="relative z-10 flex justify-center pb-6" aria-hidden="true">
            <span class="flex flex-col items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                Scroll
                <span class="ab-line"></span>
            </span>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'
import me from '@/assets/me.jpg'
import '@fontsource-variable/fraunces/wght.css'
import '@fontsource-variable/fraunces/wght-italic.css'
import '@fontsource/caveat/700.css'

const notes = [
    { text: 'HTL Villach', pos: 'left-[-22px] top-[0%] lg:left-[-62px] lg:top-[10%]', r: -7, k: 1.4, d: '1000ms', tone: 'ab-note-cream', float: 'animate-float-soft-slow' },
    { text: 'SoftwareCUBE / Infineon', pos: 'right-[-22px] top-[0%] lg:right-[-62px] lg:top-[28%]', r: 5, k: 2, d: '1150ms', tone: 'ab-note-teal', float: 'animate-float-soft' },
    { text: 'Petrilog Founder', pos: 'left-[-18px] bottom-[18%] lg:left-[-62px] lg:bottom-[24%]', r: 6, k: 1.8, d: '1300ms', tone: 'ab-note-amber', float: 'animate-float-soft' },
    { text: 'Feuerwehr Völkendorf', pos: 'right-[-14px] bottom-[2%] lg:right-[-58px] lg:bottom-[8%]', r: -5, k: 1.2, d: '1450ms', tone: 'ab-note-cream', float: 'animate-float-soft-slow' }
]

const root = ref(null)
let cleanup = () => { }

// leichte Parallaxe: Foto und Zettel bewegen sich mit der Maus
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
.ab {
    --px: 0;
    --py: 0;
}

.ab-hand {
    font-family: 'Caveat', 'Segoe Script', cursive;
    font-weight: 700;
}

.ab-grain {
    opacity: 0.08;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}

.ab-ring {
    animation: turn 120s linear infinite;
}

/* ───── Headline ───── */
.ab-title {
    font-family: 'Fraunces Variable', Georgia, 'Times New Roman', serif;
    font-size: clamp(2.6rem, min(5.4vw, 10.5vh), 4.9rem);
    font-weight: 600;
    line-height: 1.04;
    letter-spacing: -0.02em;
}

.ab-title em {
    position: relative;
    display: inline-block;
    font-style: italic;
    font-weight: 500;
}

.ab-em-brand {
    color: var(--color-brand);
}

.ab-em-accent {
    color: var(--color-accent);
}

.ab-scribble {
    position: absolute;
    left: 0;
    bottom: -0.08em;
    width: 100%;
    height: 0.18em;
    overflow: visible;
}

.ab-scribble path {
    fill: none;
    stroke: var(--color-accent);
    stroke-width: 4;
    stroke-linecap: round;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    vector-effect: non-scaling-stroke;
    animation: draw 0.9s 1.2s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

/* ───── Collage ───── */
.ab-par {
    transform: translate3d(calc(var(--px) * var(--k, 1) * -26px), calc(var(--py) * var(--k, 1) * -20px), 0);
    transition: transform 0.2s ease-out;
}

/* Platz lassen, damit die hängenden Zettel nicht am Rand abgeschnitten werden */
.ab-scene {
    max-width: min(400px, calc(100% - 110px));
}

.ab-card {
    position: relative;
}

.ab-card-back {
    position: absolute;
    inset: 0;
    border-radius: 18px;
    background: linear-gradient(145deg, var(--color-accent), #d98a0f);
    transform: translate(22px, 20px) rotate(5deg);
    box-shadow: 0 30px 60px -20px rgb(0 0 0 / 0.7);
}

.ab-polaroid {
    position: relative;
    margin: 0;
    padding: 14px 14px 70px;
    background: #f7f3ea;
    color: #1a1a1a;
    border-radius: 6px;
    transform: rotate(-3deg);
    transition: transform 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 30px 60px -18px rgb(0 0 0 / 0.75), 0 0 0 1px rgb(0 0 0 / 0.05);
}

.ab-card:hover .ab-polaroid {
    transform: rotate(-0.5deg) translateY(-6px);
}

.ab-polaroid figcaption {
    position: absolute;
    left: 20px;
    right: 20px;
    bottom: 12px;
    transform: rotate(-1.5deg);
}

.ab-tape {
    position: absolute;
    z-index: 5;
    top: -16px;
    left: 50%;
    width: 110px;
    height: 32px;
    margin-left: -55px;
    transform: rotate(-4deg);
    background: rgb(245 165 36 / 0.65);
    backdrop-filter: blur(2px);
    box-shadow: 0 2px 6px rgb(0 0 0 / 0.25);
    clip-path: polygon(0 8%, 4% 0, 8% 10%, 12% 0, 92% 0, 96% 10%, 100% 0, 100% 92%, 96% 100%, 92% 90%, 88% 100%, 8% 100%, 4% 90%, 0 100%);
}

.ab-note {
    position: relative;
    max-width: 138px;
    padding: 1rem 1rem 0.8rem;
    font-size: 1.35rem;
    line-height: 1.05;
    color: #1a1a1a;
    border-radius: 3px;
    box-shadow: 0 14px 24px -10px rgb(0 0 0 / 0.65);
}

.ab-note-cream {
    background: #f4ecd2;
}

.ab-note-teal {
    background: #b8efe8;
}

.ab-note-amber {
    background: #ffd27d;
}

.ab-pin {
    position: absolute;
    top: -7px;
    left: 50%;
    width: 14px;
    height: 14px;
    margin-left: -7px;
    border-radius: 50%;
    background: radial-gradient(circle at 35% 30%, #5ee6e0, #0f7d7d);
    box-shadow: 0 3px 4px rgb(0 0 0 / 0.4);
}

.ab-arrow path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: draw 0.8s 1.9s ease-out forwards;
}

.ab-line {
    width: 1px;
    height: 36px;
    background: linear-gradient(var(--color-brand), transparent);
    animation: scrollhint 1.8s ease-in-out infinite;
    transform-origin: top;
}

/* ───── Auftritt ───── */
.ab-in {
    opacity: 0;
    animation: rise 0.9s var(--d, 0ms) cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.ab-pop {
    opacity: 0;
    transform: scale(0.5);
    animation: pop 0.7s var(--d, 0ms) cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
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

@keyframes pop {
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes draw {
    to {
        stroke-dashoffset: 0;
    }
}

@keyframes turn {
    to {
        transform: rotate(360deg);
    }
}

@keyframes scrollhint {

    0%,
    100% {
        transform: scaleY(0.3);
        opacity: 0.4;
    }

    50% {
        transform: scaleY(1);
        opacity: 1;
    }
}

@media (max-width: 1023px) {
    .ab-scene {
        margin-top: 1.5rem;
        max-width: 320px;
    }

    .ab-note {
        max-width: 112px;
        padding: 0.8rem 0.7rem 0.6rem;
        font-size: 1.05rem;
    }
}

@media (prefers-reduced-motion: reduce) {

    .ab-in,
    .ab-pop,
    .ab-ring,
    .ab-line,
    .ab-scribble path,
    .ab-arrow path {
        animation: none;
    }

    .ab-in,
    .ab-pop {
        opacity: 1;
        transform: none;
    }

    .ab-scribble path,
    .ab-arrow path {
        stroke-dashoffset: 0;
    }
}
</style>
