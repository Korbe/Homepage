<template>
    <div class="cover relative isolate overflow-hidden" :class="tone.bg" :style="{ '--glow': tone.glow }" aria-hidden="true">
        <div class="cover-dots absolute inset-0"></div>
        <div class="cover-glow absolute"></div>

        <!-- großes Geisterwort -->
        <span class="cover-word absolute bottom-[-0.12em] left-4 select-none">{{ category }}</span>

        <component :is="tone.illo"
            class="cover-illo absolute bottom-[6%] right-[4%] top-[8%] h-[86%] w-auto transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
    </div>
</template>

<script setup>
import { computed } from 'vue'
import RocketIllo from '@/components/illustrations/RocketIllo.vue'
import CodeWindowIllo from '@/components/illustrations/CodeWindowIllo.vue'
import FramesIllo from '@/components/illustrations/FramesIllo.vue'
import ToolboxIllo from '@/components/illustrations/ToolboxIllo.vue'

const props = defineProps({
    category: { type: String, required: true }
})

const tones = {
    Performance: { illo: RocketIllo, bg: 'bg-[#071a1b]', glow: 'rgb(245 165 36 / 0.28)' },
    Webentwicklung: { illo: CodeWindowIllo, bg: 'bg-[#06191a]', glow: 'rgb(31 171 171 / 0.35)' },
    Digitalisierung: { illo: FramesIllo, bg: 'bg-[#141109]', glow: 'rgb(245 165 36 / 0.3)' },
    Praxis: { illo: ToolboxIllo, bg: 'bg-[#091718]', glow: 'rgb(31 171 171 / 0.3)' }
}

const tone = computed(() => tones[props.category] ?? tones.Webentwicklung)
</script>

<style scoped>
.cover-dots {
    background-image: radial-gradient(rgb(255 255 255 / 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    mask-image: linear-gradient(135deg, #000, transparent 70%);
}

.cover-glow {
    right: -10%;
    top: -30%;
    width: 70%;
    aspect-ratio: 1;
    border-radius: 50%;
    background: var(--glow);
    filter: blur(60px);
}

.cover-word {
    font-family: 'Fraunces Variable', Georgia, serif;
    font-style: italic;
    font-weight: 600;
    font-size: clamp(1.5rem, 5.6cqw, 4.2rem);
    line-height: 1;
    color: rgb(255 255 255 / 0.07);
    white-space: nowrap;
}

.cover {
    container-type: inline-size;
}
</style>
