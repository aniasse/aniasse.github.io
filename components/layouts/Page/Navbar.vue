<script setup lang="ts">
const route = useRoute()
const navbar = ref<HTMLElement | null>(null)
const mobileOpen = ref(false)

const links = [
  { to: '/projects', label: 'Projets' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

const isActive = (path: string) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

// Close mobile menu on route change
watch(() => route.path, () => {
  mobileOpen.value = false
})

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const handleScroll = (): void => {
  if (!navbar.value) return
  const threshold = navbar.value.offsetHeight + 20
  if (window.scrollY > threshold) {
    navbar.value.classList.add('nav-scrolled')
  } else {
    navbar.value.classList.remove('nav-scrolled')
  }
  // Close mobile menu on scroll
  if (mobileOpen.value) mobileOpen.value = false
}
</script>

<template>
  <header
    ref="navbar"
    class="fixed transition-all duration-300 top-0 z-[90] flex justify-between items-center w-full px-5 md:px-8 py-4"
  >
    <div class="flex items-center">
      <!-- Logo -->
      <NuxtLink to="/" class="flex gap-2 items-center">
        <div class="bg-orange-500 w-7 h-7 text-white rounded-lg text-center text-sm font-bold leading-7">/</div>
        <span class="font-bold text-xl text-slate-800">Adama<span class="text-orange-500">.</span></span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden md:flex mt-0.5 ml-8 gap-1">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="relative px-3 py-1.5 text-sm font-semibold rounded-lg transition-all duration-200"
          :class="isActive(link.to)
            ? 'text-orange-600 bg-orange-50'
            : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'"
        >
          {{ link.label }}
          <span
            v-if="isActive(link.to)"
            class="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-orange-500 rounded-full"
          />
        </NuxtLink>
      </nav>
    </div>

    <div class="flex items-center gap-3">
      <!-- Social links -->
      <NuxtLink
        to="https://www.linkedin.com/in/adama-niasse-82878b211"
        target="_blank"
        class="hidden sm:flex w-8 h-8 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
      >
        <Icon name="pajamas:linkedin" size="18" class="text-slate-600" />
      </NuxtLink>
      <NuxtLink
        to="https://github.com/aniasse"
        target="_blank"
        class="hidden sm:flex w-8 h-8 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
      >
        <Icon name="uil:github" size="20" class="text-slate-600" />
      </NuxtLink>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
        aria-label="Menu"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="hamburger-lines" :class="{ open: mobileOpen }">
          <span />
          <span />
          <span />
        </span>
      </button>
    </div>

    <!-- Mobile overlay -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileOpen"
        class="fixed inset-0 top-[60px] z-[80] bg-white/95 backdrop-blur-xl"
      >
        <nav class="flex flex-col px-6 pt-6 gap-1">
          <NuxtLink
            v-for="(link, idx) in links"
            :key="link.to"
            :to="link.to"
            v-motion
            :initial="{ opacity: 0, x: -20 }"
            :enter="{ opacity: 1, x: 0 }"
            :delay="50 * idx"
            class="flex items-center gap-3 px-4 py-3.5 rounded-xl text-base font-semibold transition-all"
            :class="isActive(link.to)
              ? 'text-orange-600 bg-orange-50'
              : 'text-slate-600 hover:bg-slate-50'"
          >
            {{ link.label }}
            <Icon
              v-if="isActive(link.to)"
              name="material-symbols:check-small"
              size="18"
              class="ml-auto text-orange-500"
            />
          </NuxtLink>

          <!-- Divider -->
          <div class="h-px bg-slate-100 my-4" />

          <!-- Social links mobile -->
          <div class="flex gap-3 px-4">
            <NuxtLink
              to="https://www.linkedin.com/in/adama-niasse-82878b211"
              target="_blank"
              class="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:border-blue-300 transition-colors"
            >
              <Icon name="pajamas:linkedin" size="16" />
              LinkedIn
            </NuxtLink>
            <NuxtLink
              to="https://github.com/aniasse"
              target="_blank"
              class="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-400 transition-colors"
            >
              <Icon name="uil:github" size="18" />
              GitHub
            </NuxtLink>
          </div>

          <!-- Availability badge -->
          <div
            v-motion="{ initial: { opacity: 0, y: 10 }, enter: { opacity: 1, y: 0 }, delay: 200 }"
            class="mx-4 mt-6 flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 border border-emerald-200"
          >
            <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span class="text-sm font-medium text-emerald-700">Disponible pour de nouvelles opportunités</span>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<style scoped>
.nav-scrolled {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(226, 232, 240, 0.6);
}

/* Hamburger animation */
.hamburger-lines {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 18px;
}
.hamburger-lines span {
  display: block;
  height: 2px;
  width: 100%;
  background: #334155;
  border-radius: 2px;
  transition: all 0.3s ease;
  transform-origin: center;
}
.hamburger-lines.open span:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}
.hamburger-lines.open span:nth-child(2) {
  opacity: 0;
  transform: scaleX(0);
}
.hamburger-lines.open span:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

/* Mobile menu transitions */
.mobile-menu-enter-active {
  transition: all 0.3s ease;
}
.mobile-menu-leave-active {
  transition: all 0.2s ease;
}
.mobile-menu-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
