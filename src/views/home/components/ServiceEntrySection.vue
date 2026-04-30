<template>
  <section class="relative py-24 bg-neutral-900/95 text-white overflow-visible">

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Heading -->
      <div class="flex justify-center">
        <div class="max-w-2xl text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            Wobei kann ich dir <span class="text-brand">helfen</span>?
          </h2>
          <p class="text-neutral-400 text-lg">
            Zwei klare Wege - je nachdem, ob du eine digitale Lösung brauchst
            oder direkte Unterstützung vor Ort.
          </p>
        </div>
      </div>

      <!-- Cards -->
      <div class="grid md:grid-cols-2 gap-6">

        <!-- Web Apps (PRIMARY) -->
        <a href="#webapps"
          class="group border border-neutral-700 rounded-2xl p-8 bg-neutral-800/60 hover:border-brand transition relative overflow-hidden shadow-lg shadow-black/20">

          <!-- Accent glow -->
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
              Maßgeschneiderte Systeme, SaaS-Plattformen und Tools –
              gebaut für Geschwindigkeit, Skalierung und echte Anforderungen.
            </p>

            <div class="text-brand font-medium">
              Mehr über Web Apps →
            </div>
          </div>
        </a>

        <!-- IT Support (SECONDARY) -->
        <router-link to="/homevisits"
          class="group border border-neutral-800 rounded-2xl p-8 bg-neutral-800/40 hover:border-neutral-600 transition shadow-md shadow-black/10">

          <p class="text-sm text-neutral-500 uppercase mb-2 tracking-wide">
            Vor Ort Service
          </p>

          <h3 class="text-2xl font-semibold mb-3">
            IT Hilfe bei dir zu Hause
          </h3>

          <p class="text-neutral-300 mb-6">
            Unterstützung bei PC, Smartphone und Drucker direkt vor Ort bei dir.
          </p>

          <div class="text-neutral-300 group-hover:text-white transition font-medium">
            Hilfe anfragen →
          </div>
        </router-link>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>