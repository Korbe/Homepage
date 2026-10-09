<template>
    <section ref="root" class="gx relative isolate flex min-h-svh flex-col overflow-hidden bg-[#050809] text-white">

        <!-- ───────── Hintergrund: Neon-Horizont ───────── -->
        <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div class="gx-sky absolute inset-0"></div>
            <div class="gx-sun"></div>
            <div class="gx-floor">
                <svg viewBox="0 0 1000 400" preserveAspectRatio="none" class="h-full w-full">
                    <!-- Fluchtlinien zum Horizont -->
                    <line v-for="n in 31" :key="'v' + n" :x1="500" y1="0" :x2="(n - 16) * 130 + 500" y2="400"
                        class="gx-vline" />
                    <!-- Querlinien, die auf dich zu fließen -->
                    <line v-for="n in 9" :key="'h' + n" x1="-200" y1="0" x2="1200" y2="0" class="gx-hline"
                        :style="{ animationDelay: -(n - 1) * (3 / 9) + 's' }" />
                </svg>
            </div>
            <div class="gx-stars absolute inset-0"></div>
            <div class="gx-vignette absolute inset-0"></div>
        </div>

        <div class="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 pb-10 pt-32 text-center lg:px-12 lg:pt-36">

            <!-- Headline -->
            <p class="gx-in mb-4 inline-flex items-center gap-2 border border-accent/50 bg-accent/10 px-4 py-1.5 text-[12px] font-bold uppercase tracking-[0.3em] text-accent gx-font"
                style="--d: 60ms">
                <span class="h-2 w-2 animate-pulse rounded-full bg-accent"></span>
                Gaming PC Builds
            </p>

            <h1 class="gx-title gx-font">
                <span class="gx-in block" style="--d: 150ms">Gaming PCs</span>
                <span class="gx-in gx-rgb-text block" style="--d: 300ms">ohne Kompromisse</span>
            </h1>

            <p class="gx-in mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg" style="--d: 450ms">
                Individuell zusammengestellte Systeme für maximale Performance - perfekt abgestimmt auf dein
                Budget, deine Games und deine Anforderungen.
            </p>

            <!-- Bühne -->
            <div class="mt-8 grid w-full items-center gap-6 lg:grid-cols-12" aria-hidden="true">

                <!-- Links: System-Check -->
                <div class="gx-in order-2 lg:order-1 lg:col-span-3" style="--d: 1500ms">
                    <div class="gx-card text-left">
                        <p class="gx-label">System-Check</p>
                        <div v-for="row in rows" :key="row.name" class="mt-4">
                            <div class="mb-1.5 flex items-center justify-between text-xs">
                                <span class="gx-font font-bold uppercase tracking-widest text-neutral-300">{{ row.name }}</span>
                                <span class="font-mono text-teal-300">{{ row.value }}</span>
                            </div>
                            <div class="h-1.5 overflow-hidden rounded-full bg-white/10">
                                <div class="gx-fill h-full rounded-full" :style="{ '--w': row.w, '--fd': row.d }"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Mitte: PC -->
                <div class="order-1 flex justify-center lg:order-2 lg:col-span-6">
                    <div class="gx-pc relative">
                        <div class="gx-glow"></div>

                        <svg viewBox="0 0 360 440" class="gx-svg relative" role="img" aria-hidden="true">
                            <defs>
                                <linearGradient id="gxRgb" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0" stop-color="#5ee6e0" />
                                    <stop offset=".5" stop-color="#1fabab" />
                                    <stop offset="1" stop-color="#f5a524" />
                                </linearGradient>
                                <linearGradient id="gxGlass" x1="0" y1="0" x2="1" y2="1">
                                    <stop offset="0" stop-color="#ffffff" stop-opacity=".09" />
                                    <stop offset=".45" stop-color="#ffffff" stop-opacity="0" />
                                    <stop offset="1" stop-color="#ffffff" stop-opacity=".04" />
                                </linearGradient>
                                <g id="gxBlades">
                                    <path v-for="n in 7" :key="n" d="M0 -8 C 13 -13, 28 -36, 17 -44 C 5 -48, -6 -28, 0 -8Z"
                                        :transform="`rotate(${(n - 1) * 51.43})`" />
                                </g>
                            </defs>

                            <!-- Gehäuse -->
                            <rect x="16" y="8" width="328" height="424" rx="24" fill="#0b0b12" stroke="#2a2a38" stroke-width="2" />
                            <rect x="26" y="18" width="308" height="404" rx="16" fill="#08080d" />

                            <!-- Mainboard -->
                            <g class="part" style="--dx: 0px; --dy: 40px; --pd: 0.5s">
                                <rect x="44" y="80" width="176" height="236" rx="8" fill="#12121a" stroke="#23232e" />
                                <g stroke="#1d1d28" stroke-width="1.5" fill="none">
                                    <path d="M56 100 H100 V120" /><path d="M56 300 H110 V270" /><path d="M200 100 V230" />
                                </g>
                            </g>

                            <!-- Radiator + Schläuche -->
                            <g class="part" style="--dx: 0px; --dy: -50px; --pd: 0.7s">
                                <rect x="44" y="30" width="176" height="36" rx="6" fill="#171722" stroke="#2a2a38" />
                                <g stroke="#262634" stroke-width="2">
                                    <path v-for="n in 14" :key="n" :d="`M${54 + n * 11} 34 V62`" />
                                </g>
                                <path d="M84 66 C84 90 100 96 106 114" fill="none" stroke="#2a2a38" stroke-width="7" stroke-linecap="round" />
                                <path d="M170 66 C170 90 150 96 142 114" fill="none" stroke="#2a2a38" stroke-width="7" stroke-linecap="round" />
                            </g>

                            <!-- CPU-Block -->
                            <g class="part" style="--dx: 0px; --dy: 0px; --pd: 0.9s; --pop: 1">
                                <rect x="88" y="112" width="64" height="64" rx="12" fill="#1b1b27" stroke="#33334a" />
                                <g class="rgb">
                                    <circle cx="120" cy="144" r="19" fill="none" stroke="url(#gxRgb)" stroke-width="4" />
                                    <circle cx="120" cy="144" r="6" fill="url(#gxRgb)" />
                                </g>
                            </g>

                            <!-- RAM -->
                            <g class="part" style="--dx: 0px; --dy: -60px; --pd: 1.05s">
                                <g v-for="n in 4" :key="n">
                                    <rect :x="156 + (n - 1) * 15" y="106" width="10" height="80" rx="3" fill="#1d1d2a" stroke="#2e2e40" />
                                    <rect class="rgb" :x="156 + (n - 1) * 15" y="106" width="10" height="16" rx="3" fill="url(#gxRgb)" />
                                </g>
                            </g>

                            <!-- GPU -->
                            <g class="part" style="--dx: -80px; --dy: 0px; --pd: 1.2s">
                                <rect x="44" y="236" width="190" height="56" rx="10" fill="#0d0d14" stroke="#34344a" stroke-width="1.5" />
                                <rect class="rgb" x="52" y="287" width="174" height="3" rx="1.5" fill="url(#gxRgb)" />
                                <g v-for="(cx, i) in [96, 180]" :key="cx" :transform="`translate(${cx} 262)`">
                                    <circle r="21" fill="#08080d" stroke="#2a2a38" />
                                    <g class="rgb"><circle r="20" fill="none" stroke="url(#gxRgb)" stroke-width="2.5" /></g>
                                    <g class="spin" :class="i ? 'spin-rev' : ''" fill="#9aa3b5" opacity=".9">
                                        <g transform="scale(.4)"><use href="#gxBlades" /></g>
                                    </g>
                                    <circle r="3.5" fill="#0b0b12" />
                                </g>
                            </g>

                            <!-- Kabel -->
                            <path class="cable rgb" d="M236 352 C250 326 244 304 232 282" fill="none" stroke="url(#gxRgb)" stroke-width="3" stroke-linecap="round" />

                            <!-- 3 Lüfter -->
                            <g v-for="(cy, i) in [88, 214, 340]" :key="cy" class="part"
                                :style="{ '--dx': '90px', '--dy': '0px', '--pd': 1.4 + i * 0.18 + 's' }">
                                <g :transform="`translate(272 ${cy})`">
                                    <circle r="56" fill="#0c0c13" stroke="#25252f" />
                                    <g class="rgb"><circle r="51" fill="none" stroke="url(#gxRgb)" stroke-width="5" /></g>
                                    <g class="spin" :class="i % 2 ? 'spin-rev' : ''" fill="#aab2c4" opacity=".92">
                                        <use href="#gxBlades" />
                                    </g>
                                    <circle r="10" fill="#0b0b12" stroke="#33334a" />
                                    <g class="rgb"><circle r="4" fill="url(#gxRgb)" /></g>
                                </g>
                            </g>

                            <!-- Netzteil -->
                            <g class="part" style="--dx: 0px; --dy: 50px; --pd: 0.3s">
                                <rect x="26" y="356" width="308" height="58" rx="12" fill="#0a0a10" stroke="#23232e" />
                                <rect class="rgb" x="40" y="356" width="280" height="2.5" fill="url(#gxRgb)" />
                                <g stroke="#1c1c28" stroke-width="2"><path v-for="n in 12" :key="n" :d="`M${54 + n * 8} 372 V398`" /></g>
                                <text x="196" y="391" fill="#5b5b72" font-size="11" letter-spacing="4"
                                    font-family="ui-monospace, monospace">KORBITSCH</text>
                            </g>

                            <!-- Glasreflex -->
                            <rect x="26" y="18" width="308" height="404" rx="16" fill="url(#gxGlass)" />
                        </svg>
                    </div>
                </div>

                <!-- Rechts: FPS -->
                <div class="gx-in order-3 lg:col-span-3" style="--d: 1700ms">
                    <div class="gx-card text-left">
                        <p class="gx-label">Live · 1440p</p>
                        <p class="gx-font mt-2 flex items-end gap-2 leading-none">
                            <span class="gx-fps gx-rgb-text text-6xl font-bold italic"></span>
                            <span class="mb-1 text-sm font-bold uppercase tracking-widest text-neutral-400">FPS</span>
                        </p>
                        <svg viewBox="0 0 120 30" class="mt-3 h-8 w-full overflow-visible">
                            <path class="gx-line" pathLength="1" d="M0 20 L10 14 L20 18 L30 8 L40 16 L50 6 L60 14 L70 5 L80 12 L90 4 L100 10 L110 3 L120 7"
                                fill="none" stroke="#5ee6e0" stroke-width="2" stroke-linejoin="round" />
                        </svg>
                        <p class="mt-3 inline-flex items-center gap-2 rounded border border-brand/50 bg-brand/10 px-2.5 py-1 text-xs font-bold uppercase tracking-widest text-teal-200">
                            <span class="h-1.5 w-1.5 rounded-full bg-teal-300"></span> 0 % Bottleneck
                        </p>
                    </div>
                </div>
            </div>

            <!-- CTA -->
            <div class="gx-in mt-8 flex flex-wrap items-center justify-center gap-4" style="--d: 1900ms">
                <RouterLink to="/contact" class="gx-btn gx-btn-main">
                    Gaming Setup anfragen
                    <ArrowUpRightIcon class="h-5 w-5" />
                </RouterLink>
                <a href="#preise" class="gx-btn gx-btn-ghost">Preise ansehen</a>
            </div>

            <ul class="gx-in mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-neutral-300" style="--d: 2050ms">
                <li v-for="b in benefits" :key="b" class="flex items-center gap-2">
                    <CheckIcon class="h-4 w-4 text-teal-300" /> {{ b }}
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ArrowUpRightIcon, CheckIcon } from '@heroicons/vue/24/outline'
import '@fontsource/chakra-petch/500.css'
import '@fontsource/chakra-petch/700.css'
import '@fontsource/chakra-petch/700-italic.css'

