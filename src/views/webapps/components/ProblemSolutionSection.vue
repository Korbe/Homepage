<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- Glow -->
        <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div class="absolute bottom-0 right-0
               translate-x-1/2 translate-y-1/2
               h-[900px] w-[900px]
               rounded-full
               bg-brand
               opacity-25
               blur-[140px]
               mix-blend-screen">
            </div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto mt-16 px-6 lg:px-12">

            <!-- Heading -->
            <div class="flex justify-center">
                <div class="max-w-3xl text-center mb-16">
                    <h2 class="text-3xl md:text-4xl font-bold mb-4">
                        Warum viele Unternehmenswebsites nie <span class="text-brand">erfolgreich</span> werden
                    </h2>

                    <p class="text-neutral-400 text-lg">
                        Viele Websites sehen zwar gut aus, sind aber langsam, technisch eingeschränkt oder kaum bei
                        Google sichtbar. Das Ergebnis: Weniger Besucher, weniger Anfragen und unnötige laufende Kosten.
                    </p>
                </div>
            </div>

            <div class="grid md:grid-cols-2 gap-10">

                <!-- ❌ Problem -->
                <div
                    class="border border-neutral-700 rounded-2xl p-8 bg-neutral-900/70 backdrop-blur shadow-md shadow-black/20 transition">

                    <h3 class="text-xl font-semibold mb-6 text-red-400">
                        Typische Standardlösung
                    </h3>

                    <ul class="space-y-4 text-neutral-300">

                        <li class="flex items-center gap-3">
                            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/15">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-red-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
                                </svg>
                            </span>
                            WordPress
                        </li>

                        <li class="flex items-center gap-3">
                            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/15">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-red-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
                                </svg>
                            </span>
                            Baukastensysteme
                        </li>

                        <li class="flex items-center gap-3">
                            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/15">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-red-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
                                </svg>
                            </span>
                            Immer die gleichen Themes
                        </li>

                        <li class="flex items-center gap-3">
                            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/15">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-red-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
                                </svg>
                            </span>
                            Langsame Ladezeiten
                        </li>

                        <li class="flex items-center gap-3">
                            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/15">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-red-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
                                </svg>
                            </span>
                            Plugins
                        </li>

                        <li class="flex items-center gap-3">
                            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/15">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-red-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
                                </svg>
                            </span>
                            Regelmäßige Sicherheitsupdates
                        </li>

                        <li class="flex items-center gap-3">
                            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/15">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-red-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
                                </svg>
                            </span>
                            Hoher Wartungsaufwand
                        </li>

                        <li class="flex items-center gap-3">
                            <span class="flex h-5 w-5 items-center justify-center rounded-full bg-red-500/15">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-red-400" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 6l12 12M18 6L6 18" />
                                </svg>
                            </span>
                            Schlechte Erweiterbarkeit
                        </li>

                    </ul>

                </div>

                <!-- ✅ Solution -->
                <div
                    class="border border-brand/50 rounded-2xl p-8 bg-neutral-900/75 backdrop-blur relative overflow-hidden shadow-lg shadow-black/30 transition hover:shadow-brand/20">

                    <!-- Accent Glow -->
                    <div class="absolute inset-0 bg-linear-to-br from-brand/10 to-transparent opacity-80"></div>

                    <div class="relative">
                        <h3 class="text-xl font-semibold mb-6 text-brand">
                            Individuelle Entwicklung
                        </h3>

                        <ul class="space-y-4 text-neutral-200">

                            <li class="flex items-center gap-3">
                                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-brand" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                Maximale Performance
                            </li>

                            <li class="flex items-center gap-3">
                                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-brand" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                Höhere Sicherheit
                            </li>

                            <li class="flex items-center gap-3">
                                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-brand" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                Individuell entwickelt
                            </li>

                            <li class="flex items-center gap-3">
                                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-brand" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                Für Google optimiert
                            </li>

                            <li class="flex items-center gap-3">
                                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-brand" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                Zukunftssicher & erweiterbar
                            </li>

                            <li class="flex items-center gap-3">
                                <span class="flex h-5 w-5 items-center justify-center rounded-full bg-brand/15">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-brand" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                                    </svg>
                                </span>
                                Keine unnötigen Plugins
                            </li>

                        </ul>
                    </div>

                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>