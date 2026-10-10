<script setup>
import { ArrowRight, Flame, ShieldCheck, Sparkles, Users, Swords, Hammer, CalendarDays, WandSparkles, Gamepad2 } from 'lucide-vue-next'
import EmberButton from '@/components/common/EmberButton.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import DecorativeDivider from '@/components/common/DecorativeDivider.vue'
import EmberCard from '@/components/common/EmberCard.vue'
import { serverStats, featureCards, newsArticles } from '@/data/siteData'

const iconMap = {
  Users,
  BadgeCheck: ShieldCheck,
  ShieldCheck,
  Map: Gamepad2,
  Sword: Swords,
  Swords,
  Flame,
  Hammer,
  Sparkles,
  CalendarDays,
  WandSparkles,
}
</script>

<template>
  <main class="min-h-screen bg-[#120d0b] text-stone-100">
    <section class="relative overflow-hidden border-b border-orange-500/20 bg-[radial-gradient(circle_at_top,_rgba(249,115,22,0.2),transparent_35%),linear-gradient(180deg,#1a120e_0%,#120d0b_40%,#120d0b_100%)]">
      <div class="absolute inset-0 opacity-50">
        <div class="ember-glow left-[10%] top-[12%] h-32 w-32" />
        <div class="ember-glow right-[18%] top-[22%] h-40 w-40" />
        <div class="leaf-field leaf-1" />
        <div class="leaf-field leaf-2" />
        <div class="leaf-field leaf-3" />
      </div>

      <div class="relative mx-auto max-w-7xl px-4 pb-12 pt-16 md:px-6 md:pt-20 lg:pb-20">
        <div class="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <p class="mb-5 inline-flex items-center gap-2 rounded-full border border-orange-400/35 bg-orange-500/8 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.26em] text-orange-200">
              <Sparkles class="h-3.5 w-3.5" />
              Autumn Eternal • New World Unfolding
            </p>
            <h1 class="max-w-2xl font-display text-5xl leading-none text-amber-50 md:text-6xl xl:text-7xl">
              Forge your legend in the<br />
              <span class="text-orange-300">EmberFall</span> kingdom.
            </h1>
            <p class="mt-6 max-w-xl text-lg leading-8 text-stone-300">
              Journey through an ancient realm of iron, ember, and forgotten lore. Discover brutal bosses,
              powerful rewards, and a thriving community built for classic RuneScape fans.
            </p>
            <div class="mt-8 flex flex-wrap gap-4">
              <EmberButton to="/play">
                Play Now
                <ArrowRight class="h-4 w-4" />
              </EmberButton>
              <EmberButton href="https://discord.com" variant="secondary" external>
                Join Our Discord
              </EmberButton>
            </div>
          </div>

          <div class="relative">
            <div class="hero-panel relative overflow-hidden rounded-[2rem] border border-orange-500/30 bg-[#201712]/90 p-5 shadow-[0_20px_70px_rgba(0,0,0,0.45)]">
              <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,146,60,0.22),transparent_35%)]" />
              <div class="relative rounded-[1.5rem] border border-orange-400/30 bg-[linear-gradient(180deg,#2a1810_0%,#180f0d_100%)] p-5">
                <div class="mb-6 flex items-center justify-between">
                  <div>
                    <p class="text-[0.6rem] uppercase tracking-[0.3em] text-orange-200/80">Current Realm</p>
                    <h2 class="mt-2 font-display text-2xl text-amber-50">World 3</h2>
                  </div>
                  <div class="rounded-full border border-emerald-400/50 bg-emerald-500/10 px-3 py-1 text-[0.6rem] uppercase tracking-[0.24em] text-emerald-300">
                    Online
                  </div>
                </div>

                <div class="grid gap-4 sm:grid-cols-2">
                  <div class="rounded-2xl border border-orange-500/25 bg-stone-950/50 p-4">
                    <div class="text-[0.6rem] uppercase tracking-[0.28em] text-stone-400">Boss Event</div>
                    <div class="mt-3 text-2xl font-bold text-orange-200">Ashen King</div>
                    <div class="mt-2 text-sm text-stone-300">Respawns in 01:42:18</div>
                  </div>
                  <div class="rounded-2xl border border-orange-500/25 bg-stone-950/50 p-4">
                    <div class="text-[0.6rem] uppercase tracking-[0.28em] text-stone-400">Season</div>
                    <div class="mt-3 text-2xl font-bold text-orange-200">Autumn Reign</div>
                    <div class="mt-2 text-sm text-stone-300">9 world events active</div>
                  </div>
                </div>

                <div class="mt-5 rounded-2xl border border-orange-500/25 bg-gradient-to-r from-[#262018] to-[#17100d] p-4">
                  <div class="mb-3 flex items-center justify-between">
                    <span class="text-[0.6rem] uppercase tracking-[0.28em] text-stone-400">Guild Activity</span>
                    <span class="text-[0.6rem] uppercase tracking-[0.18em] text-orange-200">+214% this week</span>
                  </div>
                  <div class="space-y-3">
                    <div>
                      <div class="mb-1 flex justify-between text-sm text-stone-300"><span>Dragonkin quests</span><span>78%</span></div>
                      <div class="h-2 rounded-full bg-stone-800"><div class="h-2 w-[78%] rounded-full bg-gradient-to-r from-orange-500 to-amber-400" /></div>
                    </div>
                    <div>
                      <div class="mb-1 flex justify-between text-sm text-stone-300"><span>Guild alliances</span><span>63%</span></div>
                      <div class="h-2 rounded-full bg-stone-800"><div class="h-2 w-[63%] rounded-full bg-gradient-to-r from-amber-500 to-orange-400" /></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <div v-for="stat in serverStats" :key="stat.label" class="ember-panel flex items-center gap-4 rounded-2xl p-5">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/35 bg-orange-500/10 text-orange-200">
            <component :is="iconMap[stat.icon] || Users" class="h-5 w-5" />
          </div>
          <div>
            <div class="text-3xl font-bold text-amber-50">{{ stat.value }}{{ stat.suffix }}</div>
            <div class="mt-1 text-xs uppercase tracking-[0.22em] text-stone-400">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-6 md:px-6">
      <SectionHeading eyebrow="Why players stay" title="A world built for old-school adventurers" description="Every system, event, and quest is designed to capture the joy of discovery, progression, and unforgettable boss encounters." />

      <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <EmberCard v-for="feature in featureCards" :key="feature.title" class="group border border-orange-500/20 bg-[#1d1411]/80 p-6">
          <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-orange-400/40 bg-gradient-to-br from-orange-700/30 to-amber-500/10 text-orange-200 transition-transform group-hover:scale-105">
            <component :is="iconMap[feature.icon] || Flame" class="h-6 w-6" />
          </div>
          <h3 class="mb-3 text-xl font-bold text-stone-50">{{ feature.title }}</h3>
          <p class="text-sm leading-7 text-stone-300">{{ feature.description }}</p>
        </EmberCard>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-20 md:px-6">
      <SectionHeading eyebrow="Latest news" title="From the embers of the frontier" description="Stay current with the major events, balance updates, and the adventures shaping EmberFall this season." />

      <div class="grid gap-6 lg:grid-cols-2 xl:grid-cols-4">
        <article v-for="article in newsArticles" :key="article.slug" class="overflow-hidden rounded-[1.5rem] border border-orange-500/20 bg-[#1c1412] shadow-[0_10px_35px_rgba(0,0,0,0.2)]">
          <img :src="article.image" :alt="article.title" class="h-48 w-full object-cover" loading="lazy" />
          <div class="p-5">
            <div class="mb-3 inline-flex rounded-full border border-orange-500/30 bg-orange-500/8 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.18em] text-orange-200">
              {{ article.category }}
            </div>
            <h3 class="text-xl font-bold text-stone-50">{{ article.title }}</h3>
            <p class="mt-3 text-sm text-stone-400">{{ article.date }}</p>
            <p class="mt-4 text-sm leading-7 text-stone-300">{{ article.excerpt }}</p>
            <RouterLink :to="`/news/${article.slug}`" class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 transition hover:text-orange-100">
              Read More
              <ArrowRight class="h-4 w-4" />
            </RouterLink>
          </div>
        </article>
      </div>
    </section>

    <section class="border-y border-orange-500/20 bg-[#1a120e]">
      <div class="mx-auto max-w-5xl px-4 py-20 text-center md:px-6">
        <p class="mb-5 text-xs uppercase tracking-[0.32em] text-orange-200/80">The realm awaits</p>
        <h2 class="font-display text-4xl text-amber-50 md:text-5xl">Step into EmberFall and claim your place in the fire.</h2>
        <p class="mx-auto mt-5 max-w-2xl text-lg text-stone-300">
          Whether you are chasing legendary bosses, building elite gear, or joining a guild of ambitious adventurers, EmberFall is where your next chapter begins.
        </p>
        <div class="mt-8 flex flex-wrap justify-center gap-4">
          <EmberButton to="/download">Get the client</EmberButton>
          <EmberButton href="https://discord.com" variant="secondary" external>Connect on Discord</EmberButton>
        </div>
      </div>
    </section>

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

