<template>
    <section id="contact" class="hc relative isolate overflow-hidden bg-[#0b0b0c] text-white">

        <!-- Warnband als Übergang zum Hero -->
        <div class="hc-hazard" aria-hidden="true"></div>

        <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div class="hc-dots absolute inset-0"></div>
            <div class="absolute -right-40 top-1/4 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[150px]"></div>
            <div class="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-brand/15 blur-[150px]"></div>
        </div>

        <div class="mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-12 lg:gap-10 lg:px-12">

            <!-- Links -->
            <div class="lg:col-span-5">
                <p v-reveal class="hc-mono mb-5 inline-flex items-center gap-2 border border-accent/60 bg-accent/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                    <TicketIcon class="h-4 w-4" /> Hausbesuch anfragen
                </p>

                <h2 v-reveal="{ delay: 60 }" class="hc-title">
                    Einfach melden - ich komme
                    <mark class="hc-mark">persönlich</mark>
                    vorbei!
                </h2>

                <p v-reveal="{ delay: 120 }" class="mt-6 max-w-md text-lg leading-relaxed text-neutral-300">
                    Kein kompliziertes Formular. Schreib mir einfach oder ruf direkt an -
                    ich helfe dir schnell und unkompliziert.
                </p>

                <ul v-reveal="{ delay: 180 }" class="hc-mono mt-8 space-y-3 text-sm">
                    <li>
                        <a href="mailto:info@korbitsch.at" class="hc-line">
                            <EnvelopeIcon class="h-5 w-5 text-accent" /> info@korbitsch.at
                        </a>
                    </li>
                    <li>
                        <a href="tel:+436701923388" class="hc-line">
                            <PhoneIcon class="h-5 w-5 text-accent" /> +43 670 1923388
                        </a>
                    </li>
                    <li class="hc-line cursor-default">
                        <ClockIcon class="h-5 w-5 text-accent" /> Antwort meist innerhalb von 24 Stunden
                    </li>
                </ul>

                <ToolboxIllo v-reveal="{ delay: 240 }" class="mt-8 hidden h-28 w-auto lg:block" />
            </div>

            <!-- Rechts: Ticket -->
            <div v-reveal="{ delay: 120 }" class="lg:col-span-7">
                <div class="hc-ticket">

                    <div class="hc-head hc-mono">
                        <span>SERVICE-TICKET</span>
                        <span>Villach &amp; Umgebung</span>
                    </div>

                    <div class="p-6 sm:p-8">

                        <!-- 1 -->
                        <p class="hc-label">1 · Was ist los?</p>
                        <div class="mb-1 flex flex-wrap gap-2.5">
                            <button v-for="p in problems" :key="p.label" type="button" class="hc-chip"
                                :aria-pressed="selected.includes(p.label)" @click="toggle(p.label)">
                                <component :is="p.icon" class="h-4 w-4" />
                                {{ p.label }}
                            </button>
                        </div>
                        <p class="hc-mono mb-7 h-5 text-xs text-neutral-500">
                            {{ selected.length ? `${selected.length} ausgewählt` : 'Mehrere Antworten möglich - oder einfach überspringen' }}
                        </p>

                        <!-- 2 -->
                        <p class="hc-label">2 · Wann passt es dir?</p>
                        <div class="mb-8 flex flex-wrap gap-2.5">
                            <button v-for="w in whens" :key="w" type="button" class="hc-chip"
                                :aria-pressed="when === w" @click="when = when === w ? '' : w">
                                {{ w }}
                            </button>
                        </div>

                        <!-- Perforation -->
                        <div class="hc-perf" aria-hidden="true"></div>

                        <!-- Absenden -->
                        <div class="flex flex-col gap-4 sm:flex-row">
                            <a :href="mailLink" class="hc-btn hc-btn-main flex-1 justify-center">
                                <EnvelopeIcon class="h-5 w-5" />
                                Per Mail senden
                            </a>
                            <a :href="waLink" target="_blank" rel="noopener" class="hc-btn hc-btn-wa flex-1 justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.59 5.96L0 24l6.31-1.65a11.8 11.8 0 0 0 5.75 1.47h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.44-8.45Z" />
                                </svg>
                                WhatsApp
                            </a>
                        </div>

                        <p class="hc-mono mt-5 flex items-center gap-2 text-xs text-neutral-500">
                            <CheckBadgeIcon class="h-4 w-4 text-accent" />
                            Unverbindlich - die Nachricht ist vorbereitet, du ergänzt nur Name &amp; Adresse.
                        </p>
                    </div>
                </div>

                <p class="mt-6 text-center text-xs text-neutral-500 lg:text-left">
                    Auch verfügbar für Gaming PC Builds &amp; technische Beratung
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
    ArrowPathIcon,
    CheckBadgeIcon,
    CircleStackIcon,
    ClockIcon,
    ComputerDesktopIcon,
    DevicePhoneMobileIcon,
    EnvelopeIcon,
    PhoneIcon,
    PrinterIcon,
    QuestionMarkCircleIcon,
    ShieldExclamationIcon,
    TicketIcon
} from '@heroicons/vue/24/outline'
import ToolboxIllo from '@/components/illustrations/ToolboxIllo.vue'
import '@fontsource-variable/jetbrains-mono'

