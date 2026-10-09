<template>
  <section id="preise" class="pg-section pg-section-alt">
    <div class="pg-glow -right-40 top-0"></div>
    <div class="pg-glow pg-glow-amber -bottom-40 -left-40"></div>

    <div class="pg-wrap">

      <div v-reveal class="pg-head">
        <p class="pg-tag">06 · Preise</p>
        <h2 class="pg-title">Wähle den passenden <span class="pg-grad">Weg</span></h2>
        <p class="pg-lead">
          Von reiner Planung bis zur kompletten Umsetzung - du entscheidest, wie viel du selbst machen willst.
        </p>
      </div>

      <div class="mx-auto grid max-w-5xl items-stretch gap-8 md:grid-cols-2">

        <article v-for="(p, i) in plans" :key="p.title" v-reveal="{ delay: i * 120 }"
          class="pg-card flex flex-col p-8 lg:p-10" :class="p.hot ? 'pg-card-hot' : ''">

          <span v-if="p.hot" class="pg-badge pg-font">Beliebt</span>

          <p class="mb-2 text-sm font-medium uppercase tracking-[0.2em]" :class="p.hot ? 'text-amber-300' : 'text-neutral-400'">
            {{ p.label }}
          </p>

          <h3 class="pg-font mb-5 text-2xl font-bold uppercase italic leading-tight">{{ p.title }}</h3>

          <p class="pg-font mb-5 text-6xl font-bold italic leading-none">
            <span class="pg-grad">{{ p.price }}</span><span class="text-3xl text-neutral-500">€</span>
          </p>

          <p class="mb-7 leading-relaxed text-neutral-300">{{ p.text }}</p>

          <ul class="mb-10 space-y-3 text-neutral-200">
            <li v-for="f in p.features" :key="f" class="pg-check"><CheckIcon />{{ f }}</li>
          </ul>

          <RouterLink to="/contact" class="pg-btn mt-auto w-full" :class="p.hot ? 'pg-btn-main' : 'pg-btn-ghost'">
            Anfrage starten
            <ArrowUpRightIcon class="h-5 w-5" />
          </RouterLink>
        </article>
      </div>

      <!-- Hinweis -->
      <div v-reveal class="mx-auto mt-12 flex max-w-3xl items-start gap-4 border border-white/10 bg-white/[0.03] p-6">
        <InformationCircleIcon class="mt-0.5 h-6 w-6 shrink-0 text-amber-300" />
        <div>
          <p class="pg-font mb-1 text-sm font-bold uppercase tracking-[0.2em] text-amber-300">Hinweis</p>
          <p class="text-sm leading-relaxed text-neutral-300">
            Bitte gib bei der Anfrage dein gewünschtes Betriebssystem an (z. B. Windows 11 oder Linux)
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ArrowUpRightIcon, CheckIcon, InformationCircleIcon } from '@heroicons/vue/24/outline'
import '@fontsource/chakra-petch/500.css'
import '@fontsource/chakra-petch/700.css'
import '@fontsource/chakra-petch/700-italic.css'
import '@/styles/gaming.css'

const plans = [
  {
    label: 'Bastler',
    title: 'Planung & Teileliste',
    price: '199',
    text: 'Individuelle Konfiguration basierend auf deinem Budget und deinen Anforderungen.',
    features: [
      'Perfekt abgestimmte Komponenten',
      'Keine Bottlenecks',
      'Optimales Preis-Leistungs-Verhältnis',
      'Direkte Kaufempfehlungen',
      'Geizhals Liste zum direkten Kauf'
    ]
  },
  {
    label: 'Beliebt',
    title: 'Zusammen-/Umbau und/oder Einrichtung',
    price: '199',
    hot: true,
    text: 'Ich baue dein System um und/oder richte alles sauber für dich ein.',
    features: ['Fachgerechter Zusammenbau', 'Installationen & Einrichtung', 'Sofort einsatzbereit']
  }
]
</script>

<style scoped>
.pg-badge {
  position: absolute !important;
  top: 0;
  right: 1.6rem;
  padding: 0.35rem 0.9rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #05090a;
  background: #f5a524;
  clip-path: polygon(0 0, 100% 0, 100% calc(100% - 6px), calc(100% - 6px) 100%, 0 100%);
}
</style>
