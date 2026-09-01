<template>
    <svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="120" cy="105" rx="100" ry="80" class="fill-brand/10" />

        <!-- floating controller -->
        <g class="animate-float-soft-slow">
            <rect x="150" y="45" width="46" height="26" rx="13" class="fill-accent/20" stroke="var(--color-accent)"
                stroke-width="4" />
            <circle cx="162" cy="58" r="3" class="fill-accent" />
            <circle cx="184" cy="58" r="3" class="fill-accent" />
        </g>

        <!-- PC tower -->
        <g class="animate-float-soft">
            <rect x="70" y="45" width="60" height="120" rx="10" class="fill-neutral-800" stroke="var(--color-brand)"
                stroke-width="3" stroke-opacity="0.5" />
            <rect x="80" y="58" width="40" height="6" rx="3" class="fill-brand" />
            <circle cx="100" cy="80" r="16" class="fill-neutral-900" stroke="var(--color-brand)" stroke-width="3" />
            <circle cx="100" cy="80" r="6" class="fill-accent" />
            <rect x="82" y="105" width="36" height="5" rx="2.5" class="fill-white/15" />
            <rect x="82" y="116" width="36" height="5" rx="2.5" class="fill-white/15" />
            <rect x="82" y="127" width="36" height="5" rx="2.5" class="fill-white/15" />
            <rect x="126" y="50" width="4" height="110" class="fill-accent animate-float-soft-slow" />
        </g>
    </svg>
</template>
