<template>
    <section id="kontakt" class="py-24 bg-neutral-900/95 text-white">
        <div class="max-w-5xl mx-auto px-6 lg:px-12 text-center">


            <img src="@/assets/logo.png" class="h-32 mb-5 mx-auto" alt="logo" />

            <!-- Heading -->
            <h2 class="text-3xl md:text-4xl font-bold mb-4">
                Lass uns dein Projekt umsetzen
            </h2>

            <p class="text-neutral-400 text-lg mb-12">
                Ob Web-Anwendung oder technische Unterstützung - ich melde mich persönlich bei dir zurück.
            </p>

            <!-- CTA Box -->
            <div class="border border-neutral-800 rounded-2xl p-10 bg-neutral-800/60">

                <!-- Primary CTA -->
                <div class="mb-4">
                    <a href="mailto:info@korbitsch.at"
                        class="inline-block bg-brand text-black font-medium px-8 py-4 rounded-xl hover:opacity-90 transition">
                        Projekt anfragen
                    </a>
                </div>

                <!-- Secondary CTA -->
                <div class="mb-8">
                    <a href="https://wa.me/436701923388" target="_blank"
                        class="inline-flex items-center justify-center gap-2 border border-neutral-700 text-neutral-300 font-medium px-6 py-3 rounded-xl hover:border-green-500 hover:text-green-400 transition">

                        <!-- WhatsApp Icon -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-green-500" viewBox="0 0 24 24"
                            fill="currentColor">
                            <path
                                d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.5 0 .17 5.33.17 11.89c0 2.1.55 4.15 1.59 5.96L0 24l6.31-1.65a11.8 11.8 0 0 0 5.75 1.47h.01c6.56 0 11.89-5.33 11.89-11.89 0-3.18-1.24-6.17-3.44-8.45Z" />
                        </svg>

                        Schreib mir auf Whatsapp
                    </a>
                </div>

                <!-- Contact Info (Trust Layer) -->
                <div class="text-neutral-300 text-sm space-y-2 border-t border-neutral-800 pt-6">

                    <p class="flex items-center justify-center gap-2">
                        📧 <span>info@korbitsch.at</span>
                    </p>

                    <p class="flex items-center justify-center gap-2">
                        📞 <span>+43 670 1923388</span>
                    </p>

                    <p class="text-neutral-300 mt-3">
                        Antwort meist innerhalb von 24 Stunden
                    </p>

                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>