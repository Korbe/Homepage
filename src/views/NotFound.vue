<template>
    <Layout>
        <div class="bg-neutral-950 text-white min-h-screen flex flex-col justify-center">

            <!-- 🔥 HERO -->
            <section class="relative pt-48 pb-24 overflow-hidden">

                <!-- Glow -->
                <div class="pointer-events-none absolute inset-0">
                    <div
                        class="absolute top-[-150px] left-[-150px] h-[400px] w-[400px] rounded-full bg-brand opacity-20 blur-[140px]">
                    </div>
                    <div
                        class="absolute bottom-[-150px] right-[-150px] h-[400px] w-[400px] rounded-full bg-brand opacity-10 blur-[160px]">
                    </div>
                </div>

                <div class="relative z-10 max-w-3xl mx-auto px-6 text-center">

                    <!-- Badge -->
                    <p class="text-sm text-brand uppercase tracking-wide mb-4">
                        Fehler 404
                    </p>

                    <!-- Headline -->
                    <h1 class="text-5xl md:text-6xl font-bold mb-6">
                        Seite nicht gefunden
                    </h1>

                    <!-- Subtext -->
                    <p class="text-neutral-400 text-lg mb-10">
                        Sieht so aus, als hätte sich diese Seite verabschiedet – oder sie hat nie existiert.
                    </p>

                    <!-- CTA -->
                    <div class="flex flex-wrap justify-center gap-4">

                        <router-link to="/"
                            class="bg-brand text-black font-medium px-6 py-3 rounded-xl hover:opacity-90 transition">
                            Zur Startseite
                        </router-link>

                        <router-link to="/portfolio"
                            class="border border-neutral-700 px-6 py-3 rounded-xl hover:border-brand hover:text-brand transition">
                            Projekte ansehen
                        </router-link>

                    </div>

                </div>
            </section>


            <!-- 📄 OPTIONAL CONTENT (nice touch) -->
            <section class="pb-24">

                <div class="max-w-xl mx-auto px-6 text-center">

                    <div class="border border-neutral-800 rounded-2xl p-6 bg-neutral-900/50">

                        <p class="text-neutral-300 mb-4">
                            Wenn du hier gelandet bist, könnte das daran liegen:
                        </p>

                        <ul class="text-neutral-400 text-sm space-y-2">
                            <li>• Falscher Link</li>
                            <li>• Seite wurde verschoben</li>
                            <li>• URL manuell falsch eingegeben</li>
                        </ul>

                        <p class="text-neutral-500 text-sm mt-6">
                            Oder du hast einfach etwas entdeckt, das (noch) nicht existiert.
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