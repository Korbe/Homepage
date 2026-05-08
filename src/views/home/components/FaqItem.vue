<template>
  <div
    class="hover:border-brand transition relative border border-neutral-800 rounded-xl bg-neutral-800/60 overflow-hidden group"
  >

    <!-- Glow -->
    <div class="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
      <div
        class="h-[250px] w-[250px] rounded-full bg-brand opacity-0 blur-[120px] transition duration-300 group-hover:opacity-10"
        :class="openIndex === index ? 'opacity-15' : ''"
      />
    </div>

    <!-- Content -->
    <div class="relative z-10">

      <button
        class="w-full text-left px-6 py-4 flex justify-between items-center"
        @click="$emit('toggle', index)"
      >
        <span class="font-medium">
          {{ faq.q }}
        </span>

        <span class="text-neutral-300">
          {{ openIndex === index ? '-' : '+' }}
        </span>
      </button>

      <div v-if="openIndex === index" class="px-6 pb-6 text-neutral-400 text-sm leading-relaxed">
        {{ faq.a }}
      </div>

    </div>

  </div>
</template>

<script setup>
defineProps(['faq', 'index', 'openIndex'])
defineEmits(['toggle'])
</script>