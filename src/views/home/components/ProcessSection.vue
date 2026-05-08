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

            <p class="text-brand text-sm uppercase tracking-wide mb-4">
                Ablauf
            </p>

            <h2 class="text-3xl md:text-4xl font-bold mb-12">
                So läuft es ab
            </h2>

            <div class="grid md:grid-cols-3 gap-8">

                <div>
                    <p class="text-brand font-bold text-xl mb-3">01</p>
                    <p class="text-neutral-300">
                        Du schreibst mir dein Problem oder dein Projekt
                    </p>
                </div>

                <div>
                    <p class="text-brand font-bold text-xl mb-3">02</p>
                    <p class="text-neutral-300">
                        Ich melde mich persönlich bei dir
                    </p>
                </div>

                <div>
                    <p class="text-brand font-bold text-xl mb-3">03</p>
                    <p class="text-neutral-300">
                        Wir lösen das Problem oder setzen dein Projekt um
                    </p>
                </div>

            </div>

        </div>
    </section>
</template>