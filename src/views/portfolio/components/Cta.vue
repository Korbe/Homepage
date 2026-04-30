<template>
    <section class="py-24 bg-neutral-900/95 text-white border-t border-neutral-900">
        <div class="max-w-3xl mx-auto px-6 text-center">

            <!-- Headline -->
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
                Willst auch du dein Projekt hier sehen?
            </h2>

            <!-- Subtext -->
            <p class="text-neutral-400 text-lg mb-8">
                Ich entwickle individuelle Webanwendungen und digitale Lösungen -
                von der Idee bis zur Umsetzung.
            </p>

            <!-- CTA -->
            <div class="flex flex-wrap justify-center gap-4">

                <router-link to="/contact"
                    class="bg-brand text-black font-medium px-8 py-4 rounded-xl hover:opacity-90 transition">
                    Projekt anfragen
                </router-link>

                <a href="https://wa.me/436701923388" target="_blank"
                    class="border border-neutral-700 px-6 py-3 rounded-xl text-neutral-300 hover:border-green-500 hover:text-green-400 transition">
                    Oder per WhatsApp
                </a>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>