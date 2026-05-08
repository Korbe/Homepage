<template>
    <section class="relative min-h-screen flex items-center text-white overflow-hidden">

        <!-- Background Image -->
        <div class="absolute inset-0">
            <img src="@/assets/gaming-pc.png" alt="Lukas Korbitsch"
                class="hidden xl:block w-full h-full object-cover object-right" />
            <img src="@/assets/gaming-pc-mobile.png" alt="Lukas Korbitsch"
                class="block xl:hidden w-full h-full object-cover object-right" />




            <!-- Dark Overlay -->
            <div class="absolute inset-0 bg-neutral-950/70"></div>

            <!-- Gradient (links dunkler für Text) -->
            <div class="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/70 to-transparent"></div>
        </div>

        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">

            <div class="max-w-2xl">

                <!-- Badge -->
                <p class="text-brand text-sm mb-4 tracking-wide uppercase">
                    Gaming PC Builds
                </p>

                <!-- Headline -->
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Gaming PCs ohne <span class="text-brand">Kompromisse</span>
                </h1>

                <!-- Subtext -->
                <p class="text-neutral-300 text-lg mb-8">
                    Individuell zusammengestellte Systeme für maximale Performance - perfekt abgestimmt auf dein Budget,
                    deine Games und deine Anforderungen.
                </p>

                <!-- Benefits -->
                <ul class="space-y-2 text-neutral-300 mb-8">
                    <li>✔ Perfekte Balance aus CPU, GPU & RAM</li>
                    <li>✔ Maximale FPS & stabile Performance</li>
                    <li>✔ Keine Fertiglösungen oder unnötiger Overkill</li>
                    <li>✔ Individuelle Beratung & Aufbau möglich</li>
                </ul>

                <!-- CTA -->
                <div class="flex flex-wrap gap-4 mb-6">
                    <RouterLink to="/contact"
                        class="bg-brand text-black font-medium px-6 py-3 rounded-xl hover:opacity-90 transition">
                        Gaming Setup anfragen
                    </RouterLink>

                    <a href="#preise"
                        class="border border-neutral-600 px-6 py-3 rounded-xl hover:border-neutral-400 transition">
                        Preise ansehen
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
</script>