<template>
    <svg viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <!-- glow blob -->
        <ellipse cx="120" cy="105" rx="100" ry="80" class="fill-brand/10" />

        <!-- floating brackets -->
        <g class="animate-float-soft-slow">
            <text x="18" y="55" font-size="34" font-weight="700" class="fill-brand/40" font-family="monospace">&lt;/&gt;</text>
        </g>

        <!-- window -->
        <g class="animate-float-soft">
            <rect x="35" y="40" width="170" height="120" rx="14" class="fill-neutral-800" stroke="currentColor"
                stroke-opacity="0.15" stroke-width="2" />
            <rect x="35" y="40" width="170" height="24" rx="14" class="fill-neutral-700" />
            <circle cx="50" cy="52" r="4" class="fill-red-400/70" />
            <circle cx="63" cy="52" r="4" class="fill-yellow-400/70" />
            <circle cx="76" cy="52" r="4" class="fill-green-400/70" />

            <!-- code lines -->
            <rect x="52" y="80" width="60" height="7" rx="3.5" class="fill-brand" />
            <rect x="118" y="80" width="30" height="7" rx="3.5" class="fill-white/20" />
            <rect x="52" y="97" width="34" height="7" rx="3.5" class="fill-accent" />
            <rect x="90" y="97" width="70" height="7" rx="3.5" class="fill-white/20" />
            <rect x="66" y="114" width="90" height="7" rx="3.5" class="fill-white/15" />
            <rect x="52" y="131" width="46" height="7" rx="3.5" class="fill-brand/70" />
        </g>

        <!-- cursor -->
        <circle cx="150" cy="131" r="5" class="fill-accent animate-float-soft" />
    </svg>
</template>
