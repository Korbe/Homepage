<template>
    <section class="ct relative isolate flex min-h-svh flex-col overflow-hidden bg-[#0c0e0e] text-white">

        <!-- ───────── Hintergrund ───────── -->
        <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
            <div class="ct-dots absolute inset-0"></div>
            <div class="absolute -left-40 top-1/3 h-[480px] w-[480px] rounded-full bg-brand/20 blur-[150px]"></div>
            <div class="absolute -right-32 -top-20 h-[420px] w-[420px] rounded-full bg-accent/12 blur-[150px]"></div>
            <ChatBubbleLeftEllipsisIcon class="ct-deco absolute left-[6%] top-[22%] h-14 w-14 text-brand/15" />
            <ChatBubbleOvalLeftIcon class="ct-deco absolute bottom-[14%] left-[44%] h-10 w-10 text-accent/20"
                style="animation-delay: -3s" />
        </div>

        <div
            class="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-14 px-6 pb-16 pt-32 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pt-36">

            <!-- Links -->
            <div class="lg:col-span-7">

                <p class="ct-in mb-6 inline-flex items-center gap-3 rounded-full border border-brand/40 bg-brand/10 px-4 py-2 text-sm font-medium text-brand"
                    style="--d: 80ms">
                    <span class="relative flex h-2.5 w-2.5">
                        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-75"></span>
                        <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand"></span>
                    </span>
                    Kontakt · Antwort meist in 24 Stunden
                </p>

                <h1 class="ct-title">
                    <span class="ct-in block" style="--d: 180ms">Lass uns über dein</span>
                    <span class="ct-in block" style="--d: 280ms">
                        <span class="ct-bubble ct-bubble-brand">Projekt</span> oder deine
                    </span>
                    <span class="ct-in block" style="--d: 380ms">
                        <span class="ct-bubble ct-bubble-accent">Technikprobleme</span>
                    </span>
                    <span class="ct-in block" style="--d: 480ms">sprechen.</span>
                </h1>

                <p class="ct-in mt-8 max-w-xl text-lg leading-relaxed text-neutral-300" style="--d: 640ms">
                    Egal ob Webanwendung, IT-Hilfe oder Gaming Setup - schreib mir einfach.
                    Ich melde mich persönlich bei dir zurück.
                </p>

                <!-- Kanäle -->
                <div class="ct-in mt-9 grid max-w-xl gap-3 sm:grid-cols-3" style="--d: 760ms">
                    <a href="mailto:info@korbitsch.at" class="ct-channel ct-channel-mail">
                        <EnvelopeIcon class="h-6 w-6" />
                        <span>
                            <b>Mail</b>
                            <small>info@korbitsch.at</small>
                        </span>
                    </a>
                    <a href="tel:+436701923388" class="ct-channel">
                        <PhoneIcon class="h-6 w-6 text-accent" />
                        <span>
                            <b>Anrufen</b>
                            <small>+43 670 1923388</small>
                        </span>
                    </a>
                    <a href="https://wa.me/436701923388" target="_blank" rel="noopener" class="ct-channel ct-channel-wa">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.59 5.96L0 24l6.31-1.65a11.8 11.8 0 0 0 5.75 1.47h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.44-8.45Z" />
                        </svg>
                        <span>
                            <b>WhatsApp</b>
                            <small>Schreib mir direkt</small>
                        </span>
                    </a>
                </div>
            </div>

            <!-- Rechts: Chat -->
            <div class="relative lg:col-span-5" aria-hidden="true">
                <div class="ct-in relative mx-auto w-full max-w-[420px]" style="--d: 500ms">

                    <!-- schwebende Chips -->
                    <div class="absolute -right-3 -top-5 z-20 hidden sm:block">
                        <div class="animate-float-soft-slow">
                            <span class="ct-sticker">Kostenloses Erstgespräch</span>
                        </div>
                    </div>

                    <div class="ct-window">
                        <!-- Kopf -->
                        <div class="flex items-center gap-3 border-b border-white/10 bg-white/5 px-5 py-4">
                            <div class="relative">
                                <img :src="me" alt="" width="44" height="44"
                                    class="h-11 w-11 rounded-full object-cover object-[50%_20%] ring-2 ring-brand/60" />
                                <span class="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#161a1a] bg-green-400"></span>
                            </div>
                            <div class="leading-tight">
                                <p class="font-semibold">Lukas Korbitsch</p>
                                <p class="text-xs text-green-400">online · antwortet meist innerhalb von 24 h</p>
                            </div>
                        </div>

                        <!-- Nachrichten -->
                        <div class="ct-messages">
                            <Transition name="msg">
                                <div v-if="step >= 1" class="ct-msg ct-msg-me">
                                    Hi Lukas, ich brauche eine neue Website für mein Unternehmen.
                                </div>
                            </Transition>

                            <Transition name="msg">
                                <div v-if="step === 2" class="ct-msg ct-msg-lukas ct-typing">
                                    <i></i><i></i><i></i>
                                </div>
                            </Transition>
                            <Transition name="msg">
                                <div v-if="step >= 3" class="ct-msg ct-msg-lukas">
                                    Hallo! Erzähl mir kurz mehr - ich melde mich persönlich bei dir.
                                </div>
                            </Transition>

                            <Transition name="msg">
                                <div v-if="step >= 4" class="ct-msg ct-msg-me">
                                    Mein PC ist außerdem ziemlich langsam ...
                                </div>
                            </Transition>

                            <Transition name="msg">
                                <div v-if="step === 5" class="ct-msg ct-msg-lukas ct-typing">
                                    <i></i><i></i><i></i>
                                </div>
                            </Transition>
                            <Transition name="msg">
                                <div v-if="step >= 6" class="ct-msg ct-msg-lukas">
                                    Beides kein Problem. Ich helfe dir bei Web <em>und</em> Technik.
                                </div>
                            </Transition>

                            <Transition name="msg">
                                <p v-if="step >= 7" class="ct-read">
                                    <CheckIcon class="h-3.5 w-3.5" /> Antwort meist innerhalb von 24 Stunden
                                </p>
                            </Transition>
                        </div>

                        <!-- Eingabe = echter Mail-Link -->
                        <div class="border-t border-white/10 p-4">
                            <a href="mailto:info@korbitsch.at?subject=Anfrage%20über%20korbitsch.at" class="ct-input">
                                <span class="text-neutral-400">Nachricht schreiben ...</span>
                                <span class="ct-send"><PaperAirplaneIcon class="h-5 w-5" /></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import {
    ChatBubbleLeftEllipsisIcon,
    ChatBubbleOvalLeftIcon,
    CheckIcon,
    EnvelopeIcon,
    PaperAirplaneIcon,
    PhoneIcon
} from '@heroicons/vue/24/outline'
import me from '@/assets/me.jpg'
import '@fontsource-variable/outfit/wght.css'

