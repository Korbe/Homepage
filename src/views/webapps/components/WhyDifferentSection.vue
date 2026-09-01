<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Heading -->
            <div class="flex justify-center">
                <div v-reveal class="max-w-3xl text-center mb-16">

                    <p class="text-brand text-sm uppercase tracking-wider mb-4">
                        Mein Ansatz
                    </p>

                    <h2 class="text-3xl md:text-4xl font-bold mb-6">
                        Ich entwickle keine <span class="text-brand">Websites</span> von der <span
                            class="text-brand">Stange</span>
                    </h2>

                    <p class="text-neutral-400 text-lg">
                        Jede Website entsteht von Grund auf neu – passend zu deinem Unternehmen,
                        deinen Kunden und deinen Zielen. Keine fertigen Templates,
                        keine unnötigen Plugins und keine Kompromisse.
                    </p>

                </div>
            </div>

            <!-- Grid -->
            <div class="grid lg:grid-cols-3 gap-6">

                <!-- Card -->
                <div v-reveal="{ delay: 0 }" class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-brand hover:-translate-y-1 transition">

                    <div
                        class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand font-bold text-xl mb-6">
                        01
                    </div>

                    <h3 class="text-xl font-semibold mb-4">
                        Individuell entwickelt
                    </h3>

                    <p class="text-neutral-400 leading-relaxed">
                        Keine Baukastensysteme, keine fertigen Themes.
                        Deine Website wird exakt auf dein Unternehmen und deine Anforderungen entwickelt.
                    </p>

                </div>

                <!-- Card -->
                <div v-reveal="{ delay: 120 }" class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-brand hover:-translate-y-1 transition">

                    <div
                        class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand font-bold text-xl mb-6">
                        02
                    </div>

                    <h3 class="text-xl font-semibold mb-4">
                        Schnell & zukunftssicher
                    </h3>

                    <p class="text-neutral-400 leading-relaxed">
                        Moderne Technologien sorgen für schnelle Ladezeiten,
                        hohe Sicherheit und eine Website, die auch in einigen Jahren
                        noch problemlos erweitert werden kann.
                    </p>

                </div>

                <!-- Card -->
                <div v-reveal="{ delay: 240 }" class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 hover:border-brand hover:-translate-y-1 transition">

                    <div
                        class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center text-brand font-bold text-xl mb-6">
                        03
                    </div>

                    <h3 class="text-xl font-semibold mb-4">
                        Für dein Business gebaut
                    </h3>

                    <p class="text-neutral-400 leading-relaxed">
                        Eine Website soll nicht nur gut aussehen.
                        Sie soll Vertrauen schaffen, bei Google gefunden werden
                        und neue Kunden gewinnen.
                    </p>

                </div>

            </div>

            <!-- Bottom Highlight -->
            <div class="mt-16 border border-brand/30 rounded-2xl bg-neutral-900/70 backdrop-blur p-8 text-center">

                <h3 class="text-2xl font-semibold mb-4">
                    Mein Ziel ist nicht einfach eine schöne Website.
                </h3>

                <p class="text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                    Ich entwickle Websites, die schnell laden, professionell wirken
                    und dein Unternehmen langfristig unterstützen.
                    Deshalb arbeite ich bewusst ohne WordPress, Baukastensysteme oder
                    vorgefertigte Templates.
                </p>

            </div>

        </div>

    </section>
</template>

<script setup>
</script>