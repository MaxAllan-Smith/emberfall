<script setup>
defineProps({
  as: {
    type: String,
    default: 'div',
  },
})
</script>

<template>
  <component :is="as" class="ember-panel overflow-hidden rounded-2xl">
    <slot />
  </component>
</template>
