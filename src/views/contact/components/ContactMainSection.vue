<template>
    <section class="py-24 bg-neutral-900/95 text-white border-t border-neutral-900">
        <div class="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-12 items-start">

            <!-- LEFT -->
            <div>

                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    Schreib mir einfach
                </h2>

                <p class="text-neutral-400 text-lg mb-6">
                    Egal ob du eine Webanwendung planst, Unterstützung bei Technik brauchst
                    oder ein Gaming Setup willst - ich helfe dir gerne weiter.
                </p>

                <div class="space-y-4 text-neutral-300 text-sm">

                    <div class="flex items-center gap-3">
                        <div class="w-2 h-2 bg-brand rounded-full"></div>
                        <p class="text-neutral-300">Unverbindliche Anfrage</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-2 h-2 bg-brand rounded-full"></div>
                        <p class="text-neutral-300">Schnelle Rückmeldung</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-2 h-2 bg-brand rounded-full"></div>
                        <p class="text-neutral-300">Persönlicher Kontakt</p>
                    </div>

                </div>

            </div>

            <!-- RIGHT -->
            <div
                class="hover:border-brand transition border border-neutral-800 rounded-2xl p-8 bg-neutral-800/60 backdrop-blur">

                <!-- Primary CTAs -->
                <div class="flex gap-4 mb-4">

                    <!-- Schreib mir -->
                    <a href="mailto:info@korbitsch.at"
                        class="flex-1 text-center bg-brand text-black font-medium px-6 py-4 rounded-xl hover:opacity-90 transition">
                        Schreib mir
                    </a>

                    <!-- Call -->
                    <a href="tel:+436701923388"
                        class="flex-1 text-center border border-neutral-700 text-neutral-300 px-6 py-4 rounded-xl hover:border-brand hover:text-brand transition">
                        Ruf mich an
                    </a>

                </div>

                <!-- WhatsApp -->
                <a href="https://wa.me/436701923388" target="_blank"
                    class="block text-center bg-green-500 text-black font-medium px-6 py-4 rounded-xl hover:bg-green-400 transition mb-6">
                    Schreib mir auf WhatsApp
                </a>

                <!-- Divider -->
                <div class="border-t border-neutral-800 pt-6 text-center text-sm text-neutral-400 space-y-2">

                    <p>📧 info@korbitsch.at</p>
                    <p>📞 +43 670 1923388</p>
                    <p>📍 Villach, Österreich</p>

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