<script setup lang="ts">
const experiences = [
  {
    period: '2025 — 2026',
    title: 'Développeur Freelance',
    subtitle: 'Full Stack · Dakar & Remote',
    description: 'E-commerce, apps communautaires et mobiles pour des clients : Souhibou Télécom (high-tech), Jamah Pikine, Level Officiel, Vortex Agency, FSP Mobile.',
    tags: ['Go', 'Vue/Nuxt', 'React Native', 'Supabase', 'Stripe'],
    icon: 'material-symbols:rocket-launch',
    color: 'bg-orange-500',
  },
  {
    period: 'Mars 2023 — Avril 2026',
    title: 'Full Stack Developer',
    subtitle: '01Talent Sénégal · Dakar',
    description: 'Réalisation de 70+ projets en Go, Rust, JS et TS : systèmes distribués, architectures cloud, jeux réseau et outils CLI.',
    tags: ['Go', 'Rust', 'TypeScript', 'DevOps', 'Cloud'],
    icon: 'material-symbols:code',
    color: 'bg-indigo-600',
  },
  {
    period: 'Oct 2022 — Jan 2023',
    title: 'Assistant Responsable Technique',
    subtitle: 'Zone01 Dakar',
    description: 'Support technique, accompagnement des apprenants et gestion de l\'infrastructure.',
    tags: ['Support', 'Infrastructure', 'Mentorat'],
    icon: 'material-symbols:engineering',
    color: 'bg-blue-600',
  },
  {
    period: '2022 — 2023',
    title: 'Formation Zone01 — Spécialisation Cloud & DevOps',
    subtitle: 'Zone01 Dakar · 2022 — 2025',
    description: 'Programme peer-to-peer learning avec 70+ projets. Spécialisation Cloud & DevOps : Terraform, Docker, Kubernetes, AWS.',
    tags: ['Cisco', 'Réseaux', 'Sécurité', 'CCNA'],
    icon: 'material-symbols:school',
    color: 'bg-purple-600',
  },
]
</script>

<template>
  <div class="content-wrapper mx-auto mt-24">
    <!-- header -->
    <div
      v-motion="{ initial: { opacity: 0, y: 20 }, visibleOnce: { opacity: 1, y: 0 } }"
      class="opacity-0 mb-10"
    >
      <p class="font-mono text-xs uppercase tracking-widest text-slate-400">Parcours</p>
      <h2 class="text-2xl font-bold text-slate-700 mt-1">Expérience & Formation</h2>
    </div>

    <!-- timeline -->
    <div class="relative">
      <!-- Vertical line -->
      <div class="absolute left-[19px] md:left-[19px] top-2 bottom-2 w-px bg-slate-200" />

      <div class="flex flex-col gap-8">
        <div
          v-for="(exp, idx) in experiences"
          :key="exp.title"
          v-motion
          :initial="{ opacity: 0, x: -24 }"
          :visibleOnce="{ opacity: 1, x: 0 }"
          :delay="80 * idx"
          class="opacity-0 relative flex gap-5"
        >
          <!-- Dot -->
          <div class="flex-shrink-0 relative z-10">
            <div
              class="w-10 h-10 rounded-xl flex items-center justify-center"
              :class="exp.color"
            >
              <Icon :name="exp.icon" size="18" class="text-white" />
            </div>
          </div>

          <!-- Content -->
          <div class="flex-1 pb-2">
            <p class="text-[11px] font-mono text-slate-400 mb-1">{{ exp.period }}</p>
            <h3 class="text-base font-bold text-slate-800">{{ exp.title }}</h3>
            <p class="text-xs font-semibold text-orange-500 mt-0.5">{{ exp.subtitle }}</p>
            <p class="text-sm text-slate-500 mt-2 leading-relaxed max-w-2xl">{{ exp.description }}</p>
            <div class="flex flex-wrap gap-1.5 mt-3">
              <span
                v-for="tag in exp.tags"
                :key="tag"
                class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
