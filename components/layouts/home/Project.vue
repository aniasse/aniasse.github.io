<script setup lang="ts">
import { ALL_PROJECTS, useLangColor, useCategoryIcon, useCategoryAccent } from '~/composables/useProjects'

// Best project — projet phare
const bestProject = ALL_PROJECTS.find(p => p.slug === 'vexobj')!

// SI VexObj — 9 modules dans un seul binaire
const vexobjModules = [
  { id: 's3',         angle: -90, label: 'API S3',        group: 'core' as const },
  { id: 'sigv4',      angle: -50, label: 'SigV4',         group: 'core' as const },
  { id: 'rest',       angle: -10, label: 'API REST',      group: 'core' as const },
  { id: 'versioning', angle:  30, label: 'Versioning',    group: 'ops'  as const },
  { id: 'worm',       angle:  70, label: 'WORM · Lock',   group: 'ops'  as const },
  { id: 'lifecycle',  angle: 110, label: 'Lifecycle',     group: 'ops'  as const },
  { id: 'images',     angle: 150, label: 'AVIF · WebP',   group: 'comm' as const },
  { id: 'video',      angle: 190, label: 'Vignettes',     group: 'comm' as const },
  { id: 'crypto',     angle: 230, label: 'AES · Réplica', group: 'fin'  as const },
]

// 6 projets mis en avant (variété de catégories + SaaS)
const featured = [
  'sendland',
  'thymus',
  'secure-shield',
  'vortex',
  'multiplayer-fps',
  'cloud-design',
].map(slug => ALL_PROJECTS.find(p => p.slug === slug)!)

// Stats par catégorie
const categoryStats = [
  { label: 'Apps & SaaS', count: 3, icon: 'material-symbols:rocket-launch', color: 'text-emerald-400' },
  { label: 'HPC & IA', count: 1, icon: 'material-symbols:memory', color: 'text-indigo-400' },
  { label: 'Sécurité & IA', count: 2, icon: 'material-symbols:security', color: 'text-red-400' },
  { label: 'DevOps & Cloud', count: 7, icon: 'material-symbols:cloud', color: 'text-purple-400' },
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
          class="max-md:hidden inline-flex items-center gap-2 text-sm font-semibold border border-slate-200 hover:border-orange-400 hover:text-orange-600 px-4 py-2.5 rounded-xl transition-all group"
        >
          Voir les {{ ALL_PROJECTS.length }} projets
          <Icon name="material-symbols:arrow-outward" size="15" class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </NuxtLink>
      </div>

      <!-- ── Best Project (VexObj — projet phare) ── -->
      <NuxtLink
        :to="`/projects/${bestProject.slug}`"
        v-motion="{
          initial: { opacity: 0, y: 30 },
          visibleOnce: { opacity: 1, y: 0 },
          delay: 40,
        }"
        class="group block w-full mb-5 rounded-2xl border border-slate-800 bg-slate-950 hover:border-emerald-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-500/10 overflow-hidden"
      >
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-0">
          <!-- Brief — left column (architect sheet) -->
          <div class="lg:col-span-2 p-7 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col">
            <!-- Eyebrow row : numbered architect tag -->
            <div class="flex items-center justify-between mb-5">
              <span class="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                001 · Best Project
              </span>
              <span class="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/5 font-mono text-[9px] uppercase tracking-widest text-emerald-400">
                <template v-if="bestProject.liveUrl">
                  <span class="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                  live
                </template>
                <template v-else-if="bestProject.private">
                  <Icon name="material-symbols:lock" size="9" />
                  privé
                </template>
                <template v-else>
                  <Icon name="mdi:github" size="10" />
                  open source
                </template>
              </span>
            </div>

            <h3 class="text-3xl font-[900] text-white mb-1 leading-none group-hover:text-emerald-400 transition-colors">
              {{ bestProject.title }}
            </h3>
            <p class="font-mono text-[11px] text-slate-500 mb-5 tracking-wide">
              Stockage objet · 9 modules · un binaire ~14 Mo
            </p>

            <p class="text-slate-400 text-sm leading-relaxed mb-6">
              Stockage objet S3-compatible auto-hébergé, écrit en Rust. Vérification réelle des signatures AWS SigV4, traitement média intégré, chiffrement au repos et réplication — le tout dans un seul processus.
            </p>

            <!-- Architect-style feature ledger -->
            <ul class="flex flex-col mb-6 border-t border-slate-800/80">
              <li
                v-for="(feat, idx) in bestProject.features.slice(0, 3)"
                :key="feat"
                class="flex items-start gap-3 py-2.5 border-b border-slate-800/80 text-xs"
              >
                <span class="font-mono text-[10px] text-emerald-500/60 pt-0.5 w-8 flex-shrink-0">
                  0{{ idx + 1 }}
                </span>
                <span class="text-slate-400 leading-relaxed flex-1">{{ feat }}</span>
              </li>
            </ul>

            <!-- Live URL footer -->
            <div class="mt-auto pt-2 flex items-center justify-between gap-3 flex-wrap">
              <a
                v-if="bestProject.liveUrl"
                :href="bestProject.liveUrl"
                target="_blank"
                rel="noopener noreferrer"
                @click.stop
                class="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {{ bestProject.liveUrl.replace(/^https?:\/\//, '') }}
                <Icon name="material-symbols:arrow-outward" size="12" />
              </a>
              <a
                v-else-if="!bestProject.private"
                :href="`https://github.com/aniasse/${bestProject.repo}`"
                target="_blank"
                rel="noopener noreferrer"
                @click.stop
                class="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <Icon name="mdi:github" size="13" />
                github.com/aniasse/{{ bestProject.repo }}
                <Icon name="material-symbols:arrow-outward" size="12" />
              </a>
              <span class="inline-flex items-center gap-1.5 text-xs text-slate-500 font-mono group-hover:text-emerald-400 transition-colors">
                voir →
              </span>
            </div>
          </div>

          <!-- Diagram — right column -->
          <div class="lg:col-span-3 p-5 lg:p-6 bg-slate-950">
            <AtomSystemDiagram
              :modules="vexobjModules"
              hub-letter="V"
              hub-label="Cœur · Binaire unique"
              hub-meta="SQLITE · BLOBS · CACHE"
              meta-right="9 modules · 1 binaire"
              eyebrow="vexobj / SI"
              hub-color="#f97316"
              accent-color="#10b981"
            />
          </div>
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
          class="group flex flex-col border border-slate-200 rounded-2xl bg-white overflow-hidden hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-200"
        >
          <AtomProjectIllustration :category="project.category" :cover="project.cover" size="sm" />
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
        class="border border-slate-100 rounded-2xl bg-slate-50 px-6 py-4 flex flex-wrap items-center gap-6 mb-8"
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
