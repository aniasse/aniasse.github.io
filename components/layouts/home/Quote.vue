<template>
  <div class="content-wrapper container mt-20">
    <!-- section label -->
    <div
      v-motion="{
        initial: { opacity: 0, y: 20 },
        visibleOnce: { opacity: 1, y: 0 },
      }"
      class="opacity-0 mb-2"
    >
      <p class="font-mono text-xs uppercase tracking-widest text-slate-400">Core expertise</p>
      <h2 class="text-2xl font-bold text-slate-700 mt-1">System Design Capabilities</h2>
    </div>

    <!-- capabilities grid -->
    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">

      <!-- Distributed Systems -->
      <div
        v-motion="{
          initial: { opacity: 0, y: 30 },
          visibleOnce: { opacity: 1, y: 0 },
          delay: 0,
        }"
        class="opacity-0 bg-slate-900 text-white rounded-2xl p-6 border border-slate-700 hover:border-orange-400 transition-colors group"
      >
        <div class="w-10 h-10 rounded-xl bg-orange-500/20 border border-orange-500/30 flex items-center justify-center mb-4">
          <Icon name="material-symbols:hub" size="22" class="text-orange-400" />
        </div>
        <h3 class="font-bold text-sm text-white mb-2">Distributed Systems</h3>
        <p class="text-slate-400 text-xs leading-relaxed">
          Conception d'architectures résilientes avec load balancing, consensus distribué et réplication de données.
        </p>
        <div class="mt-4 flex flex-wrap gap-1.5">
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">CAP theorem</span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">Microservices</span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">WebSocket</span>
        </div>
      </div>

      <!-- High-Performance -->
      <div
        v-motion="{
          initial: { opacity: 0, y: 30 },
          visibleOnce: { opacity: 1, y: 0 },
          delay: 100,
        }"
        class="opacity-0 bg-slate-900 text-white rounded-2xl p-6 border border-slate-700 hover:border-orange-400 transition-colors group"
      >
        <div class="w-10 h-10 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center mb-4">
          <Icon name="material-symbols:speed" size="22" class="text-blue-400" />
        </div>
        <h3 class="font-bold text-sm text-white mb-2">High-Performance APIs</h3>
        <p class="text-slate-400 text-xs leading-relaxed">
          APIs REST & GraphQL optimisées avec caching, pooling de connexions et gestion efficace de la concurrence.
        </p>
        <div class="mt-4 flex flex-wrap gap-1.5">
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">REST</span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">GraphQL</span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">Redis cache</span>
        </div>
      </div>

      <!-- Security -->
      <div
        v-motion="{
          initial: { opacity: 0, y: 30 },
          visibleOnce: { opacity: 1, y: 0 },
          delay: 200,
        }"
        class="opacity-0 bg-slate-900 text-white rounded-2xl p-6 border border-slate-700 hover:border-orange-400 transition-colors group"
      >
        <div class="w-10 h-10 rounded-xl bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-4">
          <Icon name="material-symbols:security" size="22" class="text-green-400" />
        </div>
        <h3 class="font-bold text-sm text-white mb-2">Zero-Trust Security</h3>
        <p class="text-slate-400 text-xs leading-relaxed">
          Sécurisation des systèmes avec authentification forte, chiffrement end-to-end et conformité OWASP.
        </p>
        <div class="mt-4 flex flex-wrap gap-1.5">
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">OAuth2 / JWT</span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">TLS</span>
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">OWASP</span>
        </div>
      </div>

    </div>

    <!-- metrics bar -->
    <div
      v-motion="{
        initial: { opacity: 0, y: 20 },
        visibleOnce: { opacity: 1, y: 0 },
        delay: 300,
      }"
      class="opacity-0 mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      <div class="border border-slate-200 rounded-xl p-4 text-center bg-white">
        <p class="text-2xl font-[900] text-slate-800">6<span style="color:#FFA500">+</span></p>
        <p class="text-xs text-slate-500 mt-1 font-mono">systèmes construits</p>
      </div>
      <div class="border border-slate-200 rounded-xl p-4 text-center bg-white">
        <p class="text-2xl font-[900] text-slate-800">5<span style="color:#FFA500">+</span></p>
        <p class="text-xs text-slate-500 mt-1 font-mono">langages maîtrisés</p>
      </div>
      <div class="border border-slate-200 rounded-xl p-4 text-center bg-white">
        <p class="text-2xl font-[900] text-slate-800">3<span style="color:#FFA500">y</span></p>
        <p class="text-xs text-slate-500 mt-1 font-mono">d'expérience</p>
      </div>
      <div class="border border-slate-200 rounded-xl p-4 text-center bg-white">
        <p class="text-2xl font-[900] text-slate-800">∞</p>
        <p class="text-xs text-slate-500 mt-1 font-mono">curiosité</p>
      </div>
    </div>
  </div>
</template>
