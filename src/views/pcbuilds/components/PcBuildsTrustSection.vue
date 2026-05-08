<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- Glow oben links -->
        <div class="pointer-events-none absolute inset-0 z-0">
            <div
                class="absolute -top-[300px] -left-[300px] h-[700px] w-[700px] rounded-full bg-brand opacity-20 blur-[160px]">
            </div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Headline -->
            <div class="mx-auto text-center max-w-2xl mb-16">
                <p class="text-brand text-sm uppercase tracking-wide mb-4">
                    Warum ich?
                </p>

                <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-6">
                    Kein Zufall. Kein Marketing. Nur Performance.
                </h2>

                <p class="text-neutral-300 text-lg">
                    Ich baue keine Systeme nach Trends - sondern nach Logik, Erfahrung und echter Performance.
                </p>
            </div>

            <!-- Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                <!-- Card 1 -->
                <div class="hover:bg-neutral-900/50 bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                    <p class="text-brand text-lg mb-3">🧠</p>
                    <h3 class="font-semibold mb-2">Technisches Verständnis</h3>
                    <p class="text-neutral-300 text-sm">
                        Erfahrung in Softwareentwicklung & Systemarchitektur - nicht nur „PC zusammenstecken“.
                    </p>
                </div>

                <!-- Card 2 -->
                <div class="hover:bg-neutral-900/50 not-last:bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                    <p class="text-brand text-lg mb-3">⚙️</p>
                    <h3 class="font-semibold mb-2">Keine Bottlenecks</h3>
                    <p class="text-neutral-300 text-sm">
                        Jede Komponente wird aufeinander abgestimmt - für maximale Leistung ohne Schwachstellen.
                    </p>
                </div>

                <!-- Card 3 -->
                <div class="hover:bg-neutral-900/50 not-last:bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                    <p class="text-brand text-lg mb-3">💰</p>
                    <h3 class="font-semibold mb-2">Ehrliche Beratung</h3>
                    <p class="text-neutral-300 text-sm">
                        Kein Upselling, keine unnötigen Teile - du bekommst genau das, was du brauchst.
                    </p>
                </div>

                <!-- Card 4 -->
                <div class="hover:bg-neutral-900/50 not-last:bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                    <p class="text-brand text-lg mb-3">🚀</p>
                    <h3 class="font-semibold mb-2">Performance Fokus</h3>
                    <p class="text-neutral-300 text-sm">
                        Ziel ist nicht ein „schöner PC“, sondern ein System, das wirklich performt.
                    </p>
                </div>

            </div>

            <!-- Bottom Statement -->
            <div class="mt-16 border border-neutral-800 rounded-2xl p-6 bg-neutral-900/60 backdrop-blur">
                <p class="text-neutral-300 text-center text-lg">
                    Ich baue keine PCs für Marketing - sondern Systeme, die in der Praxis funktionieren.
                </p>
            </div>

        </div>
    </section>
</template>

<script setup>
</script>