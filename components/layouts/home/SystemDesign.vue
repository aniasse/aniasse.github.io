<template>
  <div class="w-full bg-slate-950 py-20 mt-20">
    <div class="content-wrapper mx-auto">

      <!-- header -->
      <div
        v-motion="{
          initial: { opacity: 0, y: 20 },
          visibleOnce: { opacity: 1, y: 0 },
        }"
        class="opacity-0 mb-10"
      >
        <p class="font-mono text-xs uppercase tracking-widest text-slate-500">System Architecture</p>
        <h2 class="text-2xl font-bold text-white mt-1">
          Comment je conçois les systèmes
        </h2>
        <p class="text-slate-400 text-sm mt-2">
          Chaque projet suit des principes d'architecture distribués et éprouvés.
        </p>
      </div>

      <!-- architecture diagram + principles -->
      <div class="flex gap-10 max-md:flex-col items-start">

        <!-- ASCII diagram -->
        <div
          v-motion="{
            initial: { opacity: 0, x: -40 },
            visibleOnce: { opacity: 1, x: 0 },
            delay: 100,
          }"
          class="opacity-0 flex-1"
        >
          <div class="bg-slate-900 border border-slate-700 rounded-2xl p-6 font-mono text-xs leading-relaxed">
            <div class="flex items-center gap-1.5 mb-4 pb-3 border-b border-slate-700">
              <div class="w-2.5 h-2.5 rounded-full bg-red-500"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
              <div class="w-2.5 h-2.5 rounded-full bg-green-500"></div>
              <span class="ml-2 text-slate-500 text-[10px]">architecture.txt</span>
            </div>
            <pre class="text-slate-300 overflow-x-auto"><span class="text-slate-500">              ┌──────────────────────┐</span>
<span class="text-slate-500">              │   </span><span class="text-orange-400">CLIENT / BROWSER</span><span class="text-slate-500">    │</span>
<span class="text-slate-500">              └──────────┬───────────┘</span>
<span class="text-slate-500">                         │ HTTPS / WSS</span>
<span class="text-slate-500">              ┌──────────▼───────────┐</span>
<span class="text-slate-500">              │   </span><span class="text-blue-400">API GATEWAY / LB</span><span class="text-slate-500">    │</span>
<span class="text-slate-500">              │   </span><span class="text-slate-500">TLS · Rate Limit</span><span class="text-slate-500">    │</span>
<span class="text-slate-500">              └───┬──────────────┬───┘</span>
<span class="text-slate-500">                  │              │</span>
<span class="text-slate-500">       ┌──────────▼──┐     ┌─────▼──────────┐</span>
<span class="text-slate-500">       │  </span><span class="text-green-400">Service A</span><span class="text-slate-500">   │     │  </span><span class="text-green-400">Service B</span><span class="text-slate-500">      │</span>
<span class="text-slate-500">       │  Go / Rust  │     │  Go / Rust     │</span>
<span class="text-slate-500">       └──────┬───────┘     └──────┬─────────┘</span>
<span class="text-slate-500">              │                    │</span>
<span class="text-slate-500">       ┌──────▼────────────────────▼──┐</span>
<span class="text-slate-500">       │         </span><span class="text-purple-400">MESSAGE QUEUE</span><span class="text-slate-500">         │</span>
<span class="text-slate-500">       │         RabbitMQ / Redis      │</span>
<span class="text-slate-500">       └──────────────┬───────────────┘</span>
<span class="text-slate-500">                      │</span>
<span class="text-slate-500">       ┌──────────────▼───────────────┐</span>
<span class="text-slate-500">       │    </span><span class="text-amber-400">DATABASE + CACHE LAYER</span><span class="text-slate-500">     │</span>
<span class="text-slate-500">       │   PostgreSQL · SQLite · Redis │</span>
<span class="text-slate-500">       └──────────────────────────────┘</span></pre>
          </div>
        </div>

        <!-- design principles -->
        <div
          v-motion="{
            initial: { opacity: 0, x: 40 },
            visibleOnce: { opacity: 1, x: 0 },
            delay: 200,
          }"
          class="opacity-0 flex flex-col gap-4 flex-1"
        >
          <div
            v-for="(principle, index) in principles"
            :key="principle.title"
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :visibleOnce="{ opacity: 1, y: 0 }"
            :delay="150 + 80 * index"
            class="opacity-0 flex gap-4 p-4 rounded-xl border border-slate-700 bg-slate-900 hover:border-slate-500 transition-colors"
          >
            <div :class="[principle.color, 'w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0']">
              <Icon :name="principle.icon" size="18" class="text-white" />
            </div>
            <div>
              <p class="text-sm font-bold text-white">{{ principle.title }}</p>
              <p class="text-xs text-slate-400 mt-1 leading-relaxed">{{ principle.desc }}</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup>
const principles = [
  {
    icon: 'material-symbols:layers',
    color: 'bg-orange-600',
    title: 'Separation of Concerns',
    desc: 'Chaque service a une responsabilité unique. API Gateway, business logic et data layer sont strictement découplés.',
  },
  {
    icon: 'material-symbols:safety-check',
    color: 'bg-green-600',
    title: 'Fault Tolerance',
    desc: 'Circuit breakers, retries exponentiels et graceful degradation pour des systèmes qui restent debout sous pression.',
  },
  {
    icon: 'material-symbols:lock',
    color: 'bg-blue-600',
    title: 'Security by Design',
    desc: 'Authentification, autorisation et chiffrement intégrés dès la conception — pas ajoutés en fin de développement.',
  },
  {
    icon: 'material-symbols:trending-up',
    color: 'bg-purple-600',
    title: 'Horizontal Scalability',
    desc: 'Stateless services, message queues et cache distribué pour scaler sans refactoring majeur.',
  },
]
</script>
