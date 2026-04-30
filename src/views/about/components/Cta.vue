<template>
    <section class="py-24 bg-neutral-900/95 text-white border-t border-neutral-800">
        <div class="max-w-3xl mx-auto px-6 text-center">

            <!-- Headline -->
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
                Jetzt kennst du <span class="text-brand">mich</span> - wer bist <span class="text-brand">du</span>?
            </h2>

            <!-- Text -->
            <p class="text-neutral-400 text-lg mb-8">
                Egal ob du eine Idee hast, ein Problem lösen willst oder einfach nur eine Frage -
                schreib mir. Ich freue mich, von dir zu hören.
            </p>

            <!-- CTA -->
            <div class="flex flex-wrap justify-center gap-4">

                <router-link to="contact"
                    class="bg-brand text-black font-medium px-8 py-4 rounded-xl hover:opacity-90 transition">
                    Kontakt aufnehmen
                </router-link>

                <a href="https://wa.me/436701923388" target="_blank"
                    class="border border-neutral-700 px-6 py-3 rounded-xl text-neutral-300 hover:border-green-500 hover:text-green-400 transition">
                    Oder per WhatsApp
                </a>

            </div>

            <!-- Contact Info -->
            <div class="mt-10 text-neutral-400 text-sm space-y-2">

                <p>📧 info@korbitsch.at</p>

                <p>📞 +43 670 1923388</p>

                <p class="text-neutral-500 mt-4">
                    Antwort meist innerhalb von 24 Stunden
                </p>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>