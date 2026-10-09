<template>
    <section class="sb-section">
        <div class="sb-glow -left-40 -bottom-40"></div>

        <div class="sb-wrap">
            <div class="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">

                <!-- Text -->
                <div v-reveal class="lg:col-span-6">
                    <p class="sb-kicker sb-hand">der mensch dahinter</p>
                    <h2 class="sb-title mb-8">Abseits der <em>Arbeit</em></h2>

                    <div class="space-y-6 text-lg leading-relaxed text-neutral-300">
                        <p>
                            Neben der Arbeit verbringe ich meine Zeit mit Programmieren "ha wer häts gedacht", Gaming und
                            Aktivitäten in der Natur - oft gemeinsam mit meinem Hund.
                        </p>

                        <p>
                            Zum Ausgleich zum vielen Sitzen gehe ich regelmäßig ins Fitnessstudio.
                            Außerdem bin ich gerne draußen in der Natur - sei es beim Camping in meiner Hängematte
                            oder bei Spaziergängen an der frischen Luft.
                        </p>

                        <p>
                            Zu erwähnen ist auch mein ehrenamtliches Engagement:
                            Ich bin Mitglied der Freiwilligen Feuerwehr Völkendorf.
                        </p>

                        <p>
                            Ein besonders wichtiger Teil meines Lebens ist meine Freundin,
                            die mich in allem unterstützt, mir Rückhalt gibt und mein Leben bereichert.
                        </p>
                    </div>
                </div>

                <!-- Klebezettel-Wand -->
                <div class="lg:col-span-6">
                    <div class="sb-wall">
                        <div v-for="(n, i) in notes" :key="n.text" v-reveal="{ delay: i * 80 }" class="sb-cell">
                            <div class="sb-paper sb-note-card" :class="n.tone" :style="{ '--r': n.r + 'deg' }">
                                <span class="sb-pin" aria-hidden="true"></span>
                                <component :is="n.icon" class="mb-2 h-7 w-7 text-[#0f7d7d]" />
                                <p class="sb-hand text-[1.7rem] leading-none">{{ n.text }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Leitsatz -->
            <figure v-reveal class="sb-quote">
                <span class="sb-q" aria-hidden="true">“</span>
                <blockquote class="sb-hand">
                    Wenn ich etwas noch nicht kann, dann lerne ich es - <span>wer nicht lernt, bleibt stehen.</span>
                </blockquote>
                <figcaption class="mt-5 text-sm uppercase tracking-[0.25em] text-neutral-400">Mein Leitsatz</figcaption>
            </figure>
        </div>
    </section>
</template>

<script setup>
import {
    BoltIcon,
    CodeBracketIcon,
    FireIcon,
    HeartIcon,
    PuzzlePieceIcon,
    SunIcon
} from '@heroicons/vue/24/outline'
import '@fontsource-variable/fraunces/wght.css'
import '@fontsource-variable/fraunces/wght-italic.css'
import '@fontsource/caveat/700.css'
import '@/styles/scrapbook.css'

const notes = [
    { text: 'Programmieren', icon: CodeBracketIcon, tone: '', r: -3 },
    { text: 'Gaming', icon: PuzzlePieceIcon, tone: 'sb-paper-teal', r: 2.5 },
    { text: 'Natur & Camping', icon: SunIcon, tone: 'sb-paper-amber', r: 3 },
    { text: 'Fitnessstudio', icon: BoltIcon, tone: 'sb-paper-white', r: -2.5 },
    { text: 'Feuerwehr Völkendorf', icon: FireIcon, tone: 'sb-paper-teal', r: -2 },
    { text: 'Hund & Freundin', icon: HeartIcon, tone: '', r: 3.5 }
]
</script>

<style scoped>
.sb-wall {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.6rem 1.4rem;
}

.sb-cell:nth-child(even) {
    margin-top: 1.6rem;
}

.sb-note-card {
    padding: 1.7rem 1.3rem 1.3rem;
    transform: rotate(var(--r, 0deg));
    min-height: 8.2rem;
}

.sb-note-card:hover {
    transform: rotate(0) translateY(-5px) scale(1.04);
}

.sb-quote {
    position: relative;
    max-width: 52rem;
    margin: 6rem auto 0;
    padding: 3.2rem 2rem 2.6rem;
    text-align: center;
    border: 2px dashed rgb(31 171 171 / 0.5);
    border-radius: 28px;
    background: radial-gradient(ellipse 70% 120% at 50% 130%, rgb(31 171 171 / 0.16), transparent 70%);
}

.sb-q {
    position: absolute;
    left: 50%;
    top: -2.2rem;
    margin-left: -1.6rem;
    width: 3.2rem;
    height: 3.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Fraunces Variable', Georgia, serif;
    font-size: 3.4rem;
    line-height: 1;
    color: #04201f;
    background: var(--color-brand);
    border-radius: 50%;
    padding-top: 1.1rem;
}

.sb-quote blockquote {
    font-size: clamp(1.9rem, 4vw, 3rem);
    line-height: 1.12;
}

.sb-quote blockquote span {
    color: var(--color-accent);
}

@media (prefers-reduced-motion: reduce) {
    .sb-note-card {
        transform: none;
    }

    .sb-note-card:hover {
        transform: none;
    }
}
</style>
