<template>
    <div class="bg-neutral-950 text-white">

        <!-- Lesefortschritt -->
        <div class="pointer-events-none fixed left-0 top-0 z-[60] h-1 w-full" aria-hidden="true">
            <div class="h-full bg-linear-to-r from-brand to-accent" :style="{ width: progress + '%' }"></div>
        </div>

        <!-- HERO -->
        <section class="relative isolate overflow-hidden pb-14 pt-44 lg:pt-52">

            <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
                <div class="absolute -left-40 -top-40 h-[440px] w-[440px] rounded-full bg-brand/20 blur-[150px]"></div>
                <div class="absolute -right-32 top-20 h-[320px] w-[320px] rounded-full bg-accent/10 blur-[140px]"></div>
            </div>

            <div class="mx-auto max-w-3xl px-6">

                <router-link :to="{ name: 'Blog' }"
                    class="group mb-8 inline-flex items-center gap-2 text-sm text-neutral-400 transition hover:text-brand">
                    <ArrowLeftIcon class="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                    Zurück zum Blog
                </router-link>

                <div v-reveal class="mb-5 flex flex-wrap items-center gap-3 text-sm">
                    <span class="rounded-full border border-brand/50 bg-brand/10 px-3 py-1 text-brand">{{ category }}</span>
                    <span class="flex items-center gap-1.5 text-neutral-400">
                        <CalendarDaysIcon class="h-4 w-4" /> {{ date }}
                    </span>
                    <span class="flex items-center gap-1.5 text-neutral-400">
                        <ClockIcon class="h-4 w-4" /> {{ readTime }}
                    </span>
                </div>

                <h1 v-reveal="{ delay: 60 }" class="article-title mb-6 text-4xl md:text-5xl">
                    {{ title }}
                </h1>

                <p v-reveal="{ delay: 120 }" class="text-xl leading-relaxed text-neutral-400">
                    {{ description }}
                </p>
            </div>
        </section>

        <!-- INHALT -->
        <section ref="contentEl" class="pb-16">
            <div class="prose-blog mx-auto max-w-3xl px-6">
                <slot />
            </div>
        </section>

        <!-- AUTOR -->
        <section class="pb-16">
            <div
                class="mx-auto flex max-w-3xl flex-col gap-6 rounded-3xl border border-neutral-800 bg-neutral-900/70 p-8 sm:mx-6 sm:flex-row sm:items-center md:mx-auto">
                <img :src="me" alt="Ing. Lukas Korbitsch" width="96" height="96"
                    class="h-24 w-24 shrink-0 rounded-full object-cover object-[50%_20%] ring-2 ring-brand/60" />
                <div>
                    <p class="mb-1 text-xs uppercase tracking-[0.2em] text-brand">Geschrieben von</p>
                    <p class="article-title mb-2 text-xl">Ing. Lukas Korbitsch</p>
                    <p class="mb-4 text-sm leading-relaxed text-neutral-400">
                        Webentwickler & IT-Dienstleister aus Villach. Ich baue Websites und Web-Apps, die schnell laden,
                        bei Google gefunden werden und Kunden bringen.
                    </p>
                    <router-link to="/contact"
                        class="inline-flex items-center gap-2 text-sm font-medium text-brand hover:underline">
                        Projekt besprechen
                        <ArrowRightIcon class="h-4 w-4" />
                    </router-link>
                </div>
            </div>
        </section>

        <!-- WEITERE ARTIKEL -->
        <section v-if="related.length" class="pb-24">
            <div class="mx-auto max-w-5xl px-6">
                <h2 class="article-title mb-8 text-2xl">Weitere <em class="text-brand">Artikel</em></h2>

                <div class="grid gap-6 md:grid-cols-3">
                    <router-link v-for="post in related" :key="post.route" :to="{ name: post.route }"
                        class="group overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/70 transition duration-300 hover:-translate-y-1 hover:border-brand">
                        <PostCover :category="post.category" class="aspect-[16/8]" />
                        <div class="p-5">
                            <p class="mb-2 text-xs text-brand">{{ post.category }} · {{ post.readTime }}</p>
                            <p class="article-title text-lg leading-snug transition group-hover:text-brand">
                                {{ post.title }}
                            </p>
                        </div>
                    </router-link>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowLeftIcon, ArrowRightIcon, CalendarDaysIcon, ClockIcon } from '@heroicons/vue/24/outline'
import PostCover from './PostCover.vue'
import { posts } from '../posts.js'
import me from '@/assets/me.jpg'
import '@fontsource-variable/fraunces/wght.css'
import '@fontsource-variable/fraunces/wght-italic.css'

defineProps({
    category: { type: String, required: true },
    date: { type: String, required: true },
    readTime: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true }
})

const route = useRoute()

// die übrigen Artikel, der aktuelle wird ausgeblendet
const related = computed(() => posts.filter((p) => p.route !== route.name).slice(0, 3))

// Lesefortschritt
const contentEl = ref(null)
const progress = ref(0)

const update = () => {
    const el = contentEl.value
    if (!el) return
    const rect = el.getBoundingClientRect()
    const total = rect.height - window.innerHeight * 0.6
    progress.value = Math.min(100, Math.max(0, (-rect.top + window.innerHeight * 0.4) / total * 100))
}

onMounted(() => {
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
})

onBeforeUnmount(() => {
    window.removeEventListener('scroll', update)
    window.removeEventListener('resize', update)
})
</script>

<style scoped>
.article-title {
    font-family: 'Fraunces Variable', Georgia, serif;
    font-weight: 600;
    line-height: 1.1;
    letter-spacing: -0.02em;
}

/* Lesefreundliche Typografie für den Artikeltext (kommt per Slot aus den Beitragsseiten) */
.prose-blog {
    color: rgb(212 212 212);
    font-size: 1.125rem;
    line-height: 1.85;
}

.prose-blog :deep(p),
.prose-blog :deep(ul),
.prose-blog :deep(ol) {
    margin-top: 1.6rem;
}

.prose-blog > :deep(p:first-child) {
    margin-top: 0;
    font-size: 1.3rem;
    line-height: 1.75;
    color: rgb(245 245 245);
}

.prose-blog :deep(h2) {
    position: relative;
    margin-top: 3.2rem;
    padding-left: 1.1rem;
    font-family: 'Fraunces Variable', Georgia, serif;
    font-size: 1.85rem !important;
    font-weight: 600;
    line-height: 1.2;
    letter-spacing: -0.01em;
    color: #fff;
}

.prose-blog :deep(h2)::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.2em;
    bottom: 0.2em;
    width: 4px;
    border-radius: 4px;
    background: linear-gradient(var(--color-brand), var(--color-accent));
}

.prose-blog :deep(ul),
.prose-blog :deep(ol) {
    list-style: none !important;
    padding-left: 0;
}

.prose-blog :deep(li) {
    position: relative;
    padding-left: 1.7rem;
}

.prose-blog :deep(li + li) {
    margin-top: 0.6rem;
}

.prose-blog :deep(ul > li)::before {
    content: '';
    position: absolute;
    left: 0.2rem;
    top: 0.75em;
    width: 8px;
    height: 8px;
    border-radius: 2px;
    background: var(--color-brand);
    transform: rotate(45deg);
}

.prose-blog :deep(strong) {
    color: #fff;
}

.prose-blog :deep(a) {
    color: var(--color-brand);
    text-decoration: underline;
    text-underline-offset: 3px;
}
</style>
