<script setup lang="ts">
definePageMeta({ layout: 'page' })

useHead({
  title: 'Contact — Adama Niasse',
  meta: [{ name: 'description', content: 'Contactez Adama Niasse — Software Engineer, Go/Rust/Cloud-DevOps' }],
})

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
})

const sending = ref(false)
const sent = ref(false)
const error = ref('')

async function handleSubmit() {
  error.value = ''

  if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
    error.value = 'Veuillez remplir tous les champs obligatoires.'
    return
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    error.value = 'Adresse email invalide.'
    return
  }

  sending.value = true

  // Build mailto link as fallback (no backend needed)
  const subject = encodeURIComponent(form.subject || `Contact depuis le portfolio — ${form.name}`)
  const body = encodeURIComponent(
    `Nom: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
  )
  window.open(`mailto:adamaniasse153@gmail.com?subject=${subject}&body=${body}`, '_blank')

  // Simulate sent state
  await new Promise(r => setTimeout(r, 500))
  sending.value = false
  sent.value = true
  form.name = ''
  form.email = ''
  form.subject = ''
  form.message = ''
}

const contacts = [
  {
    label: 'Email',
    value: 'adamaniasse153@gmail.com',
    href: 'mailto:adamaniasse153@gmail.com',
    icon: 'material-symbols:mail-outline',
    color: 'bg-orange-100 text-orange-700',
  },
  {
    label: 'LinkedIn',
    value: 'adama-niasse',
    href: 'https://www.linkedin.com/in/adama-niasse-82878b211',
    icon: 'pajamas:linkedin',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    label: 'GitHub',
    value: 'github.com/aniasse',
    href: 'https://github.com/aniasse',
    icon: 'uil:github',
    color: 'bg-slate-100 text-slate-700',
  },
  {
    label: 'Téléphone',
    value: '+221 77 324 86 63',
    href: 'tel:+221773248663',
    icon: 'material-symbols:phone-in-talk',
    color: 'bg-green-100 text-green-700',
  },
  {
    label: 'Discord',
    value: 'aniasse',
    href: 'https://discord.gg/aniasse',
    icon: 'ic:baseline-discord',
    color: 'bg-indigo-100 text-indigo-700',
  },
]
</script>

<template>
  <div class="flex flex-col w-full items-center pb-24 bg-white">

    <!-- Hero -->
    <section class="background-grid w-full flex justify-center pt-32 pb-16 border-b border-slate-100">
      <div class="content-wrapper w-full">
        <div
          v-motion="{ initial: { opacity: 0, y: -16 }, enter: { opacity: 1, y: 0 } }"
          class="opacity-0 font-mono text-xs text-slate-400 uppercase tracking-widest mb-4"
        >
          aniasse / contact
        </div>
        <h1
          v-motion="{ initial: { opacity: 0, x: -60 }, enter: { opacity: 1, x: 0 }, delay: 80 }"
          class="opacity-0 text-4xl md:text-5xl font-[900] text-slate-800 mb-4 leading-tight"
        >
          Travaillons <span class="text-orange-500">ensemble</span>
        </h1>
        <p
          v-motion="{ initial: { opacity: 0, x: -60 }, enter: { opacity: 1, x: 0 }, delay: 160 }"
          class="opacity-0 text-slate-500 text-base max-w-lg leading-relaxed"
        >
          Disponible pour des missions freelance, des collaborations tech
          ou simplement discuter systèmes distribués autour d'un café.
        </p>
      </div>
    </section>

    <!-- Main content -->
    <section class="w-full flex justify-center mt-12">
      <div class="content-wrapper w-full grid grid-cols-1 lg:grid-cols-5 gap-10">

        <!-- Left: Form -->
        <div class="lg:col-span-3">
          <div
            v-motion="{ initial: { opacity: 0, y: 24 }, visibleOnce: { opacity: 1, y: 0 } }"
            class="opacity-0"
          >
            <h2 class="text-lg font-bold text-slate-800 mb-6">Envoyer un message</h2>

            <!-- Success state -->
            <div
              v-if="sent"
              class="flex flex-col items-center justify-center py-16 px-6 border border-emerald-200 rounded-2xl bg-emerald-50"
            >
              <div class="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center mb-4">
                <Icon name="material-symbols:check-circle" size="32" class="text-emerald-500" />
              </div>
              <p class="text-lg font-bold text-slate-800 mb-1">Message envoyé !</p>
              <p class="text-sm text-slate-500 text-center max-w-sm">
                Votre client email s'est ouvert avec le message pré-rempli. Je vous répondrai rapidement.
              </p>
              <button
                class="mt-6 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors"
                @click="sent = false"
              >
                Envoyer un autre message
              </button>
            </div>

            <!-- Form -->
            <form v-else class="flex flex-col gap-5" @submit.prevent="handleSubmit">
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <!-- Name -->
                <div>
                  <label class="block text-xs font-semibold text-slate-500 mb-1.5">
                    Nom <span class="text-red-400">*</span>
                  </label>
                  <input
                    v-model="form.name"
                    type="text"
                    placeholder="Votre nom"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                  />
                </div>
                <!-- Email -->
                <div>
                  <label class="block text-xs font-semibold text-slate-500 mb-1.5">
                    Email <span class="text-red-400">*</span>
                  </label>
                  <input
                    v-model="form.email"
                    type="email"
                    placeholder="votre@email.com"
                    class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                  />
                </div>
              </div>

              <!-- Subject -->
              <div>
                <label class="block text-xs font-semibold text-slate-500 mb-1.5">Sujet</label>
                <input
                  v-model="form.subject"
                  type="text"
                  placeholder="De quoi souhaitez-vous discuter ?"
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all"
                />
              </div>

              <!-- Message -->
              <div>
                <label class="block text-xs font-semibold text-slate-500 mb-1.5">
                  Message <span class="text-red-400">*</span>
                </label>
                <textarea
                  v-model="form.message"
                  rows="5"
                  placeholder="Décrivez votre projet ou votre idée..."
                  class="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm text-slate-800 placeholder:text-slate-300 focus:border-orange-400 focus:ring-2 focus:ring-orange-100 outline-none transition-all resize-none"
                />
              </div>

              <!-- Error -->
              <p v-if="error" class="text-sm text-red-500 flex items-center gap-1.5">
                <Icon name="material-symbols:error-outline" size="16" />
                {{ error }}
              </p>

              <!-- Submit -->
              <button
                type="submit"
                :disabled="sending"
                class="self-start inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-semibold bg-slate-800 text-white hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              >
                <Icon v-if="sending" name="svg-spinners:ring-resize" size="16" />
                <Icon v-else name="material-symbols:send" size="16" />
                {{ sending ? 'Envoi...' : 'Envoyer le message' }}
              </button>
            </form>
          </div>
        </div>

        <!-- Right: Contact info sidebar -->
        <div class="lg:col-span-2 flex flex-col gap-4">

          <!-- Contact cards -->
          <div
            v-for="(contact, idx) in contacts"
            :key="contact.label"
            v-motion
            :initial="{ opacity: 0, x: 24 }"
            :visibleOnce="{ opacity: 1, x: 0 }"
            :delay="60 * idx"
          >
            <NuxtLink
              :to="contact.href"
              target="_blank"
              class="opacity-0 flex items-center gap-4 border border-slate-200 rounded-2xl p-5 bg-white hover:border-orange-300 hover:shadow-md transition-all group"
              style="opacity: 1"
            >
              <div :class="[contact.color, 'w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0']">
                <Icon :name="contact.icon" size="20" />
              </div>
              <div class="flex-1 min-w-0">
                <p class="text-sm font-bold text-slate-700 group-hover:text-orange-600 transition-colors">
                  {{ contact.label }}
                </p>
                <p class="text-xs text-slate-400 mt-0.5 truncate">{{ contact.value }}</p>
              </div>
              <Icon name="material-symbols:arrow-outward" size="14" class="text-slate-300 group-hover:text-orange-400 transition-colors flex-shrink-0" />
            </NuxtLink>
          </div>

          <!-- Availability -->
          <div
            v-motion="{ initial: { opacity: 0, x: 24 }, visibleOnce: { opacity: 1, x: 0 }, delay: 200 }"
            class="opacity-0 border border-emerald-200 rounded-2xl p-5 bg-emerald-50 mt-2"
          >
            <div class="flex items-center gap-2.5 mb-2">
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span class="text-sm font-bold text-emerald-700">Disponible</span>
            </div>
            <p class="text-xs text-emerald-600 leading-relaxed">
              Ouvert aux missions freelance, postes CDI et collaborations open source.
            </p>
          </div>

          <!-- Location -->
          <div
            v-motion="{ initial: { opacity: 0, x: 24 }, visibleOnce: { opacity: 1, x: 0 }, delay: 260 }"
            class="opacity-0 border border-slate-200 rounded-2xl p-5 bg-white"
          >
            <div class="flex items-center gap-2.5 mb-2">
              <Icon name="material-symbols:location-on-outline" size="16" class="text-slate-400" />
              <span class="text-sm font-bold text-slate-700">Localisation</span>
            </div>
            <p class="text-xs text-slate-500 leading-relaxed">
              Dakar, Sénégal — disponible en remote worldwide.
            </p>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>
