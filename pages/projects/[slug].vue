<script setup lang="ts">
import { ALL_PROJECTS, useLangColor, useCategoryIcon, useCategoryAccent } from '~/composables/useProjects'

definePageMeta({ layout: 'page' })

const route = useRoute()
const slug = route.params.slug as string

const project = ALL_PROJECTS.find((p) => p.slug === slug)

if (!project) {
  throw createError({ statusCode: 404, statusMessage: 'Projet introuvable' })
}

useHead({
  title: `${project.title} — Adama Niasse`,
  meta: [{ name: 'description', content: project.description }],
})

// Projets de la même catégorie (excl. courant)
const relatedProjects = ALL_PROJECTS
  .filter((p) => p.category === project.category && p.slug !== project.slug)
  .slice(0, 3)
</script>

<template>
  <div class="flex flex-col w-full items-center pb-24 bg-white">

    <!-- Illustration banner -->
    <div class="w-full">
      <AtomProjectIllustration :category="project.category" size="lg" />
    </div>

    <!-- Hero / Header -->
    <section class="w-full flex justify-center pt-10 pb-12 border-b border-slate-100">
      <div class="content-wrapper w-full">

        <!-- Breadcrumb -->
        <div
          class="flex items-center gap-2 font-mono text-xs text-slate-400 mb-6"
        >
          <NuxtLink to="/projects" class="hover:text-orange-500 transition-colors">projects</NuxtLink>
          <span>/</span>
          <span class="text-slate-600">{{ project.slug }}</span>
        </div>

        <div class="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div class="flex-1">
            <!-- Category badge -->
            <div
              v-motion="{
                initial: { opacity: 0, x: -20 },
                enter: { opacity: 1, x: 0 },
                delay: 60,
              }"
              class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold mb-4"
              :class="useCategoryAccent(project.category)"
            >
              <Icon :name="useCategoryIcon(project.category)" size="13" />
              {{ project.category }}
            </div>

            <!-- Title -->
            <h1
              v-motion="{
                initial: { opacity: 0, x: -60 },
                enter: { opacity: 1, x: 0 },
                delay: 100,
              }"
              class="text-4xl md:text-5xl font-[900] text-slate-800 mb-4 leading-tight"
            >
              {{ project.title }}
            </h1>

            <!-- Short description -->
            <p
              v-motion="{
                initial: { opacity: 0, x: -60 },
                enter: { opacity: 1, x: 0 },
                delay: 160,
              }"
              class="text-slate-500 text-base max-w-2xl leading-relaxed"
            >
              {{ project.description }}
            </p>
          </div>

          <!-- CTA buttons -->
          <div
            v-motion="{
              initial: { opacity: 0, y: 20 },
              enter: { opacity: 1, y: 0 },
              delay: 200,
            }"
            class="flex flex-col gap-2 md:items-end md:pt-14"
          >
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-500 transition-colors"
            >
              <span class="w-2 h-2 rounded-full bg-green-300 animate-pulse"></span>
              Voir en production
              <Icon name="material-symbols:arrow-outward" size="14" />
            </a>
            <NuxtLink
              v-if="!project.private"
              :to="`https://github.com/aniasse/${project.repo}`"
              target="_blank"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 text-white hover:bg-slate-700 transition-colors"
            >
              <Icon name="uil:github" size="16" />
              Voir sur GitHub
            </NuxtLink>
            <span
              v-else-if="!project.liveUrl"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-emerald-600 text-white"
            >
              <Icon name="material-symbols:lock" size="16" />
              Projet privé
            </span>
            <NuxtLink
              to="/projects"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-slate-200 text-slate-500 hover:border-slate-300 transition-colors"
            >
              <Icon name="material-symbols:arrow-back" size="15" />
              Tous les projets
            </NuxtLink>
          </div>
        </div>

        <!-- Tags row -->
        <div
          v-motion="{
            initial: { opacity: 0, y: 16 },
            enter: { opacity: 1, y: 0 },
            delay: 260,
          }"
          class="flex flex-wrap gap-2 mt-6"
        >
          <span class="text-xs px-3 py-1 rounded-full font-bold" :class="useLangColor(project.lang)">
            {{ project.lang }}
          </span>
          <span
            v-for="tag in project.tags.filter(t => t !== project.lang)"
            :key="tag"
            class="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-500 font-medium"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </section>

    <!-- Main content -->
    <section class="w-full flex justify-center mt-12">
      <div class="content-wrapper w-full grid grid-cols-1 lg:grid-cols-3 gap-10">

        <!-- Left: description + features -->
        <div class="lg:col-span-2 flex flex-col gap-8">

          <!-- Long description -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
           
          >
            <h2 class="text-lg font-bold text-slate-800 mb-3">À propos du projet</h2>
            <p class="text-slate-600 text-sm leading-relaxed">
              {{ project.longDescription }}
            </p>
          </div>

          <!-- Features -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :delay="80"
           
          >
            <h2 class="text-lg font-bold text-slate-800 mb-4">Fonctionnalités clés</h2>
            <ul class="flex flex-col gap-3">
              <li
                v-for="(feature, idx) in project.features"
                :key="idx"
                v-motion
                :initial="{ opacity: 0, x: -16 }"
                :visibleOnce="{ opacity: 1, x: 0 }"
                :delay="60 * idx"
                class="flex items-start gap-3"
              >
                <span
                  class="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                  style="background-color: #FFF3E0"
                >
                  <Icon name="material-symbols:check-small" size="14" style="color: #FFA500" />
                </span>
                <span class="text-sm text-slate-600 leading-relaxed">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Terminal mockup -->
          <div
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :delay="160"
            class="bg-slate-900 rounded-2xl p-5 font-mono text-xs border border-slate-700 shadow-lg"
          >
            <div class="flex items-center gap-1.5 mb-4 pb-3 border-b border-slate-700">
              <div class="w-3 h-3 rounded-full bg-red-400"></div>
              <div class="w-3 h-3 rounded-full bg-amber-400"></div>
              <div class="w-3 h-3 rounded-full bg-green-400"></div>
              <span class="ml-2 text-slate-500 text-[10px]">aniasse/{{ project.repo }}</span>
            </div>
            <p>
              <span class="text-slate-500">$</span>
              <span class="text-green-400"> git clone</span>
              <span class="text-slate-300"> https://github.com/aniasse/{{ project.repo }}.git</span>
            </p>
            <p class="mt-2 text-slate-400">Cloning into '{{ project.repo }}'...</p>
            <p class="text-slate-400">remote: Enumerating objects: done.</p>
            <p class="mt-2">
              <span class="text-slate-500">$</span>
              <span class="text-green-400"> cd</span>
              <span class="text-slate-300"> {{ project.repo }}</span>
            </p>
            <p class="mt-2">
              <span class="text-slate-500">$</span>
              <span class="text-green-400"> cat</span>
              <span class="text-slate-300"> README.md</span>
            </p>
            <p class="mt-1 text-amber-300"># {{ project.title }}</p>
            <p class="mt-1 text-slate-400 line-clamp-2">{{ project.description }}</p>
            <span class="text-green-400 animate-pulse">▋</span>
          </div>
        </div>

        <!-- Right: sidebar -->
        <div class="flex flex-col gap-5">

          <!-- Infos card -->
          <div
            v-motion
            :initial="{ opacity: 0, x: 24 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :delay="100"
            class="border border-slate-200 rounded-2xl p-5 bg-white"
          >
            <h3 class="text-sm font-bold text-slate-700 mb-4">Infos du projet</h3>
            <div class="flex flex-col gap-3">
              <div class="flex items-center justify-between">
                <span class="text-xs text-slate-400">Langage</span>
                <span class="text-xs font-bold px-2.5 py-1 rounded-full" :class="useLangColor(project.lang)">
                  {{ project.lang }}
                </span>
              </div>
              <div class="h-px bg-slate-100"></div>
              <div class="flex items-center justify-between">
                <span class="text-xs text-slate-400">Catégorie</span>
                <span class="text-xs font-semibold text-slate-600">{{ project.category }}</span>
              </div>
              <div class="h-px bg-slate-100"></div>
              <div class="flex items-center justify-between">
                <span class="text-xs text-slate-400">Repository</span>
                <NuxtLink
                  v-if="!project.private"
                  :to="`https://github.com/aniasse/${project.repo}`"
                  target="_blank"
                  class="text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors flex items-center gap-1"
                >
                  {{ project.repo }}
                  <Icon name="material-symbols:arrow-outward" size="11" />
                </NuxtLink>
                <span v-else class="text-xs font-semibold text-slate-400 flex items-center gap-1">
                  <Icon name="material-symbols:lock" size="11" />
                  Privé
                </span>
              </div>
              <template v-if="project.liveUrl">
                <div class="h-px bg-slate-100"></div>
                <div class="flex items-center justify-between">
                  <span class="text-xs text-slate-400">Site live</span>
                  <a
                    :href="project.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-xs font-semibold text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    {{ project.liveUrl.replace(/^https?:\/\//, '') }}
                    <Icon name="material-symbols:arrow-outward" size="11" />
                  </a>
                </div>
              </template>
              <div class="h-px bg-slate-100"></div>
              <div>
                <span class="text-xs text-slate-400 block mb-2">Stack</span>
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-medium"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <!-- Live URL CTA -->
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            v-motion
            :initial="{ opacity: 0, x: 24 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :delay="140"
            class="group flex items-center gap-3 border border-emerald-200 rounded-2xl p-5 bg-emerald-50 hover:border-emerald-400 hover:shadow-md transition-all"
          >
            <div class="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0">
              <Icon name="material-symbols:public" size="20" class="text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-bold text-slate-800 group-hover:text-emerald-700 transition-colors flex items-center gap-2">
                Voir en production
                <span class="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              </p>
              <p class="text-xs text-slate-500 mt-0.5 truncate">{{ project.liveUrl.replace(/^https?:\/\//, '') }}</p>
            </div>
            <Icon name="material-symbols:arrow-outward" size="16" class="text-emerald-400 group-hover:text-emerald-600 transition-colors flex-shrink-0" />
          </a>

          <!-- GitHub CTA -->
          <NuxtLink
            v-if="!project.private"
            :to="`https://github.com/aniasse/${project.repo}`"
            target="_blank"
            v-motion
            :initial="{ opacity: 0, x: 24 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :delay="160"
            class="group flex items-center gap-3 border border-slate-200 rounded-2xl p-5 bg-white hover:border-orange-300 hover:shadow-md transition-all"
          >
            <div class="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center flex-shrink-0">
              <Icon name="uil:github" size="20" class="text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors">Voir le code source</p>
              <p class="text-xs text-slate-400 mt-0.5 truncate">github.com/aniasse/{{ project.repo }}</p>
            </div>
            <Icon name="material-symbols:arrow-outward" size="16" class="text-slate-300 group-hover:text-orange-400 transition-colors flex-shrink-0" />
          </NuxtLink>
          <div
            v-else-if="!project.liveUrl"
            v-motion
            :initial="{ opacity: 0, x: 24 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :delay="160"
            class="flex items-center gap-3 border border-emerald-200 rounded-2xl p-5 bg-emerald-50"
          >
            <div class="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center flex-shrink-0">
              <Icon name="material-symbols:lock" size="20" class="text-white" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-bold text-slate-700">Projet privé</p>
              <p class="text-xs text-slate-400 mt-0.5">Code source non public — projet freelance</p>
            </div>
          </div>

          <!-- Related projects -->
          <div
            v-if="relatedProjects.length"
            v-motion
            :initial="{ opacity: 0, x: 24 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :delay="220"
           
          >
            <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Projets similaires</h3>
            <div class="flex flex-col gap-2">
              <NuxtLink
                v-for="rel in relatedProjects"
                :key="rel.slug"
                :to="`/projects/${rel.slug}`"
                class="group flex flex-col border border-slate-200 rounded-xl bg-white overflow-hidden hover:border-orange-300 hover:shadow-sm transition-all"
              >
                <AtomProjectIllustration :category="rel.category" size="xs" />
                <div class="p-3 flex items-center gap-2">
                  <div class="flex-1 min-w-0">
                    <p class="text-xs font-bold text-slate-700 group-hover:text-orange-600 transition-colors truncate">{{ rel.title }}</p>
                    <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full" :class="useLangColor(rel.lang)">
                      {{ rel.lang }}
                    </span>
                  </div>
                  <Icon name="material-symbols:chevron-right" size="14" class="text-slate-300 flex-shrink-0" />
                </div>
              </NuxtLink>
            </div>
          </div>

        </div>
      </div>
    </section>

  </div>
</template>
