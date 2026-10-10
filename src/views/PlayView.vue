<script setup>
import { BookOpenText, Download, ShieldCheck, MousePointerClick, CircleHelp, ArrowRight } from 'lucide-vue-next'
import SectionHeading from '@/components/common/SectionHeading.vue'
import EmberButton from '@/components/common/EmberButton.vue'
import DecorativeDivider from '@/components/common/DecorativeDivider.vue'

const steps = [
  { title: 'Create your account', description: 'Register a fresh adventurer profile and choose a secure login password.', icon: MousePointerClick },
  { title: 'Download the client', description: 'Grab the EmberFall client for your platform and make sure it matches the latest build.', icon: Download },
  { title: 'Install and launch', description: 'Extract the archive, confirm the folder path, and enter the game client.', icon: BookOpenText },
  { title: 'Join the world', description: 'Log in with your account and begin your first quest in the Ashen Grove.', icon: ShieldCheck },
]

const faqs = [
  { question: 'Do I need an existing RuneScape account?', answer: 'No. EmberFall uses a dedicated server account flow that is independent from the official game.' },
  { question: 'Can I use the same client on multiple computers?', answer: 'Yes, the client can be copied and used on any supported machine as long as the game files remain intact.' },
  { question: 'What if the client refuses to launch?', answer: 'Check that your antivirus is not blocking the folder, ensure the files are fully extracted, and verify the install path.' },
]
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-16 md:px-6">
    <SectionHeading eyebrow="Play" title="Begin your EmberFall journey" description="The path into the realm is simple. Create your account, install the client, and start exploring the autumn wilderness." />

    <div class="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      <div v-for="(step, index) in steps" :key="step.title" class="ember-panel rounded-[1.5rem] p-6">
        <div class="mb-6 flex items-center justify-between">
          <div class="flex h-12 w-12 items-center justify-center rounded-2xl border border-orange-500/40 bg-orange-500/10 text-orange-200">
            <component :is="step.icon" class="h-5 w-5" />
          </div>
          <span class="text-4xl font-display text-orange-300/60">0{{ index + 1 }}</span>
        </div>
        <h3 class="text-xl font-bold text-stone-50">{{ step.title }}</h3>
        <p class="mt-3 text-sm leading-7 text-stone-300">{{ step.description }}</p>
      </div>
    </div>

    <div class="mt-20 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div class="ember-panel rounded-[2rem] p-8">
        <div class="mb-6 flex items-center gap-3">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/35 bg-orange-500/10 text-orange-200">
            <Download class="h-5 w-5" />
          </div>
          <div>
            <p class="text-[0.62rem] uppercase tracking-[0.28em] text-orange-200/80">Client Setup</p>
            <h3 class="mt-1 text-2xl font-bold text-stone-50">Download the latest branch</h3>
          </div>
        </div>

        <p class="text-sm leading-7 text-stone-300">
          Download the client build for your platform and install it in a clean folder. Ensure your OS supports the current client version, then launch the executable from a location that is not blocked by your local security tools.
        </p>

        <div class="mt-8 flex flex-wrap gap-4">
          <EmberButton href="#" variant="secondary">Windows Client</EmberButton>
          <EmberButton href="#" variant="secondary">macOS Client</EmberButton>
        </div>
      </div>

      <div class="ember-panel rounded-[2rem] p-8">
        <div class="mb-6 flex items-center gap-3">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/35 bg-orange-500/10 text-orange-200">
            <CircleHelp class="h-5 w-5" />
          </div>
          <div>
            <p class="text-[0.62rem] uppercase tracking-[0.28em] text-orange-200/80">Troubleshooting</p>
            <h3 class="mt-1 text-2xl font-bold text-stone-50">Quick fixes</h3>
          </div>
        </div>

        <ul class="space-y-4 text-sm text-stone-300">
          <li class="flex gap-3"><ArrowRight class="mt-1 h-4 w-4 text-orange-300" /> Confirm that your antivirus is not quarantining the client folder.</li>
          <li class="flex gap-3"><ArrowRight class="mt-1 h-4 w-4 text-orange-300" /> Re-extract the archive if you see a missing resource error.</li>
          <li class="flex gap-3"><ArrowRight class="mt-1 h-4 w-4 text-orange-300" /> Update your graphics drivers if the client crashes during launch.</li>
        </ul>
      </div>
    </div>

    <div class="mt-20">
      <SectionHeading eyebrow="FAQ" title="Common setup questions" description="Everything you need to know before you set foot in the forest roads and keep gates." />
      <div class="space-y-4">
        <div v-for="faq in faqs" :key="faq.question" class="ember-panel rounded-2xl p-5">
          <h3 class="mb-2 text-lg font-semibold text-orange-100">{{ faq.question }}</h3>
          <p class="text-sm leading-7 text-stone-300">{{ faq.answer }}</p>
        </div>
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
