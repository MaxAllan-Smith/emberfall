<script setup>
import { Download, CheckCircle2, Cpu, MonitorSmartphone, ShieldCheck, ArrowDownToLine } from 'lucide-vue-next'
import EmberButton from '@/components/common/EmberButton.vue'
import SectionHeading from '@/components/common/SectionHeading.vue'
import DecorativeDivider from '@/components/common/DecorativeDivider.vue'

const builds = [
  { title: 'Windows Client', size: '1.8 GB', note: 'Full installation and launcher support', supported: true },
  { title: 'macOS Client', size: '1.6 GB', note: 'Intel and Apple Silicon compatible', supported: false },
  { title: 'Linux Client', size: '1.4 GB', note: 'Community-supported experimental build', supported: false },
]

const requirements = [
  { icon: Cpu, label: 'CPU', value: 'Dual-core 2.0 GHz+' },
  { icon: MonitorSmartphone, label: 'Memory', value: '8 GB RAM recommended' },
  { icon: ShieldCheck, label: 'OS', value: 'Windows 10/11 or modern macOS' },
]

const faqs = [
  'Install the client into a local folder with write access.',
  'Run the launcher as an administrator if your security software is blocking files.',
  'Always verify the build version before connecting to the server.',
]
</script>

<template>
  <main class="mx-auto max-w-7xl px-4 py-16 md:px-6">
    <SectionHeading eyebrow="Download" title="Get the EmberFall client" description="Choose your platform, verify the client version, and step into a kingdom built for patient adventurers and fierce competitors." />

    <div class="grid gap-5 md:grid-cols-3">
      <div v-for="build in builds" :key="build.title" class="ember-panel rounded-[1.75rem] p-6">
        <div class="mb-5 flex items-center justify-between">
          <h3 class="text-xl font-bold text-stone-50">{{ build.title }}</h3>
          <span v-if="build.supported" class="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2 py-1 text-[0.55rem] uppercase tracking-[0.18em] text-emerald-300">
            Ready
          </span>
          <span v-else class="rounded-full border border-stone-500/50 bg-stone-500/10 px-2 py-1 text-[0.55rem] uppercase tracking-[0.18em] text-stone-300">Preview</span>
        </div>
        <div class="mb-4 text-3xl font-bold text-orange-200">{{ build.size }}</div>
        <p class="text-sm leading-7 text-stone-300">{{ build.note }}</p>
        <div class="mt-6">
          <EmberButton href="#" variant="secondary" class="w-full">
            <ArrowDownToLine class="h-4 w-4" />
            Download
          </EmberButton>
        </div>
      </div>
    </div>

    <div class="mt-20 grid gap-8 lg:grid-cols-[1fr_1fr]">
      <div class="ember-panel rounded-[2rem] p-8">
        <div class="mb-5 flex items-center gap-3">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/35 bg-orange-500/10 text-orange-200">
            <Cpu class="h-5 w-5" />
          </div>
          <div>
            <p class="text-[0.62rem] uppercase tracking-[0.28em] text-orange-200/80">System requirements</p>
            <h3 class="mt-1 text-2xl font-bold text-stone-50">Recommended setup</h3>
          </div>
        </div>

        <div class="space-y-5">
          <div v-for="item in requirements" :key="item.label" class="flex items-start gap-4 rounded-2xl border border-orange-500/20 bg-[#221812] p-4">
            <div class="mt-0.5 flex h-10 w-10 items-center justify-center rounded-xl border border-orange-500/30 bg-orange-500/10 text-orange-200">
              <component :is="item.icon" class="h-4 w-4" />
            </div>
            <div>
              <div class="text-[0.6rem] uppercase tracking-[0.2em] text-stone-400">{{ item.label }}</div>
              <div class="mt-1 text-base font-medium text-stone-100">{{ item.value }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="ember-panel rounded-[2rem] p-8">
        <div class="mb-5 flex items-center gap-3">
          <div class="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-500/35 bg-orange-500/10 text-orange-200">
            <CheckCircle2 class="h-5 w-5" />
          </div>
          <div>
            <p class="text-[0.62rem] uppercase tracking-[0.28em] text-orange-200/80">Install guide</p>
            <h3 class="mt-1 text-2xl font-bold text-stone-50">Before you launch</h3>
          </div>
        </div>

        <ol class="space-y-4 text-sm leading-7 text-stone-300">
          <li>1. Download the client package for your platform and extract it to a dedicated folder.</li>
          <li>2. Disable or whitelist the folder in your antivirus software if the launcher is blocked.</li>
          <li>3. Confirm the client version matches the active server release and launch the executable.</li>
          <li>4. Start the game and sign in with your EmberFall account credentials.</li>
        </ol>
      </div>
    </div>

    <div class="mt-20">
      <SectionHeading eyebrow="FAQs" title="Download and install questions" description="If anything feels unclear while setting up the client, these notes will keep the process smooth." />
      <div class="space-y-4">
        <div v-for="faq in faqs" :key="faq" class="ember-panel rounded-2xl p-5 text-sm leading-7 text-stone-300">
          • {{ faq }}
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
