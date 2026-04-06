<script setup>
useHead({
  htmlAttrs: { lang: 'fr' },
  title: 'Adama Niasse — Software Engineer',
  meta: [{ name: 'description', content: 'Adama Niasse — Software Engineer, Go/Rust/Cloud-DevOps/Cybersecurity. Conception de systèmes distribués, sécurisés et performants.' }],
})

useSeoMeta({
  charset: 'utf-8',
  author: 'Adama Niasse',
  title: 'Adama Niasse — Software Engineer',
  ogTitle: 'Adama Niasse — Software Engineer',
  description: 'Adama Niasse — Software Engineer, Go/Rust/Cloud-DevOps/Cybersecurity. Conception de systèmes distribués, sécurisés et performants.',
  ogDescription: 'Software Engineer spécialisé en Go, Rust, Cloud-DevOps et Cybersecurity. 70+ projets open source et SaaS.',
  ogImage: '/images/thumbnail.png',
})

definePageMeta({ layout: 'page' })
</script>

<template>
  <div class="flex flex-col w-full items-center pb-20 z-0 bg-white">
    <section id="hero" class="background-grid w-full flex justify-center pt-20">
      <LayoutsHomeHero />
    </section>
    <section id="capabilities" class="flex w-full justify-center">
      <LayoutsHomeQuote />
    </section>
    <section id="architecture" class="w-full">
      <LayoutsHomeSystemDesign />
    </section>
    <section id="timeline" class="flex w-full justify-center">
      <LayoutsHomeTimeline />
    </section>
    <section id="project" class="flex w-full justify-center">
      <LayoutsHomeProject />
    </section>
    <section id="cta" class="flex w-full justify-center">
      <LayoutsHomeCta />
    </section>
  </div>
</template>
