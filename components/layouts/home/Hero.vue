<script setup lang="ts">
const techStack = [
  { name: 'Golang', icon: 'file-icons:go', color: '#00ADD8', size: 28 },
  { name: 'Rust', icon: 'mdi:language-rust', color: '#DEA01B', size: 24 },
  { name: 'TypeScript', icon: 'mdi:language-typescript', color: '#3178C6', size: 22 },
  { name: 'JavaScript', icon: 'mdi:language-javascript', color: '#F7DF1E', size: 24 },
  { name: 'PostgreSQL', icon: 'mdi:database', color: '#4479A1', size: 24 },
  { name: 'Vue.js', icon: 'ri:vuejs-fill', color: '#52b983', size: 24 },
]

const devOpsStack = [
  { name: 'Docker', icon: 'mdi:docker', color: '#2496ED', size: 24 },
  { name: 'Terraform', icon: 'file-icons:terraform', color: '#7B42BC', size: 22 },
  { name: 'Git', icon: 'cib:git', color: '#d34d35', size: 22 },
]
</script>

<template>
  <div class="content-wrapper container pt-20 pb-10">
    <div class="flex gap-12 items-start justify-between">

      <!-- Left: text content -->
      <div class="flex flex-col flex-1 min-w-0">
        <!-- status badge -->
        <div
          v-motion="{ initial: { opacity: 0, y: -10 }, enter: { opacity: 1, y: 0 } }"
          class="font-mono text-xs text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full w-fit mb-5 flex items-center gap-2"
        >
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block" />
          systems-engineer --status open-to-work
        </div>

        <!-- name -->
        <h1
          v-motion="{ initial: { opacity: 0, x: -80 }, enter: { opacity: 1, x: 0 }, delay: 80 }"
          class="mb-4 block text-[2.5rem] font-[1000] leading-none md:mb-6 md:text-7xl text-slate-800"
        >
          Je suis
          <strong style="color: #FFA500">Adama</strong>
          Niasse,
        </h1>

        <!-- subtitle -->
        <h2
          v-motion="{ initial: { opacity: 0, x: -80 }, enter: { opacity: 1, x: 0 }, delay: 160 }"
          class="text-base text-slate-500 md:text-lg"
        >
          <span class="font-bold text-slate-700">Software Engineer</span>
          &nbsp;·&nbsp; Cloud-DevOps &nbsp;·&nbsp; Cybersecurity
          <span class="block mt-1 text-sm font-normal">
            Je conçois des systèmes distribués, sécurisés et performants.
          </span>
        </h2>

        <!-- CTA buttons -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -80 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="240"
          class="flex items-center mt-8 gap-4"
        >
          <NuxtLink
            to="/about"
            class="px-7 py-2.5 text-sm font-semibold text-white rounded-xl hover:scale-105 transition-transform"
            style="background-color: #FFA500"
          >
            À propos
          </NuxtLink>
          <NuxtLink
            to="/contact"
            class="px-7 py-2.5 text-sm font-semibold text-slate-700 border border-slate-300 rounded-xl hover:border-slate-500 hover:scale-105 transition-all"
          >
            Contact
          </NuxtLink>
        </div>

        <!-- tech stack -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -80 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="320"
          class="mt-16 flex flex-col gap-2"
        >
          <p class="text-[10px] uppercase tracking-widest font-mono text-slate-400">tech stack</p>
          <div class="flex flex-wrap gap-3 items-center text-slate-400">
            <div
              v-for="tech in techStack"
              :key="tech.name"
              :title="tech.name"
              class="transition-colors cursor-default"
              :style="{ '--hover-color': tech.color }"
            >
              <Icon :name="tech.icon" :size="String(tech.size)" class="hover-icon" />
            </div>
            <div class="h-5 border-r border-slate-300 mx-1" />
            <div
              v-for="tech in devOpsStack"
              :key="tech.name"
              :title="tech.name"
              class="transition-colors cursor-default"
              :style="{ '--hover-color': tech.color }"
            >
              <Icon :name="tech.icon" :size="String(tech.size)" class="hover-icon" />
            </div>
          </div>
        </div>
      </div>

      <!-- Right: photo + terminal (desktop) -->
      <div
        v-motion="{ initial: { opacity: 0, x: 60 }, enter: { opacity: 1, x: 0 }, delay: 200 }"
        class="max-md:hidden flex flex-col gap-4 items-center flex-shrink-0"
      >
        <NuxtImg
          format="webp"
          src="/images/adama.png"
          alt="Adama Niasse"
          class="w-48 lg:w-60 rounded-2xl border-2 shadow-lg filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 hover:rotate-1"
          style="border-color: #FFA500"
        />

        <!-- terminal -->
        <div class="w-48 lg:w-60 bg-slate-900 rounded-xl p-4 font-mono text-xs shadow-xl border border-slate-700">
          <div class="flex items-center gap-1.5 mb-3 pb-2 border-b border-slate-700">
            <div class="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div class="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div class="w-2.5 h-2.5 rounded-full bg-green-400" />
            <span class="ml-2 text-slate-500 text-[10px]">adama ~ zsh</span>
          </div>
          <p><span class="text-slate-500">$</span> <span class="text-green-400">whoami</span></p>
          <p class="text-slate-300 pl-2">Adama Niasse</p>
          <p class="mt-2"><span class="text-slate-500">$</span> <span class="text-green-400">cat focus.txt</span></p>
          <p class="text-slate-300 pl-2">Distributed Systems</p>
          <p class="text-slate-300 pl-2">High-Performance APIs</p>
          <p class="text-slate-300 pl-2">System Security</p>
          <p class="mt-2"><span class="text-slate-500">$</span> <span class="text-green-400">uptime</span></p>
          <p class="text-slate-300 pl-2">3y coding · 70+ projects</p>
          <p class="mt-2"><span class="text-slate-500">$</span> <span class="text-green-400">echo $STATUS</span></p>
          <p class="text-green-300 pl-2">✓ open to opportunities</p>
          <span class="text-green-400 animate-pulse">▋</span>
        </div>
      </div>
    </div>

    <!-- Mobile: photo + mini terminal (visible only on mobile) -->
    <div
      v-motion="{ initial: { opacity: 0, y: 30 }, enter: { opacity: 1, y: 0 }, delay: 300 }"
      class="md:hidden flex gap-4 items-start mt-10"
    >
      <NuxtImg
        format="webp"
        src="/images/adama.png"
        alt="Adama Niasse"
        class="w-28 rounded-xl border-2 shadow-lg filter grayscale"
        style="border-color: #FFA500"
      />
      <div class="flex-1 bg-slate-900 rounded-xl p-3 font-mono text-[10px] shadow-lg border border-slate-700">
        <div class="flex items-center gap-1 mb-2 pb-1.5 border-b border-slate-700">
          <div class="w-2 h-2 rounded-full bg-red-400" />
          <div class="w-2 h-2 rounded-full bg-amber-400" />
          <div class="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <p><span class="text-slate-500">$</span> <span class="text-green-400">whoami</span></p>
        <p class="text-slate-300 pl-2">Adama Niasse</p>
        <p class="mt-1"><span class="text-slate-500">$</span> <span class="text-green-400">cat focus.txt</span></p>
        <p class="text-slate-300 pl-2">Systems · APIs · Security</p>
        <p class="mt-1"><span class="text-slate-500">$</span> <span class="text-green-400">echo $STATUS</span></p>
        <p class="text-green-300 pl-2">✓ open to opportunities</p>
        <span class="text-green-400 animate-pulse">▋</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hover-icon:hover {
  color: var(--hover-color);
}
</style>
