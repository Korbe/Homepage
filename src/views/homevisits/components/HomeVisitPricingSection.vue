<template>
    <section class="wk-section">
        <div class="wk-glow wk-glow-teal -left-40 -top-40"></div>

        <div class="wk-wrap">

            <div class="wk-head">
                <div v-reveal>
                    <p class="wk-kicker">05 / Preise</p>
                    <h2 class="wk-title">Transparent und <mark class="wk-mark">fair.</mark></h2>
                </div>
                <p v-reveal="{ delay: 80 }" class="wk-lead">
                    Du zahlst nur die tatsächliche Arbeitszeit - abgerechnet wird im 15-Minuten-Takt.
                </p>
            </div>

            <div class="grid items-start gap-10 lg:grid-cols-12">

                <!-- Kostenvoranschlag -->
                <div v-reveal class="wk-bill lg:col-span-7">
                    <div class="wk-bill-head wk-mono">
                        <span>Kostenübersicht</span>
                        <span>IT-Hausbesuch</span>
                    </div>

                    <div class="p-7 sm:p-9">
                        <div class="wk-row">
                            <div>
                                <p class="wk-mono wk-small">Erste halbe Stunde</p>
                                <p class="mt-1 text-sm text-neutral-400">inkl. Analyse &amp; Problemlösung vor Ort</p>
                            </div>
                            <p class="wk-price wk-mono">50<small>€</small></p>
                        </div>

                        <div class="wk-row">
                            <div>
                                <p class="wk-mono wk-small">Danach</p>
                                <p class="mt-1 text-sm text-neutral-400">Fair im 15-Minuten-Takt</p>
                            </div>
                            <p class="wk-price wk-mono">20<small>€ / 15 min</small></p>
                        </div>

                        <div class="wk-perf" aria-hidden="true"></div>

                        <ul class="space-y-3 text-sm text-neutral-300">
                            <li class="flex items-start gap-3">
                                <CheckBadgeIcon class="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                                Preis gilt ausschließlich für IT-Hausbesuche
                            </li>
                            <li class="flex items-start gap-3">
                                <CheckBadgeIcon class="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                                Webentwicklung wird individuell kalkuliert
                            </li>
                            <li class="flex items-start gap-3">
                                <CheckBadgeIcon class="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                                Alle Preise inkl. 20&nbsp;% USt.
                            </li>
                        </ul>
                    </div>
                </div>

                <!-- Beispiel als Terminal -->
                <div v-reveal="{ delay: 120 }" class="lg:col-span-5">
                    <p class="wk-mono mb-3 text-xs uppercase tracking-[0.2em] text-neutral-500">Beispielrechnung</p>

                    <div class="wk-term wk-mono">
                        <div class="wk-term-bar">
                            <i></i><i></i><i></i>
                            <span>rechnung.sh</span>
                        </div>
                        <div class="p-6 text-[13px] leading-7 sm:text-sm">
                            <p><span class="text-brand">$</span> dauer <span class="text-accent">1h 26min</span></p>
                            <p class="text-neutral-400">→ aufgerundet auf 1h 30min</p>
                            <p class="mt-3"><span class="text-brand">$</span> berechne</p>
                            <p class="text-neutral-300">50 € + 4 x 20 € (80 €)</p>
                            <p class="mt-3 border-t border-dashed border-white/20 pt-3 text-lg font-bold text-accent">
                                = 130 €<span class="wk-cursor"></span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { CheckBadgeIcon } from '@heroicons/vue/24/outline'
import '@fontsource-variable/jetbrains-mono'
import '../werkstatt.css'
</script>

<style scoped>
.wk-bill {
    overflow: hidden;
    border: 2px solid rgb(245 165 36 / 0.55);
    border-radius: 14px;
    background: linear-gradient(170deg, #16161a, #0f0f12);
    box-shadow: 10px 10px 0 rgb(31 171 171 / 0.55);
}

.wk-bill-head {
    display: flex;
    justify-content: space-between;
    padding: 0.7rem 1.5rem;
    font-size: 0.7rem;
    font-weight: 800;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #0b0b0c;
    background: var(--color-accent);
}

.wk-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 1.4rem 0;
}

.wk-row + .wk-row {
    border-top: 1px solid rgb(255 255 255 / 0.1);
}

.wk-small {
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--color-accent);
}

.wk-price {
    font-size: clamp(2.2rem, 5vw, 3.2rem);
    font-weight: 800;
    letter-spacing: -0.05em;
    white-space: nowrap;
}

.wk-price small {
    margin-left: 0.25rem;
    font-size: 0.9rem;
    font-weight: 600;
    letter-spacing: 0;
    color: rgb(163 163 163);
}

.wk-perf {
    margin: 1rem -2.25rem 1.6rem;
    border-top: 2px dashed rgb(255 255 255 / 0.18);
}

.wk-term {
    overflow: hidden;
    border: 2px solid rgb(255 255 255 / 0.14);
    border-radius: 14px;
    background: #0a0f0f;
}

.wk-term-bar {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.7rem 1rem;
    border-bottom: 1px solid rgb(255 255 255 / 0.1);
    background: rgb(255 255 255 / 0.04);
}

.wk-term-bar i {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgb(255 255 255 / 0.2);
}

.wk-term-bar span {
    margin-left: 0.6rem;
    font-size: 0.72rem;
    color: rgb(163 163 163);
}

.wk-cursor {
    display: inline-block;
    width: 0.55em;
    height: 1em;
    margin-left: 0.3em;
    vertical-align: -0.12em;
    background: var(--color-brand);
    animation: blink 1s step-end infinite;
}

@keyframes blink {
    50% {
        opacity: 0;
    }
}

@media (prefers-reduced-motion: reduce) {
    .wk-cursor {
        animation: none;
    }
}
</style>
