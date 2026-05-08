<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- Glow -->
        <div class="absolute right-0 top-0 translate-x-1/2 -translate-y-1/2
     h-[900px] w-[900px] rounded-full
     bg-brand opacity-25 blur-[140px] mix-blend-screen">
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Content -->
            <div class="grid md:grid-cols-2 gap-12 items-center">

                <!-- Left -->
                <div>
                    <p class="text-brand text-sm uppercase tracking-wide mb-4">
                        Vor Ort Service
                    </p>

                    <h2 class="text-3xl md:text-4xl font-bold mb-6">
                        IT Hilfe in <span class="text-brand">Villach & Umgebung</span>
                    </h2>

                    <p class="text-neutral-400 text-lg mb-8">
                        Kein Einschicken, kein Warten, kein Rätselraten -
                        ich komme direkt zu dir und löse das Problem vor Ort.
                    </p>

                    <ul class="space-y-3 text-neutral-300 text-sm mb-8">
                        <li>✔ Schnelle Termine - oft am selben oder nächsten Tag</li>
                        <li>✔ Direkt bei dir zu Hause - kein Abbau nötig</li>
                        <li>✔ Verständliche Hilfe ohne Fachchinesisch</li>
                        <li>✔ Persönlicher Ansprechpartner statt Hotline</li>
                    </ul>

                    <router-link to="/it-hilfe"
                        class="inline-block bg-brand text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
                        Hausbesuch anfragen
                    </router-link>
                </div>

                <!-- Right -->
                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8">

                    <h3 class="font-semibold mb-4">
                        Einsatzgebiet
                    </h3>

                    <p class="text-neutral-400 text-sm mb-6">
                        Ich bin hauptsächlich in Villach und Umgebung unterwegs.
                    </p>

                    <div class="space-y-2 text-neutral-300 text-sm">
                        <p>📍 Villach Stadt</p>
                        <p>📍 Villach Land</p>
                        <p>📍 Umgebung auf Anfrage</p>
                    </div>

                    <div class="mt-6 border-t border-neutral-800 pt-6 text-sm text-neutral-400">
                        Außerhalb von Villach Land 20€ Anfahrtspauschale
                    </div>

                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>