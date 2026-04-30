<template>
    <section id="webapps" class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <div class="pointer-events-none absolute inset-0 z-0">
            <div
                class="absolute -bottom-50 -right-50 h-125 w-125 rounded-full bg-brand opacity-25 blur-[140px] mix-blend-screen">
            </div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Heading -->
            <div class="flex justify-center">
                <div class="max-w-3xl text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">
                        Warum Standard-Lösungen dich <span class="text-brand">limitieren</span>
                    </h2>
                    <p class="text-neutral-400 text-lg">
                        Viele Projekte scheitern nicht an der Idee - sondern an der technischen Umsetzung.
                    </p>
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-10">

                <!-- ❌ Problem -->
                <div
                    class="border border-neutral-700 rounded-2xl p-8 bg-neutral-800/60 shadow-md shadow-black/20 transition">

                    <h3 class="text-xl font-semibold mb-6 text-red-400">
                        Das Problem mit Baukasten-Systemen
                    </h3>

                    <ul class="space-y-4 text-neutral-300">
                        <li>• Eingeschränkte Flexibilität durch Templates</li>
                        <li>• Performance-Probleme bei Wachstum</li>
                        <li>• Technische Limits bei individuellen Anforderungen</li>
                        <li>• Komplexe Workarounds statt sauberer Architektur</li>
                        <li>• Hohe Abhängigkeit von Drittanbietern</li>
                    </ul>

                </div>

                <!-- ✅ Solution -->
                <div
                    class="border border-brand/50 rounded-2xl p-8 bg-neutral-800/70 relative overflow-hidden shadow-lg shadow-black/30 transition hover:shadow-brand/20">

                    <!-- Accent Glow -->
                    <div class="absolute inset-0 bg-linear-to-br from-brand/10 to-transparent opacity-80"></div>

                    <div class="relative">
                        <h3 class="text-xl font-semibold mb-6 text-brand">
                            Die Lösung: Custom Web Applications
                        </h3>

                        <ul class="space-y-4 text-neutral-200">
                            <li>• Architektur speziell für dein Produkt entwickelt</li>
                            <li>• Maximale Performance ohne Overhead</li>
                            <li>• Skalierbare Systeme für echtes Wachstum</li>
                            <li>• Saubere Codebasis ohne technische Kompromisse</li>
                            <li>• Volle Kontrolle über Funktion & Erweiterung</li>
                        </ul>
                    </div>

                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>