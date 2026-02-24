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
    title: 'Crud-master',
    description: 'Plateforme e-commerce microservices avec API Gateway, service de billing, service d\'inventaire et système de commandes. Communication inter-services via RabbitMQ avec persistance PostgreSQL.',
    link: 'https://github.com/aniasse/crud-master',
    github: 'https://github.com/aniasse/crud-master',
    ownerLink: 'https://github.com/aniasse',
    owner: 'aniasse',
    repo: 'crud-master',
    img: 'graphql.png',
    tags: ['Go', 'RabbitMQ', 'PostgreSQL', 'Microservices', 'API Gateway', 'Docker'],
    type: 'github'
  },
  {
    title: 'Forum Sécurisé',
    description: 'Plateforme de discussion sécurisée avec authentification OAuth (Google/GitHub), chiffrement des données et modération avancée. Backend en Golang avec API RESTful et frontend vanilla JS.',
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
    description: 'Jeu de tir en réseau avec client Bevy Engine (Rust) et serveur dédié. Synchronisation réseau optimisée avec prédiction de mouvement et réconciliation côté client.',
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
  },
  {
    title: 'Groupie Tracker',
    description: 'Application web de visualisation de données musicales avec API REST en Go. Agrégation et affichage interactif d\'artistes, concerts et locations avec filtres dynamiques.',
    link: 'https://github.com/aniasse/groupie-tracker',
    github: 'https://github.com/aniasse/groupie-tracker',
    ownerLink: 'https://github.com/aniasse',
    owner: 'aniasse',
    repo: 'groupie-tracker',
    img: 'groupie-tracker.png',
    tags: ['Go', 'REST API', 'HTML/CSS', 'JSON', 'Data viz'],
    type: 'github'
  }
])

const currentProject = ref(projects.value[0])
</script>

<template>
  <div class="mt-20 w-full flex flex-col items-center">
    <div class="content-wrapper">
      <p class="font-mono text-xs uppercase tracking-widest text-slate-400">Portfolio</p>
      <h2 class="text-3xl text-slate-700 font-bold mt-1">Projets système</h2>
      <p class="text-sm text-slate-500 mt-3">
        Du shell Unix aux architectures microservices — des systèmes qui tiennent à l'échelle.
      </p>
      <div class="mt-5">
        <NuxtLink
          to="https://github.com/aniasse"
          target="_blank"
          class="inline-flex items-center gap-2 text-sm font-semibold border border-slate-300 hover:border-slate-500 px-4 py-2 rounded-xl transition-colors"
        >
          <Icon name="uil:github" size="16" />
          Voir tous les projets sur GitHub
        </NuxtLink>
      </div>
    </div>

    <div class="flex justify-center background-grid border-t-[1px] mt-10 w-full">
      <div class="max-md:flex-col max-md:gap-10 content-wrapper mt-8 flex gap-16">
        <!-- project list -->
        <div class="flex flex-col gap-2.5 flex-1">
          <div
            v-for="(project, index) in projects"
            :key="project.title"
            v-motion
            :initial="{ opacity: 0, x: -60 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :delay="60 * index"
            class="opacity-0 flex gap-4 border bg-white p-4 rounded-xl md:max-w-[380px] lg:max-w-[480px] cursor-pointer hover:shadow-sm transition-all"
            :class="currentProject?.link === project.link
              ? 'border-orange-400 shadow-sm'
              : 'border-slate-200 hover:border-slate-300'"
            @click="currentProject = project"
          >
            <div
              class="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
              :class="currentProject?.link === project.link ? 'bg-orange-50' : 'bg-slate-100'"
            >
              <Icon
                name="uiw:github"
                size="20"
                :class="currentProject?.link === project.link ? 'text-orange-500' : 'text-slate-500'"
              />
            </div>
            <div class="min-w-0">
              <p
                class="text-sm font-bold truncate"
                :class="currentProject?.link === project.link ? 'text-orange-600' : 'text-slate-700'"
              >
                {{ project.title }}
              </p>
              <p class="text-xs mt-1 text-slate-500 line-clamp-2 leading-relaxed">
                {{ project.description }}
              </p>
            </div>
          </div>
        </div>

        <!-- mockup preview -->
        <div class="flex-auto max-w-[760px] lg:-mt-16">
          <AtomVCodeMockup :project="currentProject" />
        </div>
      </div>
    </div>
  </div>
</template>
