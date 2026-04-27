<script setup lang="ts">
type Group = 'core' | 'comm' | 'fin' | 'ai' | 'ops'

interface ModuleNode {
  id: string
  angle: number
  label: string
  group: Group
}

interface Props {
  modules: ModuleNode[]
  hubLetter?: string
  hubLabel?: string
  hubMeta?: string
  metaRight?: string
  eyebrow?: string
  hubColor?: string
  accentColor?: string
}

const props = withDefaults(defineProps<Props>(), {
  hubLetter: 'e',
  hubLabel: 'Plateforme · Tenant',
  hubMeta: 'ISOLATION · BRANDING · DROITS',
  metaRight: '',
  eyebrow: 'Architecture',
  hubColor: '#3b82f6',
  accentColor: '#FFA500',
})

const VB_W = 880
const VB_H = 560
const cx = 440
const cy = 290
const ringR = 200
const hubR = 40

const groupColor = (g: Group): string => {
  switch (g) {
    case 'core': return '#60a5fa'
    case 'comm': return '#22d3ee'
    case 'fin':  return '#fb923c'
    case 'ai':   return '#c084fc'
    case 'ops':  return '#34d399'
  }
}

const charW = 6.4
const labelPadX = 9

const nodes = computed(() => props.modules.map((n, i) => {
  const a = (n.angle * Math.PI) / 180
  const cos = Math.cos(a)
  const sin = Math.sin(a)
  const x = cx + ringR * cos
  const y = cy + ringR * sin

  const labelOffset = 22
  const lx = x + cos * labelOffset
  const ly = y + sin * labelOffset

  const anchor: 'start' | 'middle' | 'end' =
    cos > 0.3 ? 'start' : cos < -0.3 ? 'end' : 'middle'

  const w = n.label.length * charW + labelPadX * 2
  const h = 22
  const rectX = anchor === 'start'
    ? lx - 4
    : anchor === 'end'
      ? lx - w + 4
      : lx - w / 2
  const rectY = ly - h / 2

  const dx = x - cx
  const dy = y - cy
  const len = Math.sqrt(dx * dx + dy * dy)
  const ux = dx / len
  const uy = dy / len
  const x1 = cx + ux * (hubR + 4)
  const y1 = cy + uy * (hubR + 4)
  const x2 = x - ux * 16
  const y2 = y - uy * 16
  const segLen = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

  const color = groupColor(n.group)
  const lineDelay = (0.4 + i * 0.08).toFixed(2) + 's'
  const pulseBegin = (1.6 + i * 0.45).toFixed(2) + 's'

  return {
    ...n,
    x, y, lx, ly, anchor,
    rectX, rectY, w, h,
    x1, y1, x2, y2, segLen,
    color, lineDelay, pulseBegin,
  }
}))
</script>

