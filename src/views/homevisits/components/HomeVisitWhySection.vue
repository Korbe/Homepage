<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <div class="pointer-events-none absolute inset-0 z-0">
            <div
                class="absolute -top-[300px] -right-[300px] h-[700px] w-[700px] rounded-full bg-brand opacity-20 blur-[160px]">
            </div>
        </div>

        <!-- CONTENT -->
        <div class="relative z-20 max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Headline -->
            <div class="mx-auto text-center max-w-2xl mb-16">
                <p class="text-brand text-sm uppercase tracking-wide mb-4">
                    Warum Vor-Ort Hilfe?
                </p>

                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    Keine Hotline. Kein Rätselraten.
                </h2>

                <p class="text-neutral-300 text-lg">
                    Ich komme direkt zu dir und löse das Problem dort, wo es entsteht.
                </p>
            </div>

            <!-- Grid -->
            <div class="grid md:grid-cols-2 gap-6">

                <!-- ❌ Selbst probieren -->
                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-neutral-300">
                    <p class="text-red-400 font-medium mb-4">
                        ❌ Selbst probieren
                    </p>

                    <ul class="space-y-2 text-sm">
                        <li>• Stundenlang googeln</li>
                        <li>• Unsichere Lösungen</li>
                        <li>• Frust & Zeitverlust</li>
                    </ul>
                </div>

                <!-- ✔ Vor-Ort Hilfe -->
                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-6 text-neutral-300">
                    <p class="text-green-400 font-medium mb-4">
                        ✔ Vor-Ort Hilfe
                    </p>

                    <ul class="space-y-2 text-sm">
                        <li>• Problem sofort gelöst</li>
                        <li>• Verständliche Erklärung</li>
                        <li>• Kein Stress</li>
                    </ul>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>