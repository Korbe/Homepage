<template>
    <section class="relative min-h-screen flex items-center text-white overflow-hidden">

        <!-- Background Image -->
        <div class="absolute inset-0">
            <img src="@/assets/hero-me-contact.png" alt="Lukas Korbitsch"
                class="hidden xl:block w-full h-full object-cover object-right" />

            <img src="@/assets/hero-me-contact-mobile.png" alt="Lukas Korbitsch"
                class="block xl:hidden w-full h-full object-cover object-right" />

            <!-- Dark Overlay -->
            <div class="absolute inset-0 bg-neutral-950/60"></div>

            <!-- Gradient -->
            <div class="absolute inset-0 bg-linear-to-r from-neutral-950 via-neutral-950/40 to-transparent"></div>
        </div>

        <!-- Content -->
        <div class="relative mt-48 lg:mt-28 z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
            
            <div class="max-w-2xl">

                <!-- Badge -->
                <p class="text-md text-brand mb-4 tracking-wide uppercase">
                    Kontakt
                </p>

                <p class="text-md text-neutral-300 mt-1">
                    📍 Villach, Österreich
                </p>

                <!-- Headline -->
                <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                    Lass uns über dein<br />
                    <span class="text-brand">Projekt</span> oder deine <span class="text-brand">Technikprobleme</span><br /> sprechen
                </h1>

                <!-- Subtext -->
                <p class="text-neutral-300 text-lg mb-8">
                    Egal ob Webanwendung, IT-Hilfe oder Gaming Setup –
                    schreib mir einfach. Ich melde mich persönlich bei dir zurück.
                </p>

                <!-- CTA -->
                <div class="flex flex-wrap gap-4 mb-8">

                    <a href="mailto:info@korbitsch.at"
                        class="bg-brand text-black font-medium px-6 py-3 rounded-xl hover:opacity-90 transition">
                        Projekt anfragen
                    </a>

                    <a href="https://wa.me/436701923388" target="_blank"
                        class="border border-neutral-700 px-6 py-3 rounded-xl hover:border-green-500 hover:text-green-400 transition">
                        WhatsApp schreiben
                    </a>

                </div>

                <!-- Trust Note -->
                <div class="hover:border-brand transition border border-neutral-800 rounded-xl p-4 bg-neutral-900/50 backdrop-blur">
                    <p class="text-sm text-neutral-300">
                        💡 Meist bekommst du innerhalb von 24 Stunden eine Antwort.
                    </p>
                </div>

            </div>
        </div>

    </section>
</template>
<script setup>
</script>