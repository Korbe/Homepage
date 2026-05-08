<template>
  <section id="preise" class="relative py-24 bg-neutral-900/95 text-white overflow-hidden">

    <div class="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">

      <!-- Heading -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <p class="text-brand text-sm uppercase tracking-wide mb-4">
          Preise
        </p>

        <h2 class="text-3xl md:text-4xl font-bold mb-6">
          Wähle den passenden Weg
        </h2>

        <p class="text-neutral-300 text-lg">
          Von reiner Planung bis zur kompletten Umsetzung - du entscheidest, wie viel du selbst machen willst.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid md:grid-cols-3 gap-6">

        <!-- 🟢 Planung -->
        <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col">
          <p class="text-neutral-400 text-sm mb-2">Einsteiger</p>

          <h3 class="text-xl font-semibold mb-4">
            Planung & Teileliste
          </h3>

          <p class="text-4xl font-bold mb-4">
            99€
          </p>

          <p class="text-neutral-300 text-sm mb-6">
            Individuelle Konfiguration basierend auf deinem Budget und deinen Anforderungen.
          </p>

          <ul class="space-y-2 text-neutral-300 text-sm mb-8">
            <li>• Perfekt abgestimmte Komponenten</li>
            <li>• Keine Bottlenecks</li>
            <li>• Optimales Preis-Leistungs-Verhältnis</li>
            <li>• Direkte Kaufempfehlungen</li>
          </ul>

          <div class="mt-auto">
            <RouterLink to="/contact"
              class="block text-center border border-neutral-700 rounded-xl py-3 hover:border-brand transition">
              Anfrage starten
            </RouterLink>
          </div>
        </div>

        <!-- 🔵 Aufbau -->
        <div class="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col">
          <p class="text-neutral-400 text-sm mb-2">Beliebt</p>

          <h3 class="text-xl font-semibold mb-4">
            Aufbau & Einrichtung
          </h3>

          <p class="text-4xl font-bold mb-4">
            199€
          </p>

          <p class="text-neutral-300 text-sm mb-6">
            Ich baue dein System zusammen und richte alles sauber für dich ein.
          </p>

          <ul class="space-y-2 text-neutral-300 text-sm mb-8">
            <li>• Fachgerechter Zusammenbau</li>
            <li>• Kabelmanagement & Kühlung</li>
            <li>• Installation & Einrichtung</li>
            <li>• Sofort einsatzbereit</li>
          </ul>

          <div class="mt-auto">
            <RouterLink to="/contact"
              class="block text-center border border-neutral-700 rounded-xl py-3 hover:border-brand transition">
              Anfrage starten
            </RouterLink>
          </div>
        </div>

        <!-- 🟣 All-in-One -->
        <div class="relative bg-neutral-900 border border-brand rounded-2xl p-8 flex flex-col">

          <!-- Badge -->
          <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand text-black text-xs px-3 py-1 rounded-full">
            Komplettlösung
          </div>

          <h3 class="text-xl font-semibold mb-4">
            All-in-One Setup
          </h3>

          <!-- Standard -->
          <div class="mb-6">
            <p class="text-neutral-400 text-sm">Standard</p>

            <p class="text-neutral-500 line-through text-sm">
              298€
            </p>

            <p class="text-3xl font-bold">
              279€
            </p>

            <p class="text-green-400 text-sm mb-2">
              Du sparst 19€
            </p>

            <p class="text-neutral-400 text-sm">
              Planung + Aufbau + Einrichtung
            </p>
          </div>

          <!-- Premium -->
          <div class="mb-6">
            <p class="text-neutral-400 text-sm">inkl. Bestellung & Handling</p>

            <p class="text-neutral-500 line-through text-sm">
              398€
            </p>

            <p class="text-3xl font-bold text-brand">
              369€
            </p>

            <p class="text-green-400 text-sm mb-2">
              Du sparst 29€
            </p>

            <p class="text-neutral-400 text-sm">
              Ich übernehme alles - von der Planung bis zum fertigen Setup
            </p>
          </div>

          <ul class="space-y-2 text-neutral-300 text-sm mb-8">
            <li>• Individuelle Planung</li>
            <li>• Perfekt abgestimmte Komponenten</li>
            <li>• Zusammenbau & Setup</li>
            <li>• Komplettlösung ohne Stress</li>
          </ul>

          <div class="mt-auto">
            <RouterLink to="/contact"
              class="block text-center bg-brand text-black rounded-xl py-3 font-medium hover:opacity-90 transition">
              Setup anfragen
            </RouterLink>
          </div>

        </div>

      </div>

      <!-- Dauer -->
      <p class="text-neutral-500 text-sm text-center mt-12">
        💬 Umsetzung je nach Verfügbarkeit der Komponenten meist innerhalb von 3-5 Tagen
      </p>

      <!-- Hinweis -->
      <div class="mt-12 max-w-3xl mx-auto border border-neutral-800 rounded-2xl p-6 bg-neutral-900/60 backdrop-blur">

        <p class="text-sm text-neutral-400 mb-3 uppercase tracking-wide">
          Hinweis
        </p>

        <ul class="space-y-2 text-sm text-neutral-300">
          <li>• Für den Aufbau bringst du die Komponenten selbst mit</li>
          <li>• Alternativ übernehme ich im Premium Paket die komplette Bestellung</li>
          <li>• Bitte gib bei der Anfrage dein gewünschtes Betriebssystem an (z. B. Windows 11 oder Linux)</li>
        </ul>

      </div>

    </div>
  </section>
</template>

<script setup>
</script>