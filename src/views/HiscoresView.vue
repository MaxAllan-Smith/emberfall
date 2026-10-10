<script setup>
import { Search, Trophy, TrendingUp } from 'lucide-vue-next'
import { ref } from 'vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import EmberButton from '@/components/common/EmberButton.vue'
import DecorativeDivider from '@/components/common/DecorativeDivider.vue'
import { topHiscores, skillRows } from '@/data/siteData'

const query = ref('')
const activeSkill = ref('Overall')

const filteredRows = ref(skillRows)

const handleSearch = () => {
  const search = query.value.trim().toLowerCase()
  filteredRows.value = skillRows.filter((row) => {
    if (!search) return true
    return row.username.toLowerCase().includes(search) || row.skill.toLowerCase().includes(search)
  })
}
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-16 md:px-6">
    <SectionHeading eyebrow="Hiscores" title="World leaderboards" description="Track the strongest adventurers, the richest guilds, and the players shaping the current era of EmberFall." />

    <div class="ember-panel rounded-[2rem] p-5 md:p-8">
      <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div class="flex flex-wrap items-center gap-3">
          <button class="rounded-full border border-orange-500/35 bg-orange-500/10 px-3 py-2 text-xs uppercase tracking-[0.2em] text-orange-200">Overall</button>
          <button class="rounded-full border border-stone-700 bg-stone-900/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-stone-300">Attack</button>
          <button class="rounded-full border border-stone-700 bg-stone-900/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-stone-300">Strength</button>
          <button class="rounded-full border border-stone-700 bg-stone-900/70 px-3 py-2 text-xs uppercase tracking-[0.2em] text-stone-300">Defence</button>
        </div>

        <div class="flex w-full max-w-md items-center gap-3 rounded-2xl border border-orange-500/25 bg-[#1b130f] px-3 py-2.5">
          <Search class="h-4 w-4 text-orange-300" />
          <input v-model="query" type="search" placeholder="Search player or skill" class="w-full bg-transparent text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none" @input="handleSearch" />
        </div>
      </div>

      <div class="mt-8 overflow-hidden rounded-[1.5rem] border border-orange-500/20">
        <div class="grid grid-cols-[0.6fr_1.5fr_1fr_1fr] bg-[#1f1714] px-4 py-3 text-[0.62rem] uppercase tracking-[0.2em] text-stone-400">
          <span>Rank</span>
          <span>Username</span>
          <span>Level</span>
          <span>Experience</span>
        </div>

        <div v-for="entry in topHiscores" :key="entry.rank" class="grid grid-cols-[0.6fr_1.5fr_1fr_1fr] items-center border-t border-orange-500/10 bg-[#170f0d] px-4 py-4 text-sm text-stone-200">
          <span class="font-medium text-orange-200">#{{ entry.rank }}</span>
          <span>{{ entry.username }}</span>
          <span>{{ entry.level }}</span>
          <span>{{ entry.xp }}</span>
        </div>
      </div>

      <div class="mt-10 grid gap-6 lg:grid-cols-2">
        <div class="rounded-[1.5rem] border border-orange-500/20 bg-[#1b130f] p-5">
          <div class="mb-4 flex items-center gap-3">
            <div class="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/35 bg-orange-500/10 text-orange-200"><Trophy class="h-5 w-5" /></div>
            <div>
              <p class="text-[0.62rem] uppercase tracking-[0.26em] text-orange-200/80">Current Leader</p>
              <h3 class="mt-1 text-2xl font-bold text-stone-50">Aldric</h3>
            </div>
          </div>
          <p class="text-sm leading-7 text-stone-300">The current overall champion of EmberFall, known for relentless boss progression and fearless PvP domination in the wilderness.</p>
        </div>

        <div class="rounded-[1.5rem] border border-orange-500/20 bg-[#1b130f] p-5">
          <div class="mb-4 flex items-center gap-3">
            <div class="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-500/35 bg-orange-500/10 text-orange-200"><TrendingUp class="h-5 w-5" /></div>
            <div>
              <p class="text-[0.62rem] uppercase tracking-[0.26em] text-orange-200/80">Skill Snapshot</p>
              <h3 class="mt-1 text-2xl font-bold text-stone-50">Attack 99</h3>
            </div>
          </div>
          <p class="text-sm leading-7 text-stone-300">Players continue pushing deeper into the high-tier raids while guilds compete for dominance across the seasonal ranking tables.</p>
        </div>
      </div>

      <div class="mt-10 overflow-hidden rounded-[1.5rem] border border-orange-500/20">
        <div class="grid grid-cols-[0.7fr_1.4fr_1fr_1fr] bg-[#1f1714] px-4 py-3 text-[0.62rem] uppercase tracking-[0.2em] text-stone-400">
          <span>Rank</span>
          <span>Player</span>
          <span>Skill</span>
          <span>Level</span>
        </div>

        <div v-for="row in filteredRows" :key="`${row.username}-${row.skill}`" class="grid grid-cols-[0.7fr_1.4fr_1fr_1fr] items-center border-t border-orange-500/10 bg-[#170f0d] px-4 py-4 text-sm text-stone-200">
          <span class="font-medium text-orange-200">#{{ row.rank }}</span>
          <span>{{ row.username }}</span>
          <span>{{ row.skill }}</span>
          <span>{{ row.level }}</span>
        </div>
      </div>

      <div class="mt-8 flex justify-center">
        <EmberButton variant="secondary">Load more rankings</EmberButton>
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
