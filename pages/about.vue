<script setup lang="ts">
definePageMeta({ layout: 'page' })

useHead({
  title: 'About — Adama Niasse',
  meta: [{ name: 'description', content: 'Adama Niasse — Software Engineer, Go/Rust/Cloud-DevOps/Cybersecurity basé à Dakar, Sénégal.' }],
})

const skills = [
  {
    category: 'Langages',
    icon: 'material-symbols:code',
    color: 'bg-blue-100 text-blue-700',
    items: ['Go', 'Rust', 'JavaScript', 'TypeScript', 'Python', 'C/C++', 'Java', 'Bash', 'GraphQL'],
  },
  {
    category: 'Frontend',
    icon: 'material-symbols:web',
    color: 'bg-green-100 text-green-700',
    items: ['Vue.js', 'Nuxt.js', 'React', 'React Native', 'Tailwind CSS', 'Vuetify', 'Bootstrap'],
  },
  {
    category: 'Backend & Base de données',
    icon: 'material-symbols:storage',
    color: 'bg-purple-100 text-purple-700',
    items: ['REST API', 'GraphQL', 'PostgreSQL', 'MySQL', 'SQLite', 'Supabase', 'Firebase', 'Redis', 'WebSocket'],
  },
  {
    category: 'DevOps & Cloud',
    icon: 'material-symbols:cloud',
    color: 'bg-amber-100 text-amber-700',
    items: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'Jenkins', 'NGINX', 'CI/CD', 'AWS', 'Vercel'],
  },
  {
    category: 'Sécurité',
    icon: 'material-symbols:security',
    color: 'bg-red-100 text-red-700',
    items: ['OAuth2 / JWT', 'TLS/SSL', 'OWASP Top 10', 'Pentest', 'Cryptographie'],
  },
  {
    category: 'Réseau & Systèmes',
    icon: 'material-symbols:router',
    color: 'bg-cyan-100 text-cyan-700',
    items: ['Cisco', 'Arduino', 'Linux / Unix', 'Syscalls', 'TCP/UDP', 'HTTP'],
  },
]

const experiences = [
  {
    period: '2025 — 2026',
    title: 'Développeur Freelance',
    place: 'Full Stack · Dakar & Remote',
    description: 'Conception et développement d\'applications pour des clients : e-commerce high-tech (Souhibou Télécom), apps communautaires web + mobile (Jamah Pikine, FSP Mobile), e-commerce mode (Level Officiel) et sites vitrines d\'agence (Vortex). Stack : Go, Vue/Nuxt, React Native, Next.js, Capacitor, Supabase, CinetPay.',
    tags: ['Go', 'Vue/Nuxt', 'React Native', 'Supabase', 'Docker', 'Stripe'],
    icon: 'material-symbols:rocket-launch',
    color: 'bg-orange-500',
  },
  {
    period: 'Mars 2023 — Avril 2026',
    title: 'Full Stack Developer',
    place: '01Talent Sénégal · Dakar',
    description: 'Réalisation de 70+ projets en Go, Rust, JavaScript et TypeScript dans un environnement peer-to-peer : du shell Unix aux architectures cloud distribuées, jeux réseau temps réel, outils CLI et systèmes de sécurité.',
    tags: ['Go', 'Rust', 'JavaScript', 'TypeScript', 'DevOps', 'Cloud'],
    icon: 'material-symbols:code',
    color: 'bg-indigo-600',
  },
  {
    period: 'Oct 2022 — Jan 2023',
    title: 'Assistant Responsable Technique',
    place: 'Zone01 Dakar',
    description: 'Support technique et accompagnement des apprenants dans le programme peer-to-peer. Gestion de l\'infrastructure et assistance à la résolution de problèmes techniques.',
    tags: ['Support technique', 'Peer Learning', 'Infrastructure', 'Mentorat'],
    icon: 'material-symbols:engineering',
    color: 'bg-blue-600',
  },
]

