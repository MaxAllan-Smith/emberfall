<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X, Sword, ExternalLink, Flame } from 'lucide-vue-next'
import EmberButton from '@/components/common/EmberButton.vue'

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Play', to: '/play' },
  { label: 'Hiscores', to: '/hiscores' },
  { label: 'News', to: '/news' },
  { label: 'Vote', to: '/vote' },
  { label: 'Guides', to: '/guides' },
  { label: 'Download', to: '/download' },
]

const mobileMenuOpen = ref(false)

const toggleMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMenu = () => {
  mobileMenuOpen.value = false
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-orange-500/20 bg-[#120d0b]/85 backdrop-blur-md">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6">
      <RouterLink to="/" class="group flex items-center gap-3" aria-label="EmberFall home">
        <div class="relative flex h-11 w-11 items-center justify-center rounded-xl border border-orange-400/60 bg-[#2a1810] shadow-[0_0_16px_rgba(249,115,22,0.25)]">
          <Flame class="h-5 w-5 text-orange-300" />
        </div>
        <div>
          <div class="font-display text-xl tracking-[0.16em] text-orange-100">EMBERFALL</div>
          <div class="text-[0.55rem] uppercase tracking-[0.35em] text-stone-400">Old School Realm</div>
        </div>
      </RouterLink>

      <nav class="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          custom
          v-slot="{ href, navigate, isExactActive }"
        >
          <a
            :href="href"
            class="rounded-lg px-4 py-2 text-sm font-medium tracking-[0.14em] uppercase transition-colors duration-200"
            :class="
              isExactActive
                ? 'bg-orange-500/12 text-orange-200 ring-1 ring-orange-400/40'
                : 'text-stone-300 hover:bg-orange-500/8 hover:text-orange-100'
            "
            @click="navigate"
          >
            {{ item.label }}
          </a>
        </RouterLink>
      </nav>

      <div class="hidden items-center gap-3 lg:flex">
        <EmberButton href="https://discord.com" variant="secondary" size="sm" external>
          <Sword class="h-4 w-4" />
          Discord
          <ExternalLink class="h-3.5 w-3.5" />
        </EmberButton>
      </div>

      <button
        class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-orange-500/40 bg-stone-900/80 text-orange-200 lg:hidden"
        type="button"
        aria-label="Toggle navigation"
        aria-expanded="false"
        @click="toggleMenu"
      >
        <Menu v-if="!mobileMenuOpen" class="h-5 w-5" />
        <X v-else class="h-5 w-5" />
      </button>
    </div>

    <div v-if="mobileMenuOpen" class="border-t border-orange-500/20 bg-[#120d0b] lg:hidden">
      <nav class="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4" aria-label="Mobile navigation">
        <RouterLink
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          class="rounded-lg px-3 py-3 text-sm font-medium uppercase tracking-[0.14em] text-stone-200 transition hover:bg-orange-500/10"
          @click="closeMenu"
        >
          {{ item.label }}
        </RouterLink>
        <EmberButton href="https://discord.com" variant="secondary" size="md" external class="mt-2 w-full">
          <Sword class="h-4 w-4" />
          Join Discord
        </EmberButton>
      </nav>
    </div>
  </header>
</template>
