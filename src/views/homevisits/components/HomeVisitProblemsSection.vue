<template>
    <section class="wk-section">
        <div class="wk-glow wk-glow-teal -bottom-40 -right-40"></div>

        <div class="wk-wrap">

            <div class="wk-head">
                <div v-reveal>
                    <p class="wk-kicker">01 / Probleme</p>
                    <h2 class="wk-title">
                        Typische Probleme, die ich <mark class="wk-mark">direkt vor Ort</mark> löse
                    </h2>
                </div>
                <p v-reveal="{ delay: 80 }" class="wk-lead">
                    Egal ob kleines Problem oder komplettes Chaos - ich helfe dir schnell und verständlich weiter.
                </p>
            </div>

            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <article v-for="(p, i) in problems" :key="p.title" v-reveal="{ delay: i * 60 }"
                    class="wk-card flex flex-col p-7">

                    <div class="mb-6 flex items-start justify-between">
                        <span class="wk-icon">
                            <component :is="p.icon" class="h-6 w-6" />
                        </span>
                        <span class="wk-mono text-sm font-bold text-neutral-600">0{{ i + 1 }}</span>
                    </div>

                    <h3 class="mb-5 text-lg font-semibold leading-snug text-neutral-100">{{ p.title }}</h3>

                    <span class="wk-tag mt-auto" :class="p.note ? 'text-accent' : ''">
                        <TruckIcon v-if="p.note" class="h-4 w-4" />
                        <CheckIcon v-else class="h-4 w-4 text-brand" />
                        {{ p.note || 'Vor Ort lösbar' }}
                    </span>
                </article>
            </div>
        </div>
    </section>
</template>

<script setup>
import {
    ArrowPathIcon,
    CheckIcon,
    CircleStackIcon,
    ComputerDesktopIcon,
    DevicePhoneMobileIcon,
    PrinterIcon,
    ShieldExclamationIcon,
    TruckIcon
} from '@heroicons/vue/24/outline'
import '@fontsource-variable/jetbrains-mono'
import '../werkstatt.css'

const problems = [
    // Hier muss der PC zum Testen mitgenommen werden - deshalb Hinweis statt "Vor Ort lösbar"
    { title: 'PC langsam oder startet nicht', icon: ComputerDesktopIcon, note: 'PC wird zum Test mitgenommen' },
    { title: 'Smartphone Probleme', icon: DevicePhoneMobileIcon },
    { title: 'Drucker funktioniert nicht', icon: PrinterIcon },
    { title: 'Viren oder Fehler', icon: ShieldExclamationIcon },
    { title: 'Updates & Einrichtung', icon: ArrowPathIcon },
    { title: 'Backup & Daten sichern', icon: CircleStackIcon }
]
</script>
