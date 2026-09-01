<template>
    <section class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

        <!-- Glow -->
        <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            <div class="absolute bottom-0 right-0
               translate-x-1/2 translate-y-1/2
               h-[900px] w-[900px]
               rounded-full
               bg-brand
               opacity-25
               blur-[140px]
               mix-blend-screen">
            </div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

            <!-- Heading -->
            <div v-reveal class="text-center max-w-3xl mx-auto mb-16">

                <p class="text-brand text-sm uppercase tracking-wide mb-4">
                    Alles aus einer Hand
                </p>

                <h2 class="text-3xl md:text-4xl font-bold mb-6">
                    Mehr als nur eine <span class="text-brand">Website</span>
                </h2>

                <p class="text-neutral-400 text-lg">
                    Damit deine Website online erreichbar ist, braucht sie mehr als nur gutes Design.
                    Auf Wunsch kümmere ich mich gemeinsam mit einem erfahrenen Hosting-Partner um die komplette
                    technische Infrastruktur.
                </p>

            </div>

            <!-- Grid -->
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                <div v-reveal="{ delay: 0 }" class="group border border-neutral-800 rounded-2xl bg-neutral-800/60 p-8 hover:border-brand hover:-translate-y-1 transition">
                    <IconBadge :icon="GlobeAltIcon" class="mb-4" />

                    <h3 class="text-xl font-semibold mb-3">
                        Domain
                    </h3>

                    <p class="text-neutral-400">
                        Unterstützung bei der Auswahl, Registrierung oder dem Umzug deiner Wunsch-Domain.
                    </p>
                </div>

                <div v-reveal="{ delay: 80 }" class="group border border-neutral-800 rounded-2xl bg-neutral-800/60 p-8 hover:border-brand hover:-translate-y-1 transition">
                    <IconBadge :icon="CloudIcon" class="mb-4" />

                    <h3 class="text-xl font-semibold mb-3">
                        Hosting
                    </h3>

                    <p class="text-neutral-400">
                        Schnelles und zuverlässiges Hosting für maximale Performance und hohe Verfügbarkeit.
                    </p>
                </div>

                <div v-reveal="{ delay: 160 }" class="group border border-neutral-800 rounded-2xl bg-neutral-800/60 p-8 hover:border-brand hover:-translate-y-1 transition">
                    <IconBadge :icon="RocketLaunchIcon" class="mb-4" />

                    <h3 class="text-xl font-semibold mb-3">
                        Deployment
                    </h3>

                    <p class="text-neutral-400">
                        Die fertige Website wird professionell veröffentlicht und betriebsbereit eingerichtet.
                    </p>
                </div>

                <div v-reveal="{ delay: 240 }" class="group border border-neutral-800 rounded-2xl bg-neutral-800/60 p-8 hover:border-brand hover:-translate-y-1 transition">
                    <IconBadge :icon="EnvelopeIcon" class="mb-4" />

                    <h3 class="text-xl font-semibold mb-3">
                        E-Mail
                    </h3>

                    <p class="text-neutral-400">
                        Einrichtung professioneller E-Mail-Adressen wie
                        <span class="text-brand">info@deinefirma.at</span>.
                    </p>
                </div>

                <div v-reveal="{ delay: 320 }" class="group border border-neutral-800 rounded-2xl bg-neutral-800/60 p-8 hover:border-brand hover:-translate-y-1 transition">
                    <IconBadge :icon="LockClosedIcon" class="mb-4" />

                    <h3 class="text-xl font-semibold mb-3">
                        SSL & Sicherheit
                    </h3>

                    <p class="text-neutral-400">
                        HTTPS, Sicherheitszertifikate und eine sichere Grundkonfiguration sind selbstverständlich.
                    </p>
                </div>

                <div v-reveal="{ delay: 400 }" class="border border-brand/40 rounded-2xl bg-neutral-800/70 p-8 relative overflow-hidden">

                    <div class="absolute inset-0 bg-linear-to-br from-brand/10 to-transparent"></div>

                    <div class="relative">

                        <IconBadge :icon="HandRaisedIcon" class="mb-4" />

                        <h3 class="text-xl font-semibold mb-3 text-brand">
                            Komplettservice
                        </h3>

                        <p class="text-neutral-300">
                            Wenn du möchtest, kümmere ich mich gemeinsam mit meinem Hosting-Partner um die komplette
                            Einrichtung - von der Domain bis zur fertigen Website.
                        </p>

                    </div>

                </div>

            </div>

            <!-- Bottom -->
            <div class="mt-14 border border-brand/30 rounded-2xl p-8 bg-neutral-800/60 text-center">

                <h3 class="text-xl font-semibold mb-4">
                    Du möchtest dich nicht mit Technik beschäftigen?
                </h3>

                <p class="text-neutral-400 max-w-3xl mx-auto">
                    Musst du auch nicht. Ich begleite dich von der ersten Idee bis zur fertigen Website und unterstütze
                    dich auch bei allen technischen Themen rund um Domain, Hosting, E-Mail und Veröffentlichung.
                </p>

            </div>

        </div>

    </section>
</template>

<script setup>
import { GlobeAltIcon, CloudIcon, RocketLaunchIcon, EnvelopeIcon, LockClosedIcon, HandRaisedIcon } from '@heroicons/vue/24/outline'
import IconBadge from '@/components/ui/IconBadge.vue'
</script>