<template>
  <div class="relative w-full aspect-[1.55] overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/40 backdrop-blur-sm">
    <!-- Halo central -->
    <div
      class="pointer-events-none absolute inset-12 rounded-full blur-3xl opacity-25"
      :style="{
        background: `radial-gradient(ellipse at center, ${hubColor}66, ${accentColor}22 55%, transparent 80%)`,
      }"
      aria-hidden="true"
    />

    <!-- Eyebrow + meta -->
    <div class="absolute top-3 left-3 right-3 flex items-start justify-between text-left z-10 pointer-events-none">
      <span class="inline-flex items-center gap-1.5 px-2 py-1 rounded-full border border-slate-700 bg-slate-900/70 font-mono text-[9px] uppercase tracking-widest text-slate-400">
        <span class="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
        {{ eyebrow }}
      </span>
      <span v-if="metaRight" class="font-mono text-[9px] uppercase tracking-[0.18em] text-slate-500">
        {{ metaRight }}
      </span>
    </div>

    <svg
      :viewBox="`0 0 ${VB_W} ${VB_H}`"
      class="absolute inset-0 w-full h-full"
      role="img"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <radialGradient id="sd-hub-pulse" cx="50%" cy="50%" r="50%">
          <stop offset="0%" :stop-color="hubColor" stop-opacity="0.45" />
          <stop offset="100%" :stop-color="hubColor" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="sd-hub-fill" cx="50%" cy="50%" r="65%">
          <stop offset="0%" :stop-color="hubColor" stop-opacity="1" />
          <stop offset="100%" :stop-color="hubColor" stop-opacity="0.7" />
        </radialGradient>
      </defs>

      <!-- Constellation grid -->
      <g opacity="0.12">
        <line
          v-for="i in 19"
          :key="`h-${i}`"
          x1="0" :x2="VB_W"
          :y1="(i - 1) * 30" :y2="(i - 1) * 30"
          stroke="#475569" stroke-width="0.5" stroke-dasharray="2 4"
        />
        <line
          v-for="i in 30"
          :key="`v-${i}`"
          y1="0" :y2="VB_H"
          :x1="(i - 1) * 30" :x2="(i - 1) * 30"
          stroke="#475569" stroke-width="0.5" stroke-dasharray="2 4"
        />
      </g>

      <!-- Cercles concentriques -->
      <circle :cx="cx" :cy="cy" :r="ringR" fill="none" stroke="#475569" stroke-width="0.7" stroke-dasharray="3 5" opacity="0.45" />
      <circle :cx="cx" :cy="cy" :r="ringR - 50" fill="none" stroke="#334155" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.3" />

      <!-- Connexions hub → modules -->
      <g v-for="n in nodes" :key="n.id">
        <linearGradient
          :id="`sd-conn-${n.id}`"
          gradientUnits="userSpaceOnUse"
          :x1="n.x1" :y1="n.y1" :x2="n.x2" :y2="n.y2"
        >
          <stop offset="0%" :stop-color="n.color" stop-opacity="0.85" />
          <stop offset="100%" :stop-color="n.color" stop-opacity="0.2" />
        </linearGradient>

        <line
          :x1="n.x1" :y1="n.y1" :x2="n.x2" :y2="n.y2"
          :stroke="`url(#sd-conn-${n.id})`"
          stroke-width="1.3"
          stroke-linecap="round"
          :stroke-dasharray="n.segLen"
          :stroke-dashoffset="n.segLen"
        >
          <animate
            attributeName="stroke-dashoffset"
            :from="n.segLen"
            to="0"
            dur="1s"
            :begin="n.lineDelay"
            fill="freeze"
          />
        </line>

        <!-- Halo du pulse -->
        <circle r="6" :fill="n.color" fill-opacity="0.25" opacity="0">
          <animate attributeName="cx" :values="`${n.x1};${n.x2}`" dur="2.6s" :begin="n.pulseBegin" repeatCount="indefinite" />
          <animate attributeName="cy" :values="`${n.y1};${n.y2}`" dur="2.6s" :begin="n.pulseBegin" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;0.6;0.6;0" keyTimes="0;0.15;0.85;1" dur="2.6s" :begin="n.pulseBegin" repeatCount="indefinite" />
        </circle>

        <!-- Pulse dot -->
        <circle r="2.5" :fill="n.color" opacity="0">
          <animate attributeName="cx" :values="`${n.x1};${n.x2}`" dur="2.6s" :begin="n.pulseBegin" repeatCount="indefinite" />
          <animate attributeName="cy" :values="`${n.y1};${n.y2}`" dur="2.6s" :begin="n.pulseBegin" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.12;0.88;1" dur="2.6s" :begin="n.pulseBegin" repeatCount="indefinite" />
        </circle>
      </g>

      <!-- Hub pulse halo -->
      <circle :cx="cx" :cy="cy" :r="hubR + 16" fill="url(#sd-hub-pulse)">
        <animate attributeName="r" :values="`${hubR + 8};${hubR + 22};${hubR + 8}`" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.65;0;0.65" dur="3s" repeatCount="indefinite" />
      </circle>

      <!-- Hub central -->
      <g>
        <circle :cx="cx" :cy="cy" :r="hubR + 3" fill="none" :stroke="hubColor" stroke-width="0.6" stroke-opacity="0.45" />
        <circle :cx="cx" :cy="cy" :r="hubR" fill="url(#sd-hub-fill)" :stroke="hubColor" stroke-width="1.2" stroke-opacity="0.5" />
        <text
          :x="cx" :y="cy"
          font-size="34" font-weight="600"
          text-anchor="middle" dominant-baseline="central"
          fill="white"
          letter-spacing="-1.5"
        >
          {{ hubLetter }}
        </text>
      </g>

      <!-- Hub label -->
      <g>
        <text
          :x="cx" :y="cy + hubR + 26"
          text-anchor="middle"
          font-size="13" font-weight="600"
          fill="#e2e8f0"
          letter-spacing="-0.3"
        >
          {{ hubLabel }}
        </text>
        <text
          :x="cx" :y="cy + hubR + 42"
          text-anchor="middle"
          font-size="9.5"
          fill="#64748b"
          letter-spacing="2"
          font-family="ui-monospace, SFMono-Regular, monospace"
        >
          {{ hubMeta }}
        </text>
      </g>

      <!-- Modules en orbite -->
      <g v-for="n in nodes" :key="`mod-${n.id}`">
        <!-- AI group special aura -->
        <circle
          v-if="n.group === 'ai'"
          :cx="n.x" :cy="n.y" r="14"
          :fill="n.color" fill-opacity="0.16"
        >
          <animate attributeName="r" values="14;19;14" dur="2.4s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="0.7;0;0.7" dur="2.4s" repeatCount="indefinite" />
        </circle>

        <!-- Outer halo -->
        <circle :cx="n.x" :cy="n.y" r="11" :fill="n.color" fill-opacity="0.12" />
        <!-- Inner halo -->
        <circle :cx="n.x" :cy="n.y" r="7.5" :fill="n.color" fill-opacity="0.25" />
        <!-- Dot -->
        <circle :cx="n.x" :cy="n.y" r="3.5" :fill="n.color" />

        <!-- Label pill -->
        <rect
          :x="n.rectX" :y="n.rectY"
          :width="n.w" :height="n.h"
          rx="11"
          fill="#0f172a" fill-opacity="0.85"
          stroke="#334155" stroke-width="0.6"
        />
        <text
          :x="n.anchor === 'start' ? n.rectX + 9 : n.anchor === 'end' ? n.rectX + n.w - 9 : n.lx"
          :y="n.ly + 4"
          :text-anchor="n.anchor"
          font-size="11"
          font-weight="500"
          fill="#cbd5e1"
        >
          {{ n.label }}
        </text>
      </g>
    </svg>
  </div>
</template>
