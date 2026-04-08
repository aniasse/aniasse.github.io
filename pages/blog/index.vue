<script setup lang="ts">
import { ALL_ARTICLES, ARTICLE_CATEGORIES, formatDate, useCategoryColor } from '~/composables/useArticles'
import type { ArticleCategory } from '~/composables/useArticles'

definePageMeta({ layout: 'page' })

useHead({
  title: 'Blog — Adama Niasse',
  meta: [{ name: 'description', content: 'Articles techniques sur le System Design, la performance, le DevOps, la sécurité et les tendances tech.' }],
})

type FilterCategory = 'Tous' | ArticleCategory

const activeCategory = ref<FilterCategory>('Tous')

const filteredArticles = computed(() =>
  activeCategory.value === 'Tous'
    ? ALL_ARTICLES
    : ALL_ARTICLES.filter(a => a.category === activeCategory.value),
)
</script>

<template>
  <div class="flex flex-col w-full items-center pb-24 bg-white">

    <!-- Hero -->
    <section class="background-grid w-full flex justify-center pt-32 pb-16 border-b border-slate-100">
      <div class="content-wrapper w-full">
        <div
          v-motion="{ initial: { opacity: 0, y: -16 }, enter: { opacity: 1, y: 0 } }"
          class="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4"
        >
          aniasse / blog
        </div>
        <h1
          v-motion="{ initial: { opacity: 0, x: -60 }, enter: { opacity: 1, x: 0 }, delay: 80 }"
          class="text-4xl md:text-5xl font-[900] text-slate-800 mb-4 leading-tight"
        >
          Blog <span class="text-orange-500">technique</span>
        </h1>
        <p
          v-motion="{ initial: { opacity: 0, x: -60 }, enter: { opacity: 1, x: 0 }, delay: 160 }"
          class="text-slate-500 text-base max-w-xl leading-relaxed"
        >
          Articles approfondis sur le System Design, la performance, le DevOps,
          la sécurité et les tendances de l'ingénierie logicielle.
        </p>
      </div>
    </section>

    <!-- Category Filter -->
    <section class="w-full flex justify-center mt-10">
      <div class="content-wrapper w-full">
        <div class="flex flex-wrap gap-2">
          <button
            class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all"
            :class="activeCategory === 'Tous'
              ? 'border-orange-400 bg-orange-50 text-orange-600 shadow-sm'
              : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'"
            @click="activeCategory = 'Tous'"
          >
            <Icon name="material-symbols:grid-view" size="13" />
            Tous
            <span
              class="ml-0.5 px-1.5 py-0.5 rounded-full text-[10px] font-bold"
              :class="activeCategory === 'Tous' ? 'bg-orange-100 text-orange-600' : 'bg-slate-100 text-slate-400'"
            >
              {{ ALL_ARTICLES.length }}
            </span>
          </button>
          <button
            v-for="cat in ARTICLE_CATEGORIES"
            :key="cat.label"
            class="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all"
            :class="activeCategory === cat.label
              ? 'border-orange-400 bg-orange-50 text-orange-600 shadow-sm'
              : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'"
            @click="activeCategory = cat.label"
          >
            <Icon :name="cat.icon" size="13" />
            {{ cat.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- Articles Grid -->
    <section class="w-full flex justify-center mt-8">
      <div class="content-wrapper w-full">
        <div class="flex flex-col gap-5">
          <NuxtLink
            v-for="(article, idx) in filteredArticles"
            :key="article.slug"
            :to="`/blog/${article.slug}`"
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :delay="60 * idx"
            class="group flex flex-col sm:flex-row gap-5 border border-slate-200 rounded-2xl p-5 bg-white hover:border-orange-300 hover:shadow-md transition-all"
          >
            <!-- Left: icon -->
            <div class="flex-shrink-0">
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center"
                :class="useCategoryColor(article.category)"
              >
                <Icon :name="article.icon" size="24" />
              </div>
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0">
              <div class="flex items-center gap-2 mb-1.5">
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full" :class="useCategoryColor(article.category)">
                  {{ article.category }}
                </span>
                <span class="text-[10px] text-slate-400 font-mono">{{ formatDate(article.date) }}</span>
                <span class="text-[10px] text-slate-400">·</span>
                <span class="text-[10px] text-slate-400">{{ article.readTime }}</span>
              </div>
              <h2 class="text-base font-bold text-slate-800 group-hover:text-orange-600 transition-colors leading-snug mb-1.5">
                {{ article.title }}
              </h2>
              <p class="text-xs text-slate-500 leading-relaxed line-clamp-2">
                {{ article.description }}
              </p>
              <div class="flex flex-wrap gap-1.5 mt-3">
                <span
                  v-for="tag in article.tags.slice(0, 4)"
                  :key="tag"
                  class="text-[10px] px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 font-medium"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Arrow -->
            <div class="flex items-center flex-shrink-0">
              <Icon
                name="material-symbols:arrow-outward"
                size="16"
                class="text-slate-300 group-hover:text-orange-400 transition-colors"
              />
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
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
