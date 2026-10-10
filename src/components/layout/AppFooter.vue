<script setup>
import { RouterLink } from 'vue-router'
import { Flame, MessageSquareText, ChevronRight } from 'lucide-vue-next'
</script>

<template>
  <footer class="border-t border-orange-500/20 bg-[#120d0b]">
    <div class="mx-auto max-w-7xl px-4 py-16 md:px-6">
      <div class="grid gap-10 md:grid-cols-3">
        <div>
          <div class="mb-6 flex items-center gap-3">
            <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-400/50 bg-[#2a1810]">
              <Flame class="h-6 w-6 text-orange-300" />
            </div>
            <div>
              <div class="font-display text-xl tracking-[0.16em] text-orange-100">EMBERFALL</div>
              <div class="text-[0.55rem] uppercase tracking-[0.35em] text-stone-400">Old School Realm</div>
            </div>
          </div>
          <p class="max-w-sm text-sm leading-7 text-stone-300">
            A fiery old-school adventure for players who love the thrill of classic grind, daring boss hunts,
            and a welcoming community built around the spirit of RuneScape.
          </p>
        </div>

        <div>
          <h3 class="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">Quick Links</h3>
          <ul class="space-y-3 text-sm text-stone-300">
            <li><RouterLink to="/" class="inline-flex items-center gap-2 hover:text-orange-100"> <ChevronRight class="h-3.5 w-3.5" /> Home </RouterLink></li>
            <li><RouterLink to="/play" class="inline-flex items-center gap-2 hover:text-orange-100"> <ChevronRight class="h-3.5 w-3.5" /> Play </RouterLink></li>
            <li><RouterLink to="/hiscores" class="inline-flex items-center gap-2 hover:text-orange-100"> <ChevronRight class="h-3.5 w-3.5" /> Hiscores </RouterLink></li>
            <li><RouterLink to="/news" class="inline-flex items-center gap-2 hover:text-orange-100"> <ChevronRight class="h-3.5 w-3.5" /> News </RouterLink></li>
          </ul>
        </div>

        <div>
          <h3 class="mb-6 text-sm font-semibold uppercase tracking-[0.24em] text-orange-200">Community</h3>
          <ul class="space-y-3 text-sm text-stone-300">
            <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 hover:text-orange-100"> <MessageSquareText class="h-3.5 w-3.5" /> Discord </a></li>
            <li><RouterLink to="/vote" class="inline-flex items-center gap-2 hover:text-orange-100"> <ChevronRight class="h-3.5 w-3.5" /> Vote </RouterLink></li>
            <li><RouterLink to="/guides" class="inline-flex items-center gap-2 hover:text-orange-100"> <ChevronRight class="h-3.5 w-3.5" /> Guides </RouterLink></li>
            <li><RouterLink to="/download" class="inline-flex items-center gap-2 hover:text-orange-100"> <ChevronRight class="h-3.5 w-3.5" /> Download </RouterLink></li>
          </ul>
        </div>
      </div>

      <div class="mt-12 border-t border-orange-500/20 pt-6 text-center text-xs uppercase tracking-[0.28em] text-stone-400">
        © 2026 EmberFall • Independent community server • Not affiliated with Jagex Ltd.
      </div>
    </div>
  </footer>
</template>
