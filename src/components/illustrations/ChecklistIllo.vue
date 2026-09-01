<template>
    <svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="120" cy="105" rx="100" ry="80" class="fill-brand/10" />

        <g class="animate-float-soft">
            <rect x="60" y="40" width="120" height="130" rx="14" class="fill-neutral-800" stroke="currentColor"
                stroke-opacity="0.12" stroke-width="2" />
            <rect x="95" y="32" width="50" height="18" rx="9" class="fill-brand" />

            <g v-for="(item, i) in items" :key="i" :transform="`translate(0 ${i * 30})`">
                <rect x="80" y="72" width="20" height="20" rx="6" :class="item.fill" />
                <path v-if="item.done" d="M84 82 L89 87 L97 77" stroke="white" stroke-width="3"
                    stroke-linecap="round" stroke-linejoin="round" fill="none" />
                <rect x="110" y="78" width="52" height="7" rx="3.5" class="fill-white/20" />
            </g>
        </g>

        <circle cx="185" cy="150" r="12" class="fill-accent animate-float-soft-slow" />
        <path d="M180 150 L184 154 L191 145" stroke="black" stroke-opacity="0.4" stroke-width="3"
            stroke-linecap="round" stroke-linejoin="round" fill="none" />
    </svg>
</template>

<script setup>
const items = [
    { done: true, fill: 'fill-brand' },
    { done: true, fill: 'fill-brand' },
    { done: false, fill: 'fill-white/15' }
]
</script>
