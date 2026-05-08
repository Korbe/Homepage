<template>
  <section class="relative py-24 bg-neutral-900/95 text-white overflow-visible">

    <!-- Glow -->
    <div class="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div class="absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2
           h-[900px] w-[900px] rounded-full
           bg-brand opacity-25 blur-[140px] mix-blend-screen">
      </div>
    </div>

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Heading -->
      <div class="flex justify-center">
        <div class="max-w-2xl text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Wobei kann ich dir <span class="text-brand">helfen</span>?
          </h2>
          <p class="text-neutral-400 text-lg">
            Drei klare Wege - je nachdem, ob du eine digitale Lösung brauchst,
            Unterstützung vor Ort suchst oder einen Gaming PC willst.
          </p>
        </div>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-3 gap-6">

        <!-- Web Apps (PRIMARY) -->
        <router-link to="/webapps"
          class="group border border-neutral-700 rounded-2xl p-8 bg-neutral-800/60 hover:border-brand transition relative overflow-hidden shadow-lg shadow-black/20">

          <div
            class="absolute inset-0 bg-linear-to-br from-brand/10 to-transparent opacity-0 group-hover:opacity-100 transition">
          </div>

          <div class="relative">
            <p class="text-sm text-brand uppercase mb-2 tracking-wide">
              Web Development
            </p>

            <h3 class="text-2xl font-semibold mb-3">
              High-Performance Web Apps
            </h3>

            <p class="text-neutral-300 mb-6">
              Maßgeschneiderte Websites, SaaS-Plattformen und Tools - gebaut für Geschwindigkeit und Skalierung.
            </p>

            <div class="text-brand font-medium">
              Mehr erfahren →
            </div>
          </div>
        </router-link>

        <!-- IT Hilfe -->
        <router-link to="/it-hilfe"
          class="group border border-neutral-800 rounded-2xl p-8 bg-neutral-800/40 hover:border-neutral-600 transition shadow-md shadow-black/10">

          <p class="text-sm text-neutral-300 uppercase mb-2 tracking-wide">
            Vor Ort Service
          </p>

          <h3 class="text-2xl font-semibold mb-3">
            IT Hilfe bei dir zu Hause
          </h3>

          <p class="text-neutral-300 mb-6">
            Hilfe bei PC, Smartphone und Technikproblemen - direkt bei dir vor Ort.
          </p>

          <div class="text-neutral-300 group-hover:text-white transition font-medium">
            Hilfe anfragen →
          </div>
        </router-link>

        <!-- 🔥 PC Builds -->
        <router-link to="/pc-builds"
          class="group border border-neutral-800 rounded-2xl p-8 bg-neutral-800/40 hover:border-brand transition relative overflow-hidden shadow-md shadow-black/10">

          <!-- subtiler Glow -->
          <div
            class="absolute inset-0 bg-linear-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition">
          </div>

          <div class="relative">
            <p class="text-sm text-neutral-300 uppercase mb-2 tracking-wide">
              Gaming Setup
            </p>

            <h3 class="text-2xl font-semibold mb-3">
              Gaming PC Builds
            </h3>

            <p class="text-neutral-300 mb-6">
              Individuelle Gaming PCs ohne Bottlenecks - perfekt abgestimmt auf dein Budget und deine Games.
            </p>

            <div class="text-neutral-300 group-hover:text-white transition font-medium">
              Setup anfragen →
            </div>
          </div>
        </router-link>

      </div>

    </div>
  </section>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>
