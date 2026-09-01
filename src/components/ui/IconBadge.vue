<template>
    <span class="inline-flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3"
        :class="[sizeClasses, shapeClasses, colorClasses]">
        <component :is="icon" class="w-1/2 h-1/2" />
    </span>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    icon: { type: [Object, Function], required: true },
    size: { type: String, default: 'md' },
    shape: { type: String, default: 'blob' },
    color: { type: String, default: 'brand' }
})

const sizeMap = {
    sm: 'h-9 w-9',
    md: 'h-12 w-12',
    lg: 'h-16 w-16'
}

const shapeMap = {
    blob: 'rounded-2xl rounded-tr-md',
    circle: 'rounded-full',
    square: 'rounded-xl'
}

const colorMap = {
    brand: 'bg-brand/15 text-brand ring-1 ring-brand/30',
    accent: 'bg-accent/15 text-accent ring-1 ring-accent/30',
    neutral: 'bg-white/10 text-white ring-1 ring-white/20'
}

const sizeClasses = computed(() => sizeMap[props.size] ?? sizeMap.md)
const shapeClasses = computed(() => shapeMap[props.shape] ?? shapeMap.blob)
const colorClasses = computed(() => colorMap[props.color] ?? colorMap.brand)
</script>
