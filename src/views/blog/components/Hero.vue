<template>
    <section class="relative isolate overflow-hidden bg-neutral-950 pb-16 pt-44 text-white lg:pt-52">

        <!-- Hintergrund -->
        <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div class="absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full bg-brand/20 blur-[150px]"></div>
            <div class="absolute -right-32 top-10 h-[360px] w-[360px] rounded-full bg-accent/10 blur-[140px]"></div>
            <div class="bh-lines absolute inset-0"></div>
        </div>

        <div class="mx-auto grid max-w-6xl items-center gap-10 px-6 lg:grid-cols-12 lg:px-12">

            <div class="lg:col-span-8">
                <p class="bh-in mb-5 flex items-center gap-3 text-sm uppercase tracking-[0.25em] text-brand"
                    style="--d: 60ms">
                    <span class="h-px w-10 bg-brand"></span>
                    Blog
                </p>

                <h1 class="bh-title">
                    <span class="bh-in block" style="--d: 150ms">Wissen rund um</span>
                    <span class="bh-in block" style="--d: 250ms">
                        <em>Web&shy;programmierung</em><span class="bh-dot">.</span>
                    </span>
                </h1>

                <p class="bh-in mt-7 max-w-2xl text-lg leading-relaxed text-neutral-300" style="--d: 400ms">
                    Praxisnahe Einblicke, Tipps und Gedanken zu Webentwicklung und Digitalisierung -
                    verständlich erklärt, ohne Fachchinesisch.
                </p>

                <div class="bh-in mt-8 flex flex-wrap items-center gap-6 text-sm text-neutral-400" style="--d: 520ms">
                    <span class="flex items-center gap-2">
                        <BookOpenIcon class="h-5 w-5 text-brand" /> {{ count }} Artikel
                    </span>
                    <span class="flex items-center gap-2">
                        <ClockIcon class="h-5 w-5 text-brand" /> Kurz & auf den Punkt
                    </span>
                    <span class="flex items-center gap-2">
                        <LightBulbIcon class="h-5 w-5 text-brand" /> Direkt aus der Praxis
                    </span>
                </div>
            </div>

            <div class="bh-in relative hidden lg:col-span-4 lg:block" style="--d: 500ms" aria-hidden="true">
                <div class="bh-badge">
                    <BookIllo class="h-44 w-auto" />
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { BookOpenIcon, ClockIcon, LightBulbIcon } from '@heroicons/vue/24/outline'
import BookIllo from '@/components/illustrations/BookIllo.vue'
import { posts } from '../posts.js'
import '@fontsource-variable/fraunces/wght.css'
import '@fontsource-variable/fraunces/wght-italic.css'

const count = posts.length
</script>

<style scoped>
.bh-lines {
    background-image: repeating-linear-gradient(0deg, rgb(255 255 255 / 0.035) 0 1px, transparent 1px 36px);
    mask-image: linear-gradient(to bottom, #000, transparent 85%);
}

.bh-title {
    font-family: 'Fraunces Variable', Georgia, serif;
    font-size: clamp(2.4rem, 6vw, 4.8rem);
    font-weight: 600;
    line-height: 1.04;
    letter-spacing: -0.02em;
}

.bh-title em {
    font-style: italic;
    font-weight: 500;
    color: var(--color-brand);
}

.bh-dot {
    color: var(--color-accent);
}

.bh-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    border-radius: 50%;
    border: 1px dashed rgb(255 255 255 / 0.2);
    background: radial-gradient(circle, rgb(31 171 171 / 0.12), transparent 70%);
    animation: spin-slow 40s linear infinite;
}

.bh-badge > * {
    animation: spin-slow 40s linear infinite reverse;
}

.bh-in {
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

@keyframes spin-slow {
    to {
        transform: rotate(360deg);
    }
}

@media (prefers-reduced-motion: reduce) {

    .bh-in,
    .bh-badge,
    .bh-badge > * {
        animation: none;
    }

    .bh-in {
        opacity: 1;
    }
}
</style>
