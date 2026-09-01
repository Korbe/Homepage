<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">
        
        <div class="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">

            <!-- Heading -->
            <div v-reveal class="text-center max-w-3xl mx-auto mb-20">

                <p class="text-brand text-sm uppercase tracking-wide mb-4">
                    Ablauf
                </p>

                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    In nur <span class="text-brand">4 Schritten</span> zu deiner neuen Website
                </h2>

                <p class="text-neutral-400 text-lg">
                    Kein komplizierter Prozess, keine Agentur-Meetings -
                    wir halten den Ablauf einfach und effizient.
                </p>

            </div>

            <!-- Steps -->
            <div class="grid md:grid-cols-4 gap-8">

                <!-- Step -->
                <div v-reveal="{ delay: 0 }" class="text-center">

                    <div
                        class="mx-auto w-16 h-16 rounded-full bg-brand text-black flex items-center justify-center font-bold text-xl mb-6">
                        1
                    </div>

                    <h3 class="font-semibold text-lg mb-3">
                        Erstgespräch
                    </h3>

                    <p class="text-neutral-400 text-sm">
                        Du erzählst mir von deinem Unternehmen,
                        deinen Zielen und deinen Vorstellungen.
                    </p>

                </div>

                <!-- Step -->
                <div v-reveal="{ delay: 100 }" class="text-center">

                    <div
                        class="mx-auto w-16 h-16 rounded-full bg-brand text-black flex items-center justify-center font-bold text-xl mb-6">
                        2
                    </div>

                    <h3 class="font-semibold text-lg mb-3">
                        Konzept
                    </h3>

                    <p class="text-neutral-400 text-sm">
                        Ich entwickle ein individuelles Konzept,
                        das zu deinem Unternehmen passt.
                    </p>

                </div>

                <!-- Step -->
                <div v-reveal="{ delay: 200 }" class="text-center">

                    <div
                        class="mx-auto w-16 h-16 rounded-full bg-brand text-black flex items-center justify-center font-bold text-xl mb-6">
                        3
                    </div>

                    <h3 class="font-semibold text-lg mb-3">
                        Entwicklung
                    </h3>

                    <p class="text-neutral-400 text-sm">
                        Deine Website wird von Grund auf entwickelt -
                        modern, schnell und individuell.
                    </p>

                </div>

                <!-- Step -->
                <div v-reveal="{ delay: 300 }" class="text-center">

                    <div
                        class="mx-auto w-16 h-16 rounded-full bg-brand text-black flex items-center justify-center font-bold text-xl mb-6">
                        4
                    </div>

                    <h3 class="font-semibold text-lg mb-3">
                        Launch
                    </h3>

                    <p class="text-neutral-400 text-sm">
                        Nach deiner Freigabe geht die Website online
                        und ist sofort für deine Kunden erreichbar.
                    </p>

                </div>

            </div>

            <!-- Bottom -->
            <div class="mt-20 border border-brand/30 rounded-2xl bg-neutral-800/60 p-8 text-center">

                <h3 class="text-xl font-semibold mb-4">
                    Du musst kein Technik-Profi sein.
                </h3>

                <p class="text-neutral-400 max-w-2xl mx-auto">
                    Ich begleite dich durch den gesamten Prozess, erkläre alles verständlich
                    und kümmere mich um die technische Umsetzung. Du konzentrierst dich auf dein
                    Unternehmen - ich mich auf deine Website.
                </p>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>