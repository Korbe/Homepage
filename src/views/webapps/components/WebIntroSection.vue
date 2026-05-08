<template>
    <section id="webapps" class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <div class="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">

            <!-- Badge -->
            <p class="text-brand text-sm uppercase tracking-wide mb-4">
                Web Development
            </p>

            <!-- Headline -->
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Schöne Websites gibt es viele- <br />
                ich entwickle welche, die <span class="text-brand">gefunden</span> werden und <span class="text-brand">funktionieren</span>
            </h2>

            <!-- Text -->
            <p class="text-neutral-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                Ich entwickle moderne Websites & Web-Apps, die schnell sind, gefunden werden
                und mit deinem Business mitwachsen.
            </p>

            <!-- Optional CTA -->
            <div class="flex justify-center gap-4 flex-wrap">

                <RouterLink to="contact"
                    class="bg-brand text-black px-6 py-3 rounded-xl font-medium hover:opacity-90 transition">
                    Projekt starten
                </RouterLink>

                <RouterLink to="portfolio"
                    class="border border-neutral-700 px-6 py-3 rounded-xl hover:border-brand hover:text-brand transition">
                    Projekte ansehen
                </RouterLink>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>