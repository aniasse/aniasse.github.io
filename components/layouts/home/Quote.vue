<script setup lang="ts">
const capabilities = [
  {
    icon: 'material-symbols:hub',
    color: 'bg-orange-500/20 border-orange-500/30',
    iconColor: 'text-orange-400',
    title: 'Systèmes Distribués',
    desc: 'Conception d\'architectures résilientes avec load balancing, consensus distribué et réplication de données.',
    tags: ['CAP theorem', 'Microservices', 'WebSocket'],
  },
  {
    icon: 'material-symbols:speed',
    color: 'bg-blue-500/20 border-blue-500/30',
    iconColor: 'text-blue-400',
    title: 'APIs Haute Performance',
    desc: 'APIs REST & GraphQL optimisées avec caching, pooling de connexions et gestion efficace de la concurrence.',
    tags: ['REST', 'GraphQL', 'Redis cache'],
  },
  {
    icon: 'material-symbols:security',
    color: 'bg-green-500/20 border-green-500/30',
    iconColor: 'text-green-400',
    title: 'Sécurité Zero-Trust',
    desc: 'Sécurisation des systèmes avec authentification forte, chiffrement end-to-end et conformité OWASP.',
    tags: ['OAuth2 / JWT', 'TLS', 'OWASP'],
  },
]

const metrics = [
  { value: '70', suffix: '+', label: 'projets réalisés' },
  { value: '7', suffix: '', label: 'domaines couverts' },
  { value: '3', suffix: 'y', label: 'd\'expérience' },
  { value: '5', suffix: '+', label: 'langages maîtrisés' },
]
</script>

<template>
  <div class="content-wrapper container mt-20">
    <!-- section label -->
    <div
      v-motion="{ initial: { opacity: 0, y: 20 }, visibleOnce: { opacity: 1, y: 0 } }"
      class="mb-2"
    >
      <p class="font-mono text-xs uppercase tracking-widest text-slate-400">Expertise principale</p>
      <h2 class="text-2xl font-bold text-slate-700 mt-1">Compétences système</h2>
    </div>

    <!-- capabilities grid -->
    <div class="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div
        v-for="(cap, idx) in capabilities"
        :key="cap.title"
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :visibleOnce="{ opacity: 1, y: 0 }"
        :delay="idx * 100"
        class="bg-slate-900 text-white rounded-2xl p-6 border border-slate-700 hover:border-orange-400 transition-colors group"
      >
        <div class="w-10 h-10 rounded-xl border flex items-center justify-center mb-4" :class="cap.color">
          <Icon :name="cap.icon" size="22" :class="cap.iconColor" />
        </div>
        <h3 class="font-bold text-sm text-white mb-2">{{ cap.title }}</h3>
        <p class="text-slate-400 text-xs leading-relaxed">{{ cap.desc }}</p>
        <div class="mt-4 flex flex-wrap gap-1.5">
          <span
            v-for="tag in cap.tags"
            :key="tag"
            class="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700"
          >
            {{ tag }}
          </span>
        </div>
      </div>
    </div>

    <!-- metrics bar -->
    <div
      v-motion="{ initial: { opacity: 0, y: 20 }, visibleOnce: { opacity: 1, y: 0 }, delay: 300 }"
      class="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4"
    >
      <div
        v-for="metric in metrics"
        :key="metric.label"
        class="border border-slate-200 rounded-xl p-4 text-center bg-white"
      >
        <p class="text-2xl font-[900] text-slate-800">
          {{ metric.value }}<span style="color: #FFA500">{{ metric.suffix }}</span>
        </p>
        <p class="text-xs text-slate-500 mt-1 font-mono">{{ metric.label }}</p>
      </div>
    </div>
  </div>
</template>
