<template>
    <section class="relative min-h-screen flex items-center text-white overflow-hidden">

        <!-- Background -->
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
        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full mt-28">

            <div class="max-w-2xl">

                <!-- Intro -->
                <p class="text-brand text-sm uppercase tracking-wide mb-3">
                    👋 Hallo, ich bin Ing. Lukas Korbitsch
                </p>

                <p class="text-neutral-400 text-sm mb-6">
                    IT-Dienstleister aus 📍Villach
                </p>

                <!-- Headline -->
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Ich löse <span class="text-brand">Technikprobleme</span>.<br />
                    Und baue <span class="text-brand">Websites</span>, die Kunden bringen.
                </h1>

                <!-- Subtext -->
                <p class="text-neutral-300 text-lg mb-8">
                    IT-Hilfe vor Ort, individuelle Webentwicklung und Gaming PC Builds -
                    ohne Fachchinesisch, ohne Baukastensysteme und immer mit Fokus auf echte Ergebnisse.
                </p>

                <!-- ✅ Trust Points -->
                <div class="mb-8 space-y-2 text-sm text-neutral-300">
                    <p>✔ Kunden aus Villach & Umgebung</p>
                    <p>✔ Webprojekte & IT-Service aus einer Hand</p>
                </div>

                <!-- CTA -->
                <div class="flex flex-wrap gap-4 mb-8">
                    <router-link to="/webapps"
                        class="bg-brand text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
                        Websites & Web-Apps
                    </router-link>

                    <router-link to="/it-hilfe"
                        class="border border-neutral-700 px-6 py-3 rounded-xl hover:border-brand hover:text-brand transition">
                        IT Hilfe vor Ort
                    </router-link>
                </div>

                <!-- Trust Box -->
                <div class="border border-neutral-800 rounded-xl p-4 bg-neutral-900/50 backdrop-blur">
                    <p class="text-sm text-neutral-300">
                        💡 Persönlich. Verständlich. Direkt vor Ort oder digital.
                    </p>
                </div>

            </div>

        </div>

    </section>
</template>

<script setup>
</script>