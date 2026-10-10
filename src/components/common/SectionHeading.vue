<script setup>
defineProps({
  eyebrow: String,
  title: String,
  description: String,
})
</script>

<template>
  <div class="mx-auto mb-12 max-w-3xl text-center">
    <p v-if="eyebrow" class="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-orange-300/80">
      {{ eyebrow }}
    </p>
    <h2 class="font-display text-3xl text-stone-100 md:text-5xl">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-base text-stone-300 md:text-lg">
      {{ description }}
    </p>
  </div>
</template>