.ember-glow {
  position: absolute;
  border-radius: 9999px;
  background: radial-gradient(circle, rgba(251, 146, 60, 0.32), rgba(251, 146, 60, 0.04) 55%, transparent 75%);
  filter: blur(30px);
}

.hero-panel::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, rgba(249, 115, 22, 0.12), transparent 40%, rgba(212, 160, 23, 0.08));
  pointer-events: none;
}

.leaf-field {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 50% 0 50% 50%;
  background: linear-gradient(135deg, #fbbf24, #f97316);
  box-shadow: 0 0 20px rgba(249, 115, 22, 0.35);
  animation: drift 18s linear infinite;
  opacity: 0.7;
}

.leaf-1 {
  left: 16%;
  top: 18%;
  animation-delay: 0s;
}

.leaf-2 {
  left: 52%;
  top: 26%;
  animation-delay: 5s;
}

.leaf-3 {
  right: 12%;
  top: 18%;
  animation-delay: 9s;
}

@keyframes drift {
  0% {
    transform: translate3d(0, 0, 0) rotate(0deg);
    opacity: 0;
  }
  15% {
    opacity: 0.8;
  }
  100% {
    transform: translate3d(40px, 180px, 0) rotate(125deg);
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .leaf-field {
    animation: none;
  }
}
</style>
