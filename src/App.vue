<script setup>
import { RouterView } from 'vue-router'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
</script>

<template>
  <div class="min-h-screen bg-[#120d0b] text-stone-100">
    <AppHeader />
    <RouterView />
    <AppFooter />
  </div>
</template>
