<script setup lang="ts">
import { ALL_PROJECTS, useLangColor, useCategoryIcon, useCategoryAccent } from '~/composables/useProjects'

// Projet phare (flagship)
const flagship = ALL_PROJECTS.find(p => p.slug === 'secure-shield')!

// 6 projets mis en avant (variété de catégories + SaaS)
const featured = [
  'souhibou-telecom',
  'jamah-pikine',
  'vortex',
  'multiplayer-fps',
  'cloud-design',
  'real-time-forum',
].map(slug => ALL_PROJECTS.find(p => p.slug === slug)!)

// Stats par catégorie
const categoryStats = [
  { label: 'Apps & SaaS', count: 6, icon: 'material-symbols:rocket-launch', color: 'text-emerald-400' },
  { label: 'Sécurité & IA', count: 1, icon: 'material-symbols:security', color: 'text-red-400' },
  { label: 'DevOps & Cloud', count: 6, icon: 'material-symbols:cloud', color: 'text-purple-400' },
  { label: 'Systèmes Rust', count: 5, icon: 'mdi:language-rust', color: 'text-orange-400' },
  { label: 'Backend Go', count: 10, icon: 'file-icons:go', color: 'text-sky-400' },
  { label: 'Frontend JS', count: 4, icon: 'mdi:language-javascript', color: 'text-yellow-400' },
  { label: 'CLI & Outils', count: 9, icon: 'material-symbols:terminal', color: 'text-slate-400' },
]
</script>

