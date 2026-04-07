<script setup lang="ts">
import { ALL_ARTICLES, formatDate, useCategoryColor } from '~/composables/useArticles'

definePageMeta({ layout: 'page' })

const route = useRoute()
const slug = route.params.slug as string

const article = ALL_ARTICLES.find(a => a.slug === slug)

if (!article) {
  throw createError({ statusCode: 404, statusMessage: 'Article introuvable' })
}

useHead({
  title: `${article.title} — Blog Adama Niasse`,
  meta: [{ name: 'description', content: article.description }],
})

const relatedArticles = ALL_ARTICLES
  .filter(a => a.category === article.category && a.slug !== article.slug)
  .slice(0, 3)
</script>

<template>
  <div class="flex flex-col w-full items-center pb-24 bg-white">

    <!-- Hero -->
    <section class="background-grid w-full flex justify-center pt-32 pb-12 border-b border-slate-100">
      <div class="content-wrapper w-full max-w-3xl">
        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 font-mono text-xs text-slate-400 mb-6">
          <NuxtLink to="/blog" class="hover:text-orange-500 transition-colors">blog</NuxtLink>
          <span>/</span>
          <span class="text-slate-600">{{ article.slug }}</span>
        </div>

        <!-- Category + date -->
        <div
          v-motion="{ initial: { opacity: 0, y: -10 }, enter: { opacity: 1, y: 0 } }"
          class="opacity-0 flex items-center gap-3 mb-4"
        >
          <span class="text-xs font-bold px-2.5 py-1 rounded-lg" :class="useCategoryColor(article.category)">
            {{ article.category }}
          </span>
          <span class="text-xs text-slate-400 font-mono">{{ formatDate(article.date) }}</span>
          <span class="text-xs text-slate-400">·</span>
          <span class="text-xs text-slate-400">{{ article.readTime }}</span>
        </div>

        <!-- Title -->
        <h1
          v-motion="{ initial: { opacity: 0, x: -40 }, enter: { opacity: 1, x: 0 }, delay: 80 }"
          class="opacity-0 text-3xl md:text-4xl font-[900] text-slate-800 mb-4 leading-tight"
        >
          {{ article.title }}
        </h1>

        <!-- Description -->
        <p
          v-motion="{ initial: { opacity: 0, x: -40 }, enter: { opacity: 1, x: 0 }, delay: 140 }"
          class="opacity-0 text-slate-500 text-base leading-relaxed mb-5"
        >
          {{ article.description }}
        </p>

        <!-- Tags -->
        <div
          v-motion="{ initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0 }, delay: 200 }"
          class="opacity-0 flex flex-wrap gap-2"
        >
          <span
            v-for="tag in article.tags"
            :key="tag"
            class="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-500 font-medium"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </section>

    <!-- Article Content -->
    <section class="w-full flex justify-center mt-12">
      <div class="content-wrapper w-full max-w-3xl">
        <div class="flex flex-col gap-10">
          <div
            v-for="(section, idx) in article.content"
            :key="idx"
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :delay="60 * idx"
            class="opacity-0"
          >
            <!-- Section title -->
            <h2 class="text-xl font-bold text-slate-800 mb-3">{{ section.title }}</h2>

            <!-- Body text -->
            <p class="text-sm text-slate-600 leading-relaxed mb-4">{{ section.body }}</p>

            <!-- List -->
            <ul v-if="section.list" class="flex flex-col gap-2.5 mb-4">
              <li
                v-for="(item, i) in section.list"
                :key="i"
                class="flex items-start gap-3 text-sm text-slate-600"
              >
                <span class="mt-1 w-1.5 h-1.5 rounded-full bg-orange-400 flex-shrink-0" />
                <span class="leading-relaxed">{{ item }}</span>
              </li>
            </ul>

            <!-- Code / Diagram block -->
            <div
              v-if="section.code"
              class="bg-slate-900 rounded-xl p-5 font-mono text-xs text-slate-300 leading-relaxed overflow-x-auto border border-slate-700"
            >
              <div class="flex items-center gap-1.5 mb-3 pb-2 border-b border-slate-700">
                <div class="w-2.5 h-2.5 rounded-full bg-red-400" />
                <div class="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <div class="w-2.5 h-2.5 rounded-full bg-green-400" />
                <span class="ml-2 text-slate-500 text-[9px]">{{ section.code.lang }}</span>
              </div>
              <pre class="whitespace-pre">{{ section.code.content }}</pre>
            </div>
          </div>
        </div>

        <!-- Author card -->
        <div
          v-motion="{ initial: { opacity: 0, y: 20 }, visibleOnce: { opacity: 1, y: 0 } }"
          class="opacity-0 mt-14 border border-slate-200 rounded-2xl p-6 flex items-center gap-5"
        >
          <NuxtImg
            format="webp"
            src="/images/adama.png"
            alt="Adama Niasse"
            class="w-14 h-14 rounded-full object-cover border-2 border-orange-400"
          />
          <div class="flex-1">
            <p class="text-sm font-bold text-slate-800">Adama Niasse</p>
            <p class="text-xs text-slate-500 mt-0.5">Software Engineer · Cloud-DevOps · Cybersecurity</p>
          </div>
          <NuxtLink
            to="/about"
            class="text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors"
          >
            À propos
          </NuxtLink>
        </div>

        <!-- Related articles -->
        <div v-if="relatedArticles.length" class="mt-14">
          <h3 class="text-xs font-bold text-slate-400 uppercase tracking-widest mb-5">Articles similaires</h3>
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <NuxtLink
              v-for="rel in relatedArticles"
              :key="rel.slug"
              :to="`/blog/${rel.slug}`"
              class="group border border-slate-200 rounded-xl p-4 bg-white hover:border-orange-300 hover:shadow-sm transition-all"
            >
              <span class="text-[10px] font-bold px-2 py-0.5 rounded-full" :class="useCategoryColor(rel.category)">
                {{ rel.category }}
              </span>
              <h4 class="text-sm font-bold text-slate-800 group-hover:text-orange-600 transition-colors mt-2 leading-snug line-clamp-2">
                {{ rel.title }}
              </h4>
              <p class="text-[10px] text-slate-400 mt-2 font-mono">{{ rel.readTime }}</p>
            </NuxtLink>
          </div>
        </div>

        <!-- Back to blog -->
        <div class="mt-10 flex justify-center">
          <NuxtLink
            to="/blog"
            class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-500 hover:border-orange-300 hover:text-orange-600 transition-all"
          >
            <Icon name="material-symbols:arrow-back" size="16" />
            Tous les articles
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
