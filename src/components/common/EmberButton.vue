<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  to: String,
  href: String,
  variant: {
    type: String,
    default: 'primary',
  },
  size: {
    type: String,
    default: 'md',
  },
  external: Boolean,
})

const classes = computed(() => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl border font-semibold tracking-[0.08em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1a120e]'

  const variants = {
    primary:
      'border-amber-400 bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 text-stone-950 shadow-[0_0_24px_rgba(249,115,22,0.38)] hover:-translate-y-0.5 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]',
    secondary:
      'border-orange-500/60 bg-stone-900/70 text-orange-100 hover:border-orange-300 hover:bg-stone-800',
    ghost:
      'border-transparent bg-transparent text-amber-200 hover:text-amber-100 hover:bg-white/5',
  }

  const sizes = {
    sm: 'px-3 py-2 text-[0.65rem]',
    md: 'px-5 py-3 text-xs',
    lg: 'px-7 py-4 text-sm',
  }

  return `${base} ${variants[props.variant] || variants.primary} ${sizes[props.size] || sizes.md}`
})

const componentType = computed(() => {
  if (props.to) return RouterLink
  if (props.href) return 'a'
  return 'button'
})

const linkProps = computed(() => {
  if (props.to) {
    return { to: props.to }
  }

  if (props.href) {
    return {
      href: props.href,
      target: props.external ? '_blank' : undefined,
      rel: props.external ? 'noopener noreferrer' : undefined,
    }
  }

  return {}
})
</script>

<template>
  <component :is="componentType" :class="classes" v-bind="linkProps">
    <slot />
  </component>
</template>
