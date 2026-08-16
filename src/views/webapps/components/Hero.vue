<template>
    <section class="relative min-h-screen flex items-center text-white overflow-hidden">

        <!-- Background Image -->
        <div class="absolute inset-0">

            <img src="@/assets/hero-code.jpg" alt="Lukas Korbitsch" class="w-full h-full object-cover object-right" />
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
                    Deine Website sollte <span class="text-brand">Kunden</span> bringen - nicht nur gut aussehen.
                </h1>

                <!-- Subtext -->
                <p class="text-neutral-300 text-lg mb-8">
                    Ich entwickle moderne Unternehmenswebsites und Web-Apps, die schnell laden, bei Google gefunden
                    werden und auf dein Unternehmen zugeschnitten sind - ohne WordPress oder Baukastensysteme.
                </p>

                <!-- CTA -->
                <div class="flex flex-wrap gap-4 mb-8">

                    <router-link to="/contact"
                        class="bg-brand text-black font-medium px-6 py-3 rounded-xl hover:opacity-90 transition">
                        Kostenloses Erstgespräch
                    </router-link>

                    <a href="#pricing"
                        class="border border-neutral-700 px-6 py-3 rounded-xl hover:border-brand hover:text-brand transition">
                        Preise ansehen
                    </a>

                </div>

                <!-- Hausbesuch Hinweis (subtil) -->
                <div class="border border-neutral-800 rounded-xl p-4 bg-neutral-900/50 backdrop-blur">
                    <p class="text-sm text-neutral-300">
                        💡 Auch privat für dich da: Hilfe bei PC- & Smartphone-Problemen -
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