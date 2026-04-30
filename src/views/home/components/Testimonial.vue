<script setup>
import gilgenreinerLogo from '@/assets/gilgenreiner-logo.png'
import fcgLogo from '@/assets/fcg-logo.png'

const testimonials = [
    {
        name: "Dominik Gilgenreiner",
        company: "Dronenservice Gilgenreiner",
        text: "Man merkt sofort, dass hier nicht mit Baukästen gearbeitet wird. Die Anwendung ist sauber aufgebaut, extrem schnell und genau auf meine Anforderungen zugeschnitten.",
        logo: gilgenreinerLogo,
        link: "https://gilgenreiner.at"
    },
    {
        name: "Markus Kirisits",
        company: "FCG Villach",
        text: "Lukas Korbitsch hat unsere Plattform modern und benutzerfreundlich umgesetzt. Seine technische Stärke zeigt sich in der klaren Struktur und Performance.",
        logo: fcgLogo,
        link: "https://fcg-villach.at"
    },
];
</script>

<template>
    <section class="relative bg-neutral-900/95 py-24 sm:py-32 overflow-visible">
        <!-- Content -->
        <div class="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

            <!-- Headline -->
            <div class="flex justify-center">
                <div class="max-w-2xl text-center mb-16">
                    <p class="text-sm text-brand uppercase tracking-wide mb-4">
                        Kundenstimmen
                    </p>

                    <h2 class="text-3xl md:text-4xl font-bold text-white">
                        Web-Apps, die wirklich <span class="text-brand">funktionieren</span>
                    </h2>

                    <p class="text-neutral-400 mt-4">
                        Keine Templates. Keine Baukästen. Sondern echte Systeme mit Performance.
                    </p>
                </div>
            </div>

            <!-- Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">

                <div v-for="(testimonial, index) in testimonials" :key="index"
                    class="relative border border-neutral-800 rounded-2xl p-8 bg-neutral-800/60 backdrop-blur hover:bg-neutral-900/50 hover:border-brand transition">

                    <!-- Card Hover Glow -->
                    <div class="absolute inset-0 bg-brand/5 opacity-0 hover:opacity-100 transition rounded-2xl"></div>

                    <div class="relative z-10 flex flex-col justify-between h-full">

                        <div v-if="testimonial.logo" class="mb-6">
                            <img :src="testimonial.logo" alt="Logo" class="h-16 object-contain opacity-80" />
                        </div>

                        <blockquote class="text-lg text-neutral-200 leading-relaxed">
                            “{{ testimonial.text }}”
                        </blockquote>

                        <div class="mt-8">
                            <div class="font-semibold text-white">
                                {{ testimonial.name }}
                            </div>
                            <div class="text-sm text-neutral-400">
                                {{ testimonial.company }}
                            </div>
                        </div>

                        <a :href="testimonial.link" target="_blank" class="pt-5 text-brand hover:underline">
                            Mehr erfahren über {{ testimonial.company }} →
                        </a>

                    </div>
                </div>

            </div>
        </div>
    </section>
</template>