<template>
    <section id="artikel" class="bg-neutral-900/95 pb-24 pt-14 text-white">
        <div class="mx-auto max-w-6xl px-6 lg:px-12">

            <!-- Werkzeugleiste -->
            <div v-reveal class="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div class="flex flex-wrap gap-2" role="tablist" aria-label="Kategorien">
                    <button v-for="c in categories" :key="c" type="button" role="tab" :aria-selected="active === c"
                        class="rounded-full border px-4 py-2 text-sm font-medium transition"
                        :class="active === c
                            ? 'border-brand bg-brand text-black'
                            : 'border-neutral-700 text-neutral-300 hover:border-brand hover:text-brand'"
                        @click="active = c">
                        {{ c }}
                        <span class="ml-1 text-xs opacity-70">{{ countFor(c) }}</span>
                    </button>
                </div>

                <label class="relative block md:w-72">
                    <span class="sr-only">Artikel durchsuchen</span>
                    <MagnifyingGlassIcon class="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-500" />
                    <input v-model="query" type="search" placeholder="Artikel suchen ..."
                        class="w-full rounded-full border border-neutral-700 bg-neutral-800/60 py-2.5 pl-12 pr-4 text-sm text-white placeholder-neutral-500 outline-none transition focus:border-brand" />
                </label>
            </div>

            <!-- Neuester Artikel -->
            <router-link v-if="featured" :to="{ name: featured.route }" v-reveal
                class="group mb-10 grid overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-800/50 transition duration-300 hover:border-brand hover:shadow-xl hover:shadow-brand/10 md:grid-cols-2">
                <PostCover :category="featured.category" class="aspect-[16/10] md:aspect-auto md:min-h-[320px]" />

                <div class="flex flex-col p-8 md:p-10">
                    <div class="mb-5 flex flex-wrap items-center gap-3 text-sm">
                        <span class="rounded-full bg-accent px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">Neu</span>
                        <span class="text-brand">{{ featured.category }}</span>
                        <span class="text-neutral-500">· {{ featured.readTime }}</span>
                    </div>

                    <h2 class="post-title mb-4 text-2xl transition group-hover:text-brand md:text-3xl">
                        {{ featured.title }}
                    </h2>
                    <p class="mb-8 leading-relaxed text-neutral-300">{{ featured.excerpt }}</p>

                    <span class="mt-auto inline-flex items-center gap-2 font-medium text-brand">
                        Artikel lesen
                        <ArrowRightIcon class="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                </div>
            </router-link>

            <!-- Weitere Artikel -->
            <TransitionGroup tag="div" name="post" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <router-link v-for="post in rest" :key="post.route" :to="{ name: post.route }"
                    class="group flex flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-800/50 transition duration-300 hover:-translate-y-1 hover:border-brand hover:shadow-xl hover:shadow-brand/10">
                    <PostCover :category="post.category" class="aspect-[16/9]" />

                    <div class="flex flex-1 flex-col p-6">
                        <div class="mb-3 flex items-center gap-2 text-xs text-neutral-400">
                            <span class="text-brand">{{ post.category }}</span>
                            <span>·</span>
                            <span>{{ post.readTime }}</span>
                        </div>

                        <h2 class="post-title mb-3 text-xl transition group-hover:text-brand">{{ post.title }}</h2>
                        <p class="mb-6 text-sm leading-relaxed text-neutral-400">{{ post.excerpt }}</p>

                        <span class="mt-auto inline-flex items-center gap-2 text-sm font-medium text-brand">
                            Weiterlesen
                            <ArrowRightIcon class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                    </div>
                </router-link>
            </TransitionGroup>

            <!-- Keine Treffer -->
            <div v-if="!filtered.length" class="rounded-3xl border border-dashed border-neutral-700 p-12 text-center">
                <p class="mb-2 text-lg font-semibold">Keine Artikel gefunden</p>
                <p class="mb-6 text-neutral-400">Versuch es mit einem anderen Suchbegriff oder einer anderen Kategorie.</p>
                <button type="button" class="font-medium text-brand hover:underline" @click="reset">
                    Filter zurücksetzen
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import PostCover from './PostCover.vue'
import { posts, categories } from '../posts.js'

const active = ref('Alle')
const query = ref('')

const filtered = computed(() => {
    const q = query.value.trim().toLowerCase()
    return posts.filter(
        (p) =>
            (active.value === 'Alle' || p.category === active.value) &&
            (!q || `${p.title} ${p.excerpt} ${p.category}`.toLowerCase().includes(q))
    )
})

// Der neueste Artikel steht groß oben - aber nur in der ungefilterten Ansicht
const showFeatured = computed(() => active.value === 'Alle' && !query.value.trim())
const featured = computed(() => (showFeatured.value ? filtered.value[0] : null))
const rest = computed(() => (showFeatured.value ? filtered.value.slice(1) : filtered.value))

const countFor = (c) => (c === 'Alle' ? posts.length : posts.filter((p) => p.category === c).length)

function reset() {
    active.value = 'Alle'
    query.value = ''
}
</script>

<style scoped>
.post-title {
    font-family: 'Fraunces Variable', Georgia, serif;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.01em;
}

.post-enter-active,
.post-leave-active {
    transition: opacity 0.3s ease, transform 0.3s ease;
}

.post-enter-from,
.post-leave-to {
    opacity: 0;
    transform: translateY(14px) scale(0.98);
}

.post-move {
    transition: transform 0.35s ease;
}
</style>
