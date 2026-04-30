<template>
    <section class="py-24 bg-neutral-900/95 text-white border-t border-neutral-900">
        <div class="max-w-4xl mx-auto px-6">

            <!-- Heading -->
            <h2 class="text-3xl md:text-4xl font-bold mb-12 text-center">
                Häufige <span class="text-brand">Fragen</span>
            </h2>

            <!-- FAQ Items -->
            <div class="space-y-4">

                <div v-for="(faq, i) in faqs" :key="i" class="border border-neutral-800 rounded-xl bg-neutral-800/60">

                    <button class="w-full text-left px-6 py-4 flex justify-between items-center" @click="toggle(i)">
                        <span class="font-medium">
                            {{ faq.q }}
                        </span>

                        <span class="text-neutral-500">
                            {{ openIndex === i ? '–' : '+' }}
                        </span>
                    </button>

                    <div v-if="openIndex === i" class="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
                        {{ faq.a }}
                    </div>

                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { homevisitsFaqs } from '@/faqs.js'

const faqs = homevisitsFaqs;
const openIndex = ref(null)

function toggle(i) {
    openIndex.value = openIndex.value === i ? null : i
}


</script>