<script setup lang="ts">
const navbar = ref<HTMLElement | null>(null)
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = (): void => {
  if (!navbar.value) return
  const navbarOffsetBottomWithPadding = navbar.value.offsetHeight + 20
  if (!navbar.value) return
  const scrollY = window.scrollY
  if (scrollY > navbarOffsetBottomWithPadding) {
    navbar.value.classList.add(
      'bg-white/70',
      'border-b-[1px]',
      'dark:bg-slate-900/80',
      'backdrop-blur',
    )
  } else {
    navbar.value.classList.remove(
      'bg-white/70',
      'border-b-[1px]',
      'dark:bg-slate-900/80',
      'backdrop-blur',
    )
  }
}

const showSettings = ref<boolean>(false)
</script>
<template>
  <header
    ref="navbar"
    class="fixed transition-all duration-300 top-0 z-[90] flex justify-between items-center w-full p-5 py-4"
  >
    <LayoutsNavigationSettings v-if="showSettings" @close="showSettings = false" />
    <div class="flex items-center">
      <!-- logo -->
      <NuxtLink to="/" class="flex gap-2 items-center">
        <div class="bg-accent-600 w-6 h-6 text-white rounded-lg text-center text-sm">/</div>
        <span class="font-bold text-xl">Adama<span class="text-accent-600">.</span></span>
      </NuxtLink>
      <!-- menu -->
      <div class="max-md:hidden lg:flex mt-1 ml-8 gap-6">
        <NuxtLink to="/projects" class="text-sm font-semibold text-slate-600 hover:text-accent-600 transition-colors">
          Projects
        </NuxtLink>
        <NuxtLink to="/about" class="text-sm font-semibold text-slate-600 hover:text-accent-600 transition-colors">
          About
        </NuxtLink>
        <NuxtLink to="/contact" class="text-sm font-semibold text-slate-600 hover:text-accent-600 transition-colors">
          Contact
        </NuxtLink>
      </div>
    </div>
    <div class="flex items-center gap-4">
      <NuxtLink to="https://www.linkedin.com/in/adama-niasse-82878b211" target="_blank">
        <Icon name="pajamas:linkedin" size="22" color="black" />
      </NuxtLink>
      <NuxtLink to="https://github.com/aniasse" target="_blank">
        <Icon name="uil:github" size="24" color="black" />
      </NuxtLink>
      <!-- <div
        class="ml-3 cursor-pointer hover:bg-slate-300/70 bg-slate-300/50 max-md:p-0 max-md:w-9 h-9 px-4 rounded-xl flex gap-2 text-sm font-bold text-slate-700 justify-center items-center"
        @click="showSettings = !showSettings"
      >
        <Icon name="gridicons:layout" size="19" color="black" />
        <span class="max-md:hidden">Quick access</span>
      </div> -->
    </div>
  </header>
</template>
