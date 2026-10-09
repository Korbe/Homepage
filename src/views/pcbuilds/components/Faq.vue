<template>
    <section class="pg-section">
        <div class="pg-glow -left-40 top-1/3"></div>

        <div class="pg-wrap">

            <div v-reveal class="pg-head">
                <p class="pg-tag">07 · FAQ</p>
                <h2 class="pg-title">Häufige <span class="pg-grad">Fragen</span></h2>
            </div>

            <div class="mx-auto max-w-3xl space-y-3">
                <div v-for="(faq, i) in faqs" :key="i" v-reveal="{ delay: i * 60 }" class="pg-faq"
                    :class="openIndex === i ? 'is-open' : ''">

                    <button type="button" class="pg-faq-btn" :aria-expanded="openIndex === i" @click="toggle(i)">
                        <span class="pg-font pg-faq-no">{{ String(i + 1).padStart(2, '0') }}</span>
                        <span class="flex-1 text-left text-lg font-medium">{{ faq.q }}</span>
                        <span class="pg-faq-ico"><PlusIcon class="h-5 w-5" /></span>
                    </button>

                    <div class="pg-faq-panel" :style="{ gridTemplateRows: openIndex === i ? '1fr' : '0fr' }">
                        <div class="overflow-hidden">
                            <p class="whitespace-pre-line px-6 pb-6 pl-[4.25rem] leading-relaxed text-neutral-400">{{ faq.a }}</p>
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
import { pcBuildFaqs } from '@/faqs.js'
import '@fontsource/chakra-petch/500.css'
import '@fontsource/chakra-petch/700.css'
import '@fontsource/chakra-petch/700-italic.css'
import '@/styles/gaming.css'

const faqs = pcBuildFaqs
const openIndex = ref(null)

function toggle(i) {
    openIndex.value = openIndex.value === i ? null : i
}
</script>

<style scoped>
.pg-faq {
    border: 1px solid rgb(255 255 255 / 0.1);
    background: linear-gradient(160deg, rgb(255 255 255 / 0.04), rgb(255 255 255 / 0.01));
    clip-path: polygon(0 0, calc(100% - 14px) 0, 100% 14px, 100% 100%, 14px 100%, 0 calc(100% - 14px));
    transition: border-color 0.25s, background 0.25s;
}

.pg-faq:hover {
    background: linear-gradient(160deg, rgb(63 217 208 / 0.08), rgb(255 255 255 / 0.01));
}

.pg-faq.is-open {
    background: linear-gradient(160deg, rgb(63 217 208 / 0.14), rgb(245 165 36 / 0.04));
    box-shadow: inset 3px 0 0 #3fd9d0;
}

.pg-faq-btn {
    display: flex;
    width: 100%;
    align-items: center;
    gap: 1.1rem;
    padding: 1.2rem 1.5rem;
}

.pg-faq-no {
    width: 1.7rem;
    font-size: 1rem;
    font-weight: 700;
    font-style: italic;
    color: #f5a524;
}

.pg-faq-ico {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.1rem;
    height: 2.1rem;
    flex-shrink: 0;
    color: #3fd9d0;
    background: rgb(63 217 208 / 0.12);
    clip-path: polygon(0 0, calc(100% - 7px) 0, 100% 7px, 100% 100%, 7px 100%, 0 calc(100% - 7px));
    transition: transform 0.3s, background 0.25s, color 0.25s;
}

.is-open .pg-faq-ico {
    transform: rotate(135deg);
    color: #05090a;
    background: #3fd9d0;
}

.pg-faq-panel {
    display: grid;
    transition: grid-template-rows 0.35s ease;
}

@media (prefers-reduced-motion: reduce) {
    .pg-faq-panel,
    .pg-faq-ico {
        transition: none;
    }
}
</style>
