<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- CONTENT -->
        <div class="relative z-20 max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Heading -->
            <div v-reveal class="mx-auto text-center max-w-2xl mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-4">
                    So läuft ein Hausbesuch ab
                </h2>
                <p class="text-neutral-400 text-lg">
                    Einfach, transparent und ohne komplizierte Abläufe - damit du genau weißt, was passiert.
                </p>
            </div>

            <!-- Steps -->
            <div class="grid md:grid-cols-4 gap-6">

                <div v-reveal="{ delay: 0 }" class="hover:bg-neutral-900/50 hover:-translate-y-1 transition border border-neutral-800 rounded-2xl p-6 bg-neutral-800/60">
                    <div class="w-10 h-10 rounded-full bg-brand text-black font-bold flex items-center justify-center mb-3">01</div>
                    <h3 class="font-semibold mb-3">Anfrage</h3>
                    <p class="text-neutral-400 text-sm">
                        Du kontaktierst mich per Mail oder Telefon und beschreibst dein Problem.
                    </p>
                </div>

                <div v-reveal="{ delay: 100 }" class="hover:bg-neutral-900/50 hover:-translate-y-1 transition border border-neutral-800 rounded-2xl p-6 bg-neutral-800/60">
                    <div class="w-10 h-10 rounded-full bg-brand text-black font-bold flex items-center justify-center mb-3">02</div>
                    <h3 class="font-semibold mb-3">Termin</h3>
                    <p class="text-neutral-400 text-sm">
                        Wir vereinbaren einen passenden Termin - schnell und unkompliziert.
                    </p>
                </div>

                <div v-reveal="{ delay: 200 }" class="hover:bg-neutral-900/50 hover:-translate-y-1 transition border border-neutral-800 rounded-2xl p-6 bg-neutral-800/60">
                    <div class="w-10 h-10 rounded-full bg-brand text-black font-bold flex items-center justify-center mb-3">03</div>
                    <h3 class="font-semibold mb-3">Vor Ort Analyse</h3>
                    <p class="text-neutral-400 text-sm">
                        Ich komme zu dir und schaue mir das Problem direkt bei dir an.
                    </p>
                </div>

                <div v-reveal="{ delay: 300 }" class="hover:bg-neutral-900/50 hover:-translate-y-1 transition border border-neutral-800 rounded-2xl p-6 bg-neutral-800/60">
                    <div class="w-10 h-10 rounded-full bg-brand text-black font-bold flex items-center justify-center mb-3">04</div>
                    <h3 class="font-semibold mb-3">Lösung</h3>
                    <p class="text-neutral-400 text-sm">
                        Ich löse das Problem direkt vor Ort - verständlich erklärt und sofort umgesetzt.
                    </p>
                </div>

            </div>

        </div>
    </section>
</template>