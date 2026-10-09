<template>
    <section class="wa-section wa-section-alt">
        <div class="wa-glow -right-40 top-0"></div>

        <div class="wa-wrap">

            <div v-reveal class="wa-head">
                <p class="wa-pill">Moderne Technologien</p>
                <h2 class="wa-title">
                    Die Technik im Hintergrund macht den <span class="wa-grad">Unterschied</span>
                </h2>
                <p class="wa-lead">
                    Du musst keine Programmiersprachen kennen.
                    Wichtig ist nur eines: Deine Website soll schnell, sicher und langfristig erweiterbar sein.
                    Genau dafür setze ich auf moderne Technologien.
                </p>
            </div>

            <div class="grid gap-6 lg:grid-cols-3">
                <article v-for="(t, i) in stack" :key="t.title" v-reveal="{ delay: i * 100 }" v-spot
                    class="wa-card flex flex-col p-8">

                    <span class="wa-icon mb-6">
                        <component :is="t.icon" class="h-6 w-6" />
                    </span>
                    <h3 class="mb-3 text-xl font-semibold">{{ t.title }}</h3>
                    <p class="mb-8 leading-relaxed text-neutral-400">{{ t.text }}</p>

                    <ul class="mt-auto flex flex-wrap gap-2">
                        <li v-for="tag in t.tags" :key="tag" class="wa-chip">{{ tag }}</li>
                    </ul>
                </article>
            </div>

            <!-- Aussage als Code-Block -->
            <div v-reveal class="wa-code mx-auto mt-14 max-w-3xl">
                <div class="wa-code-bar"><i></i><i></i><i></i><span>philosophie.js</span></div>
                <div class="p-7 text-center md:p-9">
                    <h3 class="mb-3 text-2xl font-semibold">Technologie ist Mittel zum Zweck.</h3>
                    <p class="leading-relaxed text-neutral-300">
                        Du kaufst bei mir keine Programmiersprache.
                        Du bekommst eine Website oder Web-Anwendung,
                        die zuverlässig funktioniert, bei Google gefunden wird
                        und dein Unternehmen langfristig unterstützt.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { BoltIcon, LockClosedIcon, RocketLaunchIcon } from '@heroicons/vue/24/outline'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'

const stack = [
    {
        title: 'Schnell & modern',
        text: 'Moderne Frontend-Technologien sorgen für blitzschnelle Ladezeiten, flüssige Animationen und ein hochwertiges Nutzererlebnis.',
        icon: BoltIcon,
        tags: ['Vue.js', 'TailwindCSS', 'Vite']
    },
    {
        title: 'Stabil & sicher',
        text: 'Im Hintergrund arbeitet ein stabiles Backend, das Daten verarbeitet, Benutzer verwaltet und dein Unternehmen zuverlässig unterstützt.',
        icon: LockClosedIcon,
        tags: ['Laravel', 'MySQL', 'PHP']
    },
    {
        title: 'Für die Zukunft gebaut',
        text: 'Dein Unternehmen entwickelt sich weiter. Deshalb entwickle ich Websites und Web-Apps, die problemlos erweitert werden können.',
        icon: RocketLaunchIcon,
        tags: ['Clean Architecture', 'SSG', 'SSR', 'Skalierbar']
    }
]
</script>

<style scoped>
.wa-chip {
    padding: 0.4rem 0.85rem;
    font-size: 0.8rem;
    font-weight: 500;
    color: #7ff3e3;
    border: 1px solid rgb(31 171 171 / 0.35);
    border-radius: 999px;
    background: rgb(31 171 171 / 0.1);
}

.wa-code {
    overflow: hidden;
    border: 1px solid rgb(255 255 255 / 0.1);
    border-radius: 24px;
    background: #0a0f0f;
    box-shadow: 0 30px 60px -30px rgb(31 171 171 / 0.35);
}

.wa-code-bar {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.75rem 1.1rem;
    border-bottom: 1px solid rgb(255 255 255 / 0.08);
    background: rgb(255 255 255 / 0.04);
}

.wa-code-bar i {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgb(255 255 255 / 0.18);
}

.wa-code-bar span {
    margin-left: 0.7rem;
    font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
    font-size: 0.75rem;
    color: rgb(163 163 163);
}
</style>
