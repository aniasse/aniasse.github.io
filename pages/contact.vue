<script setup lang="ts">
definePageMeta({ layout: 'page' })

useHead({
  title: 'Contact — Adama Niasse',
  meta: [{ name: 'description', content: 'Contactez Adama Niasse — Software Engineer, Go/Rust/Cloud-DevOps' }],
})

const contacts = [
  {
    label: 'Email',
    value: 'adamaniasse153@gmail.com',
    href: 'mailto:adamaniasse153@gmail.com',
    icon: 'material-symbols:mail-outline',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    label: 'Téléphone',
    value: '+221 77 324 86 63',
    href: 'tel:+221773248663',
    icon: 'material-symbols:phone-in-talk',
    color: 'bg-green-100 text-green-700',
  },
  {
    label: 'LinkedIn',
    value: 'adama-niasse',
    href: 'https://www.linkedin.com/in/adama-niasse-82878b211',
    icon: 'pajamas:linkedin',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    label: 'GitHub',
    value: 'github.com/aniasse',
    href: 'https://github.com/aniasse',
    icon: 'uil:github',
    color: 'bg-slate-100 text-slate-700',
  },
  {
    label: 'Discord',
    value: 'aniasse',
    href: 'https://discord.gg/aniasse',
    icon: 'ic:baseline-discord',
    color: 'bg-indigo-100 text-indigo-700',
  },
]
</script>

<template>
  <div class="flex flex-col w-full items-center pb-24 bg-white">

    <!-- Hero -->
    <section class="background-grid w-full flex justify-center pt-32 pb-16 border-b border-slate-100">
      <div class="content-wrapper w-full">
        <div class="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4">
          aniasse / contact
        </div>
        <h1 class="text-4xl md:text-5xl font-[900] text-slate-800 mb-4 leading-tight">
          Travaillons <span class="text-orange-500">ensemble</span>
        </h1>
        <p class="text-slate-500 text-base max-w-lg leading-relaxed">
          Disponible pour des missions freelance, des collaborations tech
          ou simplement discuter systèmes distribués autour d'un café.
        </p>
      </div>
    </section>

    <!-- Contact cards -->
    <section class="w-full flex justify-center mt-12">
      <div class="content-wrapper w-full max-w-2xl">
        <div class="flex flex-col gap-4">
          <NuxtLink
            v-for="contact in contacts"
            :key="contact.label"
            :to="contact.href"
            :target="contact.href.startsWith('http') ? '_blank' : undefined"
            class="flex items-center gap-4 border border-slate-200 rounded-2xl p-5 bg-white hover:border-orange-300 hover:shadow-md transition-all group"
          >
            <div :class="[contact.color, 'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0']">
              <Icon :name="contact.icon" size="22" />
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-bold text-slate-700 group-hover:text-orange-600 transition-colors">
                {{ contact.label }}
              </p>
              <p class="text-xs text-slate-400 mt-0.5 truncate">{{ contact.value }}</p>
            </div>
            <Icon name="material-symbols:arrow-outward" size="16" class="text-slate-300 group-hover:text-orange-400 transition-colors flex-shrink-0" />
          </NuxtLink>
        </div>

        <!-- Availability + Location -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
          <div class="border border-emerald-200 rounded-2xl p-5 bg-emerald-50">
            <div class="flex items-center gap-2.5 mb-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span class="text-sm font-bold text-emerald-700">Disponible</span>
            </div>
            <p class="text-xs text-emerald-600 leading-relaxed">
              Ouvert aux missions freelance, postes CDI et collaborations open source.
            </p>
          </div>
          <div class="border border-slate-200 rounded-2xl p-5 bg-white">
            <div class="flex items-center gap-2.5 mb-2">
              <Icon name="material-symbols:location-on-outline" size="16" class="text-slate-400" />
              <span class="text-sm font-bold text-slate-700">Localisation</span>
            </div>
            <p class="text-xs text-slate-500 leading-relaxed">
              Dakar, Sénégal — disponible en remote worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
