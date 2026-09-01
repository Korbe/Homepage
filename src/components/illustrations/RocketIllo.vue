<template>
    <svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="120" cy="105" rx="100" ry="80" class="fill-brand/10" />

        <!-- stars -->
        <circle cx="55" cy="45" r="3" class="fill-accent animate-float-soft-slow" />
        <circle cx="185" cy="65" r="2.5" class="fill-white/60 animate-float-soft" />
        <circle cx="60" cy="140" r="2.5" class="fill-white/50 animate-float-soft-slow" />

        <!-- rocket -->
        <g class="animate-float-soft" transform="rotate(15 120 100)">
            <path d="M120 40 C142 60 142 100 120 130 C98 100 98 60 120 40Z" class="fill-neutral-100" />
            <path d="M120 40 C142 60 142 100 120 130 C98 100 98 60 120 40Z" fill="url(#rocketShade)"
                fill-opacity="0.4" />
            <circle cx="120" cy="78" r="12" class="fill-brand" />
            <circle cx="120" cy="78" r="5" class="fill-white/70" />
            <path d="M104 100 L84 118 L104 116Z" class="fill-accent" />
            <path d="M136 100 L156 118 L136 116Z" class="fill-accent" />
            <path d="M112 128 Q120 155 128 128Z" class="fill-accent" />
        </g>

        <defs>
            <linearGradient id="rocketShade" x1="98" y1="40" x2="142" y2="130" gradientUnits="userSpaceOnUse">
                <stop stop-color="var(--color-brand)" />
                <stop offset="1" stop-color="var(--color-brand)" stop-opacity="0" />
            </linearGradient>
        </defs>
    </svg>
</template>