const education = [
  {
    period: '2022 — 2025',
    title: 'Full Stack Developer — Spécialisation Cloud & DevOps',
    place: 'Zone01 Dakar',
    description: 'Programme intensif peer-to-peer learning avec 70+ projets réalisés. Spécialisation Cloud & DevOps : Terraform, Docker, Kubernetes, CI/CD, AWS.',
    icon: 'material-symbols:school',
    color: 'bg-indigo-600',
  },
  {
    period: 'Jan 2022 — Jan 2023',
    title: 'Licence professionnelle',
    place: 'ESMT Dakar — École Supérieure Multinationale des Télécommunications',
    description: 'Administration et Sécurité des Réseaux.',
    icon: 'material-symbols:school',
    color: 'bg-purple-600',
  },
  {
    period: '2020 — 2022',
    title: 'Ingénierie des télécommunications',
    place: 'ESTM — École Supérieure de Technologie et de Management',
    description: 'Formation en ingénierie des télécommunications et réseaux.',
    icon: 'material-symbols:school',
    color: 'bg-cyan-600',
  },
  {
    period: '',
    title: 'Baccalauréat scientifique',
    place: 'Lycée Thierno Saidou Nourou Tall',
    description: '',
    icon: 'material-symbols:school',
    color: 'bg-slate-500',
  },
]

const certifications = [
  {
    name: 'CCNA 1 — Introduction to Networks',
    issuer: 'Cisco',
    icon: 'cib:cisco',
    color: 'bg-cyan-100 text-cyan-700',
  },
  {
    name: 'CCNA 2 — Switching, Routing & Wireless',
    issuer: 'Cisco',
    icon: 'cib:cisco',
    color: 'bg-cyan-100 text-cyan-700',
  },
  {
    name: 'CCNA 3 — Enterprise Networking & Security',
    issuer: 'Cisco',
    icon: 'cib:cisco',
    color: 'bg-cyan-100 text-cyan-700',
  },
  {
    name: 'Oracle Database@AWS Certified Architect Professional',
    issuer: 'Oracle / AWS',
    icon: 'simple-icons:oracle',
    color: 'bg-red-100 text-red-700',
  },
  {
    name: 'OCI 2025 Certified Generative AI Professional',
    issuer: 'Oracle Cloud Infrastructure',
    icon: 'simple-icons:oracle',
    color: 'bg-red-100 text-red-700',
  },
]

const tools = [
  { name: 'Git', icon: 'cib:git' },
  { name: 'GitHub', icon: 'uil:github' },
  { name: 'Docker', icon: 'mdi:docker' },
  { name: 'VS Code', icon: 'mdi:microsoft-visual-studio-code' },
  { name: 'Canva', icon: 'cib:canva' },
  { name: 'Figma', icon: 'ph:figma-logo' },
]
</script>

