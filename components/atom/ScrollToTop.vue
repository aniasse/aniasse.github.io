<script setup lang="ts">
const visible = ref(false)

onMounted(() => {
  window.addEventListener('scroll', onScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

function onScroll() {
  visible.value = window.scrollY > 400
}

function scrollTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <Transition name="scroll-btn">
    <button
      v-if="visible"
      aria-label="Remonter en haut"
      class="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-xl bg-slate-800 hover:bg-orange-500 text-white shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105"
      @click="scrollTop"
    >
      <Icon name="material-symbols:keyboard-arrow-up" size="20" />
    </button>
  </Transition>
</template>

<style scoped>
.scroll-btn-enter-active {
  transition: all 0.25s ease;
}
.scroll-btn-leave-active {
  transition: all 0.15s ease;
}
.scroll-btn-enter-from,
.scroll-btn-leave-to {
  opacity: 0;
  transform: translateY(12px) scale(0.9);
}
</style>
