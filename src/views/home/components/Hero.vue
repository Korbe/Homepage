<template>
    <section class="relative min-h-screen flex items-center text-white overflow-hidden">

        <!-- Background Image -->
        <div class="absolute inset-0">
            <img src="@/assets/hero-me.png" alt="Lukas Korbitsch"
                class="hidden xl:block w-full h-full object-cover object-right" />
            <img src="@/assets/hero-me-mobile.png" alt="Lukas Korbitsch"
                class="block xl:hidden w-full h-full object-cover object-right" />

            <!-- Dark Overlay -->
            <div class="absolute inset-0 bg-neutral-950/60"></div>

            <!-- Gradient für bessere Lesbarkeit links -->
            <div class="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/40 to-transparent"></div>
        </div>

        <!-- Content -->
        <div class="relative mt-28 z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <div class="max-w-2xl">

                <!-- Badge -->
                <p class="text-md text-brand mb-4 tracking-wide uppercase">
                    Ing. Lukas Korbitsch
                </p>

                <p class="text-md text-neutral-300 mt-1">
                    📍 Villach, Österreich
                </p>

                <!-- Headline -->
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Ich entwickle <br />
                    <span class="text-brand">High-Performance</span><br />
                    Webanwendungen
                </h1>

                <!-- Subtext -->
                <p class="text-neutral-300 text-lg mb-8">
                    Moderne Websites & Web-Apps - individuell entwickelt mit Vue & Laravel für maximale Performance und
                    echte Anforderungen.
                </p>

                <!-- CTA -->
                <div class="flex flex-wrap gap-4 mb-8">

                    <router-link to="contact"
                        class="bg-brand text-black font-medium px-6 py-3 rounded-xl hover:opacity-90 transition">
                        Projekt starten
                    </router-link>

                    <router-link to="portfolio"
                        class="border border-neutral-700 px-6 py-3 rounded-xl hover:border-brand hover:text-brand transition">
                        Projekte ansehen
                    </router-link>

                </div>

                <!-- Hausbesuch Hinweis (subtil) -->
                <div class="border border-neutral-800 rounded-xl p-4 bg-neutral-900/50 backdrop-blur">
                    <p class="text-sm text-neutral-300">
                        💡 Auch privat für dich da: Hilfe bei PC- & Smartphone-Problemen –
                        direkt bei dir vor Ort.
                    </p>

                    <a href="contact" class="text-brand text-sm mt-2 inline-block hover:underline">
                        Hausbesuch anfragen →
                    </a>
                </div>

            </div>
        </div>

    </section>
</template>
<script setup>
</script>