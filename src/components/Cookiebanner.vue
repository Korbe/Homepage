<template>
    <div v-if="visible" class="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-2xl px-4">

        <div class="relative border border-neutral-800 bg-neutral-900/90 backdrop-blur rounded-2xl p-6 shadow-xl">

            <!-- Close -->
            <button @click="accept" class="absolute top-3 right-3 text-neutral-500 hover:text-white transition">
                ✕
            </button>

            <!-- Text -->
            <p class="text-sm text-neutral-300 leading-relaxed">
                Durch die Nutzung dieser Website stimmst du den
                <router-link to="/datenschutz" class="text-brand hover:underline">
                    Datenschutzbestimmungen
                </router-link>
                zu.
            </p>

        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)

onMounted(() => {
    const accepted = localStorage.getItem('cookieAccepted')
    if (!accepted) visible.value = true
})

function accept() {
    localStorage.setItem('cookieAccepted', 'true')
    visible.value = false
}
</script>