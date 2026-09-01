<template>
    <div class="bg-neutral-950 text-white">

        <!-- HERO -->
        <section class="relative pt-48 pb-16 overflow-hidden">

            <!-- Glow -->
            <div class="pointer-events-none absolute inset-0">
                <div
                    class="absolute top-[-150px] left-[-150px] h-[400px] w-[400px] rounded-full bg-brand opacity-20 blur-[140px]">
                </div>
            </div>

            <div class="relative z-10 max-w-3xl mx-auto px-6">

                <router-link :to="{ name: 'Blog' }"
                    class="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-brand transition mb-8">
                    &larr; Zurück zum Blog
                </router-link>

                <div v-reveal class="flex items-center gap-3 text-sm text-neutral-400 mb-4">
                    <span class="text-brand">{{ category }}</span>
                    <!-- <span>&middot;</span>
                    <span>{{ date }}</span> -->
                    <span>&middot;</span>
                    <span>{{ readTime }}</span>
                </div>

                <h1 v-reveal="{ delay: 60 }" class="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    {{ title }}
                </h1>

                <p v-reveal="{ delay: 120 }" class="text-neutral-400 text-lg">
                    {{ description }}
                </p>

            </div>
        </section>

        <!-- CONTENT -->
        <section class="pb-24">
            <div class="max-w-3xl mx-auto px-6 space-y-8 leading-relaxed text-neutral-300">
                <slot />
            </div>
        </section>

    </div>
</template>

<script setup>
defineProps({
    category: { type: String, required: true },
    date: { type: String, required: true },
    readTime: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
})
</script>
