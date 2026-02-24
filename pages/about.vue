<script setup>
definePageMeta({ layout: 'page' })

useHead({
  title: 'About - Adama Niasse',
  meta: [{ name: 'description', content: 'About Adama Niasse - Full Stack Developer, DevOps & Cybersecurity' }],
})

const skills = [
  {
    category: 'Languages',
    icon: 'material-symbols:code',
    color: 'bg-blue-100 text-blue-700',
    items: ['Go', 'Rust', 'JavaScript', 'TypeScript', 'Python', 'C/C++'],
  },
  {
    category: 'Frontend',
    icon: 'material-symbols:web',
    color: 'bg-green-100 text-green-700',
    items: ['Vue.js', 'Nuxt.js', 'React', 'Tailwind CSS', 'HTML/CSS'],
  },
  {
    category: 'Backend & DB',
    icon: 'material-symbols:storage',
    color: 'bg-purple-100 text-purple-700',
    items: ['REST API', 'GraphQL', 'PostgreSQL', 'SQLite', 'Redis', 'WebSocket'],
  },
  {
    category: 'DevOps',
    icon: 'material-symbols:cloud',
    color: 'bg-amber-100 text-amber-700',
    items: ['Docker', 'Kubernetes', 'NGINX', 'Terraform', 'Ansible', 'CI/CD'],
  },
  {
    category: 'Sécurité',
    icon: 'material-symbols:security',
    color: 'bg-red-100 text-red-700',
    items: ['OAuth2 / JWT', 'TLS/SSL', 'OWASP', 'Pentest', 'Cryptographie'],
  },
]

const experiences = [
  {
    year: '2024 - Présent',
    title: 'Développeur Full Stack',
    place: 'Zone01 Dakar',
    description: 'Développement de projets système, réseau et web en Go, Rust et JavaScript. Focus sur la performance, la sécurité et les architectures scalables.',
  },
  {
    year: '2023 - 2024',
    title: 'Formation Développeur',
    place: 'Zone01 Dakar',
    description: 'Apprentissage par la pratique : algorithmes, systèmes Unix, développement web full stack, bases de données, sécurité informatique.',
  },
]
</script>

<template>
  <div class="flex flex-col w-full items-center pb-20 bg-white">
    <!-- Hero about -->
    <section class="background-grid w-full flex justify-center pt-32 pb-16">
      <div class="content-wrapper w-full flex flex-col md:flex-row items-center gap-12">
        <div
          v-motion="{
            initial: { opacity: 0, x: -60 },
            enter: { opacity: 1, x: 0 },
          }"
          class="opacity-0 flex-1"
        >
          <p class="text-accent-600 font-bold text-sm mb-2">À propos de moi</p>
          <h1 class="text-4xl md:text-5xl font-[900] text-slate-800 mb-6 leading-tight">
            Adama <span style="color: #FFA500">Niasse</span>
          </h1>
          <p class="text-slate-600 text-base leading-relaxed mb-4">
            Développeur Full Stack passionné, spécialisé en <strong>Golang</strong> et <strong>Rust</strong> pour les systèmes performants, ainsi qu'en <strong>Vue.js / Nuxt</strong> pour les interfaces modernes.
          </p>
          <p class="text-slate-600 text-base leading-relaxed mb-4">
            Diplômé de <strong>Zone01 Dakar</strong>, je construis des systèmes sécurisés et scalables : du shell Unix bas niveau aux applications cloud, en passant par les jeux réseau en temps réel.
          </p>
          <p class="text-slate-600 text-base leading-relaxed">
            Ma philosophie : écrire du code propre, sécurisé et qui tient à l'échelle.
          </p>
          <div class="flex gap-4 mt-8">
            <NuxtLink
              to="https://www.linkedin.com/in/adama-niasse-82878b211"
              target="_blank"
              class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
              style="background-color: #FFA500"
            >
              <Icon name="pajamas:linkedin" size="18" />
              LinkedIn
            </NuxtLink>
            <NuxtLink
              to="https://github.com/aniasse"
              target="_blank"
              class="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 text-white transition-all hover:scale-105"
            >
              <Icon name="uil:github" size="18" />
              GitHub
            </NuxtLink>
          </div>
        </div>
        <div
          v-motion="{
            initial: { opacity: 0, x: 60 },
            enter: { opacity: 1, x: 0 },
            delay: 150,
          }"
          class="opacity-0"
        >
          <NuxtImg
            format="webp"
            src="/images/adama.png"
            alt="Adama Niasse"
            class="w-64 h-64 object-cover rounded-2xl shadow-lg border-2"
            style="border-color: #FFA500"
          />
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="w-full flex justify-center mt-16">
      <div class="content-wrapper w-full">
        <p class="text-accent-700 font-bold text-sm">Compétences</p>
        <h2 class="text-3xl font-bold text-slate-700 mt-1 mb-8">Stack technique</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="(skill, index) in skills"
            :key="skill.category"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :delay="100 * index"
            class="opacity-0 border-[1px] rounded-2xl p-5 bg-white hover:shadow-md transition-shadow"
          >
            <div class="flex items-center gap-3 mb-4">
              <div :class="[skill.color, 'w-9 h-9 rounded-xl flex items-center justify-center']">
                <Icon :name="skill.icon" size="20" />
              </div>
              <p class="font-bold text-slate-700 text-sm">{{ skill.category }}</p>
            </div>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="item in skill.items"
                :key="item"
                class="text-xs px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="w-full flex justify-center mt-16">
      <div class="content-wrapper w-full">
        <p class="text-accent-700 font-bold text-sm">Parcours</p>
        <h2 class="text-3xl font-bold text-slate-700 mt-1 mb-8">Expérience</h2>
        <div class="flex flex-col gap-6">
          <div
            v-for="(exp, index) in experiences"
            :key="exp.year"
            v-motion
            :initial="{ opacity: 0, x: -40 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :delay="100 * index"
            class="opacity-0 flex gap-6 border-[1px] rounded-2xl p-6 bg-white hover:shadow-md transition-shadow"
          >
            <div class="min-w-[120px]">
              <span class="text-xs font-bold text-accent-600 bg-accent-100 px-3 py-1 rounded-full">
                {{ exp.year }}
              </span>
            </div>
            <div>
              <h3 class="font-bold text-slate-800 text-base">{{ exp.title }}</h3>
              <p class="text-sm text-slate-500 mt-0.5">{{ exp.place }}</p>
              <p class="text-sm text-slate-600 mt-2 leading-relaxed">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
