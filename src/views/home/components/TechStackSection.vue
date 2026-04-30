<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <div class="pointer-events-none absolute inset-0 z-0">
            <div
                class="absolute -top-50 -right-50 h-125 w-125 rounded-full bg-brand opacity-25 blur-[140px] mix-blend-screen">
            </div>
        </div>

        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Heading -->
            <div class="flex justify-center">
                <div class="max-w-3xl text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">
                        Technologie ist kein <span class="text-brand">Selbstzweck</span>
                    </h2>
                    <p class="text-neutral-400 text-lg">
                        Sie entscheidet über Performance, Skalierbarkeit und Zukunftsfähigkeit deiner Anwendung.
                    </p>
                </div>
            </div>

            <!-- Grid -->
            <div class="grid md:grid-cols-3 gap-6">

                <!-- Frontend -->
                <div
                    class="hover:bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 bg-neutral-800/60 transition">
                    <h3 class="text-lg font-semibold mb-4 text-brand">
                        Frontend
                    </h3>

                    <p class="text-neutral-400 mb-4">
                        Moderne, reaktive Interfaces für maximale User Experience.
                    </p>

                    <ul class="space-y-2 text-neutral-300 text-sm">
                        <li>• Vue.js</li>
                        <li>• TailwindCSS</li>
                        <li>• Vite</li>
                        <li>• Inertia.js</li>
                    </ul>
                </div>

                <!-- Backend -->
                <div
                    class="hover:bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 bg-neutral-800/60 transition">
                    <h3 class="text-lg font-semibold mb-4 text-brand">
                        Backend
                    </h3>

                    <p class="text-neutral-400 mb-4">
                        Robuste Systeme mit klarer Logik – ohne unnötige API-Komplexität.
                    </p>

                    <ul class="space-y-2 text-neutral-300 text-sm">
                        <li>• Laravel</li>
                        <li>• Server-driven Architektur via Inertia.js</li>
                        <li>• Business Logic im Backend</li>
                        <li>• Clean Code Structure</li>
                    </ul>
                </div>

                <!-- Architecture -->
                <div
                    class="hover:bg-neutral-900/50 border border-neutral-800 rounded-2xl p-8 bg-neutral-800/60 transition">
                    <h3 class="text-lg font-semibold mb-4 text-brand">
                        Architektur
                    </h3>

                    <p class="text-neutral-400 mb-4">
                        Systeme, die einfach wirken – aber sauber strukturiert und skalierbar sind.
                    </p>

                    <ul class="space-y-2 text-neutral-300 text-sm">
                        <li>• Keine klassische REST-API nötig</li>
                        <li>• Inertia.js verbindet Backend & Frontend direkt</li>
                        <li>• Reduzierte Komplexität im Systemdesign</li>
                        <li>• Modular aufgebaut & erweiterbar</li>
                        <li>• Performance-first Ansatz</li>
                    </ul>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>