<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- Glow -->
        <div class="pointer-events-none absolute inset-0 z-0">
            <div
                class="absolute -top-[300px] -left-[300px] h-[700px] w-[700px] rounded-full bg-brand opacity-15 blur-[160px]">
            </div>
        </div>

        <div class="relative z-10 max-w-4xl mx-auto px-6">

            <!-- Heading -->
            <div class="text-center mb-12">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    Preise
                </h2>

                <p class="text-neutral-400 text-lg">
                    Transparent und fair - du zahlst nur die tatsächliche Arbeitszeit.
                </p>
            </div>

            <!-- Pricing Card -->
            <div
                class="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-2xl p-10 transition hover:border-brand">

                <!-- First Hour -->
                <div class="text-center mb-10">
                    <p class="text-neutral-400 text-sm mb-2">Erste Stunde</p>
                    <p class="text-4xl font-bold mb-2">
                        90€
                    </p>
                    <p class="text-neutral-400">
                        inkl. Analyse & Problemlösung vor Ort
                    </p>
                </div>

                <!-- Divider -->
                <div class="border-t border-neutral-800 my-8"></div>

                <!-- After -->
                <div class="text-center mb-10">
                    <p class="text-neutral-400 text-sm mb-2">Danach</p>
                    <p class="text-2xl font-semibold">
                        20€ pro 15 Minuten
                    </p>
                    <p class="text-neutral-500 text-sm mt-2">
                        Abgerechnet wird fair im 15-Minuten-Takt
                    </p>
                </div>

                <!-- Example -->
                <div class="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center mb-10">
                    <p class="text-neutral-400 text-sm mb-2">
                        Beispiel
                    </p>

                    <p class="text-neutral-300">
                        1h 26min → wird auf 1h 30min aufgerundet
                    </p>

                    <p class="text-white font-semibold mt-2">
                        = 90€ + 40€ = 130€
                    </p>
                </div>

                <!-- Divider -->
                <div class="border-t border-neutral-800 my-8"></div>

                <!-- Extra Info -->
                <div class="space-y-4 text-sm">

                    <div class="flex items-center gap-3 text-neutral-300">
                        <div class="w-2 h-2 bg-brand rounded-full"></div>
                        <p>Preis gilt ausschließlich für IT-Hausbesuche</p>
                    </div>

                    <div class="flex items-center gap-3 text-neutral-300">
                        <div class="w-2 h-2 bg-brand rounded-full"></div>
                        <p>Webentwicklung wird individuell kalkuliert</p>
                    </div>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>