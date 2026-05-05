<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- Glow unten links -->
        <div class="pointer-events-none absolute inset-0 z-0">
            <div
                class="absolute -bottom-[300px] -left-[300px] h-[700px] w-[700px] rounded-full bg-brand opacity-20 blur-[160px]">
            </div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
            <!-- Headline -->
            <div class="mx-auto text-center max-w-2xl mb-16">
                <p class="text-brand text-sm uppercase tracking-wide mb-4">
                    Beispiel Builds
                </p>

                <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-6">
                    Was du für dein Budget erwarten kannst
                </h2>

                <p class="text-neutral-300 text-lg">
                    Jeder PC wird individuell geplant – diese Beispiele geben dir eine realistische Orientierung.
                </p>
            </div>

            <!-- Grid -->
            <div class="grid md:grid-cols-3 gap-6">

                <!-- 1500€ -->
                <div
                    class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition">
                    <p class="text-neutral-400 text-sm mb-2">Einsteiger</p>

                    <h3 class="text-xl font-semibold mb-4">
                        ~1500€ Setup
                    </h3>

                    <ul class="space-y-2 text-neutral-300 mb-6 text-sm">
                        <li>• Perfekt für 1080p / 1440p Gaming</li>
                        <li>• Hohe FPS in aktuellen Spielen</li>
                        <li>• Sehr gutes Preis-Leistungs-Verhältnis</li>
                    </ul>

                    <p class="text-neutral-400 text-sm">
                        Planung: ~300€
                    </p>
                </div>

                <!-- 2500€ -->
                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-brand transition">
                    <p class="text-brand text-sm mb-2">Beliebt</p>

                    <h3 class="text-xl font-semibold mb-4">
                        ~2500€ Setup
                    </h3>

                    <ul class="space-y-2 text-neutral-300 mb-6 text-sm">
                        <li>• High-End Performance</li>
                        <li>• Ideal für Streaming & Competitive Gaming</li>
                        <li>• Zukunftssicher für mehrere Jahre</li>
                    </ul>

                    <p class="text-neutral-400 text-sm">
                        Planung: ~500€
                    </p>
                </div>

                <!-- 3000€+ -->
                <div
                    class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-neutral-600 transition">
                    <p class="text-neutral-400 text-sm mb-2">High-End</p>

                    <h3 class="text-xl font-semibold mb-4">
                        3000€+ Setup
                    </h3>

                    <ul class="space-y-2 text-neutral-300 mb-6 text-sm">
                        <li>• 4K Gaming & maximale Details</li>
                        <li>• Extrem hohe FPS & Leistung</li>
                        <li>• Für Enthusiasten & Profis</li>
                    </ul>

                    <p class="text-neutral-400 text-sm">
                        Planung: max. 500€
                    </p>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>