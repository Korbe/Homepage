<template>
    <section class="relative isolate overflow-hidden bg-[#070909] py-28 text-white">
        <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div class="pf-cols3 absolute inset-0"></div>
            <div class="absolute left-1/2 top-1/2 h-[480px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/18 blur-[150px]"></div>
        </div>

        <div class="mx-auto max-w-5xl px-6 text-center lg:px-12">
            <div v-reveal class="pf-cta">

                <FramesIllo class="mx-auto mb-4 h-24 w-auto" />

                <p class="pf-mono mb-5 text-xs uppercase tracking-[0.3em] text-brand">Dein Projekt als Nächstes?</p>

                <h2 class="pf-title mb-6">
                    Willst auch du dein Projekt <em>hier</em> sehen?
                </h2>

                <p class="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-neutral-300">
                    Ich entwickle individuelle Webanwendungen und digitale Lösungen -
                    von der Idee bis zur Umsetzung.
                </p>

                <div class="mb-9 flex flex-wrap items-center justify-center gap-4">
                    <router-link to="/contact" class="pf-btn pf-btn-main">
                        Projekt anfragen
                        <ArrowUpRightIcon class="h-5 w-5" />
                    </router-link>
                    <a href="https://wa.me/436701923388" target="_blank" rel="noopener" class="pf-btn pf-btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.59 5.96L0 24l6.31-1.65a11.8 11.8 0 0 0 5.75 1.47h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.44-8.45Z" />
                        </svg>
                        Oder per WhatsApp
                    </a>
                </div>

                <ul class="flex flex-col items-center justify-center gap-3 text-sm text-neutral-400 sm:flex-row sm:gap-8">
                    <li class="flex items-center gap-2"><EnvelopeIcon class="h-4 w-4 text-brand" /> info@korbitsch.at</li>
                    <li class="flex items-center gap-2"><PhoneIcon class="h-4 w-4 text-brand" /> +43 670 1923388</li>
                    <li class="flex items-center gap-2"><ClockIcon class="h-4 w-4 text-brand" /> Antwort meist innerhalb von 24 Stunden</li>
                </ul>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowUpRightIcon, ClockIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/vue/24/outline'
import FramesIllo from '@/components/illustrations/FramesIllo.vue'
import '@fontsource-variable/bricolage-grotesque'
</script>

<style scoped>
.pf-mono {
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
}

.pf-cols3 {
    background-image: linear-gradient(to right, rgb(255 255 255 / 0.04) 1px, transparent 1px);
    background-size: 25% 100%;
    mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%);
    -webkit-mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, #000 20%, transparent 100%);
}

.pf-cta {
    padding: 4rem 2rem;
    border: 1px solid rgb(255 255 255 / 0.12);
    border-radius: 36px;
    background:
        radial-gradient(ellipse 80% 90% at 50% -10%, rgb(31 171 171 / 0.22), transparent 70%),
        rgb(255 255 255 / 0.02);
}

.pf-title {
    font-family: 'Bricolage Grotesque Variable', ui-sans-serif, system-ui, sans-serif;
    font-size: clamp(2rem, 4.8vw, 3.6rem);
    font-weight: 800;
    line-height: 1.04;
    letter-spacing: -0.04em;
}

.pf-title em {
    font-style: normal;
    color: var(--color-brand);
}

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

.pf-btn-ghost {
    border: 1px solid rgb(255 255 255 / 0.22);
}

.pf-btn-ghost:hover {
    color: var(--color-brand);
    border-color: var(--color-brand);
}
</style>
