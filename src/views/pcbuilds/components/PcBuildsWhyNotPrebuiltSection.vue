<template>
    <section class="pg-section pg-section-alt">
        <div class="pg-glow pg-glow-amber -right-40 -top-40"></div>

        <div class="pg-wrap">

            <div v-reveal class="pg-head">
                <p class="pg-tag">02 · Warum kein Fertig-PC?</p>
                <h2 class="pg-title">
                    Fertig-PCs sparen Zeit - kosten dich <span class="pg-grad">Performance</span>
                </h2>
                <p class="pg-lead">
                    Viele Systeme sehen gut aus, sind aber technisch schlecht abgestimmt. Genau hier liegt der
                    Unterschied.
                </p>
            </div>

            <div class="relative grid gap-8 lg:grid-cols-2 lg:gap-12">

                <div class="pg-vs hidden lg:flex pg-font" aria-hidden="true">VS</div>

                <!-- Fertig-PC -->
                <article v-reveal class="pg-card p-8 lg:p-10">
                    <p class="pg-font mb-6 text-sm font-bold uppercase tracking-[0.2em] text-red-300">
                        Typische Probleme bei Fertig-PCs
                    </p>

                    <div class="mb-8">
                        <div class="mb-2 flex justify-between text-xs uppercase tracking-widest text-neutral-500">
                            <span>Bottleneck-Risiko</span>
                        </div>
                        <div class="pg-meter"><span class="pg-meter-bad"></span></div>
                    </div>

                    <ul class="space-y-3.5 text-neutral-300">
                        <li v-for="l in bad" :key="l" class="pg-check pg-cross"><XMarkIcon />{{ l }}</li>
                    </ul>
                </article>

                <!-- Custom Build -->
                <article v-reveal="{ delay: 120 }" class="pg-card pg-card-hot p-8 lg:p-10">
                    <p class="pg-font mb-6 text-sm font-bold uppercase tracking-[0.2em] text-teal-300">
                        Dein Vorteil mit Custom Build
                    </p>

                    <div class="mb-8">
                        <div class="mb-2 flex justify-between text-xs uppercase tracking-widest text-neutral-500">
                            <span>Bottleneck-Risiko</span>
                        </div>
                        <div class="pg-meter"><span class="pg-meter-good"></span></div>
                    </div>

                    <ul class="space-y-3.5 text-neutral-100">
                        <li v-for="l in good" :key="l" class="pg-check"><CheckIcon />{{ l }}</li>
                    </ul>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
import { CheckIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import '@fontsource/chakra-petch/500.css'
import '@fontsource/chakra-petch/700.css'
import '@fontsource/chakra-petch/700-italic.css'
import '@/styles/gaming.css'

const bad = [
    'Schlechte Abstimmung der Komponenten',
    'Überteuerte Marketing-Hardware',
    'Bottlenecks im System',
    'Billige Netzteile & Kühlung',
    'Kaum Upgrade-Möglichkeiten'
]

const good = [
    'Perfekte Balance aus CPU, GPU & RAM',
    'Maximale Performance pro Euro',
    'Keine Bottlenecks',
    'Hochwertige & getestete Komponenten',
    'Sauber aufgebaut & langfristig erweiterbar'
]
</script>

<style scoped>
.pg-vs {
    position: absolute;
    left: 50%;
    top: 50%;
    z-index: 5;
    align-items: center;
    justify-content: center;
    width: 4.8rem;
    height: 4.8rem;
    transform: translate(-50%, -50%);
    font-size: 1.25rem;
    font-weight: 700;
    font-style: italic;
    line-height: 1;
    color: #05090a;
    background: linear-gradient(135deg, #3fd9d0, #f5a524);
    clip-path: polygon(50% 0, 100% 50%, 50% 100%, 0 50%);
}

.pg-meter {
    height: 10px;
    overflow: hidden;
    background: rgb(255 255 255 / 0.08);
    clip-path: polygon(0 0, 100% 0, calc(100% - 6px) 100%, 0 100%);
}

.pg-meter span {
    display: block;
    height: 100%;
    animation: fill 1.4s 0.3s cubic-bezier(0.65, 0, 0.35, 1) both;
}

.pg-meter-bad {
    width: 82%;
    background: linear-gradient(90deg, #f59e0b, #ef4444);
}

.pg-meter-good {
    width: 6%;
    background: linear-gradient(90deg, #1fabab, #3fd9d0);
    box-shadow: 0 0 12px #3fd9d0;
}

@keyframes fill {
    from {
        width: 0;
    }
}

@media (prefers-reduced-motion: reduce) {
    .pg-meter span {
        animation: none;
    }
}
</style>