<template>
  <div class="mt-24 w-full flex flex-col items-center">
    <div class="content-wrapper w-full">

      <!-- Section header -->
      <div class="flex items-end justify-between mb-10">
        <div
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visibleOnce: { opacity: 1, y: 0 },
          }"
          class="opacity-0"
        >
          <p class="font-mono text-xs uppercase tracking-widest text-slate-400">Portfolio</p>
          <h2 class="text-3xl font-[900] text-slate-800 mt-1">Projets récents</h2>
          <p class="text-sm text-slate-500 mt-2 max-w-md">
            {{ ALL_PROJECTS.length }} projets — Go, Rust, TypeScript, JavaScript, Terraform.
          </p>
        </div>
        <NuxtLink
          to="/projects"
          v-motion="{
            initial: { opacity: 0, x: 20 },
            visibleOnce: { opacity: 1, x: 0 },
            delay: 100,
          }"
          class="opacity-0 max-md:hidden inline-flex items-center gap-2 text-sm font-semibold border border-slate-200 hover:border-orange-400 hover:text-orange-600 px-4 py-2.5 rounded-xl transition-all group"
        >
          Voir les {{ ALL_PROJECTS.length }} projets
          <Icon name="material-symbols:arrow-outward" size="15" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </NuxtLink>
      </div>

      <!-- ── Flagship project ── -->
      <NuxtLink
        :to="`/projects/${flagship.slug}`"
        v-motion="{
          initial: { opacity: 0, y: 30 },
          visibleOnce: { opacity: 1, y: 0 },
          delay: 60,
        }"
        class="opacity-0 group block w-full mb-5 rounded-2xl border border-slate-800 bg-slate-950 p-7 hover:border-orange-500 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/5"
      >
        <div class="flex items-start justify-between gap-6 flex-wrap">
          <div class="flex-1 min-w-0">
            <!-- Label -->
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-bold bg-red-500/10 text-red-400 border border-red-500/20 mb-4">
              <Icon name="material-symbols:security" size="11" />
              Projet Phare · Sécurité & IA
            </div>
            <h3 class="text-2xl font-[900] text-white mb-2 group-hover:text-orange-400 transition-colors">
              {{ flagship.title }}
            </h3>
            <p class="text-slate-400 text-sm leading-relaxed max-w-2xl mb-5">
              {{ flagship.longDescription }}
            </p>
            <!-- Features preview -->
            <ul class="flex flex-col gap-1.5 mb-5">
              <li
                v-for="feat in flagship.features.slice(0, 3)"
                :key="feat"
                class="flex items-start gap-2 text-xs text-slate-500"
              >
                <Icon name="material-symbols:check-small" size="14" class="text-orange-500 flex-shrink-0 mt-0.5" />
                {{ feat }}
              </li>
            </ul>
            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5">
              <span class="text-[10px] px-2.5 py-1 rounded-full font-bold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                {{ flagship.lang }}
              </span>
              <span
                v-for="tag in flagship.tags.filter(t => t !== flagship.lang)"
                :key="tag"
                class="text-[10px] px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700"
              >
                {{ tag }}
              </span>
            </div>
          </div>

          <!-- Terminal -->
          <div class="flex-shrink-0 w-64 bg-slate-900 rounded-xl p-4 font-mono text-[11px] border border-slate-700 self-start">
            <div class="flex items-center gap-1.5 mb-3 pb-2 border-b border-slate-700">
              <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <span class="ml-1 text-slate-500 text-[9px]">secure-shield.ts</span>
            </div>
            <p><span class="text-purple-400">import</span> <span class="text-slate-300">&#123; SOCAgent &#125;</span> <span class="text-purple-400">from</span> <span class="text-green-400">'./agent'</span></p>
            <p class="mt-2"><span class="text-blue-400">const</span> <span class="text-slate-300">agent</span> <span class="text-slate-500">=</span> <span class="text-blue-400">new</span> <span class="text-yellow-300">SOCAgent</span><span class="text-slate-500">(&#123;</span></p>
            <p class="pl-3"><span class="text-orange-300">model</span><span class="text-slate-500">:</span> <span class="text-green-400">'claude-3-5'</span><span class="text-slate-500">,</span></p>
            <p class="pl-3"><span class="text-orange-300">realtime</span><span class="text-slate-500">:</span> <span class="text-blue-300">true</span><span class="text-slate-500">,</span></p>
            <p><span class="text-slate-500">&#125;)</span></p>
            <p class="mt-2"><span class="text-blue-400">await</span> agent<span class="text-slate-500">.</span><span class="text-yellow-300">detect</span><span class="text-slate-500">(</span>threats<span class="text-slate-500">)</span></p>
            <span class="text-green-400 animate-pulse">▋</span>
          </div>
        </div>

        <!-- Footer bar -->
        <div class="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <div class="flex items-center gap-2">
            <Icon name="uil:github" size="13" class="text-slate-500" />
            <span class="text-xs text-slate-500 font-mono">aniasse/{{ flagship.repo }}</span>
          </div>
          <span class="inline-flex items-center gap-1.5 text-xs text-orange-400 font-semibold group-hover:gap-2.5 transition-all">
            Voir le projet
            <Icon name="material-symbols:arrow-outward" size="13" />
          </span>
        </div>
      </NuxtLink>

      <!-- ── Featured grid ── -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        <NuxtLink
          v-for="(project, idx) in featured"
          :key="project.slug"
          :to="`/projects/${project.slug}`"
          v-motion
          :initial="{ opacity: 0, y: 24 }"
          :visibleOnce="{ opacity: 1, y: 0 }"
          :delay="80 + 60 * idx"
          class="opacity-0 group flex flex-col border border-slate-200 rounded-2xl bg-white overflow-hidden hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-200"
        >
          <AtomProjectIllustration :category="project.category" size="sm" />
          <div class="p-4 flex flex-col flex-1">
            <!-- Header -->
            <div class="flex items-start justify-between mb-2">
              <div>
                <div class="flex items-center gap-1.5">
                  <h3 class="text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors leading-tight">
                    {{ project.title }}
                  </h3>
                  <Icon v-if="project.private" name="material-symbols:lock" size="11" class="text-emerald-500 flex-shrink-0" />
                </div>
                <p class="text-[10px] text-slate-400 mt-0.5">{{ project.category }}</p>
              </div>
              <Icon
                name="material-symbols:arrow-outward"
                size="14"
                class="text-slate-300 group-hover:text-orange-400 transition-colors flex-shrink-0 mt-0.5 ml-2"
              />
            </div>
            <!-- Description -->
            <p class="text-xs text-slate-500 leading-relaxed flex-1 mb-3 line-clamp-2">
              {{ project.description }}
            </p>
            <!-- Tags -->
            <div class="flex flex-wrap gap-1.5 mt-auto">
              <span class="text-[10px] px-2 py-0.5 rounded-full font-bold" :class="useLangColor(project.lang)">
                {{ project.lang }}
              </span>
              <span
                v-for="tag in project.tags.filter(t => t !== project.lang).slice(0, 2)"
                :key="tag"
                class="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-medium"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>

      <!-- ── Category stats bar ── -->
      <div
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: { opacity: 1, y: 0 },
          delay: 200,
        }"
        class="opacity-0 border border-slate-100 rounded-2xl bg-slate-50 px-6 py-4 flex flex-wrap items-center gap-6 mb-8"
      >
        <p class="text-xs text-slate-400 font-mono mr-2 flex-shrink-0">{{ ALL_PROJECTS.length }} projets ·</p>
        <div
          v-for="stat in categoryStats"
          :key="stat.label"
          class="flex items-center gap-1.5"
        >
          <Icon :name="stat.icon" size="13" :class="stat.color" />
          <span class="text-xs text-slate-500 font-medium">{{ stat.label }}</span>
          <span class="text-xs font-bold text-slate-700">{{ stat.count }}</span>
        </div>
      </div>

      <!-- ── CTA mobile ── -->
      <div class="md:hidden flex justify-center mb-2">
        <NuxtLink
          to="/projects"
          class="inline-flex items-center gap-2 text-sm font-semibold border border-slate-200 hover:border-orange-400 hover:text-orange-600 px-5 py-2.5 rounded-xl transition-all"
        >
          Voir les {{ ALL_PROJECTS.length }} projets
          <Icon name="material-symbols:arrow-outward" size="15" />
        </NuxtLink>
      </div>

    </div>
  </div>
</template>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
