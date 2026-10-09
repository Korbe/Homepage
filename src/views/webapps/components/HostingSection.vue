<template>
    <section class="wa-section">
        <div class="wa-glow -bottom-40 -right-40"></div>

        <div class="wa-wrap">

            <div v-reveal class="wa-head">
                <p class="wa-pill">Alles aus einer Hand</p>
                <h2 class="wa-title">Mehr als nur eine <span class="wa-grad">Website</span></h2>
                <p class="wa-lead">
                    Damit deine Website online erreichbar ist, braucht sie mehr als nur gutes Design.
                    Auf Wunsch kümmere ich mich gemeinsam mit einem erfahrenen Hosting-Partner um die komplette
                    technische Infrastruktur.
                </p>
            </div>

            <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <article v-for="(h, i) in items" :key="h.title" v-reveal="{ delay: i * 70 }" v-spot
                    class="wa-card p-8" :class="h.hot ? 'wa-card-hot' : ''">

                    <span class="wa-icon mb-6">
                        <component :is="h.icon" class="h-6 w-6" />
                    </span>
                    <h3 class="mb-3 text-xl font-semibold" :class="h.hot ? 'text-brand' : ''">{{ h.title }}</h3>
                    <p class="leading-relaxed text-neutral-400">
                        {{ h.text }}<span v-if="h.mail" class="text-brand"> info@deinefirma.at</span><span v-if="h.mail">.</span>
                    </p>
                </article>
            </div>

            <div v-reveal v-spot class="wa-card mx-auto mt-14 max-w-3xl p-8 text-center md:p-10">
                <h3 class="mb-3 text-xl font-semibold">Du möchtest dich nicht mit Technik beschäftigen?</h3>
                <p class="leading-relaxed text-neutral-400">
                    Musst du auch nicht. Ich begleite dich von der ersten Idee bis zur fertigen Website und unterstütze
                    dich auch bei allen technischen Themen rund um Domain, Hosting, E-Mail und Veröffentlichung.
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import {
    CloudIcon,
    EnvelopeIcon,
    GlobeAltIcon,
    HandRaisedIcon,
    LockClosedIcon,
    RocketLaunchIcon
} from '@heroicons/vue/24/outline'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'

const items = [
    {
        title: 'Domain',
        text: 'Unterstützung bei der Auswahl, Registrierung oder dem Umzug deiner Wunsch-Domain.',
        icon: GlobeAltIcon
    },
    {
        title: 'Hosting',
        text: 'Schnelles und zuverlässiges Hosting für maximale Performance und hohe Verfügbarkeit.',
        icon: CloudIcon
    },
    {
        title: 'Deployment',
        text: 'Die fertige Website wird professionell veröffentlicht und betriebsbereit eingerichtet.',
        icon: RocketLaunchIcon
    },
    {
        title: 'E-Mail',
        text: 'Einrichtung professioneller E-Mail-Adressen wie',
        mail: true,
        icon: EnvelopeIcon
    },
    {
        title: 'SSL & Sicherheit',
        text: 'HTTPS, Sicherheitszertifikate und eine sichere Grundkonfiguration sind selbstverständlich.',
        icon: LockClosedIcon
    },
    {
        title: 'Komplettservice',
        text: 'Wenn du möchtest, kümmere ich mich gemeinsam mit meinem Hosting-Partner um die komplette Einrichtung - von der Domain bis zur fertigen Website.',
        icon: HandRaisedIcon,
        hot: true
    }
]
</script>
