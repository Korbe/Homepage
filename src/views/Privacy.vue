<template>
    <Layout>
        <div class="bg-neutral-950 text-white">

            <!-- 🔥 HERO -->
            <section class="relative pt-48 pb-24 overflow-hidden">

                <!-- Glow -->
                <div class="pointer-events-none absolute inset-0">
                    <div
                        class="absolute top-[-150px] left-[-150px] h-[400px] w-[400px] rounded-full bg-brand opacity-20 blur-[140px]">
                    </div>
                </div>

                <div class="relative z-10 max-w-5xl mx-auto px-6 text-center">

                    <p class="text-sm text-brand uppercase tracking-wide mb-4">
                        Rechtliches
                    </p>

                    <h1 class="text-4xl md:text-5xl font-bold mb-6">
                        Datenschutzerklärung
                    </h1>

                    <p class="text-neutral-400 text-lg">
                        Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.
                    </p>

                </div>
            </section>


            <!-- 📄 CONTENT -->
            <section class="pb-24">

                <div class="max-w-3xl mx-auto px-6 space-y-10">

                    <!-- Allgemeines -->
                    <div class="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/50">
                        <h2 class="text-lg font-semibold text-brand mb-4">
                            Allgemeine Hinweise
                        </h2>

                        <p class="text-neutral-300 leading-relaxed">
                            Der Schutz deiner persönlichen Daten ist mir ein besonderes Anliegen.
                            Ich verarbeite deine Daten daher ausschließlich auf Grundlage der gesetzlichen
                            Bestimmungen (DSGVO, TKG 2003).
                        </p>
                    </div>

                    <!-- Verantwortlicher -->
                    <div class="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/50">
                        <h2 class="text-lg font-semibold text-brand mb-4">
                            Verantwortlicher
                        </h2>

                        <p class="text-neutral-300 leading-relaxed">
                            Ing. Lukas Korbitsch<br />
                            Villach, Österreich<br />
                            E-Mail: info@korbitsch.at
                        </p>
                    </div>

                    <!-- Server Logs -->
                    <div class="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/50">
                        <h2 class="text-lg font-semibold text-brand mb-4">
                            Server-Logfiles
                        </h2>

                        <p class="text-neutral-300 leading-relaxed">
                            Der Hosting-Provider erhebt und speichert automatisch Informationen in sogenannten
                            Server-Logfiles, die dein Browser automatisch übermittelt. Dies sind insbesondere:
                        </p>

                        <ul class="mt-4 text-neutral-400 text-sm space-y-2">
                            <li>• IP-Adresse</li>
                            <li>• Datum und Uhrzeit der Anfrage</li>
                            <li>• Browsertyp und Version</li>
                            <li>• Betriebssystem</li>
                        </ul>
                    </div>

                    <!-- Google Analytics -->
                    <div class="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/50">
                        <h2 class="text-lg font-semibold text-brand mb-4">
                            Google Analytics
                        </h2>

                        <p class="text-neutral-300 leading-relaxed">
                            Diese Website verwendet Google Analytics, einen Webanalysedienst der
                            <span class="text-white">Google LLC</span>.
                        </p>

                        <p class="text-neutral-300 mt-4 leading-relaxed">
                            Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website
                            ermöglichen. Die dadurch erzeugten Informationen werden in der Regel an einen
                            Server von Google übertragen und dort gespeichert.
                        </p>

                        <p class="text-neutral-300 mt-4 leading-relaxed">
                            Ich nutze Google Analytics ausschließlich zur Verbesserung meiner Website und
                            zur Analyse der Nutzung. Die IP-Adresse wird anonymisiert verarbeitet.
                        </p>
                    </div>

                    <!-- Rechte -->
                    <div class="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/50">
                        <h2 class="text-lg font-semibold text-brand mb-4">
                            Deine Rechte
                        </h2>

                        <p class="text-neutral-300 leading-relaxed">
                            Dir stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung,
                            Einschränkung, Datenübertragbarkeit und Widerspruch zu.
                        </p>

                        <p class="text-neutral-400 mt-4 text-sm">
                            Wenn du glaubst, dass die Verarbeitung deiner Daten gegen das Datenschutzrecht
                            verstößt, kannst du dich bei der Datenschutzbehörde beschweren.
                        </p>
                    </div>

                </div>

            </section>

        </div>
    </Layout>
</template>

<script setup>
import Layout from '@/components/layout/Layout.vue';
</script>