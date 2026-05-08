<template>
    <section class="py-24 bg-neutral-900/95 text-white border-t border-neutral-900">
        <div class="max-w-4xl mx-auto px-6">

            <!-- Main Heading -->
            <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">
                Häufige <span class="text-brand">Fragen</span>
            </h2>

            <!-- Kategorien -->
            <div class="space-y-12">

                <!-- Webapps -->
                <div>
                    <h3 class="text-xl font-semibold mb-6 text-brand">
                        Websites & Web-Apps
                    </h3>

                    <div class="space-y-4">
                        <FaqItem v-for="(faq, i) in webappFaqs" :key="'web-' + i" :faq="faq" :index="'web-' + i"
                            :openIndex="openIndex" @toggle="toggle" />
                    </div>
                </div>

                <!-- IT Hilfe -->
                <div>
                    <h3 class="text-xl font-semibold mb-6 text-brand">
                        IT Hilfe
                    </h3>

                    <div class="space-y-4">
                        <FaqItem v-for="(faq, i) in homevisitsFaqs" :key="'it-' + i" :faq="faq" :index="'it-' + i"
                            :openIndex="openIndex" @toggle="toggle" />
                    </div>
                </div>

                <!-- PC Builds -->
                <div>
                    <h3 class="text-xl font-semibold mb-6 text-brand">
                        Gaming PC Builds
                    </h3>

                    <div class="space-y-4">
                        <FaqItem v-for="(faq, i) in pcBuildFaqs" :key="'pc-' + i" :faq="faq" :index="'pc-' + i"
                            :openIndex="openIndex" @toggle="toggle" />
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { webappFaqs, homevisitsFaqs, pcBuildFaqs } from '@/faqs.js'
import FaqItem from './FaqItem.vue'

const openIndex = ref(null)

function toggle(index) {
    openIndex.value = openIndex.value === index ? null : index
}
</script>