<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- 🌟 Center Glow -->
<div class="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
  <div class="h-[500px] w-[500px] rounded-full bg-brand opacity-10 blur-[200px]"></div>
</div>

        <!-- Content -->
        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Heading -->
            <div class="text-center mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    Projekte, die echte <span class="text-brand">Probleme</span> lösen
                </h2>
                <p class="text-neutral-400 text-lg">
                    Von SaaS-Plattformen bis individuellen Web-Systemen – jedes Projekt ist maßgeschneidert.
                </p>
            </div>

            <router-link to="/portfolio">
                <!-- Grid -->
                <div class="grid md:grid-cols-3 gap-6">

                    <!-- Petrilog -->
                    <div
                        class="hover:bg-neutral-900/50 transition border border-neutral-800 rounded-2xl p-8 bg-neutral-800/60 flex flex-col">
                        <p class="text-sm text-brand uppercase mb-2">SaaS / Web Application</p>

                        <h3 class="text-xl font-semibold mb-4">
                            Petrilog - Fischertagebuch Plattform
                        </h3>

                        <p class="text-neutral-400 text-sm mb-6">
                            Vollwertige Web-App für Fischer zur Dokumentation von Fängen inkl. GPS,
                            Datenmanagement und Benutzerverwaltung.
                        </p>

                        <ul class="text-neutral-300 text-sm space-y-2 mb-6">
                            <li>• Vue.js + Inertia.js + Laravel</li>
                            <li>• SSR umgesetzt</li>
                            <li>• komplexe Datenstrukturen</li>
                        </ul>

                        <div class="mt-auto text-brand text-sm">
                            SaaS System Entwicklung
                        </div>
                    </div>

                    <!-- FCG Villach -->
                    <div
                        class="hover:bg-neutral-900/50 transition border border-neutral-800 rounded-2xl p-8 bg-neutral-800/60 flex flex-col">
                        <p class="text-sm text-brand uppercase mb-2">Content / CMS System</p>

                        <h3 class="text-xl font-semibold mb-4">
                            FCG Villach - Webplattform
                        </h3>

                        <p class="text-neutral-400 text-sm mb-6">
                            Unternehmensseite mit dynamischem Content-System für Predigten mit Audio-Upload
                            und automatischer Darstellung auf der Startseite.
                        </p>

                        <ul class="text-neutral-300 text-sm space-y-2 mb-6">
                            <li>• Vue.js + Inertia.js + Laravel</li>
                            <li>• eigenes Content Management</li>
                            <li>• Audio-Integration</li>
                        </ul>

                        <div class="mt-auto text-brand text-sm">
                            CMS & Content Systeme
                        </div>
                    </div>

                    <!-- Dronenservice -->
                    <div
                        class="hover:bg-neutral-900/50 transition border border-neutral-800 rounded-2xl p-8 bg-neutral-800/60 flex flex-col">
                        <p class="text-sm text-brand uppercase mb-2">Landingpage</p>

                        <h3 class="text-xl font-semibold mb-4">
                            Dronenservice Gilgenreiner
                        </h3>

                        <p class="text-neutral-400 text-sm mb-6">
                            Moderne, performante Landingpage zur Präsentation eines Drohnenservice-Unternehmens
                            mit Fokus auf Conversion und Geschwindigkeit.
                        </p>

                        <ul class="text-neutral-300 text-sm space-y-2 mb-6">
                            <li>• Vue.js</li>
                            <li>• Performance-optimiert</li>
                            <li>• Conversion-Fokus</li>
                        </ul>

                        <div class="mt-auto text-brand text-sm">
                            Marketing Landingpage
                        </div>
                    </div>

                </div>
            </router-link>

        </div>
    </section>
</template>

<script setup>
</script>