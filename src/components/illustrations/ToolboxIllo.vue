<template>
    <svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <ellipse cx="120" cy="110" rx="100" ry="78" class="fill-brand/10" />

        <!-- floating gear -->
        <g class="animate-float-soft-slow">
            <circle cx="182" cy="55" r="16" class="fill-accent/20" stroke="var(--color-accent)" stroke-width="4" />
            <circle cx="182" cy="55" r="5" class="fill-accent" />
        </g>

        <!-- toolbox -->
        <g class="animate-float-soft">
            <rect x="40" y="95" width="150" height="70" rx="12" class="fill-brand" />
            <rect x="40" y="95" width="150" height="70" rx="12" fill="black" fill-opacity="0.12" />
            <rect x="40" y="118" width="150" height="14" class="fill-neutral-900/40" />
            <path d="M85 95 V78 a12 12 0 0 1 12 -12 h46 a12 12 0 0 1 12 12 V95" stroke="var(--color-brand)"
                stroke-width="8" stroke-linecap="round" fill="none" />
            <rect x="105" y="118" width="30" height="18" rx="4" class="fill-accent" />

            <!-- screwdriver -->
            <g transform="rotate(35 60 150)">
                <rect x="55" y="105" width="10" height="55" rx="4" class="fill-neutral-200" />
                <rect x="52" y="95" width="16" height="18" rx="4" class="fill-accent" />
            </g>

            <!-- wrench -->
            <g transform="rotate(-20 175 150)">
                <rect x="168" y="110" width="10" height="55" rx="4" class="fill-neutral-200" />
                <circle cx="173" cy="105" r="12" class="fill-neutral-200" />
                <circle cx="173" cy="105" r="5" class="fill-brand" />
            </g>
        </g>
    </svg>
</template>
