<template>
  <section class="pg-section">
    <div class="pg-glow -bottom-40 -right-40"></div>

    <div class="pg-wrap">

      <div v-reveal class="pg-head">
        <p class="pg-tag">01 · Für wen?</p>
        <h2 class="pg-title">
          Ein Gaming PC ohne Kompromisse ist für dich, <span class="pg-grad">wenn…</span>
        </h2>
        <p class="pg-lead">
          Du mehr willst als einen Fertig-PC - und ein System suchst, das wirklich zu deinem Setup passt.
        </p>
      </div>

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="(p, i) in perks" :key="p.text" v-reveal="{ delay: i * 70 }" class="pg-card flex items-start gap-5 p-7">
          <span class="pg-icon shrink-0"><component :is="p.icon" class="h-6 w-6" /></span>
          <p class="pt-1 text-lg font-medium leading-snug text-neutral-100">{{ p.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  BoltIcon,
  ClockIcon,
  CpuChipIcon,
  ExclamationTriangleIcon,
  TrophyIcon,
  VideoCameraIcon
} from '@heroicons/vue/24/outline'
import '@fontsource/chakra-petch/500.css'
import '@fontsource/chakra-petch/700.css'
import '@fontsource/chakra-petch/700-italic.css'
import '@/styles/gaming.css'

const perks = [
  { text: 'Du willst maximale FPS ohne Bottlenecks', icon: BoltIcon },
  { text: 'Du spielst Competitive Games wie CS, Battlefield, CoD oder Fortnite', icon: TrophyIcon },
  { text: 'Du streamst oder erstellst Content', icon: VideoCameraIcon },
  { text: 'Du willst ein System, das mehrere Jahre hält', icon: ClockIcon },
  { text: 'Du willst keine unnötigen Kompromisse bei der Hardware', icon: CpuChipIcon },
  { text: 'Du hast genug von schlechten Fertig-PCs', icon: ExclamationTriangleIcon }
]
</script>
