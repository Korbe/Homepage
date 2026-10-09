<template>
    <section class="wa-section">
        <div class="wa-glow -left-40 top-1/3"></div>

        <div class="wa-wrap">

            <div v-reveal class="wa-head">
                <p class="wa-pill">Mein Ansatz</p>
                <h2 class="wa-title">
                    Ich entwickle keine <span class="wa-grad">Websites</span> von der <span class="wa-grad">Stange</span>
                </h2>
                <p class="wa-lead">
                    Jede Website entsteht von Grund auf neu – passend zu deinem Unternehmen,
                    deinen Kunden und deinen Zielen. Keine fertigen Templates,
                    keine unnötigen Plugins und keine Kompromisse.
                </p>
            </div>

            <div class="grid gap-6 lg:grid-cols-3">
                <article v-for="(c, i) in cards" :key="c.title" v-reveal="{ delay: i * 100 }" v-spot
                    class="wa-card p-8 lg:p-9">

                    <span class="wa-big" aria-hidden="true">0{{ i + 1 }}</span>

                    <span class="wa-icon mb-6">
                        <component :is="c.icon" class="h-6 w-6" />
                    </span>

                    <h3 class="mb-4 text-xl font-semibold">{{ c.title }}</h3>
                    <p class="leading-relaxed text-neutral-400">{{ c.text }}</p>
                </article>
            </div>

            <!-- Kernbotschaft -->
            <div v-reveal class="wa-banner mt-14">
                <h3 class="wa-title mb-4 text-[clamp(1.5rem,3vw,2.2rem)]">
                    Mein Ziel ist nicht einfach eine <span class="wa-grad">schöne Website.</span>
                </h3>
                <p class="mx-auto max-w-3xl leading-relaxed text-neutral-300">
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
import { BuildingStorefrontIcon, RocketLaunchIcon, WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'

const cards = [
    {
        title: 'Individuell entwickelt',
        text: 'Keine Baukastensysteme, keine fertigen Themes. Deine Website wird exakt auf dein Unternehmen und deine Anforderungen entwickelt.',
        icon: WrenchScrewdriverIcon
    },
    {
        title: 'Schnell & zukunftssicher',
        text: 'Moderne Technologien sorgen für schnelle Ladezeiten, hohe Sicherheit und eine Website, die auch in einigen Jahren noch problemlos erweitert werden kann.',
        icon: RocketLaunchIcon
    },
    {
        title: 'Für dein Business gebaut',
        text: 'Eine Website soll nicht nur gut aussehen. Sie soll Vertrauen schaffen, bei Google gefunden werden und neue Kunden gewinnen.',
        icon: BuildingStorefrontIcon
    }
]
</script>

<style scoped>
.wa-big {
    position: absolute !important;
    right: 1.5rem;
    top: 0.6rem;
    font-family: 'Bricolage Grotesque Variable', ui-sans-serif, sans-serif;
    font-size: 5.5rem;
    font-weight: 800;
    line-height: 1;
    letter-spacing: -0.05em;
    color: transparent;
    -webkit-text-stroke: 1.5px rgb(255 255 255 / 0.1);
    transition: -webkit-text-stroke-color 0.3s;
}

.wa-card:hover .wa-big {
    -webkit-text-stroke-color: rgb(31 171 171 / 0.6);
}

.wa-banner {
    position: relative;
    overflow: hidden;
    padding: 3rem 2rem;
    text-align: center;
    border: 1px solid rgb(31 171 171 / 0.3);
    border-radius: 28px;
    background:
        radial-gradient(ellipse 70% 120% at 50% 0%, rgb(31 171 171 / 0.22), transparent 70%),
        rgb(255 255 255 / 0.02);
}
</style>
