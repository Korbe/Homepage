<template>
    <section class="wa-section">
        <div class="wa-glow -left-40 top-1/3"></div>

        <div class="wa-wrap">

            <div v-reveal class="wa-head">
                <p class="wa-pill">FAQ</p>
                <h2 class="wa-title">Häufige <span class="wa-grad">Fragen</span></h2>
            </div>

            <div class="mx-auto max-w-3xl space-y-3">
                <div v-for="(faq, i) in faqs" :key="i" v-reveal="{ delay: i * 60 }" class="wa-faq"
                    :class="openIndex === i ? 'is-open' : ''">

                    <button type="button" class="wa-faq-btn" :aria-expanded="openIndex === i" @click="toggle(i)">
                        <span class="flex-1 text-left text-lg font-medium">{{ faq.q }}</span>
                        <span class="wa-faq-ico">
                            <PlusIcon class="h-5 w-5" />
                        </span>
                    </button>

                    <div class="wa-faq-panel" :style="{ gridTemplateRows: openIndex === i ? '1fr' : '0fr' }">
                        <div class="overflow-hidden">
                            <p class="px-6 pb-6 leading-relaxed text-neutral-400">{{ faq.a }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import { webappFaqs } from '@/faqs.js'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'

const faqs = webappFaqs
const openIndex = ref(null)

function toggle(i) {
    openIndex.value = openIndex.value === i ? null : i
}
</script>

<style scoped>
.wa-faq {
    border: 1px solid rgb(255 255 255 / 0.09);
    border-radius: 20px;
    background: linear-gradient(160deg, rgb(255 255 255 / 0.05), rgb(255 255 255 / 0.015));
    transition: border-color 0.3s, box-shadow 0.3s;
}

.wa-faq:hover {
    border-color: rgb(31 171 171 / 0.4);
}

.wa-faq.is-open {
    border-color: rgb(31 171 171 / 0.6);
    box-shadow: 0 25px 50px -30px rgb(31 171 171 / 0.5);
}

.wa-faq-btn {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1rem;
    padding: 1.3rem 1.5rem;
}

.wa-faq-ico {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.2rem;
    height: 2.2rem;
    flex-shrink: 0;
    border-radius: 50%;
    color: var(--color-brand);
    background: rgb(31 171 171 / 0.12);
    transition: transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1), background 0.3s, color 0.3s;
}

.is-open .wa-faq-ico {
    transform: rotate(135deg);
    color: #04201f;
    background: var(--color-brand);
}

/* sanftes Auf- und Zuklappen ohne feste Höhe */
.wa-faq-panel {
    display: grid;
    transition: grid-template-rows 0.35s ease;
}

@media (prefers-reduced-motion: reduce) {
    .wa-faq-panel,
    .wa-faq-ico {
        transition: none;
    }
}
</style>
