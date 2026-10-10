<script setup>
import { ArrowRight, Newspaper, Flame } from 'lucide-vue-next'
import SectionHeading from '@/components/common/SectionHeading.vue'
import DecorativeDivider from '@/components/common/DecorativeDivider.vue'
import { newsArticles } from '@/data/siteData'
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-16 md:px-6">
    <SectionHeading eyebrow="News" title="Realm updates and field reports" description="Read the latest stories, event recaps, and the ongoing changes shaping the EmberFall world." />

    <div class="mb-10 overflow-hidden rounded-[2rem] border border-orange-500/20 bg-[#1a120e]">
      <div class="grid gap-0 lg:grid-cols-[1.3fr_0.7fr]">
        <img :src="newsArticles[0].image" :alt="newsArticles[0].title" class="h-full min-h-[220px] w-full object-cover" loading="lazy" />
        <div class="flex flex-col justify-center p-8">
          <div class="inline-flex w-fit rounded-full border border-orange-500/30 bg-orange-500/8 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.2em] text-orange-200">
            Featured
          </div>
          <h3 class="mt-5 text-3xl font-bold text-stone-50">{{ newsArticles[0].title }}</h3>
          <p class="mt-3 text-sm leading-7 text-stone-300">{{ newsArticles[0].excerpt }}</p>
          <RouterLink :to="`/news/${newsArticles[0].slug}`" class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 hover:text-orange-100">
            Read article <ArrowRight class="h-4 w-4" />
          </RouterLink>
        </div>
      </div>
    </div>

    <div class="grid gap-6 lg:grid-cols-2">
      <article v-for="article in newsArticles.slice(1)" :key="article.slug" class="ember-panel overflow-hidden rounded-[1.5rem]">
        <img :src="article.image" :alt="article.title" class="h-52 w-full object-cover" loading="lazy" />
        <div class="p-6">
          <div class="mb-3 inline-flex rounded-full border border-orange-500/30 bg-orange-500/8 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.18em] text-orange-200">{{ article.category }}</div>
          <h3 class="text-2xl font-bold text-stone-50">{{ article.title }}</h3>
          <p class="mt-3 text-sm text-stone-400">{{ article.date }}</p>
          <p class="mt-4 text-sm leading-7 text-stone-300">{{ article.excerpt }}</p>
          <RouterLink :to="`/news/${article.slug}`" class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-300 hover:text-orange-100">
            Continue reading <ArrowRight class="h-4 w-4" />
          </RouterLink>
        </div>
      </article>
    </div>

    <div class="mt-16 grid gap-6 lg:grid-cols-3">
      <div class="ember-panel rounded-[1.5rem] p-6">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-200"><Newspaper class="h-5 w-5" /></div>
        <h3 class="mt-4 text-xl font-bold text-stone-50">Development blogs</h3>
        <p class="mt-3 text-sm leading-7 text-stone-300">Behind-the-scenes notes from the team, balancing updates, and content roadmaps.</p>
      </div>
      <div class="ember-panel rounded-[1.5rem] p-6">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-200"><Flame class="h-5 w-5" /></div>
        <h3 class="mt-4 text-xl font-bold text-stone-50">World events</h3>
        <p class="mt-3 text-sm leading-7 text-stone-300">Seasonal adventures, boss rotations, and high-risk encounters driving the realm forward.</p>
      </div>
      <div class="ember-panel rounded-[1.5rem] p-6">
        <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-200"><ArrowRight class="h-5 w-5" /></div>
        <h3 class="mt-4 text-xl font-bold text-stone-50">Announcements</h3>
        <p class="mt-3 text-sm leading-7 text-stone-300">Major game updates, social events, and the latest community-facing developments.</p>
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
