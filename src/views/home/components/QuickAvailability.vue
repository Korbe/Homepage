<template>
    <section class="wa-section !py-14">
        <div class="wa-wrap">
            <div v-reveal class="wa-strip">
                <div class="flex items-center gap-5">
                    <span class="wa-icon !h-14 !w-14 shrink-0 !text-accent">
                        <BoltIcon class="h-7 w-7" />
                    </span>
                    <div>
                        <p class="wa-num text-xl md:text-2xl">Schnelle Hilfe - wenn du sie brauchst</p>
                        <p class="mt-1 text-neutral-400">
                            In vielen Fällen ist ein Termin schon am selben oder nächsten Tag möglich.
                        </p>
                    </div>
                </div>

                <router-link to="/pc-hilfe" class="wa-btn wa-btn-primary shrink-0">
                    Termin anfragen
                    <ArrowUpRightIcon class="h-5 w-5" />
                </router-link>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ArrowUpRightIcon, BoltIcon } from '@heroicons/vue/24/outline'
import '@fontsource-variable/bricolage-grotesque'
import '@/styles/spotlight.css'
</script>

<style scoped>
.wa-strip {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1.8rem;
    padding: 2rem;
    border: 1px solid rgb(245 165 36 / 0.35);
    border-radius: 28px;
    background:
        radial-gradient(ellipse 60% 140% at 0% 50%, rgb(245 165 36 / 0.14), transparent 70%),
        rgb(255 255 255 / 0.025);
}

@media (min-width: 768px) {
    .wa-strip {
        flex-direction: row;
        align-items: center;
        padding: 2.2rem 2.8rem;
    }
}
</style>
