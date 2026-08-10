<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- Glow -->
        <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div class="absolute top-0 right-0
               translate-x-1/2 -translate-y-1/2
               h-[900px] w-[900px]
               rounded-full
               bg-brand
               opacity-25
               blur-[140px]
               mix-blend-screen">
            </div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Heading -->
            <div class="max-w-3xl mx-auto text-center mb-16">

                <p class="text-brand text-sm uppercase tracking-wider mb-4">
                    Moderne Technologien
                </p>

                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    Die Technik im Hintergrund macht den <span class="text-brand">Unterschied</span>
                </h2>

                <p class="text-neutral-400 text-lg">
                    Du musst keine Programmiersprachen kennen.
                    Wichtig ist nur eines: Deine Website soll schnell, sicher und langfristig erweiterbar sein.
                    Genau dafür setze ich auf moderne Technologien.
                </p>

            </div>

            <!-- Cards -->
            <div class="grid lg:grid-cols-3 gap-6">

                <!-- Frontend -->
                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-brand transition">

                    <div
                        class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand text-xl mb-6">
                        ⚡
                    </div>

                    <h3 class="text-xl font-semibold mb-4">
                        Schnell & modern
                    </h3>

                    <p class="text-neutral-400 mb-6">
                        Moderne Frontend-Technologien sorgen für blitzschnelle Ladezeiten,
                        flüssige Animationen und ein hochwertiges Nutzererlebnis.
                    </p>

                    <div class="text-sm text-neutral-500">
                        Vue.js · TailwindCSS · Vite
                    </div>

                </div>

                <!-- Backend -->
                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-brand transition">

                    <div
                        class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand text-xl mb-6">
                        🔒
                    </div>

                    <h3 class="text-xl font-semibold mb-4">
                        Stabil & sicher
                    </h3>

                    <p class="text-neutral-400 mb-6">
                        Im Hintergrund arbeitet ein stabiles Backend,
                        das Daten verarbeitet, Benutzer verwaltet
                        und dein Unternehmen zuverlässig unterstützt.
                    </p>

                    <div class="text-sm text-neutral-500">
                        Laravel · MySQL · PHP
                    </div>

                </div>

                <!-- Architecture -->
                <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-brand transition">

                    <div
                        class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand text-xl mb-6">
                        🚀
                    </div>

                    <h3 class="text-xl font-semibold mb-4">
                        Für die Zukunft gebaut
                    </h3>

                    <p class="text-neutral-400 mb-6">
                        Dein Unternehmen entwickelt sich weiter.
                        Deshalb entwickle ich Websites und Web-Apps,
                        die problemlos erweitert werden können.
                    </p>

                    <div class="text-sm text-neutral-500">
                        Clean Architecture · SSG · SSR · Skalierbar
                    </div>

                </div>

            </div>

            <!-- Bottom -->
            <div class="mt-16 border border-brand/30 rounded-2xl bg-neutral-900/70 backdrop-blur p-8 text-center">

                <h3 class="text-2xl font-semibold mb-4">
                    Technologie ist Mittel zum Zweck.
                </h3>

                <p class="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                    Du kaufst bei mir keine Programmiersprache.
                    Du bekommst eine Website oder Web-Anwendung,
                    die zuverlässig funktioniert, bei Google gefunden wird
                    und dein Unternehmen langfristig unterstützt.
                </p>

            </div>

        </div>

    </section>
</template>

<script setup>
</script>