const problems = [
    { label: 'PC langsam / startet nicht', icon: ComputerDesktopIcon },
    { label: 'Smartphone-Problem', icon: DevicePhoneMobileIcon },
    { label: 'Drucker streikt', icon: PrinterIcon },
    { label: 'Viren / Fehler', icon: ShieldExclamationIcon },
    { label: 'Updates & Einrichtung', icon: ArrowPathIcon },
    { label: 'Backup / Daten sichern', icon: CircleStackIcon },
    { label: 'Etwas anderes', icon: QuestionMarkCircleIcon }
]

const whens = ['So schnell wie möglich', 'Diese Woche', 'Nächste Woche', 'Egal']

const selected = ref([])
const when = ref('')

function toggle(label) {
    selected.value = selected.value.includes(label)
        ? selected.value.filter((l) => l !== label)
        : [...selected.value, label]
}

// Vorbereitete Nachricht aus der Auswahl
const message = computed(() => {
    let text = 'ich hätte gerne einen Hausbesuch.'
    if (selected.value.length) text += `\n\nProblem: ${selected.value.join(', ')}`
    if (when.value) text += `\nWunschtermin: ${when.value}`
    return text
})

const mailLink = computed(() => {
    const body = `Hallo Lukas,\n\n${message.value}\n\nMein Name:\nMeine Adresse / Ort:\nTelefonnummer:\n`
    return `mailto:info@korbitsch.at?subject=${encodeURIComponent('Anfrage Hausbesuch / PC Hilfe')}&body=${encodeURIComponent(body)}`
})

const waLink = computed(
    () => `https://wa.me/436701923388?text=${encodeURIComponent(`Hallo Lukas, ${message.value}`)}`
)
</script>

<style scoped>
.hc-mono {
    font-family: 'JetBrains Mono Variable', ui-monospace, SFMono-Regular, Menlo, monospace;
}