<template>
  <div class="flex flex-col w-full items-center pb-24 bg-white">

    <!-- Hero -->
    <section class="background-grid w-full flex justify-center pt-32 pb-16 border-b border-slate-100">
      <div class="content-wrapper w-full flex flex-col md:flex-row items-start gap-12">
        <!-- Text -->
        <div
          v-motion="{ initial: { opacity: 0, x: -60 }, enter: { opacity: 1, x: 0 } }"
          class="flex-1"
        >
          <div class="font-mono text-xs text-slate-400 uppercase tracking-widest mb-4">aniasse / about</div>
          <h1 class="text-4xl md:text-5xl font-[900] text-slate-800 mb-6 leading-tight">
            Adama <span class="text-orange-500">Niasse</span>
          </h1>
          <p class="text-slate-600 text-base leading-relaxed mb-4">
            <strong>Software Engineer</strong>, basé à Dakar. Spécialisé en <strong>Go</strong> et <strong>Rust</strong> pour les systèmes performants,
            et en <strong>Vue.js / Nuxt</strong> pour les interfaces modernes.
          </p>
          <p class="text-slate-600 text-base leading-relaxed mb-4">
            Issu d'une formation en <strong>ingénierie télécom</strong> (ESTM) et titulaire d'une <strong>licence pro en administration et sécurité des réseaux</strong> (ESMT Dakar),
            j'ai ensuite intégré <strong>01Talent Sénégal</strong> où j'ai développé pendant 3 ans des systèmes distribués, des architectures cloud et des applications full stack.
            Certifié <strong>Cisco CCNA</strong>, <strong>Oracle Database@AWS Architect</strong> et <strong>OCI Generative AI Professional</strong>.
          </p>
          <p class="text-slate-500 text-sm leading-relaxed">
            Ma philosophie : écrire du code propre, sécurisé et qui tient à l'échelle.
          </p>

          <!-- CTAs -->
          <div class="flex flex-wrap gap-3 mt-8">
            <NuxtLink
              to="https://www.linkedin.com/in/adama-niasse-82878b211"
              target="_blank"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white hover:scale-105 transition-transform"
              style="background-color: #FFA500"
            >
              <Icon name="pajamas:linkedin" size="16" />
              LinkedIn
            </NuxtLink>
            <NuxtLink
              to="https://github.com/aniasse"
              target="_blank"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-slate-800 text-white hover:scale-105 transition-transform"
            >
              <Icon name="uil:github" size="18" />
              GitHub
            </NuxtLink>
            <NuxtLink
              to="mailto:adamaniasse153@gmail.com"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-600 hover:border-orange-300 transition-colors"
            >
              <Icon name="material-symbols:mail-outline" size="16" />
              Email
            </NuxtLink>
            <NuxtLink
              to="/cv"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-slate-200 text-slate-600 hover:border-orange-300 transition-colors"
            >
              <Icon name="material-symbols:download" size="16" />
              CV
            </NuxtLink>
          </div>
        </div>

        <!-- Photo -->
        <div
          v-motion="{ initial: { opacity: 0, x: 60 }, enter: { opacity: 1, x: 0 }, delay: 150 }"
          class="flex flex-col items-center gap-4"
        >
          <NuxtImg
            format="webp"
            src="/images/adama.png"
            alt="Adama Niasse"
            class="w-56 h-56 md:w-64 md:h-64 object-cover rounded-2xl shadow-lg border-2"
            style="border-color: #FFA500"
          />
          <!-- Quick info card -->
          <div class="w-56 md:w-64 bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs">
            <div class="flex items-center gap-2 mb-2">
              <Icon name="material-symbols:location-on-outline" size="14" class="text-slate-400" />
              <span class="text-slate-600 font-medium">Dakar, Sénégal</span>
            </div>
            <div class="flex items-center gap-2 mb-2">
              <Icon name="material-symbols:work-outline" size="14" class="text-slate-400" />
              <span class="text-slate-600 font-medium">01Talent Afrique</span>
            </div>
            <div class="flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span class="text-emerald-600 font-medium">Disponible</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="w-full flex justify-center mt-16">
      <div class="content-wrapper w-full">
        <div class="mb-8">
          <p class="font-mono text-xs uppercase tracking-widest text-slate-400">Compétences</p>
          <h2 class="text-2xl font-bold text-slate-700 mt-1">Stack technique</h2>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div
            v-for="(skill, index) in skills"
            :key="skill.category"
            v-motion
            :initial="{ opacity: 0, y: 30 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :delay="80 * index"
            class="border border-slate-200 rounded-2xl p-5 bg-white hover:border-orange-300 hover:shadow-md transition-all"
          >
            <div class="flex items-center gap-3 mb-4">
              <div :class="[skill.color, 'w-9 h-9 rounded-xl flex items-center justify-center']">
                <Icon :name="skill.icon" size="20" />
              </div>
              <p class="font-bold text-slate-700 text-sm">{{ skill.category }}</p>
            </div>
            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="item in skill.items"
                :key="item"
                class="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium"
              >
                {{ item }}
              </span>
            </div>
          </div>
        </div>

        <!-- Tools bar -->
        <div
          v-motion="{ initial: { opacity: 0, y: 20 }, visibleOnce: { opacity: 1, y: 0 }, delay: 400 }"
          class="mt-6 border border-slate-100 rounded-2xl bg-slate-50 px-6 py-4 flex flex-wrap items-center gap-6"
        >
          <p class="text-xs text-slate-400 font-mono mr-2 flex-shrink-0">Outils ·</p>
          <div
            v-for="tool in tools"
            :key="tool.name"
            class="flex items-center gap-1.5"
          >
            <Icon :name="tool.icon" size="14" class="text-slate-400" />
            <span class="text-xs text-slate-500 font-medium">{{ tool.name }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience -->
    <section class="w-full flex justify-center mt-16">
      <div class="content-wrapper w-full">
        <div class="mb-8">
          <p class="font-mono text-xs uppercase tracking-widest text-slate-400">Parcours professionnel</p>
          <h2 class="text-2xl font-bold text-slate-700 mt-1">Expérience</h2>
        </div>

        <div class="relative">
          <div class="absolute left-[19px] top-2 bottom-2 w-px bg-slate-200" />
          <div class="flex flex-col gap-8">
            <div
              v-for="(exp, idx) in experiences"
              :key="exp.title"
              v-motion
              :initial="{ opacity: 0, x: -24 }"
              :visibleOnce="{ opacity: 1, x: 0 }"
              :delay="80 * idx"
              class="relative flex gap-5"
            >
              <div class="flex-shrink-0 relative z-10">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center" :class="exp.color">
                  <Icon :name="exp.icon" size="18" class="text-white" />
                </div>
              </div>
              <div class="flex-1 border border-slate-200 rounded-2xl p-5 bg-white hover:border-orange-300 hover:shadow-md transition-all">
                <p class="text-[11px] font-mono text-slate-400 mb-1">{{ exp.period }}</p>
                <h3 class="text-base font-bold text-slate-800">{{ exp.title }}</h3>
                <p class="text-xs font-semibold text-orange-500 mt-0.5">{{ exp.place }}</p>
                <p class="text-sm text-slate-500 mt-2 leading-relaxed">{{ exp.description }}</p>
                <div class="flex flex-wrap gap-1.5 mt-3">
                  <span
                    v-for="tag in exp.tags"
                    :key="tag"
                    class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 border border-slate-200"
                  >
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Education -->
    <section class="w-full flex justify-center mt-16">
      <div class="content-wrapper w-full">
        <div class="mb-8">
          <p class="font-mono text-xs uppercase tracking-widest text-slate-400">Formation</p>
          <h2 class="text-2xl font-bold text-slate-700 mt-1">Éducation</h2>
        </div>

        <div class="relative">
          <div class="absolute left-[19px] top-2 bottom-2 w-px bg-slate-200" />
          <div class="flex flex-col gap-6">
            <div
              v-for="(edu, idx) in education"
              :key="edu.title + edu.place"
              v-motion
              :initial="{ opacity: 0, x: -24 }"
              :visibleOnce="{ opacity: 1, x: 0 }"
              :delay="80 * idx"
              class="relative flex gap-5"
            >
              <div class="flex-shrink-0 relative z-10">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center" :class="edu.color">
                  <Icon :name="edu.icon" size="18" class="text-white" />
                </div>
              </div>
              <div class="flex-1 border border-slate-200 rounded-2xl p-5 bg-white hover:border-orange-300 hover:shadow-md transition-all">
                <p v-if="edu.period" class="text-[11px] font-mono text-slate-400 mb-1">{{ edu.period }}</p>
                <h3 class="text-base font-bold text-slate-800">{{ edu.title }}</h3>
                <p class="text-xs font-semibold text-orange-500 mt-0.5">{{ edu.place }}</p>
                <p v-if="edu.description" class="text-sm text-slate-500 mt-2 leading-relaxed">{{ edu.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Certifications -->
    <section class="w-full flex justify-center mt-16">
      <div class="content-wrapper w-full">
        <div class="mb-8">
          <p class="font-mono text-xs uppercase tracking-widest text-slate-400">Certifications</p>
          <h2 class="text-2xl font-bold text-slate-700 mt-1">Licences & Certifications</h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div
            v-for="(cert, idx) in certifications"
            :key="cert.name"
            v-motion
            :initial="{ opacity: 0, y: 24 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :delay="80 * idx"
            class="border border-slate-200 rounded-2xl p-5 bg-white hover:border-orange-300 hover:shadow-md transition-all flex items-start gap-4"
          >
            <div :class="[cert.color, 'w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0']">
              <Icon :name="cert.icon" size="20" />
            </div>
            <div class="flex-1 min-w-0">
              <h3 class="text-sm font-bold text-slate-800 leading-tight">{{ cert.name }}</h3>
              <p class="text-xs text-slate-400 mt-1">{{ cert.issuer }}</p>
            </div>
            <Icon name="material-symbols:verified" size="18" class="text-orange-400 flex-shrink-0 mt-0.5" />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="w-full flex justify-center mt-16">
      <div class="content-wrapper w-full">
        <div
          v-motion="{ initial: { opacity: 0, y: 24 }, visibleOnce: { opacity: 1, y: 0 } }"
          class="rounded-2xl bg-slate-950 border border-slate-800 p-10 text-center"
        >
          <h3 class="text-xl font-bold text-white mb-2">Envie de collaborer ?</h3>
          <p class="text-sm text-slate-400 mb-6 max-w-md mx-auto">
            Je suis disponible pour des missions freelance, postes CDI ou collaborations open source.
          </p>
          <div class="flex items-center justify-center gap-3 flex-wrap">
            <NuxtLink
              to="/contact"
              class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white hover:scale-105 transition-transform"
              style="background-color: #FFA500"
            >
              <Icon name="material-symbols:mail-outline" size="16" />
              Me contacter
            </NuxtLink>
            <NuxtLink
              to="/projects"
              class="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold text-white border border-slate-700 hover:border-slate-500 transition-colors"
            >
              Voir mes projets
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
