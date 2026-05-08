<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- Glow unten rechts -->
        <div class="pointer-events-none absolute inset-0 z-0">
            <div
                class="absolute -bottom-[300px] -right-[300px] h-[700px] w-[700px] rounded-full bg-brand opacity-20 blur-[160px]">
            </div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Headline -->
            <div class="mx-auto text-center max-w-2xl mb-16">
                <p class="text-brand text-sm uppercase tracking-wide mb-4">
                    Wobei kann ich dir helfen?
                </p>

                <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-6">
                    Typische Probleme, die ich direkt vor Ort löse
                </h2>

                <p class="text-neutral-300 text-lg">
                    Egal ob kleines Problem oder komplettes Chaos - ich helfe dir schnell und verständlich weiter.
                </p>
            </div>

            <!-- Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                <!-- Card -->
                <div
                    class="group bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-2xl p-6 transition hover:border-brand hover:bg-neutral-900">
                    <div class="text-2xl mb-4">💻</div>
                    <p class="text-neutral-200 font-medium">
                        PC langsam oder startet nicht
                    </p>
                </div>

                <div
                    class="group bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-2xl p-6 transition hover:border-brand hover:bg-neutral-900">
                    <div class="text-2xl mb-4">📱</div>
                    <p class="text-neutral-200 font-medium">
                        Smartphone Probleme
                    </p>
                </div>

                <div
                    class="group bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-2xl p-6 transition hover:border-brand hover:bg-neutral-900">
                    <div class="text-2xl mb-4">🖨️</div>
                    <p class="text-neutral-200 font-medium">
                        Drucker funktioniert nicht
                    </p>
                </div>

                <div
                    class="group bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-2xl p-6 transition hover:border-brand hover:bg-neutral-900">
                    <div class="text-2xl mb-4">🦠</div>
                    <p class="text-neutral-200 font-medium">
                        Viren oder Fehler
                    </p>
                </div>

                <div
                    class="group bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-2xl p-6 transition hover:border-brand hover:bg-neutral-900">
                    <div class="text-2xl mb-4">🔄</div>
                    <p class="text-neutral-200 font-medium">
                        Updates & Einrichtung
                    </p>
                </div>

                <div
                    class="group bg-neutral-900/80 backdrop-blur border border-neutral-800 rounded-2xl p-6 transition hover:border-brand hover:bg-neutral-900">
                    <div class="text-2xl mb-4">💾</div>
                    <p class="text-neutral-200 font-medium">
                        Backup & Daten sichern
                    </p>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>