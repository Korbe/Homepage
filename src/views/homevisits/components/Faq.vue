<template>
    <section class="wk-section wk-section-alt">
        <div class="wk-glow wk-glow-amber -right-40 top-1/3"></div>

        <div class="wk-wrap">

            <div class="wk-head">
                <div v-reveal>
                    <p class="wk-kicker">06 / FAQ</p>
                    <h2 class="wk-title">Häufige <mark class="wk-mark">Fragen</mark></h2>
                </div>
                <p v-reveal="{ delay: 80 }" class="wk-lead">
                    Noch etwas unklar? Hier stehen die Antworten auf die Fragen, die ich am häufigsten höre.
                </p>
            </div>

            <div class="mx-auto max-w-3xl space-y-4">
                <div v-for="(faq, i) in faqs" :key="i" v-reveal="{ delay: i * 60 }" class="wk-faq"
                    :class="openIndex === i ? 'is-open' : ''">

                    <button type="button" class="wk-faq-btn" :aria-expanded="openIndex === i" @click="toggle(i)">
                        <span class="wk-mono wk-faq-no">Q{{ String(i + 1).padStart(2, '0') }}</span>
                        <span class="flex-1 text-left font-medium">{{ faq.q }}</span>
                        <span class="wk-faq-sign wk-mono" aria-hidden="true">{{ openIndex === i ? '−' : '+' }}</span>
                    </button>

                    <div v-if="openIndex === i" class="wk-faq-a">
                        <span class="wk-mono text-brand">A&gt;</span>
                        <p>{{ faq.a }}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { homevisitsFaqs } from '@/faqs.js'
import '@fontsource-variable/jetbrains-mono'
import '../werkstatt.css'

const faqs = homevisitsFaqs
const openIndex = ref(null)

function toggle(i) {
    openIndex.value = openIndex.value === i ? null : i
}
</script>

<style scoped>
.wk-faq {
    border: 2px solid rgb(255 255 255 / 0.14);
    border-radius: 12px;
    background: #121214;
    transition: border-color 0.2s, box-shadow 0.2s, transform 0.2s;
}

.wk-faq:hover {
    border-color: rgb(245 165 36 / 0.6);
}

.wk-faq.is-open {
    border-color: var(--color-accent);
    box-shadow: 6px 6px 0 var(--color-brand);
    transform: translate(-3px, -3px);
}

.wk-faq-btn {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1rem;
    padding: 1.1rem 1.25rem;
}

.wk-faq-no {
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: var(--color-accent);
}

.wk-faq-sign {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    font-size: 1.2rem;
    font-weight: 800;
    color: var(--color-accent);
    border: 2px solid rgb(245 165 36 / 0.6);
    border-radius: 6px;
    transition: background 0.2s, color 0.2s;
}

.is-open .wk-faq-sign {
    color: #0b0b0c;
    background: var(--color-accent);
}

.wk-faq-a {
    display: flex;
    gap: 0.9rem;
    margin: 0 1.25rem 1.25rem;
    padding-top: 1rem;
    border-top: 1px dashed rgb(255 255 255 / 0.18);
    font-size: 0.95rem;
    line-height: 1.75;
    color: rgb(163 163 163);
}
</style>
