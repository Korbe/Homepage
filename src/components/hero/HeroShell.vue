<template>
    <section ref="root" class="hx relative isolate flex min-h-svh flex-col overflow-hidden bg-neutral-950 text-white">

        <!-- ───────── Atmosphäre ───────── -->
        <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div class="hx-grid-base absolute inset-0"></div>
            <div class="hx-grid-lit absolute inset-0"></div>
            <div class="hx-spot absolute inset-0"></div>
            <div class="absolute -bottom-40 -right-40 h-[620px] w-[620px] rounded-full bg-brand/25 blur-[150px]"></div>
            <div class="absolute -top-32 left-1/3 h-[320px] w-[320px] rounded-full bg-accent/10 blur-[140px]"></div>
            <div class="hx-grain absolute inset-0"></div>
            <div class="hx-vignette absolute inset-0"></div>
        </div>

        <!-- ───────── Inhalt ───────── -->
        <div
            class="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-10 px-6 pb-12 pt-32 lg:grid-cols-12 lg:gap-6 lg:px-12 lg:pt-36">

            <div class="lg:col-span-7">

                <p class="hx-rise mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-neutral-300 backdrop-blur"
                    style="--d: 100ms">
                    <span class="relative flex h-2 w-2">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
                        <span class="relative inline-flex h-2 w-2 rounded-full bg-brand"></span>
                    </span>
                    {{ tag }}
                </p>

                <h1 ref="headline" class="hx-headline">
                    <span class="sr-only">{{ srTitle }}</span>

                    <!-- Ebene 1: gedimmt, das Schlüsselwort leuchtet immer -->
                    <span class="hx-layer hx-layer-base" aria-hidden="true">
                        <span v-for="(line, i) in lines" :key="line" class="hx-line hx-rise"
                            :style="{ '--d': 200 + i * 100 + 'ms' }">{{ line }}</span>
                        <span class="hx-line hx-rise" :style="{ '--d': 200 + lines.length * 100 + 'ms' }">
                            <span class="hx-hot">
                                {{ hot }}
                                <svg class="hx-swoosh" viewBox="0 0 200 20" preserveAspectRatio="none">
                                    <path d="M3 13 C 55 3, 125 19, 197 6" pathLength="1" />
                                </svg>
                            </span>
                        </span>
                    </span>

                    <!-- Ebene 2: volle Helligkeit, nur unter dem Lichtkegel sichtbar -->
                    <span class="hx-layer hx-layer-lit" aria-hidden="true">
                        <span v-for="(line, i) in lines" :key="line" class="hx-line hx-rise"
                            :style="{ '--d': 200 + i * 100 + 'ms' }">{{ line }}</span>
                        <span class="hx-line hx-rise" :style="{ '--d': 200 + lines.length * 100 + 'ms' }">
                            <span class="hx-hot-ghost">{{ hot }}</span>
                        </span>
                    </span>
                </h1>

                <slot />
            </div>

            <!-- Rechts: Szene -->
            <div class="relative hidden lg:col-span-5 lg:block" aria-hidden="true">
                <slot name="scene" />
            </div>
        </div>

        <!-- ───────── Laufband ───────── -->
        <div class="relative z-10 border-t border-white/10 bg-neutral-950/60 backdrop-blur" aria-hidden="true">
            <div class="hx-marquee py-4">
                <div class="hx-marquee-track">
                    <template v-for="n in 2" :key="n">
                        <span v-for="item in marquee" :key="n + item" class="hx-marquee-item">{{ item }}</span>
                    </template>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import '@fontsource-variable/bricolage-grotesque'

defineProps({
    tag: { type: String, required: true },
    lines: { type: Array, required: true },
    hot: { type: String, required: true },
    srTitle: { type: String, required: true },
    marquee: { type: Array, default: () => [] }
})

const root = ref(null)
const headline = ref(null)

let raf = 0
let observer = null
let cleanup = () => { }

