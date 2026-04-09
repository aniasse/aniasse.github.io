<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number
    statusMessage?: string
    message?: string
  }
}>()

const handleError = () => clearError({ redirect: '/' })

const is404 = computed(() => props.error.statusCode === 404)
</script>

<template>
  <div class="min-h-screen bg-white flex items-center justify-center px-5">
    <div class="text-center max-w-lg">

      <!-- Error code -->
      <div
        v-motion="{ initial: { opacity: 0, scale: 0.8 }, enter: { opacity: 1, scale: 1 } }"
        class="mb-6"
      >
        <p class="text-[120px] md:text-[160px] font-[900] leading-none text-slate-100 select-none">
          {{ error.statusCode }}
        </p>
      </div>

      <!-- Terminal mockup -->
      <div
        v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0 }, delay: 100 }"
        class="bg-slate-900 rounded-2xl p-5 font-mono text-xs text-left mb-8 border border-slate-700 max-w-sm mx-auto"
      >
        <div class="flex items-center gap-1.5 mb-3 pb-2 border-b border-slate-700">
          <div class="w-2.5 h-2.5 rounded-full bg-red-400" />
          <div class="w-2.5 h-2.5 rounded-full bg-amber-400" />
          <div class="w-2.5 h-2.5 rounded-full bg-green-400" />
          <span class="ml-2 text-slate-500 text-[9px]">zsh</span>
        </div>
        <p>
          <span class="text-green-400">adama@dev</span><span class="text-slate-500">:</span><span class="text-blue-400">~</span><span class="text-slate-500">$</span>
          <span class="text-slate-300"> curl {{ is404 ? 'this-page' : 'server' }}</span>
        </p>
        <p class="mt-1.5 text-red-400">
          Error {{ error.statusCode }}: {{ is404 ? 'Page not found' : (error.statusMessage || 'Something went wrong') }}
        </p>
        <p class="mt-1.5">
          <span class="text-green-400">adama@dev</span><span class="text-slate-500">:</span><span class="text-blue-400">~</span><span class="text-slate-500">$</span>
          <span class="text-yellow-300"> cd /home</span>
          <span class="text-green-400 animate-pulse ml-1">▋</span>
        </p>
      </div>

      <!-- Message -->
      <h1
        v-motion="{ initial: { opacity: 0, y: 16 }, enter: { opacity: 1, y: 0 }, delay: 200 }"
        class="text-xl font-bold text-slate-800 mb-2"
      >
        {{ is404 ? 'Page introuvable' : 'Erreur serveur' }}
      </h1>
      <p
        v-motion="{ initial: { opacity: 0 }, enter: { opacity: 1 }, delay: 260 }"
        class="text-sm text-slate-500 mb-8"
      >
        {{ is404
          ? 'Cette page n\'existe pas ou a été déplacée.'
          : 'Quelque chose s\'est mal passé. Réessayez plus tard.'
        }}
      </p>

      <!-- CTA -->
      <div
        v-motion="{ initial: { opacity: 0, y: 16 }, enter: { opacity: 1, y: 0 }, delay: 320 }"
        class="flex items-center justify-center gap-3"
      >
        <button
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 text-white hover:bg-slate-700 transition-colors"
          @click="handleError"
        >
          <Icon name="material-symbols:home" size="16" />
          Retour à l'accueil
        </button>
        <NuxtLink
          to="/projects"
          class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-slate-200 text-slate-500 hover:border-slate-300 transition-colors"
        >
          Voir les projets
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
