<script setup lang="ts">
import { ALL_PROJECTS, useLangColor, useCategoryIcon, useCategoryAccent } from '~/composables/useProjects'

// Best project — en production
const bestProject = ALL_PROJECTS.find(p => p.slug === 'ecampus')!

// Projet phare (flagship)
const flagship = ALL_PROJECTS.find(p => p.slug === 'pharmos')!

// SI eCampus — 9 modules en orbite
const ecampusModules = [
  { id: 'courses',   angle: -90, label: 'Cours',        group: 'core' as const },
  { id: 'exams',     angle: -50, label: 'Examens',      group: 'core' as const },
  { id: 'grades',    angle: -10, label: 'Notes',        group: 'core' as const },
  { id: 'bulletins', angle:  30, label: 'Bulletins',    group: 'core' as const },
  { id: 'live',      angle:  70, label: 'Classes live', group: 'comm' as const },
  { id: 'feed',      angle: 110, label: 'Feed · Chat',  group: 'comm' as const },
  { id: 'payments',  angle: 150, label: 'Mobile money', group: 'fin'  as const },
  { id: 'direction', angle: 190, label: 'Direction',    group: 'fin'  as const },
  { id: 'amigo',     angle: 230, label: 'Amigo · IA',   group: 'ai'   as const },
]

// SI PharmOS — 9 modules métier
const pharmosModules = [
  { id: 'identity',   angle: -90, label: 'Identity',     group: 'core' as const },
  { id: 'catalog',    angle: -50, label: 'Catalog',      group: 'core' as const },
  { id: 'patient',    angle: -10, label: 'Patient',      group: 'core' as const },
  { id: 'stock',      angle:  30, label: 'Stock · FEFO', group: 'ops'  as const },
  { id: 'pos',        angle:  70, label: 'POS',          group: 'ops'  as const },
  { id: 'regulatory', angle: 110, label: 'GS1 · Reg',    group: 'ops'  as const },
  { id: 'accounting', angle: 150, label: 'SYSCOHADA',    group: 'fin'  as const },
  { id: 'coverage',   angle: 190, label: 'CMU · IPM',    group: 'fin'  as const },
  { id: 'payments',   angle: 230, label: 'MoMo',         group: 'fin'  as const },
]

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
  { label: 'Apps & SaaS', count: 8, icon: 'material-symbols:rocket-launch', color: 'text-emerald-400' },
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

      <!-- ── Best Project (eCampus — en production) ── -->
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
                <span class="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
                live
              </span>
            </div>

            <h3 class="text-3xl font-[900] text-white mb-1 leading-none group-hover:text-emerald-400 transition-colors">
              {{ bestProject.title }}
            </h3>
            <p class="font-mono text-[11px] text-slate-500 mb-5 tracking-wide">
              Plateforme · 9 domaines métier · multi-tenant
            </p>

            <p class="text-slate-400 text-sm leading-relaxed mb-6">
              Plateforme de campus virtuel pour les établissements d'Afrique francophone. Microservices Go orchestrés autour d'un hub multi-tenant — cours, classes virtuelles, finances, IA conversationnelle.
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
              <span class="inline-flex items-center gap-1.5 text-xs text-slate-500 font-mono group-hover:text-emerald-400 transition-colors">
                voir →
              </span>
            </div>
          </div>

          <!-- Diagram — right column -->
          <div class="lg:col-span-3 p-5 lg:p-6 bg-slate-950">
            <AtomSystemDiagram
              :modules="ecampusModules"
              hub-letter="e"
              hub-label="Plateforme · Tenant"
              hub-meta="ISOLATION · BRANDING · DROITS"
              meta-right="9 modules · 1 tenant"
              eyebrow="ecampus / SI"
              hub-color="#3b82f6"
              accent-color="#10b981"
            />
          </div>
        </div>
      </NuxtLink>

      <!-- ── Flagship project (PharmOS) ── -->
      <NuxtLink
        :to="`/projects/${flagship.slug}`"
        v-motion="{
          initial: { opacity: 0, y: 30 },
          visibleOnce: { opacity: 1, y: 0 },
          delay: 60,
        }"
        class="group block w-full mb-5 rounded-2xl border border-slate-800 bg-slate-950 hover:border-orange-500/60 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 overflow-hidden"
      >
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-0">
          <!-- Brief — left column -->
          <div class="lg:col-span-2 p-7 border-b lg:border-b-0 lg:border-r border-slate-800 flex flex-col">
            <!-- Eyebrow row -->
            <div class="flex items-center justify-between mb-5">
              <span class="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-500">
                002 · Projet phare
              </span>
              <span class="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-orange-500/30 bg-orange-500/5 font-mono text-[9px] uppercase tracking-widest text-orange-400">
                MVP · Phase 1
              </span>
            </div>

            <h3 class="text-3xl font-[900] text-white mb-1 leading-none group-hover:text-orange-400 transition-colors">
              {{ flagship.title }}
            </h3>
            <p class="font-mono text-[11px] text-slate-500 mb-5 tracking-wide">
              Monolithe modulaire · 9 modules · multi-officines
            </p>

            <p class="text-slate-400 text-sm leading-relaxed mb-6">
              Plateforme logicielle pour officines pharmaceutiques au Sénégal et en zone UEMOA. POS cloud-first, traçabilité GS1, tiers payant CMU/IPM, comptabilité SYSCOHADA conforme OHADA.
            </p>

            <!-- Architect-style feature ledger -->
            <ul class="flex flex-col mb-6 border-t border-slate-800/80">
              <li
                v-for="(feat, idx) in flagship.features.slice(0, 3)"
                :key="feat"
                class="flex items-start gap-3 py-2.5 border-b border-slate-800/80 text-xs"
              >
                <span class="font-mono text-[10px] text-orange-500/60 pt-0.5 w-8 flex-shrink-0">
                  0{{ idx + 1 }}
                </span>
                <span class="text-slate-400 leading-relaxed flex-1">{{ feat }}</span>
              </li>
            </ul>

            <!-- Footer -->
            <div class="mt-auto pt-2 flex items-center justify-between gap-3 flex-wrap">
              <span class="inline-flex items-center gap-1.5 text-xs font-mono text-slate-500">
                <Icon name="material-symbols:lock" size="11" />
                projet propriétaire
              </span>
              <span class="inline-flex items-center gap-1.5 text-xs text-slate-500 font-mono group-hover:text-orange-400 transition-colors">
                voir →
              </span>
            </div>
          </div>

          <!-- Diagram — right column -->
          <div class="lg:col-span-3 p-5 lg:p-6 bg-slate-950">
            <AtomSystemDiagram
              :modules="pharmosModules"
              hub-letter="P"
              hub-label="Officine · Tenant"
              hub-meta="ROW-LEVEL · MULTI-MEMBERSHIP"
              meta-right="9 modules · NATS bus"
              eyebrow="pharmos / SI"
              hub-color="#f97316"
              accent-color="#fb923c"
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
