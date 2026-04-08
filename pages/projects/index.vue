<script setup lang="ts">
import { ALL_PROJECTS, CATEGORIES, useLangColor, useCategoryIcon, useCategoryAccent } from '~/composables/useProjects'
import type { Category } from '~/composables/useProjects'

definePageMeta({ layout: 'page' })

useHead({
  title: 'Projets — Adama Niasse',
  meta: [{ name: 'description', content: '70+ projets en Go, Rust, TypeScript, JavaScript — systèmes, DevOps, sécurité, SaaS, apps mobiles et outils.' }],
})

type FilterCategory = 'Tous' | Category

const activeCategory = ref<FilterCategory>('Tous')

const filteredProjects = computed(() =>
  activeCategory.value === 'Tous'
    ? ALL_PROJECTS
    : ALL_PROJECTS.filter((p) => p.category === activeCategory.value),
)

const categoriesWithCount = computed(() =>
  CATEGORIES.map((c) => ({
    ...c,
    count: c.label === 'Tous' ? ALL_PROJECTS.length : ALL_PROJECTS.filter((p) => p.category === c.label).length,
  })),
)
</script>

<template>
  <div class="flex flex-col w-full items-center pb-24 bg-white">

    <!-- Hero -->
    <section class="background-grid w-full flex justify-center pt-32 pb-16 border-b border-slate-100">
      <div class="content-wrapper w-full">
        <div
          v-motion="{
            initial: { opacity: 0, y: -16 },
            enter: { opacity: 1, y: 0 },
          }"
          class="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4"
        >
          aniasse / projects
        </div>
        <h1
          v-motion="{
            initial: { opacity: 0, x: -60 },
            enter: { opacity: 1, x: 0 },
            delay: 80,
          }"
          class="text-4xl md:text-5xl font-[900] text-slate-800 mb-4 leading-tight"
        >
          Mes <span style="color: #FFA500">projets</span>
        </h1>
        <p
          v-motion="{
            initial: { opacity: 0, x: -60 },
            enter: { opacity: 1, x: 0 },
            delay: 160,
          }"
          class="text-slate-500 text-base max-w-xl leading-relaxed mb-8"
        >
          {{ ALL_PROJECTS.length }} projets open source — du shell Unix aux architectures cloud distribuées,
          en passant par les jeux réseau en Rust et les outils CLI en Go.
        </p>
        <div
          v-motion="{
            initial: { opacity: 0, y: 16 },
            enter: { opacity: 1, y: 0 },
            delay: 240,
          }"
          class="flex flex-wrap gap-3"
        >
          <NuxtLink
            to="https://github.com/aniasse"
            target="_blank"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 text-white hover:bg-slate-700 transition-colors"
          >
            <Icon name="uil:github" size="16" />
            GitHub Profile
          </NuxtLink>
          <div class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border border-slate-200 text-slate-500">
            <span class="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            Open source · Zone01 Dakar
          </div>
        </div>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="w-full flex justify-center mt-10">
      <div class="content-wrapper w-full">
        <div class="flex flex-wrap gap-2">
          <button
            v-for="cat in categoriesWithCount"
            :key="cat.label"
            class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all"
            :class="activeCategory === cat.label
              ? 'border-orange-400 bg-orange-50 text-orange-600 shadow-sm'
              : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-700'"
            @click="activeCategory = cat.label"
          >
            <Icon :name="cat.icon" size="13" />
            {{ cat.label }}
            <span
              class="ml-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold"
              :class="activeCategory === cat.label ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-400'"
            >
              {{ cat.count }}
            </span>
          </button>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="w-full flex justify-center mt-8">
      <div class="content-wrapper w-full">

        <!-- Category grouping when "Tous" is selected -->
        <template v-if="activeCategory === 'Tous'">
          <div
            v-for="cat in CATEGORIES.filter(c => c.label !== 'Tous')"
            :key="cat.label"
            class="mb-12"
          >
            <div class="flex items-center gap-3 mb-5">
              <div class="w-8 h-8 rounded-lg flex items-center justify-center" :class="useCategoryAccent(cat.label)">
                <Icon :name="cat.icon" size="16" />
              </div>
              <h2 class="text-base font-bold text-slate-700">{{ cat.label }}</h2>
              <span class="text-xs text-slate-400 font-mono">
                {{ ALL_PROJECTS.filter(p => p.category === cat.label).length }} projets
              </span>
              <div class="flex-1 h-px bg-slate-100 ml-2"></div>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <NuxtLink
                v-for="(project, idx) in ALL_PROJECTS.filter(p => p.category === cat.label)"
                :key="project.slug"
                :to="`/projects/${project.slug}`"
                v-motion
                :initial="{ opacity: 0, y: 24 }"
                :visibleOnce="{ opacity: 1, y: 0 }"
                :delay="60 * idx"
                class="group flex flex-col border border-slate-200 rounded-2xl bg-white overflow-hidden hover:border-orange-300 hover:shadow-md transition-all duration-200"
              >
                <AtomProjectIllustration :category="project.category" size="sm" />
                <div class="p-4 flex flex-col flex-1">
                  <div class="flex items-start justify-between mb-2">
                    <div class="flex items-center gap-1.5">
                      <h3 class="text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors leading-tight">
                        {{ project.title }}
                      </h3>
                      <Icon v-if="project.private" name="material-symbols:lock" size="11" class="text-emerald-500 flex-shrink-0" />
                    </div>
                    <Icon
                      name="material-symbols:arrow-outward"
                      size="14"
                      class="text-slate-300 group-hover:text-orange-400 transition-colors flex-shrink-0 mt-0.5 ml-2"
                    />
                  </div>
                  <p class="text-xs text-slate-500 leading-relaxed flex-1 mb-3 line-clamp-2">
                    {{ project.description }}
                  </p>
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
          </div>
        </template>

        <!-- Filtered flat grid -->
        <template v-else>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <NuxtLink
              v-for="(project, idx) in filteredProjects"
              :key="project.slug"
              :to="`/projects/${project.slug}`"
              v-motion
              :initial="{ opacity: 0, y: 24 }"
              :visibleOnce="{ opacity: 1, y: 0 }"
              :delay="60 * idx"
              class="group flex flex-col border border-slate-200 rounded-2xl bg-white overflow-hidden hover:border-orange-300 hover:shadow-md transition-all duration-200"
            >
              <AtomProjectIllustration :category="project.category" size="sm" />
              <div class="p-4 flex flex-col flex-1">
                <div class="flex items-start justify-between mb-2">
                  <h3 class="text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors leading-tight">
                    {{ project.title }}
                  </h3>
                  <Icon
                    name="material-symbols:arrow-outward"
                    size="14"
                    class="text-slate-300 group-hover:text-orange-400 transition-colors flex-shrink-0 mt-0.5 ml-2"
                  />
                </div>
                <p class="text-xs text-slate-500 leading-relaxed flex-1 mb-3 line-clamp-2">
                  {{ project.description }}
                </p>
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
        </template>

      </div>
    </section>

  </div>
</template>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
