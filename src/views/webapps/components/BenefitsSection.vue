<template>
    <section class="wa-section wa-section-alt">
        <div class="wa-glow -bottom-40 -left-40"></div>

        <div class="wa-wrap">

            <div v-reveal class="wa-head">
                <p class="wa-pill">Deine Vorteile</p>
                <h2 class="wa-title">
                    Eine Website, die für dein <span class="wa-grad">Unternehmen</span> arbeitet
                </h2>
                <p class="wa-lead">
                    Eine gute Website sieht nicht nur modern aus - sie überzeugt Besucher,
                    wird bei Google gefunden und hilft dir dabei, neue Kunden zu gewinnen.
                </p>
            </div>

            <!-- Bento -->
            <div class="grid gap-5 md:grid-cols-2 lg:grid-cols-6">
                <article v-for="(b, i) in items" :key="b.title" v-reveal="{ delay: i * 70 }" v-spot
                    class="wa-card flex flex-col p-8" :class="b.span">

                    <span class="wa-icon mb-6">
                        <component :is="b.icon" class="h-6 w-6" />
                    </span>

                    <h3 class="mb-3 text-xl font-semibold">{{ b.title }}</h3>
                    <p class="leading-relaxed text-neutral-400">{{ b.text }}</p>

                    <!-- Mini-Visual nur für die großen Karten -->
                    <div v-if="b.visual === 'bars'" class="wa-bars mt-8" aria-hidden="true">
                        <i v-for="n in 12" :key="n" :style="{ '--h': 20 + ((n * 37) % 70) + '%', '--i': n }"></i>
                    </div>
                    <div v-else-if="b.visual === 'rank'" class="mt-8 space-y-2" aria-hidden="true">
                        <div class="flex items-center gap-3 rounded-xl border border-brand/40 bg-brand/10 px-4 py-2.5 text-sm">
                            <span class="font-bold text-brand">#1</span>
                            <span class="h-2 flex-1 rounded-full bg-white/20"></span>
                        </div>
                        <div class="flex items-center gap-3 rounded-xl border border-white/5 px-4 py-2.5 text-sm opacity-50">
                            <span class="text-neutral-500">#2</span>
                            <span class="h-2 w-2/3 rounded-full bg-white/10"></span>
                        </div>
                    </div>
                </article>
            </div>

            <!-- Aussage -->
            <div v-reveal class="wa-statement mt-14">
                <p class="text-xl font-medium leading-relaxed md:text-2xl">
                    Eine Website ist keine Ausgabe -
                    <span class="wa-grad">sie ist eine Investition in neue Kunden und langfristiges Wachstum.</span>
                </p>
            </div>
        </div>
    </section>
</template>

<script setup>
import {
    ArrowTrendingUpIcon,
    BoltIcon,
    DevicePhoneMobileIcon,
    MagnifyingGlassIcon,
    RocketLaunchIcon,
    UserGroupIcon
} from '@heroicons/vue/24/outline'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'

const items = [
    {
        title: 'Schnell & performant',
        text: 'Kurze Ladezeiten sorgen für eine bessere Nutzererfahrung und wirkt sich positiv auf dein Google-Ranking aus.',
        icon: BoltIcon,
        span: 'lg:col-span-4',
        visual: 'bars'
    },
    {
        title: 'Mehr Anfragen',
        text: 'Klare Strukturen und ein durchdachter Seitenaufbau helfen Besuchern dabei, schneller Kontakt mit dir aufzunehmen.',
        icon: ArrowTrendingUpIcon,
        span: 'lg:col-span-2'
    },
    {
        title: 'Besser bei Google',
        text: 'Sauber entwickelte Websites bieten die Grundlage, damit deine Inhalte von Suchmaschinen optimal verstanden werden.',
        icon: MagnifyingGlassIcon,
        span: 'lg:col-span-2',
        visual: 'rank'
    },
    {
        title: 'Perfekt auf jedem Gerät',
        text: 'Egal ob Smartphone, Tablet oder Desktop - deine Website sieht überall professionell aus.',
        icon: DevicePhoneMobileIcon,
        span: 'lg:col-span-2'
    },
    {
        title: 'Zukunftssicher',
        text: 'Deine Website wächst mit deinem Unternehmen und kann jederzeit erweitert werden.',
        icon: RocketLaunchIcon,
        span: 'lg:col-span-2'
    },
    {
        title: 'Persönlicher Ansprechpartner',
        text: 'Kein Ticketsystem und keine Agentur - du arbeitest direkt mit dem Entwickler deiner Website.',
        icon: UserGroupIcon,
        span: 'lg:col-span-6'
    }
]
</script>

<style scoped>
.wa-bars {
    display: flex;
    align-items: flex-end;
    gap: 0.5rem;
    height: 5.5rem;
}

.wa-bars i {
    flex: 1;
    height: var(--h);
    border-radius: 6px 6px 2px 2px;
    background: linear-gradient(to top, rgb(31 171 171 / 0.15), rgb(31 171 171 / 0.8));
    transform-origin: bottom;
    animation: grow 1.2s calc(var(--i) * 60ms) cubic-bezier(0.16, 1, 0.3, 1) both;
}

.wa-statement {
    padding: 3rem 2rem;
    text-align: center;
    border: 1px solid rgb(31 171 171 / 0.3);
    border-radius: 28px;
    background:
        radial-gradient(ellipse 60% 140% at 50% 120%, rgb(31 171 171 / 0.2), transparent 70%),
        rgb(255 255 255 / 0.02);
}

@keyframes grow {
    from {
        transform: scaleY(0);
    }
}

@media (prefers-reduced-motion: reduce) {
    .wa-bars i {
        animation: none;
    }
}
</style>
