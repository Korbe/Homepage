<template>
  <section class="relative min-h-screen flex items-center text-white overflow-hidden">

    <!-- Base Background -->
    <div class="absolute inset-0 bg-neutral-900"></div>

    <!-- 🔥 Soft Gradient (JETZT SICHTBAR) -->
    <div class="absolute inset-0 bg-linear-to-br from-neutral-950 via-neutral-950/60 to-transparent"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">

      <div class="max-w-3xl">

        <!-- Badge -->
        <p class="text-sm text-brand uppercase tracking-wide mb-4">
          IT Hilfe & Gaming PC Builds
        </p>

        <!-- Headline -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
          Ich komme zu dir <br />
          und löse deine <span class="text-brand">Technikprobleme</span>
        </h1>

        <!-- Subtext -->
        <p class="text-neutral-300 text-lg mb-8">
          Egal ob dein PC langsam ist, dein Smartphone nicht funktioniert oder dein Drucker streikt –
          ich erkläre dir alles verständlich und ohne Fachchinesisch direkt bei dir vor Ort.
        </p>

        <!-- CTA -->
        <div class="flex flex-wrap gap-4 mb-10">
          <a href="#contact"
            class="bg-brand text-black font-medium px-6 py-3 rounded-xl hover:opacity-90 transition">
            Hausbesuch anfragen
          </a>

          <a href="#gaming"
            class="border border-neutral-700 px-6 py-3 rounded-xl hover:border-brand hover:text-brand transition">
            Gaming PCs
          </a>
        </div>

        <!-- Highlight Box -->
        <div class="hover:border-brand transition border border-neutral-800 rounded-2xl p-5 bg-neutral-800/60 backdrop-blur">

          <p class="text-sm text-neutral-300">
            🧠 Kein Fachchinesisch - ich erkläre dir alles so, dass du es wirklich verstehst.
          </p>

          <p class="text-sm text-neutral-400 mt-2">
            🎮 Oder: Ich baue dir deinen perfekten Gaming-PC aus den besten Komponenten zusammen.
          </p>

        </div>

      </div>

    </div>

  </section>
</template>

<script setup>
</script>