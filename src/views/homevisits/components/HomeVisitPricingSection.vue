<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- Glow oben rechts -->
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
                    Transparent und fair – du zahlst nur die tatsächliche Arbeitszeit.
                </p>
            </div>

            <!-- Pricing Card -->
            <div
                class="bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-2xl p-10 transition hover:border-brand">

                <!-- Price Highlight -->
                <div class="text-center mb-10">
                    <p class="text-neutral-400 text-sm mb-2">Startpreis</p>
                    <p class="text-4xl font-bold mb-2">
                        50€
                    </p>
                    <p class="text-neutral-400">
                        für die ersten 30 Minuten
                    </p>
                </div>

                <!-- Divider -->
                <div class="border-t border-neutral-800 my-8"></div>

                <!-- Hourly -->
                <div class="text-center mb-10">
                    <p class="text-neutral-400 text-sm mb-2">Danach</p>
                    <p class="text-2xl font-semibold">
                        90€ pro Stunde
                    </p>
                    <p class="text-neutral-500 text-sm mt-2">
                        Abgerechnet wird fair nach tatsächlichem Aufwand
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

                    <div class="flex items-center gap-3 text-neutral-300">
                        <div class="w-2 h-2 bg-brand rounded-full"></div>
                        <p>Anfahrt: 10€ (Villach Stadt), 20€ (Villach Land)</p>
                    </div>

                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>