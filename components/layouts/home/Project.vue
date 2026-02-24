<script lang="ts" setup>
import { ref, onMounted } from 'vue'

interface Project {
  title: string
  description: string
  link: string
  github: string
  ownerLink: string
  owner: string
  repo: string
  img: string
  tags: string[]
  type: 'github' | 'npm'
}

const projects = ref<Project[]>([
  {
    title: '0-Shell (Golang)',
    description: 'Shell Unix complet implémenté en Go avec gestion des processus, signaux et commandes système (cd, ls, pwd, etc.). Architecture modulaire avec syscalls bas niveau pour une performance optimale.',
    link: 'https://github.com/aniasse/0-shell',
    github: 'https://github.com/aniasse/0-shell',
    ownerLink: 'https://github.com/aniasse',
    owner: 'aniasse',
    repo: '0-shell',
    img: 'ascii-art.png',
    tags: ['Golang', 'Syscalls', 'Concurrency', 'TTY', 'UNIX', 'CLI'],
    type: 'github'
  },
  {
    title: 'Forum Sécurisé',
    description: 'Plateforme de discussion sécurisée avec authentification OAuth (Google/GitHub), chiffrement des données et modération avancée. Backend en Golang avec API RESTful et frontend React.',
    link: 'https://github.com/aniasse/forum-security',
    github: 'https://github.com/aniasse/forum-security',
    ownerLink: 'https://github.com/aniasse',
    owner: 'aniasse',
    repo: 'forum-security',
    img: 'forum-security.png',
    tags: ['Golang', 'JS', 'SQLite', 'JWT', 'Docker', 'OAuth2'],
    type: 'github'
  },
  {
    title: 'Réseau Social',
    description: 'Application sociale complète avec système de followers, messagerie temps réel et notifications. Architecture microservices avec RabbitMQ et WebSocket pour une expérience fluide.',
    link: 'https://github.com/aniasse/social-network',
    github: 'https://github.com/aniasse/social-network',
    ownerLink: 'https://github.com/aniasse',
    owner: 'aniasse',
    repo: 'social-network',
    img: 'social.png',
    tags: ['Vue.js', 'Golang', 'WebSocket', 'Microservices', 'Redis'],
    type: 'github'
  },
  {
    title: 'FPS Multijoueur',
    description: 'Jeu de tir en réseau avec client Bevy Engine (Rust) et serveur dédié. Synchronisation réseau optimisée avec prédiction de mouvement et réconciliation.',
    link: 'https://github.com/aniasse/multiplayer-fps',
    github: 'https://github.com/aniasse/multiplayer-fps',
    ownerLink: 'https://github.com/aniasse',
    owner: 'aniasse',
    repo: 'multiplayer-fps',
    img: 'fps.png',
    tags: ['Rust', 'Bevy', 'Netcode', 'UDP', 'Lockstep', 'GLB'],
    type: 'github'
  },
  {
    title: 'Localhost Toolkit',
    description: 'Suite DevOps complète avec reverse proxy NGINX, gestion automatisée de certificats TLS et interface d\'administration. Déploiement Kubernetes avec Terraform.',
    link: 'https://github.com/aniasse/localhost',
    github: 'https://github.com/aniasse/localhost',
    ownerLink: 'https://github.com/aniasse',
    owner: 'aniasse',
    repo: 'localhost',
    img: 'localhost.png',
    tags: ['Rust', 'NGINX', 'TLS', 'Kubernetes', 'Terraform', 'Ansible'],
    type: 'github'
  }
])

const currentProject = ref(projects.value[0])

onMounted(() => {
  console.log(currentProject.value)
})
</script>

<template>
  <div class="mt-20 w-full flex flex-col items-center">
    <div class="content-wrapper">
      <p class="text-accent-700 font-bold text-sm">Mes projets marquants</p>
      <h2 class="text-4xl text-slate-700 font-bold">Projets</h2>
      <p class="text-base text-slate-700 mt-5">
        Découvrez-les !
      </p>
      <div class="mt-5">
        <NuxtLink
          to="https://github.com/aniasse"
          target="blank"
          class="text-accent-600 font-bold text-sm bg-accent-100 hover:bg-accent-200 px-5 py-3 rounded-3xl"
        >
          Voir tous les projets
          <Icon name="fluent:triangle-right-32-filled" size="10" class="ml-2" />
        </NuxtLink>
      </div>
    </div>

    <div class="flex justify-center background-grid border-t-[1px] mt-20 w-full">
      <div class="max-md:flex-col max-md:gap-10 content-wrapper mt-8 flex gap-20">
        <div class="flex flex-col gap-3 flex-1">
          <div
            v-for="(project, index) in projects"
            :key="project.title"
            v-motion
            :initial="{ opacity: 0, x: -100 }"
            :visibleOnce="{ opacity: 1, x: 0, scale: 1 }"
            :delay="100 * index"
            class="opacity-0 flex gap-5 border-[1px] w-fit bg-white p-5 rounded-2xl md:max-w-[350px] lg:max-w-[500px] cursor-pointer"
            :class="{ 'border-accent-600 text-accent-600': currentProject?.link === project.link }"
            @click="currentProject = project"
          >
            <Icon
              v-if="project.type === 'github'"
              name="uiw:github"
              size="50"
              class="min-w-[50px]"
            />
            <Icon
              v-if="project.type === 'npm'"
              name="carbon:logo-npm"
              size="50"
              class="min-w-[50px]"
            />
            <div>
              <NuxtLink :to="project.link" class="hover:underline text-sm font-bold">
                {{ project.title }}
              </NuxtLink>
              <p class="text-sm mt-2 text-slate-700">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex-auto max-w-[800px] lg:-mt-20 flex-2">
          <AtomVCodeMockup :project="currentProject" />
        </div>
      </div>
    </div>
  </div>
</template>
