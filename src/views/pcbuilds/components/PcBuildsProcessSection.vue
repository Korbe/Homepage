<template>
    <section class="py-24 bg-neutral-900/95 text-white">
        <div class="max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Headline -->
            <div v-reveal class="mx-auto text-center max-w-2xl mb-16">
                <p class="text-brand text-sm uppercase tracking-wide mb-4">
                    Ablauf
                </p>

                <h2 class="text-3xl md:text-4xl font-bold leading-tight mb-6">
                    So bekommst du deinen perfekten Gaming PC
                </h2>

                <p class="text-neutral-300 text-lg">
                    Klarer Prozess, keine Überraschungen - von der Anfrage bis zum fertigen Setup.
                </p>
            </div>

            <!-- Steps -->
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                <!-- Step 1 -->
                <div v-reveal="{ delay: 0 }" class="hover:bg-neutral-900/50 hover:border-brand hover:-translate-y-1 transition bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                    <div class="w-9 h-9 rounded-full bg-brand text-black font-bold flex items-center justify-center mb-2">01</div>
                    <h3 class="font-semibold mb-2">Anfrage</h3>
                    <p class="text-neutral-300 text-sm">
                        Du schreibst mir dein Budget, deine Games und deine Anforderungen.
                    </p>
                </div>

                <!-- Step 2 -->
                <div v-reveal="{ delay: 100 }" class="hover:bg-neutral-900/50 hover:border-brand hover:-translate-y-1 transition bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                    <div class="w-9 h-9 rounded-full bg-brand text-black font-bold flex items-center justify-center mb-2">02</div>
                    <h3 class="font-semibold mb-2">Planung</h3>
                    <p class="text-neutral-300 text-sm">
                        Ich stelle dir ein perfekt abgestimmtes Setup zusammen - ohne Bottlenecks.
                    </p>
                </div>

                <!-- Step 3 -->
                <div v-reveal="{ delay: 200 }" class="hover:bg-neutral-900/50 hover:border-brand hover:-translate-y-1 transition bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                    <div class="w-9 h-9 rounded-full bg-brand text-black font-bold flex items-center justify-center mb-2">03</div>
                    <h3 class="font-semibold mb-2">Abstimmung</h3>
                    <p class="text-neutral-300 text-sm">
                        Wir gehen alles gemeinsam durch und passen das Setup an deine Wünsche an.
                    </p>
                </div>

                <!-- Step 4 -->
                <div v-reveal="{ delay: 300 }" class="hover:bg-neutral-900/50 hover:border-brand hover:-translate-y-1 transition bg-neutral-900 border border-neutral-800 rounded-2xl p-6">
                    <div class="w-9 h-9 rounded-full bg-brand text-black font-bold flex items-center justify-center mb-2">04</div>
                    <h3 class="font-semibold mb-2">Umsetzung</h3>
                    <p class="text-neutral-300 text-sm">
                        Auf Wunsch baue ich deinen PC zusammen und richte alles für dich ein.
                    </p>
                </div>

            </div>

        </div>
    </section>
</template>

<script setup>
</script>