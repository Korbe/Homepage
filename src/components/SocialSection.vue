<template>
    <section class="so relative isolate overflow-hidden bg-[#090c0c] py-24 text-white">

        <!-- Hintergrund -->
        <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div class="so-dots absolute inset-0"></div>
            <div class="absolute left-1/2 top-1/2 h-[420px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-[140px]"></div>
            <i class="fa-brands fa-instagram so-float left-[7%] top-[18%] text-6xl"></i>
            <i class="fa-brands fa-facebook so-float right-[8%] bottom-[16%] text-7xl" style="animation-delay: -4s"></i>
        </div>

        <div class="mx-auto max-w-4xl px-6 text-center">

            <p v-reveal class="so-pill">
                <span class="so-dot"></span> Social Media
            </p>

            <h2 v-reveal="{ delay: 60 }" class="mb-4 text-3xl font-extrabold tracking-tight md:text-5xl">
                Folge meiner Arbeit <span class="so-grad">online</span>
            </h2>

            <p v-reveal="{ delay: 120 }" class="mx-auto mb-12 max-w-xl text-lg text-neutral-400">
                Projekte und Einblicke hinter die Kulissen.
            </p>

            <div class="grid gap-5 sm:grid-cols-2">
                <a v-for="(s, i) in socials" :key="s.name" :href="s.href" target="_blank" rel="noopener"
                    v-reveal="{ delay: 180 + i * 100 }" v-spot class="so-card group" :class="s.cls">

                    <span class="so-badge">
                        <i :class="s.icon"></i>
                    </span>

                    <span class="min-w-0 flex-1 text-left">
                        <span class="block text-xl font-bold">{{ s.name }}</span>
                        <span class="block text-sm text-neutral-400">{{ s.text }}</span>
                        <span class="so-handle">{{ s.handle }}</span>
                    </span>

                    <ArrowUpRightIcon class="so-arrow h-6 w-6 shrink-0" />
                </a>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowUpRightIcon } from '@heroicons/vue/24/outline'

const socials = [
    {
        name: 'Facebook',
        text: 'Updates & Kundenprojekte',
        handle: 'Zur Facebook-Seite',
        href: 'https://www.facebook.com/profile.php?id=61589133460488',
        icon: 'fa-brands fa-facebook-f',
        cls: 'so-fb'
    },
    {
        name: 'Instagram',
        text: 'Behind the scenes & Content',
        handle: '@korbitsch.it',
        href: 'https://www.instagram.com/korbitsch.it',
        icon: 'fa-brands fa-instagram',
        cls: 'so-ig'
    }
]
</script>

<style scoped>
.so-dots {
    background-image: radial-gradient(rgb(255 255 255 / 0.07) 1px, transparent 1px);
    background-size: 26px 26px;
    mask-image: radial-gradient(ellipse 70% 80% at 50% 50%, #000 20%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 70% 80% at 50% 50%, #000 20%, transparent 100%);
}

.so-float {
    position: absolute;
    color: rgb(255 255 255 / 0.05);
    animation: so-bob 8s ease-in-out infinite;
}

.so-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 1.4rem;
    padding: 0.4rem 1rem;
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgb(212 212 212);
    border: 1px solid rgb(255 255 255 / 0.1);
    border-radius: 999px;
    background: rgb(255 255 255 / 0.05);
}

.so-dot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--color-brand);
    box-shadow: 0 0 12px var(--color-brand);
}

.so-grad {
    background: linear-gradient(100deg, var(--color-brand), #7ff3e3);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-fill-color: transparent;
}

/* ───── Karten ───── */
.so-card {
    --c1: var(--color-brand);
    --c2: #7ff3e3;
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    overflow: hidden;
    padding: 1.4rem 1.6rem;
    border: 1px solid rgb(255 255 255 / 0.1);
    border-radius: 24px;
    background: linear-gradient(160deg, rgb(255 255 255 / 0.06), rgb(255 255 255 / 0.015));
    transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.so-fb {
    --c1: #1877f2;
    --c2: #5aa5ff;
}

.so-ig {
    --c1: #e1306c;
    --c2: #f5a524;
}

/* Lichtfleck folgt dem Mauszeiger (v-spot) in der Plattformfarbe */
.so-card::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s;
    background: radial-gradient(360px circle at var(--sx, 50%) var(--sy, 50%), color-mix(in srgb, var(--c1) 35%, transparent), transparent 55%);
}

.so-card:hover {
    transform: translateY(-5px);
    border-color: color-mix(in srgb, var(--c1) 70%, transparent);
    box-shadow: 0 30px 60px -30px color-mix(in srgb, var(--c1) 60%, transparent);
}

.so-card:hover::before {
    opacity: 1;
}

.so-card > * {
    position: relative;
}

.so-badge {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.6rem;
    height: 3.6rem;
    flex-shrink: 0;
    font-size: 1.6rem;
    color: #fff;
    background: linear-gradient(135deg, var(--c1), var(--c2));
    border-radius: 18px;
    box-shadow: 0 10px 28px -8px color-mix(in srgb, var(--c1) 70%, transparent);
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.so-card:hover .so-badge {
    transform: rotate(-8deg) scale(1.1);
}

.so-handle {
    display: inline-block;
    margin-top: 0.5rem;
    padding: 0.15rem 0.6rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: rgb(229 229 229);
    border-radius: 999px;
    background: rgb(255 255 255 / 0.08);
}

.so-arrow {
    color: rgb(163 163 163);
    transition: transform 0.3s, color 0.3s;
}

.so-card:hover .so-arrow {
    color: #fff;
    transform: translate(3px, -3px);
}

@keyframes so-bob {

    0%,
    100% {
        transform: translateY(0) rotate(-6deg);
    }

    50% {
        transform: translateY(-16px) rotate(6deg);
    }
}

@media (prefers-reduced-motion: reduce) {
    .so-float {
        animation: none;
    }

    .so-card:hover,
    .so-card:hover .so-badge,
    .so-card:hover .so-arrow {
        transform: none;
    }
}
</style>