onMounted(() => {
    const el = root.value
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let w = 1
    let h = 1
    const target = { x: 0, y: 0 }
    const cur = { x: 0, y: 0 }
    let lastPointer = -Infinity
    let running = false

    const measure = () => {
        const r = el.getBoundingClientRect()
        w = r.width
        h = r.height
    }

    const apply = () => {
        const er = el.getBoundingClientRect()
        const hr = headline.value.getBoundingClientRect()
        el.style.setProperty('--mx', `${cur.x}px`)
        el.style.setProperty('--my', `${cur.y}px`)
        el.style.setProperty('--hx', `${cur.x - (hr.left - er.left)}px`)
        el.style.setProperty('--hy', `${cur.y - (hr.top - er.top)}px`)
        el.style.setProperty('--px', ((cur.x / w - 0.5) * 2).toFixed(3))
        el.style.setProperty('--py', ((cur.y / h - 0.5) * 2).toFixed(3))
    }

    const frame = (t) => {
        if (!running) return
        // Ohne Maus: Lichtkegel wandert von allein über die Headline
        if (t - lastPointer > 2500) {
            target.x = w * (0.32 + 0.2 * Math.sin(t / 2300))
            target.y = h * (0.5 + 0.16 * Math.sin(t / 1800 + 1))
        }
        cur.x += (target.x - cur.x) * 0.08
        cur.y += (target.y - cur.y) * 0.08
        apply()
        raf = requestAnimationFrame(frame)
    }

    const start = () => {
        if (running || reduce) return
        running = true
        raf = requestAnimationFrame(frame)
    }

    const stop = () => {
        running = false
        cancelAnimationFrame(raf)
    }

    const onMove = (e) => {
        const r = el.getBoundingClientRect()
        target.x = e.clientX - r.left
        target.y = e.clientY - r.top
        lastPointer = performance.now()
    }

    const onResize = () => {
        measure()
        if (reduce) apply()
    }

    measure()
    cur.x = target.x = w * 0.32
    cur.y = target.y = h * 0.5
    apply()

    window.addEventListener('resize', onResize, { passive: true })

    if (!reduce) {
        el.addEventListener('pointermove', onMove, { passive: true })
        observer = new IntersectionObserver(([entry]) => (entry.isIntersecting ? start() : stop()))
        observer.observe(el)
    }

    cleanup = () => {
        stop()
        window.removeEventListener('resize', onResize)
        el.removeEventListener('pointermove', onMove)
    }
})

onBeforeUnmount(() => {
    cleanup()
    observer?.disconnect()
})
</script>

<!-- bewusst nicht scoped: die Klassen (hx-*) werden auch von den Szenen in den Slots genutzt -->
<style>
.hx {
    --mx: 32%;
    --my: 50%;
    --hx: 30%;
    --hy: 50%;
    --px: 0;
    --py: 0;
}

