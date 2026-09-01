<template>
    <svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="120" cy="105" rx="100" ry="80" class="fill-brand/10" />

        <!-- envelope -->
        <g class="animate-float-soft">
            <rect x="45" y="65" width="140" height="90" rx="14" class="fill-brand" />
            <path d="M45 79 L115 122 L185 79" stroke="black" stroke-opacity="0.2" stroke-width="6"
                stroke-linecap="round" stroke-linejoin="round" fill="none" />
            <path d="M45 79 L115 122 L185 79" stroke="white" stroke-opacity="0.9" stroke-width="4"
                stroke-linecap="round" stroke-linejoin="round" fill="none" />
        </g>

        <!-- chat bubble -->
        <g class="animate-float-soft-slow">
            <rect x="150" y="35" width="56" height="38" rx="12" class="fill-accent" />
            <path d="M162 73 L154 86 L172 73 Z" class="fill-accent" />
            <circle cx="165" cy="54" r="3.5" class="fill-white/80" />
            <circle cx="178" cy="54" r="3.5" class="fill-white/80" />
            <circle cx="191" cy="54" r="3.5" class="fill-white/80" />
        </g>

        <!-- location pin -->
        <g class="animate-float-soft-slow">
            <path d="M50 40c0-8 6-14 14-14s14 6 14 14c0 10-14 24-14 24S50 50 50 40Z" class="fill-neutral-200" />
            <circle cx="64" cy="39" r="5" class="fill-brand" />
        </g>
    </svg>
</template>