.hc-hazard {
    height: 12px;
    background: repeating-linear-gradient(-45deg, var(--color-accent) 0 18px, #0b0b0c 18px 36px);
}

.hc-dots {
    background-image: radial-gradient(rgb(255 255 255 / 0.08) 1px, transparent 1px);
    background-size: 28px 28px;
    mask-image: radial-gradient(ellipse 90% 80% at 50% 40%, #000 25%, transparent 100%);
}

/* ───── Text ───── */
.hc-title {
    font-family: 'JetBrains Mono Variable', ui-monospace, monospace;
    font-size: clamp(1.8rem, 3.6vw, 2.9rem);
    font-weight: 800;
    line-height: 1.18;
    letter-spacing: -0.04em;
}

.hc-mark {
    display: inline-block;
    padding: 0 0.15em;
    color: #0b0b0c;
    background: var(--color-accent);
    transform: rotate(-1.2deg);
}

.hc-line {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    color: rgb(212 212 212);
    transition: color 0.2s;
}

a.hc-line:hover {
    color: var(--color-accent);
}

/* ───── Ticket ───── */
.hc-ticket {
    position: relative;
    overflow: hidden;
    border: 2px solid rgb(245 165 36 / 0.55);
    border-radius: 14px;
    background: linear-gradient(170deg, #16161a, #0f0f12);
    box-shadow: 10px 10px 0 rgb(31 171 171 / 0.55), 0 40px 70px -30px rgb(0 0 0 / 0.8);
}

.hc-head {
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

.hc-label {
    margin-bottom: 0.9rem;
    font-family: 'JetBrains Mono Variable', ui-monospace, monospace;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: var(--color-accent);
}

.hc-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 0.95rem;
    font-size: 0.88rem;
    font-weight: 500;
    color: rgb(212 212 212);
    border: 2px solid rgb(255 255 255 / 0.16);
    border-radius: 8px;
    background: rgb(255 255 255 / 0.03);
    transition: transform 0.15s, border-color 0.15s, background 0.15s, color 0.15s, box-shadow 0.15s;
}

.hc-chip:hover {
    border-color: var(--color-accent);
    transform: translateY(-2px);
}

.hc-chip[aria-pressed='true'] {
    color: #0b0b0c;
    font-weight: 700;
    border-color: var(--color-accent);
    background: var(--color-accent);
    box-shadow: 3px 3px 0 var(--color-brand);
    animation: stamp 0.25s ease-out;
}

.hc-perf {
    position: relative;
    margin: 0 -2rem 1.8rem;
    border-top: 2px dashed rgb(255 255 255 / 0.18);
}

.hc-perf::before,
.hc-perf::after {
    content: '';
    position: absolute;
    top: -13px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #0b0b0c;
    border: 2px solid rgb(245 165 36 / 0.55);
}

.hc-perf::before {
    left: -12px;
}

.hc-perf::after {
    right: -12px;
}

.hc-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    padding: 1rem 1.4rem;
    font-family: 'JetBrains Mono Variable', ui-monospace, monospace;
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    border-radius: 6px;
    transition: transform 0.15s, box-shadow 0.15s, background 0.15s, color 0.15s;
}

.hc-btn-main {
    color: #0b0b0c;
    background: var(--color-accent);
    box-shadow: 5px 5px 0 var(--color-brand);
}

.hc-btn-main:hover {
    transform: translate(-2px, -2px);
    box-shadow: 8px 8px 0 var(--color-brand);
}

.hc-btn-main:active {
    transform: translate(3px, 3px);
    box-shadow: 2px 2px 0 var(--color-brand);
}

.hc-btn-wa {
    color: rgb(74 222 128);
    border: 2px solid rgb(74 222 128 / 0.6);
}

.hc-btn-wa:hover {
    color: #0b0b0c;
    background: rgb(74 222 128);
    border-color: rgb(74 222 128);
}

@keyframes stamp {
    0% {
        transform: scale(1.12) rotate(-2deg);
    }

    100% {
        transform: scale(1) rotate(0);
    }
}

@media (max-width: 640px) {
    .hc-head {
        gap: 0.5rem;
        font-size: 0.6rem;
        letter-spacing: 0.1em;
        white-space: nowrap;
    }

    .hc-perf {
        margin-left: -1.5rem;
        margin-right: -1.5rem;
    }
}

@media (prefers-reduced-motion: reduce) {
    .hc-chip[aria-pressed='true'] {
        animation: none;
    }
}
</style>
