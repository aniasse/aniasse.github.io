<template>
  <div class="content-wrapper mx-auto mt-24 mb-8">
    <div
      v-motion="{ initial: { opacity: 0, y: 30 }, visibleOnce: { opacity: 1, y: 0 } }"
      class="opacity-0 relative overflow-hidden rounded-2xl bg-slate-950 border border-slate-800 p-10 md:p-14 text-center"
    >
      <!-- Subtle glow -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div class="relative z-10">
        <p class="font-mono text-xs uppercase tracking-widest text-slate-500 mb-3">Contact</p>
        <h2 class="text-2xl md:text-3xl font-[900] text-white mb-3">
          Un projet en tête ?
        </h2>
        <p class="text-slate-400 text-sm max-w-md mx-auto leading-relaxed mb-8">
          Je suis disponible pour des missions freelance, des postes CDI
          ou des collaborations open source. Discutons-en.
        </p>

        <div class="flex items-center justify-center gap-4 flex-wrap">
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white hover:scale-105 transition-transform"
            style="background-color: #FFA500"
          >
            <Icon name="material-symbols:mail-outline" size="16" />
            Me contacter
          </NuxtLink>
          <NuxtLink
            to="https://github.com/aniasse"
            target="_blank"
            class="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white border border-slate-700 hover:border-slate-500 transition-colors"
          >
            <Icon name="uil:github" size="16" />
            GitHub
          </NuxtLink>
        </div>

        <!-- Availability -->
        <div class="flex items-center justify-center gap-2 mt-6">
          <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span class="text-xs text-emerald-400 font-medium">Disponible · Dakar, Sénégal</span>
        </div>
      </div>
    </div>
  </div>
</template>
