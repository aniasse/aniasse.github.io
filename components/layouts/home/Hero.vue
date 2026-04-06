<template>
  <div class="content-wrapper container pt-20 pb-10">
    <div class="flex gap-12 items-start justify-between">

      <!-- Left: text content -->
      <div class="flex flex-col flex-1">
        <!-- status badge -->
        <div
          v-motion="{
            initial: { opacity: 0, y: -10 },
            enter: { opacity: 1, y: 0 },
          }"
          class="opacity-0 font-mono text-xs text-green-700 bg-green-50 border border-green-200 px-3 py-1 rounded-full w-fit mb-5 flex items-center gap-2"
        >
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse inline-block"></span>
          systems-engineer --status open-to-work
        </div>

        <!-- name -->
        <h1
          v-motion="{
            initial: { opacity: 0, x: -80 },
            enter: { opacity: 1, x: 0 },
            delay: 80,
          }"
          class="opacity-0 max-md:w-[55%] mb-4 block text-[2.5rem] font-[1000] leading-none md:mb-6 md:text-7xl text-slate-800"
        >
          I'm
          <strong style="color: #FFA500">Adama</strong>
          Niasse,
        </h1>

        <!-- subtitle -->
        <h2
          v-motion="{
            initial: { opacity: 0, x: -80 },
            enter: { opacity: 1, x: 0 },
            delay: 160,
          }"
          class="opacity-0 text-base text-slate-500 md:text-lg"
        >
          <span class="font-bold text-slate-700">Systems Engineer</span>
          &nbsp;·&nbsp; DevOps &nbsp;·&nbsp; Cybersecurity
          <span class="block mt-1 text-sm font-normal">
            Designing distributed, secure and high-performance systems.
          </span>
        </h2>

        <!-- CTA buttons -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -80 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="240"
          class="opacity-0 flex items-center mt-8 gap-4"
        >
          <NuxtLink to="/about">
            <button
              class="px-7 py-2.5 text-sm font-semibold text-white rounded-xl hover:scale-105 transition-transform"
              style="background-color: #FFA500"
            >
              About me
            </button>
          </NuxtLink>
          <NuxtLink to="/contact">
            <button class="px-7 py-2.5 text-sm font-semibold text-slate-700 border border-slate-300 rounded-xl hover:border-slate-500 hover:scale-105 transition-all">
              Contact
            </button>
          </NuxtLink>
        </div>

        <!-- tech stack -->
        <div
          v-motion
          :initial="{ opacity: 0, x: -80 }"
          :enter="{ opacity: 1, x: 0 }"
          :delay="320"
          class="opacity-0 mt-16 flex flex-col gap-2"
        >
          <p class="text-[10px] uppercase tracking-widest font-mono text-slate-400">tech stack</p>
          <div class="flex gap-4 items-center text-slate-400">
            <div title="Golang" class="hover:text-[#00ADD8] transition-colors cursor-default">
              <Icon name="file-icons:go" size="28" />
            </div>
            <div title="Rust" class="hover:text-[#DEA01B] transition-colors cursor-default">
              <Icon name="mdi:language-rust" size="24" />
            </div>
            <div title="JavaScript" class="hover:text-[#F7DF1E] transition-colors cursor-default">
              <Icon name="mdi:language-javascript" size="24" />
            </div>
            <div title="PostgreSQL / SQLite" class="hover:text-[#4479A1] transition-colors cursor-default">
              <Icon name="mdi:database" size="24" />
            </div>
            <div title="VueJS" class="hover:text-[#52b983] transition-colors cursor-default">
              <Icon name="ri:vuejs-fill" size="24" />
            </div>
            <div title="GraphQL" class="hover:text-[#E10098] transition-colors cursor-default">
              <Icon name="mdi:graphql" size="24" />
            </div>
            <div class="h-5 border-r border-slate-300"></div>
            <div title="Docker" class="hover:text-[#2496ED] transition-colors cursor-default">
              <Icon name="mdi:docker" size="24" />
            </div>
            <div title="Git" class="hover:text-[#d34d35] transition-colors cursor-default">
              <Icon name="cib:git" size="24" />
            </div>
          </div>
        </div>
      </div>

      <!-- Right: photo + terminal -->
      <div
        v-motion="{
          initial: { opacity: 0, x: 60 },
          enter: { opacity: 1, x: 0 },
          delay: 200,
        }"
        class="opacity-0 max-md:hidden flex flex-col gap-4 items-center flex-shrink-0"
      >
        <!-- photo -->
        <NuxtImg
          format="webp"
          src="/images/adama.png"
          alt="Adama Niasse"
          class="w-48 lg:w-60 rounded-2xl border-2 shadow-lg filter grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105 hover:rotate-1"
          style="border-color: #FFA500"
        />

        <!-- terminal block -->
        <div class="w-48 lg:w-60 bg-slate-900 rounded-xl p-4 font-mono text-xs shadow-xl border border-slate-700">
          <div class="flex items-center gap-1.5 mb-3 pb-2 border-b border-slate-700">
            <div class="w-2.5 h-2.5 rounded-full bg-red-400"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-amber-400"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-green-400"></div>
            <span class="ml-2 text-slate-500 text-[10px]">adama ~ zsh</span>
          </div>
          <p><span class="text-slate-500">$</span> <span class="text-green-400">whoami</span></p>
          <p class="text-slate-300 pl-2">Adama Niasse</p>
          <p class="mt-2"><span class="text-slate-500">$</span> <span class="text-green-400">cat focus.txt</span></p>
          <p class="text-slate-300 pl-2">Distributed Systems</p>
          <p class="text-slate-300 pl-2">High-Performance APIs</p>
          <p class="text-slate-300 pl-2">System Security</p>
          <p class="mt-2"><span class="text-slate-500">$</span> <span class="text-green-400">uptime</span></p>
          <p class="text-slate-300 pl-2">3y coding · 6+ systems</p>
          <p class="mt-2"><span class="text-slate-500">$</span> <span class="text-green-400">echo $STATUS</span></p>
          <p class="text-green-300 pl-2">✓ open to opportunities</p>
          <span class="text-green-400 animate-pulse">▋</span>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
</style>