// Zeitplan des Chats (ms -> Schritt)
const timeline = [
    [900, 1],
    [2200, 2],
    [4200, 3],
    [6300, 4],
    [7600, 5],
    [9600, 6],
    [10900, 7],
    [16500, 0]
]

const step = ref(0)
let timers = []
let alive = true

function play() {
    timers.forEach(clearTimeout)
    timers = timeline.map(([t, s]) => setTimeout(() => (step.value = s), t))
    // nach dem Ausblenden von vorn beginnen
    timers.push(setTimeout(() => alive && play(), 17500))
}

onMounted(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        step.value = 7
        return
    }
    play()
})

onBeforeUnmount(() => {
    alive = false
    timers.forEach(clearTimeout)
})
</script>

<style scoped>
.ct {
    font-family: 'Outfit Variable', ui-sans-serif, system-ui, sans-serif;
}

.ct-dots {
    background-image: radial-gradient(rgb(255 255 255 / 0.07) 1px, transparent 1px);
    background-size: 26px 26px;
    mask-image: radial-gradient(ellipse 80% 70% at 60% 40%, #000 20%, transparent 100%);
}

.ct-deco {
    animation: bob 7s ease-in-out infinite;
}

/* ───── Headline ───── */
.ct-title {
    font-size: clamp(2.4rem, min(5.6vw, 9.6vh), 4.9rem);
    font-weight: 700;
    line-height: 1.12;
    letter-spacing: -0.03em;
}

.ct-bubble {
    position: relative;
    display: inline-block;
    padding: 0 0.28em 0.04em;
    margin: 0.04em 0;
    border-radius: 0.32em;
}

.ct-bubble::after {
    content: '';
    position: absolute;
    bottom: -0.16em;
    left: 0.35em;
    width: 0.32em;
    height: 0.32em;
    background: inherit;
    clip-path: polygon(0 0, 100% 0, 0 100%);
}

.ct-bubble-brand {
    color: #04201f;
    background: var(--color-brand);
}

.ct-bubble-accent {
    color: #2a1900;
    background: var(--color-accent);
    transform: rotate(-1.2deg);
}

/* ───── Kanäle ───── */
.ct-channel {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.9rem 1rem;
    border: 1px solid rgb(255 255 255 / 0.14);
    border-radius: 16px;
    background: rgb(255 255 255 / 0.04);
    color: #fff;
    transition: transform 0.2s, border-color 0.2s, background 0.2s;
}

.ct-channel b {
    display: block;
    font-size: 0.95rem;
    font-weight: 600;
}

.ct-channel small {
    display: block;
    font-size: 0.72rem;
    color: rgb(163 163 163);
}

.ct-channel:hover {
    transform: translateY(-3px);
    border-color: var(--color-accent);
    background: rgb(255 255 255 / 0.08);
}

.ct-channel-mail {
    border-color: rgb(31 171 171 / 0.6);
    background: rgb(31 171 171 / 0.12);
    color: var(--color-brand);
}

.ct-channel-mail b {
    color: #fff;
}

.ct-channel-mail:hover {
    border-color: var(--color-brand);
    background: rgb(31 171 171 / 0.22);
}

.ct-channel-wa:hover {
    border-color: rgb(74 222 128);
}

/* ───── Chat ───── */
.ct-window {
    overflow: hidden;
    border: 1px solid rgb(255 255 255 / 0.12);
    border-radius: 26px;
    background: linear-gradient(170deg, #1a2020, #0f1313);
    box-shadow: 0 40px 80px -30px rgb(0 0 0 / 0.8), 0 0 90px -30px rgb(31 171 171 / 0.4);
}

.ct-messages {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.7rem;
    height: 360px;
    padding: 1.2rem;
    overflow: hidden;
}

.ct-msg {
    max-width: 82%;
    padding: 0.75rem 1rem;
    font-size: 0.95rem;
    line-height: 1.4;
    border-radius: 20px;
}

.ct-msg-me {
    align-self: flex-end;
    color: #04201f;
    background: var(--color-brand);
    border-bottom-right-radius: 6px;
}

.ct-msg-lukas {
    align-self: flex-start;
    background: #252d2d;
    border-bottom-left-radius: 6px;
}

.ct-msg em {
    font-style: normal;
    color: var(--color-accent);
    font-weight: 600;
}

.ct-typing {
    display: flex;
    gap: 5px;
    padding: 0.95rem 1.1rem;
}

.ct-typing i {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: rgb(163 163 163);
    animation: dot 1.1s infinite ease-in-out;
}

.ct-typing i:nth-child(2) {
    animation-delay: 0.15s;
}

.ct-typing i:nth-child(3) {
    animation-delay: 0.3s;
}

.ct-read {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    align-self: flex-start;
    margin-left: 0.4rem;
    font-size: 0.75rem;
    color: rgb(74 222 128);
}

.ct-input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.4rem 0.4rem 0.4rem 1.2rem;
    font-size: 0.95rem;
    border: 1px solid rgb(255 255 255 / 0.14);
    border-radius: 999px;
    background: rgb(255 255 255 / 0.04);
    transition: border-color 0.2s;
}

.ct-input:hover {
    border-color: var(--color-brand);
}

.ct-send {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
    color: #04201f;
    background: var(--color-brand);
    transition: transform 0.2s;
}

.ct-input:hover .ct-send {
    transform: rotate(-12deg) scale(1.08);
}

.ct-sticker {
    display: inline-block;
    padding: 0.5rem 0.9rem;
    font-size: 0.8rem;
    font-weight: 700;
    color: #2a1900;
    background: var(--color-accent);
    border-radius: 999px;
    transform: rotate(6deg);
    box-shadow: 4px 4px 0 rgb(0 0 0 / 0.5);
}

/* Nachrichten ein-/ausblenden */
.msg-enter-active {
    transition: opacity 0.35s ease, transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.msg-leave-active {
    transition: opacity 0.25s ease, transform 0.25s ease;
}

.msg-enter-from {
    opacity: 0;
    transform: translateY(16px) scale(0.92);
}

.msg-leave-to {
    opacity: 0;
    transform: scale(0.92);
}

/* ───── Auftritt ───── */
.ct-in {
    opacity: 0;
    animation: rise 0.9s var(--d, 0ms) cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes rise {
    from {
        opacity: 0;
        transform: translateY(28px);
    }

    to {
        opacity: 1;
        transform: none;
    }
}

@keyframes dot {

    0%,
    60%,
    100% {
        transform: translateY(0);
        opacity: 0.5;
    }

    30% {
        transform: translateY(-5px);
        opacity: 1;
    }
}

@keyframes bob {

    0%,
    100% {
        transform: translateY(0) rotate(-4deg);
    }

    50% {
        transform: translateY(-14px) rotate(4deg);
    }
}

@media (prefers-reduced-motion: reduce) {

    .ct-in,
    .ct-deco,
    .ct-typing i {
        animation: none;
    }

    .ct-in {
        opacity: 1;
    }
}
</style>
