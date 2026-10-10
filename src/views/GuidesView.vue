<script setup>
import { BookText, Search, Filter, ArrowRight } from 'lucide-vue-next'
import { ref, computed } from 'vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import DecorativeDivider from '@/components/common/DecorativeDivider.vue'
import { guides, guideCategories } from '@/data/siteData'

const selectedCategory = ref('All')
const searchTerm = ref('')

const filteredGuides = computed(() => {
  return guides.filter((guide) => {
    const matchesCategory = selectedCategory.value === 'All' || guide.category === selectedCategory.value
    const matchesSearch =
      guide.title.toLowerCase().includes(searchTerm.value.toLowerCase()) ||
      guide.excerpt.toLowerCase().includes(searchTerm.value.toLowerCase())

    return matchesCategory && matchesSearch
  })
})
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-16 md:px-6">
    <SectionHeading eyebrow="Guides" title="Master the realm" description="Explore practical advice, progression tips, and strategic breakdowns crafted for players who want to improve every step of the way." />

    <div class="ember-panel mb-12 rounded-[2rem] p-6">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div class="flex flex-wrap items-center gap-2">
          <button
            class="rounded-full border px-3 py-2 text-xs uppercase tracking-[0.18em]"
            :class="selectedCategory === 'All' ? 'border-orange-400 bg-orange-500/10 text-orange-200' : 'border-stone-700 bg-stone-900/70 text-stone-300'"
            @click="selectedCategory = 'All'"
          >
            All
          </button>
          <button
            v-for="category in guideCategories"
            :key="category"
            class="rounded-full border px-3 py-2 text-xs uppercase tracking-[0.18em]"
            :class="selectedCategory === category ? 'border-orange-400 bg-orange-500/10 text-orange-200' : 'border-stone-700 bg-stone-900/70 text-stone-300'"
            @click="selectedCategory = category"
          >
            {{ category }}
          </button>
        </div>

        <div class="flex w-full max-w-md items-center gap-3 rounded-2xl border border-orange-500/25 bg-[#1b130f] px-3 py-2.5">
          <Search class="h-4 w-4 text-orange-300" />
          <input v-model="searchTerm" type="search" placeholder="Search guides" class="w-full bg-transparent text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none" />
        </div>
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-3">
      <article v-for="guide in filteredGuides" :key="guide.slug" class="ember-panel overflow-hidden rounded-[1.5rem]">
        <img :src="guide.image" :alt="guide.title" class="h-52 w-full object-cover" loading="lazy" />
        <div class="p-6">
          <div class="mb-3 inline-flex rounded-full border border-orange-500/30 bg-orange-500/8 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.18em] text-orange-200">{{ guide.category }}</div>
          <h3 class="text-2xl font-bold text-stone-50">{{ guide.title }}</h3>
          <p class="mt-4 text-sm leading-7 text-stone-300">{{ guide.excerpt }}</p>
          <div class="mt-5 flex items-center justify-between text-xs uppercase tracking-[0.18em] text-stone-400">
            <span>{{ guide.readTime }}</span>
            <RouterLink :to="`/guides/${guide.slug}`" class="inline-flex items-center gap-2 text-orange-300 hover:text-orange-100">
              Read guide <ArrowRight class="h-4 w-4" />
            </RouterLink>
          </div>
        </div>
      </article>
    </div>

    <div class="mt-16 grid gap-6 lg:grid-cols-3">
      <div class="ember-panel rounded-[1.5rem] p-6">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-200"><BookText class="h-5 w-5" /></div>
        <h3 class="mt-4 text-xl font-bold text-stone-50">Progression plans</h3>
        <p class="mt-3 text-sm leading-7 text-stone-300">Build your first efficient weapon, bank, and quest route without wasting essential resources.</p>
      </div>
      <div class="ember-panel rounded-[1.5rem] p-6">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-200"><Filter class="h-5 w-5" /></div>
        <h3 class="mt-4 text-xl font-bold text-stone-50">PVM breakpoints</h3>
        <p class="mt-3 text-sm leading-7 text-stone-300">Learn which gear, consumables, and group setups make a meaningful difference in boss encounters.</p>
      </div>
      <div class="ember-panel rounded-[1.5rem] p-6">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-200"><Search class="h-5 w-5" /></div>
        <h3 class="mt-4 text-xl font-bold text-stone-50">Searchable library</h3>
        <p class="mt-3 text-sm leading-7 text-stone-300">Filter by objective and theme to find the exact content you need for your next challenge.</p>
      </div>
    </div>

    <DecorativeDivider />
  </main>
</template>

<style scoped>
.ember-panel {
  position: relative;
  border: 1px solid rgba(251, 146, 60, 0.18);
  background: linear-gradient(180deg, rgba(39, 27, 22, 0.88), rgba(18, 13, 11, 0.9));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 15px 30px rgba(0, 0, 0, 0.18);
}
</style>
