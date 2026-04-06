<script setup lang="ts">
const currentYear = new Date().getFullYear()

const navLinks = [
  { label: 'Projets', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

const stack = ['Nuxt 3', 'Tailwind CSS', 'Vercel']
</script>

<template>
  <footer class="w-full bg-slate-950 text-slate-400 mt-20">
    <!-- Top section -->
    <div class="content-wrapper w-full py-16">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8">

        <!-- Brand column -->
        <div class="md:col-span-5">
          <div class="flex items-center gap-2 mb-4">
            <div class="bg-orange-500 w-7 h-7 text-white rounded-lg text-center text-sm font-bold leading-7">/</div>
            <span class="font-bold text-xl text-white">Adama<span class="text-orange-500">.</span></span>
          </div>
          <p class="text-sm leading-relaxed max-w-sm text-slate-400">
            Software Engineer basé au Sénégal. Spécialisé en Go, Rust, Cloud-DevOps et Cybersécurité.
            Passionné par les systèmes distribués et les architectures performantes.
          </p>
          <!-- Social -->
          <div class="flex items-center gap-3 mt-6">
            <NuxtLink
              to="https://github.com/aniasse"
              target="_blank"
              class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-orange-500 flex items-center justify-center transition-colors group"
            >
              <Icon name="uil:github" size="18" class="text-slate-400 group-hover:text-white transition-colors" />
            </NuxtLink>
            <NuxtLink
              to="https://www.linkedin.com/in/adama-niasse-82878b211"
              target="_blank"
              class="w-9 h-9 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center transition-colors group"
            >
              <Icon name="pajamas:linkedin" size="15" class="text-slate-400 group-hover:text-white transition-colors" />
            </NuxtLink>
          </div>
        </div>

        <!-- Navigation -->
        <div class="md:col-span-3">
          <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Navigation</p>
          <ul class="flex flex-col gap-2.5">
            <li v-for="link in navLinks" :key="link.to">
              <NuxtLink
                :to="link.to"
                class="text-sm text-slate-400 hover:text-orange-400 transition-colors inline-flex items-center gap-1.5 group"
              >
                <span class="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-orange-400 transition-colors" />
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Stack -->
        <div class="md:col-span-2">
          <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Stack</p>
          <ul class="flex flex-col gap-2.5">
            <li v-for="tech in stack" :key="tech" class="text-sm text-slate-500 flex items-center gap-1.5">
              <span class="w-1 h-1 rounded-full bg-slate-700" />
              {{ tech }}
            </li>
          </ul>
        </div>

        <!-- Status -->
        <div class="md:col-span-2">
          <p class="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Status</p>
          <div class="flex items-center gap-2 mb-3">
            <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span class="text-sm text-emerald-400 font-medium">Disponible</span>
          </div>
          <p class="text-xs text-slate-500 leading-relaxed">
            Ouvert aux missions freelance et collaborations.
          </p>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center gap-1.5 mt-3 text-xs font-semibold text-orange-400 hover:text-orange-300 transition-colors"
          >
            Me contacter
            <Icon name="material-symbols:arrow-outward" size="12" />
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-slate-800">
      <div class="content-wrapper w-full py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-xs text-slate-600">
          &copy; {{ currentYear }} Adama Niasse. Tous droits réservés.
        </p>
        <p class="text-xs text-slate-700 font-mono">
          Dakar, Sénégal
        </p>
      </div>
    </div>
  </footer>
</template>
