<template>
	<header class="absolute top-0 left-0 w-full z-50">
		<nav class="container mx-auto px-10 py-4 flex items-center justify-between">

			<!-- Logo -->
			<div class="flex items-center gap-2">
				<RouterLink to="/" class="flex items-center gap-2">
					<img src="@/assets/logo-big-invert.svg" alt="Korbitsch Lukas Logo" class="h-28 w-auto" />
				</RouterLink>
			</div>

			<!-- Desktop -->
			<div class="hidden md:flex items-center gap-7 text-sm font-medium tracking-wide">

				<RouterLink to="/" :class="isActive('/')">
					HOME
				</RouterLink>

				<RouterLink to="/portfolio" :class="isActive('/portfolio')">
					PORTFOLIO
				</RouterLink>

				<RouterLink to="/it-hilfe" :class="isActive('/it-hilfe')">
					IT HILFE
				</RouterLink>

				<RouterLink to="/pc-builds" :class="isActive('/pc-builds')">
					GAMING PC BUILDS
				</RouterLink>

				<RouterLink to="/about" :class="isActive('/about')">
					ÜBER MICH
				</RouterLink>

				<RouterLink to="/contact" :class="isActive('/contact')">
					KONTAKT
				</RouterLink>

			</div>

			<!-- Mobile -->
			<button @click="mobileOpen = !mobileOpen" class="md:hidden p-2 text-brand">
				<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
					stroke="currentColor" class="w-7 h-7">
					<path stroke-linecap="round" stroke-linejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
				</svg>
			</button>

		</nav>

		<!-- MOBILE MENU -->
		<transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
			enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
			leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
			<div v-if="mobileOpen"
				class="md:hidden absolute top-full left-0 w-full bg-neutral-900 border-t border-neutral-800 px-6 py-6">

				<div class="flex flex-col gap-4 text-base font-medium tracking-wide">

					<RouterLink @click="mobileOpen = false" to="/" :class="isActive('/')"
						class="py-3 border-b border-neutral-800">
						HOME
					</RouterLink>

					<RouterLink @click="mobileOpen = false" to="/portfolio" :class="isActive('/portfolio')"
						class="py-3 border-b border-neutral-800">
						PORTFOLIO
					</RouterLink>

					<RouterLink @click="mobileOpen = false" to="/it-hilfe" :class="isActive('/it-hilfe')"
						class="py-3 border-b border-neutral-800">
						IT HILFE
					</RouterLink>

					<RouterLink @click="mobileOpen = false" to="/pc-builds" :class="isActive('/pc-builds')"
						class="py-3 border-b border-neutral-800">
						GAMING PC BUILDS
					</RouterLink>

					<RouterLink @click="mobileOpen = false" to="/about" :class="isActive('/about')"
						class="py-3 border-b border-neutral-800">
						ÜBER MICH
					</RouterLink>

					<RouterLink @click="mobileOpen = false" to="/contact" :class="isActive('/contact')" class="py-3">
						KONTAKT
					</RouterLink>

				</div>
			</div>
		</transition>

	</header>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

const mobileOpen = ref(false)
const route = useRoute()

const isActive = (path) => {
	return route.path === path
		? 'text-brand border-b border-brand pb-1'
		: 'text-white hover:text-brand'
}
</script>