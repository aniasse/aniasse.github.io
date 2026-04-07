<template>
  <div class="flex flex-col min-h-screen">
    <LayoutsPageNavbar />
    <main class="flex-1">
      <slot />
    </main>
    <LayoutsPageFooter />
  </div>
</template>
