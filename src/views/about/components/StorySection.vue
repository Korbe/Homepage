<template>
  <section ref="root" class="sb-section">
    <div class="sb-glow -left-40 top-1/4"></div>

    <div class="sb-wrap">
      <div class="grid items-start gap-14 lg:grid-cols-12 lg:gap-16">

        <!-- Text -->
        <div v-reveal class="lg:sticky lg:top-28 lg:col-span-5">
          <p class="sb-kicker sb-hand">mein weg</p>
          <h2 class="sb-title mb-8">Mein <em>Weg</em> in die Technik</h2>

          <div class="space-y-6 text-lg leading-relaxed text-neutral-300">
            <p>
              Mein erstes Computerspiel, das mich als Kind nicht mehr losließ, war Anno 1701.
              Schon damals war ich fasziniert von Computern, auch wenn ich noch nicht wusste,
              welchen Weg ich später einschlagen würde.
            </p>

            <p>
              Während meiner Schulzeit an der HTL Villach entdeckte ich meine Leidenschaft
              für das Programmieren. Heute liebe ich es, Software zu entwickeln - auch wenn
              es manchmal herausfordernd sein kann.
            </p>

            <p>
              Doch genau das reizt mich: Dinge zu automatisieren, Prozesse zum Leben zu erwecken
              und kreative Lösungen zu finden.
            </p>
          </div>
        </div>

        <!-- Zeitleiste -->
        <ol class="sb-timeline lg:col-span-7" :style="{ '--p': progress }">
          <span class="sb-line" aria-hidden="true"><span class="sb-line-fill"></span></span>

          <li v-for="(s, i) in steps" :key="s.title" v-reveal="{ delay: 60 }" class="sb-step">
            <span class="sb-dot" aria-hidden="true">
              <component :is="s.icon" class="h-5 w-5" />
            </span>

            <div class="sb-paper sb-card" :class="[s.tone, i % 2 ? 'rot-r' : 'rot-l']">
              <span class="sb-tape" aria-hidden="true"></span>
              <p class="sb-hand sb-phase">{{ s.phase }}</p>
              <h3 class="sb-step-title">{{ s.title }}</h3>
              <p v-if="s.text" class="mt-2 text-[15px] leading-snug text-neutral-700">{{ s.text }}</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import {
  AcademicCapIcon,
  BriefcaseIcon,
  BuildingOffice2Icon,
  CodeBracketIcon,
  PuzzlePieceIcon,
  ShieldCheckIcon
} from '@heroicons/vue/24/outline'
import '@fontsource-variable/fraunces/wght.css'
import '@fontsource-variable/fraunces/wght-italic.css'
import '@fontsource/caveat/700.css'
import '@/styles/scrapbook.css'

const steps = [
  {
    phase: 'der Anfang',
    title: 'Anno 1701 - Einstieg PC Gaming',
    text: 'Das erste Computerspiel, das mich nicht mehr losließ.',
    icon: PuzzlePieceIcon,
    tone: ''
  },
  {
    phase: 'Schule',
    title: 'Computerhauptschule',
    text: 'In Völkendorf habe ich das 10-Finger-System gelernt.',
    icon: AcademicCapIcon,
    tone: 'sb-paper-white'
  },
  {
    phase: 'Ausbildung',
    title: 'HTL Villach Informatik',
    text: 'Hier habe ich meine Leidenschaft fürs Programmieren entdeckt.',
    icon: CodeBracketIcon,
    tone: 'sb-paper-teal'
  },
  {
    phase: 'Bundesheer',
    title: 'Cyber Grundwehrdienst',
    icon: ShieldCheckIcon,
    tone: ''
  },
  {
    phase: 'Beruf',
    title: 'SoftwareCUBE / Infineon',
    text: 'Software Engineer & Consultant bei Infineon',
    icon: BuildingOffice2Icon,
    tone: 'sb-paper-white'
  },
  {
    phase: 'nebenbei & heute',
    title: 'Nebenberufliche Selbstständigkeit',
    icon: BriefcaseIcon,
    tone: 'sb-paper-amber'
  }
]

// Die Linie füllt sich beim Scrollen mit
const root = ref(null)
const progress = ref(0)

const update = () => {
  const el = root.value
  if (!el) return
  const r = el.getBoundingClientRect()
  const total = r.height - window.innerHeight * 0.5
  progress.value = Math.min(1, Math.max(0, (window.innerHeight * 0.55 - r.top) / total)).toFixed(3)
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
.sb-timeline {
  position: relative;
  display: grid;
  gap: 2.4rem;
  padding-left: 3.4rem;
  list-style: none;
}

.sb-line {
  position: absolute;
  left: 1.1rem;
  top: 0.6rem;
  bottom: 0.6rem;
  width: 2px;
  background: repeating-linear-gradient(to bottom, rgb(255 255 255 / 0.18) 0 6px, transparent 6px 12px);
}

.sb-line-fill {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, var(--color-brand), var(--color-accent));
  box-shadow: 0 0 14px rgb(31 171 171 / 0.7);
  transform-origin: top;
  transform: scaleY(var(--p, 0));
}

.sb-step {
  position: relative;
}

.sb-dot {
  position: absolute;
  left: -3.4rem;
  top: 1.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  color: #04201f;
  background: var(--color-brand);
  border-radius: 50%;
  box-shadow: 0 0 0 5px #0d0f0f, 0 0 20px rgb(31 171 171 / 0.55);
}

.sb-card {
  padding: 1.6rem 1.8rem 1.5rem;
}

.rot-l {
  transform: rotate(-1.2deg);
}

.rot-r {
  transform: rotate(1.2deg);
}

.sb-card:hover {
  transform: rotate(0) translateY(-4px);
}

.sb-phase {
  margin-bottom: 0.1rem;
  font-size: 1.5rem;
  line-height: 1.1;
  color: #0f7d7d;
}

.sb-step-title {
  font-family: 'Fraunces Variable', Georgia, serif;
  font-size: 1.45rem;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

@media (prefers-reduced-motion: reduce) {

  .rot-l,
  .rot-r,
  .sb-card:hover {
    transform: none;
  }
}
</style>