/* ───── Hintergrund ───── */
.hx-grid-base,
.hx-grid-lit {
    background-image:
        linear-gradient(to right, rgb(255 255 255 / 0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgb(255 255 255 / 0.05) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse 85% 75% at 50% 45%, #000 20%, transparent 100%);
}

.hx-grid-lit {
    background-image:
        linear-gradient(to right, rgb(31 171 171 / 0.55) 1px, transparent 1px),
        linear-gradient(to bottom, rgb(31 171 171 / 0.55) 1px, transparent 1px);
    mask-image: radial-gradient(circle 280px at var(--mx) var(--my), #000 0%, transparent 100%);
}

.hx-spot {
    background: radial-gradient(circle 420px at var(--mx) var(--my), rgb(31 171 171 / 0.28), transparent 70%);
    mix-blend-mode: screen;
}

.hx-grain {
    opacity: 0.07;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
}

.hx-vignette {
    background: radial-gradient(ellipse at center, transparent 45%, rgb(0 0 0 / 0.55) 100%);
}

/* ───── Headline ───── */
.hx-headline {
    display: grid;
    font-family: 'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif;
    font-size: clamp(2.7rem, min(8.4vw, 12vh), 7.5rem);
    font-weight: 750;
    line-height: 0.95;
    letter-spacing: -0.035em;
}

.hx-layer {
    grid-area: 1 / 1;
    display: block;
}

.hx-line {
    display: block;
    padding-bottom: 0.04em;
}

.hx-layer-base {
    color: rgb(255 255 255 / 0.3);
}

/* Ohne Maus bleibt die Headline auf kleinen Screens gut lesbar */
@media (max-width: 1023px) {
    .hx-layer-base {
        color: rgb(255 255 255 / 0.5);
    }
}

.hx-layer-lit {
    color: #fff;
    -webkit-mask-image: radial-gradient(circle 260px at var(--hx) var(--hy), #000 0%, rgb(0 0 0 / 0.85) 35%, transparent 100%);
    mask-image: radial-gradient(circle 260px at var(--hx) var(--hy), #000 0%, rgb(0 0 0 / 0.85) 35%, transparent 100%);
}

.hx-hot,
.hx-hot-ghost {
    position: relative;
    display: inline-block;
}

.hx-hot {
    background: linear-gradient(100deg, var(--color-brand) 10%, #7ff3e3 55%, #d9fff9 90%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(0 0 32px rgb(31 171 171 / 0.55));
}

.hx-hot-ghost {
    color: transparent;
    -webkit-text-fill-color: transparent;
}

.hx-swoosh {
    position: absolute;
    left: 0;
    bottom: -0.06em;
    width: 100%;
    height: 0.22em;
    overflow: visible;
    filter: drop-shadow(0 0 10px rgb(245 165 36 / 0.6));
}

.hx-swoosh path {
    fill: none;
    stroke: var(--color-accent);
    stroke-width: 5;
    stroke-linecap: round;
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
    vector-effect: non-scaling-stroke;
    animation: hx-draw 1s 1.5s cubic-bezier(0.65, 0, 0.35, 1) forwards;
}

/* ───── Szenen-Helfer (auch in Slots nutzbar) ───── */
.hx-par {
    transform: translate3d(calc(var(--px) * var(--k, 1) * -14px), calc(var(--py) * var(--k, 1) * -10px), 0);
    will-change: transform;
}

.hx-rise {
    opacity: 0;
    animation: hx-rise 1s var(--d, 0ms) cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* ───── Laufband ───── */
.hx-marquee {
    overflow: hidden;
    mask-image: linear-gradient(to right, transparent, #000 8%, #000 92%, transparent);
}

.hx-marquee-track {
    display: flex;
    width: max-content;
    animation: hx-marquee 38s linear infinite;
}

.hx-marquee:hover .hx-marquee-track {
    animation-play-state: paused;
}

.hx-marquee-item {
    display: inline-flex;
    align-items: center;
    gap: 2rem;
    padding-right: 2rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgb(212 212 212 / 0.7);
    white-space: nowrap;
}

.hx-marquee-item::after {
    content: '';
    width: 6px;
    height: 6px;
    background: var(--color-brand);
    transform: rotate(45deg);
}

@keyframes hx-rise {
    from {
        opacity: 0;
        transform: translateY(38px);
        filter: blur(12px);
    }

    to {
        opacity: 1;
        transform: none;
        filter: blur(0);
    }
}

@keyframes hx-draw {
    to {
        stroke-dashoffset: 0;
    }
}

@keyframes hx-marquee {
    to {
        transform: translateX(-50%);
    }
}

@media (prefers-reduced-motion: reduce) {

    .hx-rise,
    .hx-swoosh path,
    .hx-marquee-track {
        animation: none;
    }

    .hx-rise {
        opacity: 1;
    }

    .hx-swoosh path {
        stroke-dashoffset: 0;
    }
}
</style>
