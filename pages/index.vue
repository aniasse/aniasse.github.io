<script setup>
useHead({
  htmlAttrs: { lang: 'fr' },
  title: 'Adama Niasse — Systems Engineer',
  meta: [{ name: 'description', content: 'Adama Niasse — Systems Engineer, Full Stack Developer, DevOps & Cybersecurity. Building distributed, secure and scalable systems.' }],
})

useSeoMeta({
  charset: 'utf-8',
  author: 'Adama Niasse',
  title: 'Adama Niasse — Systems Engineer',
  ogTitle: 'Adama Niasse — Systems Engineer',
  description: 'Adama Niasse — Systems Engineer, Full Stack Developer, DevOps & Cybersecurity. Building distributed, secure and scalable systems.',
  ogDescription: 'Adama Niasse — Systems Engineer, Full Stack Developer, DevOps & Cybersecurity.',
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
    <section id="project" class="flex w-full justify-center">
      <LayoutsHomeProject />
    </section>
  </div>
</template>

<style lang="scss" scoped></style>
