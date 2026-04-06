<script setup>
definePageMeta({ layout: 'page' })

useHead({
  title: 'Contact - Adama Niasse',
  meta: [{ name: 'description', content: 'Contactez Adama Niasse - Full Stack Developer' }],
})

const contacts = [
  {
    label: 'LinkedIn',
    value: 'adama-niasse-82878b211',
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
]
</script>

<template>
  <div class="flex flex-col w-full items-center pb-20 bg-white">
    <!-- Header -->
    <section class="background-grid w-full flex justify-center pt-32 pb-16">
      <div class="content-wrapper w-full text-center">
        <p
          v-motion="{
            initial: { opacity: 0, y: -20 },
            enter: { opacity: 1, y: 0 },
          }"
          class="opacity-0 text-accent-600 font-bold text-sm mb-2"
        >
          Contact
        </p>
        <h1
          v-motion="{
            initial: { opacity: 0, y: -30 },
            enter: { opacity: 1, y: 0 },
            delay: 100,
          }"
          class="opacity-0 text-4xl md:text-5xl font-[900] text-slate-800 mb-4"
        >
          Travaillons ensemble
        </h1>
        <p
          v-motion="{
            initial: { opacity: 0 },
            enter: { opacity: 1 },
            delay: 200,
          }"
          class="opacity-0 text-slate-500 text-base max-w-md mx-auto"
        >
          Disponible pour des missions freelance, des collaborations ou simplement discuter tech.
        </p>
      </div>
    </section>

    <!-- Contact cards -->
    <section class="w-full flex justify-center mt-4">
      <div class="content-wrapper w-full">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          <NuxtLink
            v-for="(contact, index) in contacts"
            :key="contact.label"
            :to="contact.href"
            target="_blank"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :delay="100 * index"
            class="opacity-0 flex items-center gap-4 border-[1px] rounded-2xl p-5 bg-white hover:shadow-md hover:border-accent-400 transition-all group"
          >
            <div :class="[contact.color, 'w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0']">
              <Icon :name="contact.icon" size="24" />
            </div>
            <div>
              <p class="font-bold text-slate-700 text-sm group-hover:text-accent-600 transition-colors">
                {{ contact.label }}
              </p>
              <p class="text-xs text-slate-500 mt-0.5">{{ contact.value }}</p>
            </div>
            <Icon name="material-symbols-light:open-in-new" size="16" class="ml-auto text-slate-400 group-hover:text-accent-600 transition-colors" />
          </NuxtLink>
        </div>

        <!-- Availability badge -->
        <div
          v-motion="{
            initial: { opacity: 0, y: 20 },
            visibleOnce: { opacity: 1, y: 0 },
            delay: 300,
          }"
          class="opacity-0 flex justify-center mt-12"
        >
          <div class="flex items-center gap-3 border-[1px] rounded-2xl px-6 py-4 bg-white max-w-sm w-full">
            <div class="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <div>
              <p class="text-sm font-bold text-slate-700">Disponible</p>
              <p class="text-xs text-slate-500">Ouvert aux nouvelles opportunités</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
