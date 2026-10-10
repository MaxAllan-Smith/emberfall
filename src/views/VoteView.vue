<script setup>
import { Gift, ShieldCheck, BadgeCheck, ArrowRight } from 'lucide-vue-next'
import EmberButton from '@/components/common/EmberButton.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import DecorativeDivider from '@/components/common/DecorativeDivider.vue'
import { voteSites } from '@/data/siteData'
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-16 md:px-6">
    <SectionHeading eyebrow="Vote" title="Support the realm and claim your rewards" description="Each vote helps preserve the world, fund updates, and keep the community growing. Claim your generous bonuses and return for the next blessing." />

    <div class="grid gap-5 md:grid-cols-3">
      <div v-for="site in voteSites" :key="site.title" class="ember-panel rounded-[1.75rem] p-6">
        <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/35 bg-orange-500/10 text-orange-200">
          <Gift class="h-5 w-5" />
        </div>
        <h3 class="text-2xl font-bold text-stone-50">{{ site.title }}</h3>
        <p class="mt-4 text-sm leading-7 text-stone-300">{{ site.description }}</p>
        <div class="mt-6 rounded-2xl border border-orange-500/20 bg-[#1b130f] p-4 text-sm text-orange-100">
          Reward: {{ site.reward }}
        </div>
        <div class="mt-6">
          <EmberButton :href="site.link" variant="secondary" external class="w-full">
            Vote now
            <ArrowRight class="h-4 w-4" />
          </EmberButton>
        </div>
      </div>
    </div>

    <div class="mt-20 grid gap-8 lg:grid-cols-2">
      <div class="ember-panel rounded-[2rem] p-8">
        <div class="mb-5 flex items-center gap-3">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/35 bg-orange-500/10 text-orange-200"><ShieldCheck class="h-5 w-5" /></div>
          <div>
            <p class="text-[0.62rem] uppercase tracking-[0.28em] text-orange-200/80">Voting instructions</p>
            <h3 class="mt-1 text-2xl font-bold text-stone-50">How rewards work</h3>
          </div>
        </div>
        <ul class="space-y-4 text-sm leading-7 text-stone-300">
          <li>• Cast a vote on a listed platform each day to receive your active reward bundle.</li>
          <li>• Bonus items are added automatically after the site confirms your vote.</li>
          <li>• Claim streak rewards by continuing to vote through the week.</li>
        </ul>
      </div>

      <div class="ember-panel rounded-[2rem] p-8">
        <div class="mb-5 flex items-center gap-3">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/35 bg-orange-500/10 text-orange-200"><BadgeCheck class="h-5 w-5" /></div>
          <div>
            <p class="text-[0.62rem] uppercase tracking-[0.28em] text-orange-200/80">Reward policy</p>
            <h3 class="mt-1 text-2xl font-bold text-stone-50">Fair and consistent</h3>
          </div>
        </div>
        <p class="text-sm leading-7 text-stone-300">Rewards are assigned at regular intervals to keep the voting program transparent and supportive of active players. Keep your account secure and ensure your vote is submitted through the official site list.</p>
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
