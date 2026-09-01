<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- Glow -->
        <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div class="absolute left-0 top-0
               -translate-x-1/2 -translate-y-1/2
               h-[900px] w-[900px] rounded-full
               bg-brand opacity-25 blur-[140px] mix-blend-screen">
            </div>
        </div>

        <div class="max-w-5xl mx-auto px-6 text-center">

            <p v-reveal class="text-brand text-sm uppercase tracking-wide mb-4">
                Ablauf
            </p>

            <h2 v-reveal class="text-3xl md:text-4xl font-bold mb-12">
                So läuft es ab
            </h2>

            <div class="relative grid md:grid-cols-3 gap-8">

                <!-- Verbindungslinie -->
                <div class="hidden md:block absolute top-6 left-[16.6%] right-[16.6%] h-px bg-linear-to-r from-brand/40 via-brand/40 to-brand/40"></div>

                <div v-reveal="{ delay: 0 }" class="relative">
                    <div class="mx-auto mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-brand text-black font-bold text-lg relative z-10">
                        01
                    </div>
                    <p class="text-neutral-300">
                        Du schreibst mir dein Problem oder dein Projekt
                    </p>
                </div>

                <div v-reveal="{ delay: 120 }" class="relative">
                    <div class="mx-auto mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-brand text-black font-bold text-lg relative z-10">
                        02
                    </div>
                    <p class="text-neutral-300">
                        Ich melde mich persönlich bei dir
                    </p>
                </div>

                <div v-reveal="{ delay: 240 }" class="relative">
                    <div class="mx-auto mb-3 flex items-center justify-center w-12 h-12 rounded-full bg-brand text-black font-bold text-lg relative z-10">
                        03
                    </div>
                    <p class="text-neutral-300">
                        Wir lösen das Problem oder setzen dein Projekt um
                    </p>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>