const rows = [
    { name: 'CPU', value: '100 %', w: '100%', d: '1.9s' },
    { name: 'GPU', value: '100 %', w: '100%', d: '2.1s' },
    { name: 'RAM', value: 'DDR5', w: '92%', d: '2.3s' },
    { name: 'Kühlung', value: '38 °C', w: '38%', d: '2.5s' }
]

const benefits = [
    'Perfekte Balance aus CPU, GPU & RAM',
    'Maximale FPS & stabile Performance',
    'Keine Fertiglösungen oder Overkill',
    'Individuelle Beratung & Aufbau'
]
</script>

<style scoped>
@property --fps {
    syntax: '<integer>';
    initial-value: 0;
    inherits: false;
}

.gx-font {
    font-family: 'Chakra Petch', ui-sans-serif, system-ui, sans-serif;
}

/* ───── Hintergrund ───── */
.gx-sky {
    background:
        radial-gradient(ellipse 70% 40% at 50% 62%, rgb(245 165 36 / 0.35), transparent 70%),
        radial-gradient(ellipse 50% 30% at 50% 66%, rgb(63 217 208 / 0.18), transparent 70%),
        linear-gradient(#050809 40%, #072326 100%);
}

.gx-sun {
    position: absolute;
    left: 50%;
    top: 46%;
    width: min(46vw, 460px);
    aspect-ratio: 1;
    transform: translateX(-50%);
    border-radius: 50%;
    background: linear-gradient(#ffc766, #f5a524 50%, #1fabab);
    opacity: 0.55;
    filter: blur(1px);
    -webkit-mask-image: repeating-linear-gradient(0deg, #000 0 14px, transparent 14px 20px);
    mask-image: repeating-linear-gradient(0deg, #000 0 14px, transparent 14px 20px);
    -webkit-mask-size: 100% 70%;
    mask-size: 100% 70%;
    -webkit-mask-repeat: no-repeat;
    mask-repeat: no-repeat;
}

.gx-floor {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 36%;
    overflow: hidden;
    border-top: 1px solid rgb(245 165 36 / 0.7);
    box-shadow: 0 -10px 40px -10px rgb(245 165 36 / 0.6);
    background: linear-gradient(rgb(6 44 46 / 0.55), transparent);
    /* nach unten ausblenden, damit Buttons und Text lesbar bleiben */
    -webkit-mask-image: linear-gradient(#000 0%, rgb(0 0 0 / 0.55) 55%, rgb(0 0 0 / 0.18) 100%);
    mask-image: linear-gradient(#000 0%, rgb(0 0 0 / 0.55) 55%, rgb(0 0 0 / 0.18) 100%);
}

.gx-vline {
    stroke: rgb(245 165 36 / 0.55);
    stroke-width: 1.5;
    vector-effect: non-scaling-stroke;
}

.gx-hline {
    stroke: rgb(63 217 208 / 0.6);
    stroke-width: 1.5;
    vector-effect: non-scaling-stroke;
    /* quadratisch beschleunigt = Perspektive */
    animation: hflow 3s cubic-bezier(0.55, 0.06, 0.68, 0.19) infinite;
}

.gx-stars {
    background-image:
        radial-gradient(1.5px 1.5px at 12% 18%, #fff, transparent),
        radial-gradient(1px 1px at 78% 12%, #fff, transparent),
        radial-gradient(1.5px 1.5px at 88% 38%, #99f6e4, transparent),
        radial-gradient(1px 1px at 30% 8%, #fff, transparent),
        radial-gradient(1px 1px at 55% 22%, #a7f3d0, transparent),
        radial-gradient(1px 1px at 6% 44%, #fff, transparent);
    opacity: 0.7;
}

.gx-vignette {
    background: radial-gradient(ellipse at center, transparent 50%, rgb(0 0 0 / 0.6) 100%);
}

/* ───── Headline ───── */
.gx-title {
    font-size: clamp(2.3rem, min(7.2vw, 11vh), 6.4rem);
    font-weight: 700;
    font-style: italic;
    line-height: 1;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    text-shadow: -2px 0 rgb(245 165 36 / 0.6), 2px 0 rgb(63 217 208 / 0.6);
    animation: glitch 0.7s 0.5s steps(1) 1;
}

.gx-rgb-text {
    background: linear-gradient(90deg, #3fd9d0, #1fabab, #f5a524, #ffb347, #3fd9d0);
    background-size: 300% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    animation: slide 6s linear infinite;
    text-shadow: none;
}

.gx-title .gx-rgb-text {
    filter: drop-shadow(0 0 26px rgb(31 171 171 / 0.55));
}

/* ───── PC ───── */
.gx-pc {
    width: min(100%, 340px);
    height: min(40vh, 400px);
    min-height: 280px;
    aspect-ratio: 360 / 440;
    width: auto;
}

.gx-svg {
    width: auto;
    height: 100%;
    filter: drop-shadow(0 0 36px rgb(31 171 171 / 0.35));
}

.gx-glow {
    position: absolute;
    inset: -12%;
    border-radius: 50%;
    background: conic-gradient(from 0deg, #3fd9d0, #1fabab, #f5a524, #1fabab, #3fd9d0);
    filter: blur(70px);
    opacity: 0.35;
    animation: turn 10s linear infinite;
}

.rgb {
    animation: breathe 3.2s ease-in-out infinite;
}

.cable {
    stroke-dasharray: 6 5;
    animation: breathe 3.2s ease-in-out infinite, flow 1s linear infinite;
}

.spin {
    animation: spin 2.2s linear infinite;
}

.spin-rev {
    animation-direction: reverse;
}

.part {
    opacity: 0;
    transform: translate(var(--dx, 0), var(--dy, 0));
    animation: snap 0.8s var(--pd, 0s) cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* ───── Karten ───── */
.gx-card {
    padding: 1.1rem 1.25rem 1.25rem;
    border: 1px solid rgb(255 255 255 / 0.12);
    border-radius: 14px;
    background: linear-gradient(160deg, rgb(255 255 255 / 0.07), rgb(255 255 255 / 0.02));
    backdrop-filter: blur(14px);
    box-shadow: 0 0 0 1px rgb(0 0 0 / 0.4), 0 20px 50px -20px rgb(31 171 171 / 0.45);
}

.gx-label {
    font-family: 'Chakra Petch', ui-sans-serif, sans-serif;
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: #7ff3e3;
}

.gx-fill {
    width: 0;
    background: linear-gradient(90deg, #3fd9d0, #1fabab, #f5a524);
    box-shadow: 0 0 12px rgb(31 171 171 / 0.7);
    animation: fillbar 1.2s var(--fd, 2s) cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

.gx-fps {
    counter-reset: f var(--fps);
    animation: fps 2.6s 1.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
    min-width: 3ch;
    display: inline-block;
}

.gx-fps::before {
    content: counter(f);
}

.gx-line {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    animation: draw 2s 2s ease-out forwards;
    filter: drop-shadow(0 0 4px #3fd9d0);
}

/* ───── Buttons ───── */
.gx-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 0.95rem 1.8rem;
    font-family: 'Chakra Petch', ui-sans-serif, sans-serif;
    font-size: 0.95rem;
    font-weight: 700;
    font-style: italic;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    clip-path: polygon(14px 0, 100% 0, calc(100% - 14px) 100%, 0 100%);
    transition: transform 0.2s, filter 0.2s;
}

.gx-btn-main {
    color: #0b0b0c;
    background: linear-gradient(100deg, #1fabab, #3fd9d0);
    filter: drop-shadow(0 0 14px rgb(31 171 171 / 0.7));
}

.gx-btn-main:hover {
    transform: translateY(-2px) scale(1.03);
    filter: drop-shadow(0 0 26px rgb(63 217 208 / 0.9));
}

.gx-btn-ghost {
    color: #fff;
    background: rgb(255 255 255 / 0.06);
    box-shadow: inset 0 0 0 1.5px rgb(255 255 255 / 0.3);
}

.gx-btn-ghost:hover {
    color: #3fd9d0;
    box-shadow: inset 0 0 0 1.5px #3fd9d0;
    background: rgb(63 217 208 / 0.12);
    transform: translateY(-2px);
}

/* ───── Auftritt ───── */
.gx-in {
    opacity: 0;
    animation: rise 0.9s var(--d, 0ms) cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes rise {
    from {
        opacity: 0;
        transform: translateY(26px);
    }

    to {
        opacity: 1;
        transform: none;
    }
}

@keyframes snap {
    to {
        opacity: 1;
        transform: none;
    }
}

@keyframes hflow {
    from {
        transform: translateY(0);
    }

    to {
        transform: translateY(400px);
    }
}

@keyframes slide {
    to {
        background-position: -300% 0;
    }
}

@keyframes breathe {

    0%,
    100% {
        filter: brightness(0.9) saturate(1);
    }

    50% {
        filter: brightness(1.5) saturate(1.2);
    }
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}

@keyframes turn {
    to {
        transform: rotate(360deg);
    }
}

@keyframes flow {
    to {
        stroke-dashoffset: -22;
    }
}

@keyframes fillbar {
    to {
        width: var(--w);
    }
}

@keyframes fps {
    from {
        --fps: 0;
    }

    to {
        --fps: 240;
    }
}

@keyframes draw {
    to {
        stroke-dashoffset: 0;
    }
}

@keyframes glitch {

    0%,
    100% {
        transform: translate(0);
    }

    20% {
        transform: translate(-4px, 1px);
        text-shadow: 4px 0 #3fd9d0, -4px 0 #f5a524;
    }

    40% {
        transform: translate(3px, -1px);
    }

    60% {
        transform: translate(-2px, 0);
        text-shadow: -4px 0 #3fd9d0, 4px 0 #f5a524;
    }

    80% {
        transform: translate(2px, 1px);
    }
}

@media (max-width: 1023px) {
    .gx-pc {
        height: 300px;
    }
}

@media (prefers-reduced-motion: reduce) {

    .gx-in,
    .gx-title,
    .gx-rgb-text,
    .gx-hline,
    .gx-glow,
    .rgb,
    .cable,
    .spin,
    .part,
    .gx-fill,
    .gx-fps,
    .gx-line {
        animation: none;
    }

    .gx-in,
    .part {
        opacity: 1;
        transform: none;
    }

    .gx-fill {
        width: var(--w);
    }

    .gx-fps {
        --fps: 240;
    }

    .gx-line {
        stroke-dashoffset: 0;
    }
}
</style>
