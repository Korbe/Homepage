<template>
  <section ref="root"
    class="hv relative isolate flex min-h-svh flex-col overflow-hidden bg-[#0b0b0c] text-white">

    <!-- ───────── Hintergrund: Werkstatt-Raster + Scanlines ───────── -->
    <div class="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      <div class="absolute inset-0 hv-dots"></div>
      <div class="absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-accent/10 blur-[150px]"></div>
      <div class="absolute -bottom-40 right-0 h-[560px] w-[560px] rounded-full bg-brand/20 blur-[150px]"></div>
      <div class="absolute inset-0 hv-scan"></div>
    </div>

    <!-- ───────── Inhalt ───────── -->
    <div
      class="relative z-10 mx-auto grid w-full max-w-7xl flex-1 items-center gap-12 px-6 pb-14 pt-32 lg:grid-cols-12 lg:gap-8 lg:px-12 lg:pt-36">

      <!-- Links -->
      <div class="lg:col-span-6">

        <p class="hv-in mb-5 inline-flex items-center gap-2 border border-accent/60 bg-accent/10 px-3 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-accent"
          style="--d: 80ms">
          <WrenchScrewdriverIcon class="h-4 w-4" />
          PC Hilfe · Vor Ort · Villach
        </p>

        <p class="hv-in mb-4 font-mono text-sm text-neutral-400" style="--d: 160ms">
          <span class="hv-type">$ helfen --vor-ort --ohne-fachchinesisch</span>
        </p>

        <h1 class="hv-title">
          <span class="hv-in block" style="--d: 260ms">Ich komme</span>
          <span class="hv-in block" style="--d: 360ms">zu dir und löse</span>
          <span class="hv-in block" style="--d: 460ms">deine</span>
          <span class="hv-in block" style="--d: 560ms">
            <mark class="hv-mark">Technik&shy;probleme.</mark><span class="hv-cursor"></span>
          </span>
        </h1>

        <p class="hv-in mt-8 max-w-lg text-lg leading-relaxed text-neutral-300" style="--d: 760ms">
          PC langsam, Smartphone spinnt, Drucker streikt? Kein Einschicken, kein Warten, kein Rätselraten -
          ich erkläre dir alles verständlich, direkt bei dir zu Hause.
        </p>

        <div class="hv-in mt-9 flex flex-wrap items-center gap-4" style="--d: 880ms">
          <a href="#contact" class="hv-btn hv-btn-primary">
            Hausbesuch anfragen
            <ArrowUpRightIcon class="h-5 w-5" />
          </a>
          <router-link to="/pc-builds" class="hv-btn hv-btn-ghost">
            Gaming PCs
          </router-link>
        </div>

        <ul class="hv-in mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-neutral-300" style="--d: 1000ms">
          <li class="flex items-center gap-2">
            <ClockIcon class="h-5 w-5 text-accent" /> Termin oft am selben Tag
          </li>
          <li class="flex items-center gap-2">
            <LightBulbIcon class="h-5 w-5 text-accent" /> Ohne Fachchinesisch
          </li>
        </ul>
      </div>

      <!-- Rechts: Monitor -->
      <div class="relative lg:col-span-6" aria-hidden="true">
        <div class="hv-stage mx-auto w-full max-w-[600px]">
          <div class="hv-monitor hv-in" style="--d: 500ms">

            <!-- Aufkleber -->
            <span class="hv-sticker">Termin oft schon morgen</span>

            <div class="hv-bezel">
              <div class="hv-screen">

                <!-- 1 · Problem -->
                <div class="pane pane-a">
                  <p class="a-face">:(</p>
                  <p class="a-title">Dein PC macht Probleme.</p>
                  <p class="a-sub">Kein Grund zur Panik - Hilfe ist unterwegs.</p>
                  <p class="a-count"><span class="count"></span> abgeschlossen</p>
                  <p class="a-code">Fehlercode: ERR_TECHNIKPROBLEM</p>
                  <span class="a-qr"></span>
                </div>

                <!-- 2 · Unterwegs -->
                <div class="pane pane-b">
                  <p class="b-head">lukas@vor-ort ~ %</p>
                  <p class="b-line b-l1"><span>✓</span> anfrage erhalten</p>
                  <p class="b-line b-l2"><span>✓</span> termin vereinbart</p>
                  <p class="b-line b-l3"><span class="b-spin">›</span> bin unterwegs zu dir ...</p>
                  <div class="b-road">
                    <div class="b-bar"></div>
                    <TruckIcon class="b-truck" />
                  </div>
                </div>

                <!-- 3 · Gelöst -->
                <div class="pane pane-c">
                  <span class="c-check">
                    <CheckIcon class="c-check-icon" />
                  </span>
                  <p class="c-title">Problem gelöst.</p>
                  <p class="c-sub">verständlich erklärt · alles läuft</p>
                  <p class="c-stars">★★★★★</p>
                </div>

                <div class="hv-glass"></div>
              </div>
            </div>

            <div class="hv-neck"></div>
            <div class="hv-foot"></div>
          </div>

          <!-- Status -->
          <div class="hv-steps hv-in" style="--d: 900ms">
            <span class="step s1">1 · Problem</span>
            <span class="step s2">2 · Unterwegs</span>
            <span class="step s3">3 · Gelöst</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ───────── Warnband ───────── -->
    <div class="relative z-10" aria-hidden="true">
      <div class="hv-hazard"></div>
      <div class="hv-band">
        <div class="hv-band-track">
          <template v-for="n in 2" :key="n">
            <span v-for="item in band" :key="n + item" class="hv-band-item">{{ item }}</span>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import {
  ArrowUpRightIcon,
  CheckIcon,
  ClockIcon,
  LightBulbIcon,
  TruckIcon,
  WrenchScrewdriverIcon
} from '@heroicons/vue/24/outline'
import '@fontsource-variable/jetbrains-mono'

const band = [
  'Vor Ort bei dir',
  'Kein Einschicken',
  'Kein Warten',
  'Kein Rätselraten',
  'Ohne Fachchinesisch',
  'PC · Smartphone · Drucker',
  'Villach & Umgebung'
]

const root = ref(null)
let cleanup = () => { }

// Monitor neigt sich leicht zur Maus
onMounted(() => {
  const el = root.value
  if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  const onMove = (e) => {
    const r = el.getBoundingClientRect()
    el.style.setProperty('--ry', (((e.clientX - r.left) / r.width - 0.5) * -10).toFixed(2))
    el.style.setProperty('--rx', (((e.clientY - r.top) / r.height - 0.5) * 8).toFixed(2))
  }
  el.addEventListener('pointermove', onMove, { passive: true })
  cleanup = () => el.removeEventListener('pointermove', onMove)
})

onBeforeUnmount(() => cleanup())
</script>

<style scoped>
@property --n {
  syntax: '<integer>';
  initial-value: 0;
  inherits: false;
}

.hv {
  --rx: 0;
  --ry: 0;
}

/* ───── Hintergrund ───── */
.hv-dots {
  background-image: radial-gradient(rgb(255 255 255 / 0.09) 1px, transparent 1px);
  background-size: 28px 28px;
  mask-image: radial-gradient(ellipse 90% 80% at 50% 40%, #000 25%, transparent 100%);
}

.hv-scan {
  background: repeating-linear-gradient(0deg, rgb(0 0 0 / 0.25) 0 1px, transparent 1px 4px);
  opacity: 0.5;
}

/* ───── Text ───── */
.hv-title {
  font-family: 'JetBrains Mono Variable', ui-monospace, SFMono-Regular, Menlo, monospace;
  font-size: clamp(1.9rem, min(4.7vw, 8vh), 4.2rem);
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.04em;
}

.hv-mark {
  display: inline-block;
  padding: 0 0.18em;
  color: #fff;
  background: linear-gradient(var(--color-accent), var(--color-accent)) no-repeat left / 0% 100%;
  transform: rotate(-1.2deg);
  animation: wipe 0.7s 1.1s cubic-bezier(0.65, 0, 0.35, 1) forwards, markText 0.7s 1.1s ease-in forwards;
}

.hv-cursor {
  display: inline-block;
  width: 0.5em;
  height: 0.95em;
  margin-left: 0.15em;
  vertical-align: -0.1em;
  background: var(--color-brand);
  animation: blink 1s step-end infinite;
}

.hv-type {
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  width: 0;
  border-right: 2px solid var(--color-brand);
  animation: typing 1.8s 0.4s steps(40, end) forwards, caret 0.8s 0.4s step-end 5, caretOff 0.01s 2.8s forwards;
  vertical-align: bottom;
}

.hv-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 1rem 1.6rem;
  font-family: 'JetBrains Mono Variable', ui-monospace, monospace;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  border-radius: 6px;
  transition: transform 0.15s, box-shadow 0.15s, border-color 0.15s, color 0.15s;
}

.hv-btn-primary {
  background: var(--color-accent);
  color: #0b0b0c;
  box-shadow: 5px 5px 0 var(--color-brand);
}

.hv-btn-primary:hover {
  transform: translate(-2px, -2px);
  box-shadow: 8px 8px 0 var(--color-brand);
}

.hv-btn-primary:active {
  transform: translate(3px, 3px);
  box-shadow: 2px 2px 0 var(--color-brand);
}

.hv-btn-ghost {
  border: 2px solid rgb(255 255 255 / 0.25);
  color: #fff;
}

.hv-btn-ghost:hover {
  border-color: var(--color-brand);
  color: var(--color-brand);
}

/* ───── Monitor ───── */
.hv-stage {
  perspective: 1400px;
}

.hv-monitor {
  position: relative;
  transform: rotateY(calc(var(--ry) * 1deg + -6deg)) rotateX(calc(var(--rx) * 1deg)) rotateZ(-1.2deg);
  transition: transform 0.25s ease-out;
  transform-style: preserve-3d;
  filter: drop-shadow(0 40px 60px rgb(0 0 0 / 0.7));
}

.hv-bezel {
  padding: 14px;
  border-radius: 20px;
  background: linear-gradient(160deg, #2b2b2e, #141416);
  border: 1px solid rgb(255 255 255 / 0.12);
  box-shadow: 0 0 0 1px #000, 0 0 90px -20px rgb(245 165 36 / 0.35);
}

.hv-screen {
  position: relative;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border-radius: 8px;
  background: #000;
  container-type: inline-size;
}

.hv-glass {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    repeating-linear-gradient(0deg, rgb(0 0 0 / 0.22) 0 1px, transparent 1px 3px),
    linear-gradient(135deg, rgb(255 255 255 / 0.08), transparent 40%);
  animation: flicker 5s infinite;
}

.hv-neck {
  width: 14%;
  height: 34px;
  margin: 0 auto;
  background: linear-gradient(90deg, #1a1a1c, #2e2e31, #1a1a1c);
}

.hv-foot {
  width: 38%;
  height: 12px;
  margin: 0 auto;
  border-radius: 0 0 14px 14px;
  background: linear-gradient(#2e2e31, #121214);
}

.hv-sticker {
  position: absolute;
  z-index: 5;
  top: -14px;
  right: -10px;
  padding: 0.5rem 0.85rem;
  font-family: 'JetBrains Mono Variable', ui-monospace, monospace;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #0b0b0c;
  background: var(--color-accent);
  border-radius: 4px;
  transform: rotate(5deg) translateZ(40px);
  box-shadow: 4px 4px 0 rgb(0 0 0 / 0.6);
}

/* ───── Screen-Zustände (12 s Loop) ───── */
.pane {
  position: absolute;
  inset: 0;
  padding: 6.5cqw 7cqw;
  font-family: 'JetBrains Mono Variable', ui-monospace, monospace;
  opacity: 0;
}

.pane-a {
  background: #1d4ed8;
  color: #fff;
  animation: paneA 12s infinite;
}

.a-face {
  font-size: 17cqw;
  font-weight: 800;
  line-height: 1;
  margin-bottom: 3cqw;
}

.a-title {
  font-size: 4.6cqw;
  font-weight: 700;
  margin-bottom: 1.4cqw;
}

.a-sub {
  font-size: 2.7cqw;
  opacity: 0.85;
  margin-bottom: 4cqw;
}

.a-count {
  font-size: 2.7cqw;
  margin-bottom: 4cqw;
}

.count {
  animation: count 12s infinite;
  counter-reset: n var(--n);
}

.count::before {
  content: counter(n) '%';
}

.a-code {
  font-size: 2.1cqw;
  opacity: 0.7;
}

.a-qr {
  position: absolute;
  right: 7cqw;
  bottom: 6.5cqw;
  width: 13cqw;
  height: 13cqw;
  background:
    conic-gradient(#fff 25%, transparent 0 50%, #fff 0 75%, transparent 0) 0 0 / 3cqw 3cqw,
    #1d4ed8;
  border: 1.2cqw solid #fff;
}

.pane-b {
  background: #0a0f0f;
  color: #d4f5f1;
  animation: paneB 12s infinite;
}

.b-head {
  font-size: 2.5cqw;
  color: var(--color-brand);
  margin-bottom: 4cqw;
}

.b-line {
  font-size: 3.6cqw;
  margin-bottom: 2.4cqw;
  opacity: 0;
}

.b-line span {
  color: var(--color-brand);
  margin-right: 1.4cqw;
}

.b-l1 {
  animation: lineA 12s infinite;
}

.b-l2 {
  animation: lineB 12s infinite;
}

.b-l3 {
  animation: lineC 12s infinite;
}

.b-road {
  position: absolute;
  left: 7cqw;
  right: 7cqw;
  bottom: 12cqw;
  height: 1.8cqw;
  border-radius: 99px;
  background: rgb(255 255 255 / 0.1);
}

.b-bar {
  height: 100%;
  width: 0;
  border-radius: 99px;
  background: linear-gradient(90deg, var(--color-brand), var(--color-accent));
  animation: barB 12s infinite;
}

.b-truck {
  position: absolute;
  top: -6.5cqw;
  left: 0;
  width: 8cqw;
  height: 8cqw;
  color: var(--color-accent);
  transform: translateX(-50%);
  animation: truckB 12s infinite;
}

.pane-c {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background: radial-gradient(circle at 50% 35%, #12807f, #0a3b3b 70%);
  color: #fff;
  animation: paneC 12s infinite;
}

.c-check {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 17cqw;
  height: 17cqw;
  margin-bottom: 4cqw;
  border-radius: 50%;
  background: var(--color-accent);
  color: #0b0b0c;
  animation: pop 12s infinite;
}

.c-check-icon {
  width: 9cqw;
  height: 9cqw;
  stroke-width: 3;
}

.c-title {
  font-size: 6cqw;
  font-weight: 800;
  margin-bottom: 1.6cqw;
}

.c-sub {
  font-size: 2.8cqw;
  opacity: 0.85;
  margin-bottom: 3cqw;
}

.c-stars {
  font-size: 4cqw;
  letter-spacing: 0.3em;
  color: var(--color-accent);
}

/* Status-Leiste */
.hv-steps {
  display: flex;
  justify-content: center;
  gap: 0.6rem;
  margin-top: 1.5rem;
  font-family: 'JetBrains Mono Variable', ui-monospace, monospace;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.step {
  padding: 0.45rem 0.8rem;
  border: 1px solid rgb(255 255 255 / 0.2);
  border-radius: 4px;
  color: rgb(255 255 255 / 0.5);
}

.s1 {
  animation: act1 12s infinite;
}

.s2 {
  animation: act2 12s infinite;
}

.s3 {
  animation: act3 12s infinite;
}

/* ───── Warnband ───── */
.hv-hazard {
  height: 12px;
  background: repeating-linear-gradient(-45deg, var(--color-accent) 0 18px, #0b0b0c 18px 36px);
}

.hv-band {
  overflow: hidden;
  background: var(--color-accent);
  color: #0b0b0c;
}

.hv-band-track {
  display: flex;
  width: max-content;
  animation: marquee 34s linear infinite;
}

.hv-band-item {
  display: inline-flex;
  align-items: center;
  gap: 1.6rem;
  padding: 0.7rem 1.6rem 0.7rem 0;
  font-family: 'JetBrains Mono Variable', ui-monospace, monospace;
  font-size: 0.8rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  white-space: nowrap;
}

.hv-band-item::after {
  content: '✕';
  font-size: 0.7rem;
}

/* ───── Auftritt ───── */
.hv-in {
  opacity: 0;
  animation: rise 0.9s var(--d, 0ms) cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(28px);
  }

  to {
    opacity: 1;
    transform: none;
  }
}

@keyframes typing {
  to {
    width: 40ch;
  }
}

@keyframes caret {
  50% {
    border-color: transparent;
  }
}

@keyframes caretOff {
  to {
    border-right-color: transparent;
  }
}

@keyframes wipe {
  to {
    background-size: 100% 100%;
  }
}

@keyframes markText {
  to {
    color: #0b0b0c;
  }
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@keyframes marquee {
  to {
    transform: translateX(-50%);
  }
}

@keyframes flicker {

  0%,
  92%,
  100% {
    opacity: 1;
  }

  94% {
    opacity: 0.82;
  }

  96% {
    opacity: 1;
  }

  97% {
    opacity: 0.88;
  }
}

@keyframes paneA {

  0%,
  30% {
    opacity: 1;
  }

  33%,
  96% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes paneB {

  0%,
  30% {
    opacity: 0;
  }

  33%,
  63% {
    opacity: 1;
  }

  66%,
  100% {
    opacity: 0;
  }
}

@keyframes paneC {

  0%,
  63% {
    opacity: 0;
  }

  66%,
  96% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes count {

  0%,
  2% {
    --n: 0;
  }

  28%,
  100% {
    --n: 100;
  }
}

@keyframes lineA {

  0%,
  34% {
    opacity: 0;
  }

  36%,
  100% {
    opacity: 1;
  }
}

@keyframes lineB {

  0%,
  40% {
    opacity: 0;
  }

  42%,
  100% {
    opacity: 1;
  }
}

@keyframes lineC {

  0%,
  46% {
    opacity: 0;
  }

  48%,
  100% {
    opacity: 1;
  }
}

@keyframes barB {

  0%,
  48% {
    width: 0;
  }

  62%,
  100% {
    width: 100%;
  }
}

@keyframes truckB {

  0%,
  48% {
    left: 0;
  }

  62%,
  100% {
    left: 100%;
  }
}

@keyframes pop {

  0%,
  66% {
    transform: scale(0);
  }

  70% {
    transform: scale(1.18);
  }

  73%,
  100% {
    transform: scale(1);
  }
}

@keyframes act1 {

  0%,
  30% {
    color: #0b0b0c;
    background: var(--color-accent);
    border-color: var(--color-accent);
  }

  33%,
  96% {
    color: rgb(255 255 255 / 0.5);
    background: transparent;
    border-color: rgb(255 255 255 / 0.2);
  }

  100% {
    color: #0b0b0c;
    background: var(--color-accent);
    border-color: var(--color-accent);
  }
}

@keyframes act2 {

  0%,
  30% {
    color: rgb(255 255 255 / 0.5);
    background: transparent;
    border-color: rgb(255 255 255 / 0.2);
  }

  33%,
  63% {
    color: #0b0b0c;
    background: var(--color-accent);
    border-color: var(--color-accent);
  }

  66%,
  100% {
    color: rgb(255 255 255 / 0.5);
    background: transparent;
    border-color: rgb(255 255 255 / 0.2);
  }
}

@keyframes act3 {

  0%,
  63% {
    color: rgb(255 255 255 / 0.5);
    background: transparent;
    border-color: rgb(255 255 255 / 0.2);
  }

  66%,
  96% {
    color: #0b0b0c;
    background: var(--color-brand);
    border-color: var(--color-brand);
  }

  100% {
    color: rgb(255 255 255 / 0.5);
    background: transparent;
    border-color: rgb(255 255 255 / 0.2);
  }
}

/* ───── Kleine Screens ───── */
@media (max-width: 1023px) {
  .hv-monitor {
    transform: rotateZ(-1deg);
  }
}

@media (max-width: 480px) {
  .hv-steps {
    gap: 0.35rem;
    font-size: 0.6rem;
    letter-spacing: 0.06em;
  }

  .step {
    padding: 0.4rem 0.5rem;
    white-space: nowrap;
  }
}

@media (prefers-reduced-motion: reduce) {

  .hv-in,
  .hv-type,
  .hv-mark,
  .hv-cursor,
  .hv-glass,
  .hv-band-track,
  .pane,
  .b-line,
  .b-bar,
  .b-truck,
  .c-check,
  .count,
  .step {
    animation: none;
  }

  .hv-in {
    opacity: 1;
  }

  .hv-type {
    width: 40ch;
    border-right-color: transparent;
  }

  .hv-mark {
    background-size: 100% 100%;
    color: #0b0b0c;
  }

  /* Statisch: Endzustand „Problem gelöst“ */
  .pane-c {
    opacity: 1;
  }

  .count::before {
    content: '100%';
  }

  .s3 {
    color: #0b0b0c;
    background: var(--color-brand);
    border-color: var(--color-brand);
  }
}
</style>
