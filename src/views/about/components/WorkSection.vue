<template>
  <section class="sb-section sb-section-alt">
    <div class="sb-glow sb-glow-amber -right-40 -top-40"></div>

    <div class="sb-wrap">

      <div v-reveal class="mb-16 max-w-2xl">
        <p class="sb-kicker sb-hand">und heute?</p>
        <h2 class="sb-title">Was ich <em class="sb-em-accent">heute</em> mache</h2>
      </div>

      <div class="grid gap-10 md:grid-cols-3 md:gap-8">
        <article v-for="(r, i) in roles" :key="r.title" v-reveal="{ delay: i * 120 }"
          class="sb-paper sb-role flex flex-col p-8 pt-10" :class="[r.tone, r.rot]">
          <span class="sb-tape" aria-hidden="true"></span>

          <p class="sb-hand mb-1 text-2xl leading-none text-[#0f7d7d]">{{ r.label }}</p>

          <div class="mb-5 flex h-16 items-center">
            <img v-if="r.logo" :src="r.logo" :alt="`Logo ${r.title}`" class="max-h-16 w-auto max-w-[180px] object-contain" />
            <component :is="r.icon" v-else class="h-12 w-12 text-[#1a1a1a]/70" />
          </div>

          <h3 class="sb-role-title mb-3">{{ r.title }}</h3>
          <p class="mb-7 leading-relaxed text-neutral-700">{{ r.text }}</p>

          <div class="mt-auto flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
            <component :is="l.external ? 'a' : 'router-link'" v-for="l in r.links" :key="l.label"
              v-bind="l.external ? { href: l.to, target: '_blank', rel: 'noopener' } : { to: l.to }"
              class="inline-flex items-center gap-1.5 text-[#0f7d7d] underline decoration-2 underline-offset-4 transition hover:text-[#1a1a1a]">
              {{ l.label }}
              <ArrowUpRightIcon class="h-4 w-4" />
            </component>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowUpRightIcon, BuildingOffice2Icon, WrenchScrewdriverIcon } from '@heroicons/vue/24/outline'
import PetrilogLogo from '@/assets/petrilog-logo.png'
import '@fontsource-variable/fraunces/wght.css'
import '@fontsource-variable/fraunces/wght-italic.css'
import '@fontsource/caveat/700.css'
import '@/styles/scrapbook.css'

const roles = [
  {
    label: 'Hauptberuf',
    title: 'SoftwareCUBE / Infineon',
    text: 'Beruflich bin ich Angestellter bei der Firma SoftwareCUBE und arbeite für Infineon Technologies an diversen Projekten in der Hochautomatisierung.',
    icon: BuildingOffice2Icon,
    tone: 'sb-paper-white',
    rot: 'rot-l',
    links: []
  },
  {
    label: 'selbstständig',
    title: 'korbitsch.at',
    text: 'Neben meiner Tätigkeit in der Softwareentwicklung betreibe ich ein IT-Dienstleistungsunternehmen, über das ich Privatpersonen bei technischen Anliegen unterstütze.',
    icon: WrenchScrewdriverIcon,
    tone: '',
    rot: 'rot-r',
    links: [
      { label: 'PC Hilfe', to: '/pc-hilfe' },
      { label: 'Websites & Web-Apps', to: '/webapps' }
    ]
  },
  {
    label: 'mein eigenes Produkt',
    title: 'Petrilog',
    text: 'Ich bin Entwickler und Gründer von Petrilog.com - ein österreichisches Anglertagebuch, mit dem Angler ihre Fänge digital dokumentieren können.',
    logo: PetrilogLogo,
    tone: 'sb-paper-teal',
    rot: 'rot-l',
    links: [
      { label: 'petrilog.com', to: 'https://petrilog.com', external: true },
      { label: 'Im Portfolio', to: '/portfolio' }
    ]
  }
]
</script>

<style scoped>
.sb-role {
  transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s;
}

.rot-l {
  transform: rotate(-1.4deg);
}

.rot-r {
  transform: rotate(1.4deg);
}

.sb-role:hover {
  transform: rotate(0) translateY(-6px);
  box-shadow: 0 34px 50px -20px rgb(0 0 0 / 0.8);
}

.sb-role-title {
  font-family: 'Fraunces Variable', Georgia, serif;
  font-size: 1.7rem;
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.01em;
}

@media (prefers-reduced-motion: reduce) {

  .rot-l,
  .rot-r,
  .sb-role:hover {
    transform: none;
  }
}
</style>
