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
                        Impressum
                    </h1>

                    <p class="text-neutral-400 text-lg">
                        Angaben gemäß § 5 ECG und Offenlegung nach § 25 Mediengesetz.
                    </p>

                </div>
            </section>


            <!-- 📄 CONTENT -->
            <section class="pb-24">

                <div class="max-w-3xl mx-auto px-6 space-y-10">

                    <!-- Betreiber -->
                    <div class="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/50">
                        <h2 class="text-lg font-semibold text-brand mb-4">
                            Diensteanbieter
                        </h2>

                        <p class="text-neutral-300 leading-relaxed">
                            Ing. Lukas Korbitsch<br />
                            Webentwicklung & IT Dienstleistungen<br />
                            Kiesweg 19<br />
                            Villach, Kärnten<br />
                            Österreich
                        </p>
                    </div>

                    <!-- Kontakt -->
                    <div class="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/50">
                        <h2 class="text-lg font-semibold text-brand mb-4">
                            Kontakt
                        </h2>

                        <p class="text-neutral-300 leading-relaxed">
                            E-Mail: info@korbitsch.at<br />
                            Telefon: +43 670 1923388
                        </p>
                    </div>

                    <!-- Tätigkeit -->
                    <div class="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/50">
                        <h2 class="text-lg font-semibold text-brand mb-4">
                            Tätigkeitsbereich
                        </h2>

                        <p class="text-neutral-300 leading-relaxed">
                            Entwicklung individueller Webanwendungen sowie IT-Dienstleistungen.
                        </p>
                    </div>

                    <!-- Haftung -->
                    <div class="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/50">
                        <h2 class="text-lg font-semibold text-brand mb-4">
                            Haftung für Inhalte
                        </h2>

                        <p class="text-neutral-300 leading-relaxed">
                            Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. Für die
                            Richtigkeit, Vollständigkeit und Aktualität der Inhalte wird jedoch keine
                            Gewähr übernommen.
                        </p>
                    </div>

                    <!-- Links -->
                    <div class="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/50">
                        <h2 class="text-lg font-semibold text-brand mb-4">
                            Haftung für Links
                        </h2>

                        <p class="text-neutral-300 leading-relaxed">
                            Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte
                            kein Einfluss besteht. Für diese Inhalte wird keine Haftung übernommen.
                        </p>
                    </div>

                    <!-- Copyright -->
                    <div class="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/50">
                        <h2 class="text-lg font-semibold text-brand mb-4">
                            Urheberrecht
                        </h2>

                        <p class="text-neutral-300 leading-relaxed">
                            Die auf dieser Website erstellten Inhalte und Werke unterliegen dem
                            Urheberrecht. Beiträge Dritter sind entsprechend gekennzeichnet.
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