<script setup lang="ts">
defineProps<{
  category: string
  size?: 'xs' | 'sm' | 'lg'
}>()
</script>

<template>
  <div class="w-full overflow-hidden" :class="size === 'lg' ? 'h-56' : size === 'xs' ? 'h-20' : 'h-36'">

    <!-- ─── Sécurité & IA ─── -->
    <svg v-if="category === 'Sécurité & IA'" viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
      <defs>
        <linearGradient id="sec-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0f0a14"/>
          <stop offset="100%" stop-color="#1a0510"/>
        </linearGradient>
        <radialGradient id="sec-glow" cx="50%" cy="50%" r="45%">
          <stop offset="0%" stop-color="#ef4444" stop-opacity="0.18"/>
          <stop offset="100%" stop-color="#ef4444" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="600" height="220" fill="url(#sec-bg)"/>
      <!-- grid -->
      <g stroke="#ffffff" stroke-opacity="0.04" stroke-width="1">
        <line x1="0" y1="44" x2="600" y2="44"/><line x1="0" y1="88" x2="600" y2="88"/>
        <line x1="0" y1="132" x2="600" y2="132"/><line x1="0" y1="176" x2="600" y2="176"/>
        <line x1="60" y1="0" x2="60" y2="220"/><line x1="120" y1="0" x2="120" y2="220"/>
        <line x1="180" y1="0" x2="180" y2="220"/><line x1="240" y1="0" x2="240" y2="220"/>
        <line x1="300" y1="0" x2="300" y2="220"/><line x1="360" y1="0" x2="360" y2="220"/>
        <line x1="420" y1="0" x2="420" y2="220"/><line x1="480" y1="0" x2="480" y2="220"/>
        <line x1="540" y1="0" x2="540" y2="220"/>
      </g>
      <ellipse cx="300" cy="110" rx="190" ry="130" fill="url(#sec-glow)"/>
      <!-- Shield -->
      <path d="M300 28 L364 60 L364 122 C364 158 300 184 300 184 C300 184 236 158 236 122 L236 60 Z" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-opacity="0.7"/>
      <path d="M300 44 L350 70 L350 122 C350 150 300 168 300 168 C300 168 250 150 250 122 L250 70 Z" fill="#ef4444" fill-opacity="0.07"/>
      <!-- lock keyhole -->
      <rect x="283" y="96" width="34" height="26" rx="4" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-opacity="0.8"/>
      <rect x="283" y="96" width="34" height="26" rx="4" fill="#ef4444" fill-opacity="0.12"/>
      <path d="M289 96 L289 88 C289 79 311 79 311 88 L311 96" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-opacity="0.7"/>
      <circle cx="300" cy="109" r="4" fill="#ef4444" fill-opacity="0.6"/>
      <!-- Neural net nodes left -->
      <circle cx="95" cy="75" r="5" fill="#ef4444" fill-opacity="0.55"/>
      <circle cx="72" cy="135" r="4" fill="#ef4444" fill-opacity="0.4"/>
      <circle cx="145" cy="158" r="4" fill="#ef4444" fill-opacity="0.35"/>
      <circle cx="135" cy="52" r="3" fill="#ef4444" fill-opacity="0.45"/>
      <circle cx="60" cy="180" r="2.5" fill="#ef4444" fill-opacity="0.3"/>
      <line x1="95" y1="75" x2="72" y2="135" stroke="#ef4444" stroke-opacity="0.22" stroke-width="1"/>
      <line x1="72" y1="135" x2="145" y2="158" stroke="#ef4444" stroke-opacity="0.2" stroke-width="1"/>
      <line x1="95" y1="75" x2="145" y2="158" stroke="#ef4444" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="135" y1="52" x2="95" y2="75" stroke="#ef4444" stroke-opacity="0.22" stroke-width="1"/>
      <line x1="72" y1="135" x2="60" y2="180" stroke="#ef4444" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="145" y1="158" x2="236" y2="115" stroke="#ef4444" stroke-opacity="0.2" stroke-width="1" stroke-dasharray="4,3"/>
      <line x1="135" y1="52" x2="236" y2="78" stroke="#ef4444" stroke-opacity="0.18" stroke-width="1" stroke-dasharray="4,3"/>
      <!-- Neural net nodes right -->
      <circle cx="505" cy="72" r="5" fill="#ef4444" fill-opacity="0.55"/>
      <circle cx="528" cy="135" r="4" fill="#ef4444" fill-opacity="0.4"/>
      <circle cx="455" cy="160" r="4" fill="#ef4444" fill-opacity="0.35"/>
      <circle cx="465" cy="48" r="3" fill="#ef4444" fill-opacity="0.45"/>
      <circle cx="540" cy="182" r="2.5" fill="#ef4444" fill-opacity="0.3"/>
      <line x1="505" y1="72" x2="528" y2="135" stroke="#ef4444" stroke-opacity="0.22" stroke-width="1"/>
      <line x1="528" y1="135" x2="455" y2="160" stroke="#ef4444" stroke-opacity="0.2" stroke-width="1"/>
      <line x1="505" y1="72" x2="455" y2="160" stroke="#ef4444" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="465" y1="48" x2="505" y2="72" stroke="#ef4444" stroke-opacity="0.22" stroke-width="1"/>
      <line x1="528" y1="135" x2="540" y2="182" stroke="#ef4444" stroke-opacity="0.15" stroke-width="1"/>
      <line x1="455" y1="160" x2="364" y2="115" stroke="#ef4444" stroke-opacity="0.2" stroke-width="1" stroke-dasharray="4,3"/>
      <line x1="465" y1="48" x2="364" y2="78" stroke="#ef4444" stroke-opacity="0.18" stroke-width="1" stroke-dasharray="4,3"/>
      <!-- dots -->
      <circle cx="200" cy="35" r="2" fill="#ef4444" fill-opacity="0.45"/>
      <circle cx="390" cy="195" r="2" fill="#ef4444" fill-opacity="0.35"/>
      <circle cx="420" cy="28" r="2" fill="#ef4444" fill-opacity="0.4"/>
      <!-- labels -->
      <text x="56" y="200" font-family="monospace" font-size="8" fill="#ef4444" fill-opacity="0.45">AI Agent</text>
      <text x="462" y="44" font-family="monospace" font-size="8" fill="#ef4444" fill-opacity="0.45">SOC</text>
      <text x="486" y="200" font-family="monospace" font-size="8" fill="#ef4444" fill-opacity="0.35">detect()</text>
      <text x="258" y="215" font-family="monospace" font-size="8" fill="#ef4444" fill-opacity="0.3">TypeScript · AI · Security</text>
    </svg>

    <!-- ─── DevOps & Cloud ─── -->
    <svg v-else-if="category === 'DevOps & Cloud'" viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
      <defs>
        <linearGradient id="devops-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0d0b1a"/>
          <stop offset="100%" stop-color="#110a22"/>
        </linearGradient>
        <radialGradient id="devops-glow" cx="50%" cy="30%" r="50%">
          <stop offset="0%" stop-color="#8b5cf6" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="600" height="220" fill="url(#devops-bg)"/>
      <g stroke="#ffffff" stroke-opacity="0.04" stroke-width="1">
        <line x1="0" y1="44" x2="600" y2="44"/><line x1="0" y1="88" x2="600" y2="88"/>
        <line x1="0" y1="132" x2="600" y2="132"/><line x1="0" y1="176" x2="600" y2="176"/>
        <line x1="75" y1="0" x2="75" y2="220"/><line x1="150" y1="0" x2="150" y2="220"/>
        <line x1="225" y1="0" x2="225" y2="220"/><line x1="300" y1="0" x2="300" y2="220"/>
        <line x1="375" y1="0" x2="375" y2="220"/><line x1="450" y1="0" x2="450" y2="220"/>
        <line x1="525" y1="0" x2="525" y2="220"/>
      </g>
      <rect width="600" height="220" fill="url(#devops-glow)"/>
      <!-- Cloud shape -->
      <ellipse cx="300" cy="55" rx="90" ry="36" fill="none" stroke="#8b5cf6" stroke-width="1.5" stroke-opacity="0.7"/>
      <ellipse cx="255" cy="65" rx="52" ry="28" fill="none" stroke="#8b5cf6" stroke-width="1.5" stroke-opacity="0.5"/>
      <ellipse cx="345" cy="65" rx="52" ry="28" fill="none" stroke="#8b5cf6" stroke-width="1.5" stroke-opacity="0.5"/>
      <rect x="215" y="72" width="170" height="22" fill="#0d0b1a"/>
      <ellipse cx="300" cy="55" rx="90" ry="36" fill="#8b5cf6" fill-opacity="0.08"/>
      <!-- Arrows from cloud down -->
      <line x1="230" y1="88" x2="160" y2="130" stroke="#8b5cf6" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="5,3"/>
      <line x1="300" y1="88" x2="300" y2="130" stroke="#8b5cf6" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="5,3"/>
      <line x1="370" y1="88" x2="440" y2="130" stroke="#8b5cf6" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="5,3"/>
      <!-- Arrow heads -->
      <polygon points="156,130 164,130 160,137" fill="#8b5cf6" fill-opacity="0.5"/>
      <polygon points="296,130 304,130 300,137" fill="#8b5cf6" fill-opacity="0.5"/>
      <polygon points="436,130 444,130 440,137" fill="#8b5cf6" fill-opacity="0.5"/>
      <!-- Service boxes -->
      <rect x="118" y="136" width="84" height="38" rx="6" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="129" y="151" font-family="monospace" font-size="8" fill="#8b5cf6" fill-opacity="0.8">API Gateway</text>
      <text x="138" y="163" font-family="monospace" font-size="7" fill="#8b5cf6" fill-opacity="0.5">:8080</text>
      <rect x="258" y="136" width="84" height="38" rx="6" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="271" y="151" font-family="monospace" font-size="8" fill="#8b5cf6" fill-opacity="0.8">Service A</text>
      <text x="273" y="163" font-family="monospace" font-size="7" fill="#8b5cf6" fill-opacity="0.5">Go / Rust</text>
      <rect x="398" y="136" width="84" height="38" rx="6" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="414" y="151" font-family="monospace" font-size="8" fill="#8b5cf6" fill-opacity="0.8">Service B</text>
      <text x="416" y="163" font-family="monospace" font-size="7" fill="#8b5cf6" fill-opacity="0.5">Python</text>
      <!-- Bottom bar (DB) -->
      <rect x="200" y="192" width="200" height="20" rx="5" fill="#8b5cf6" fill-opacity="0.1" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.35"/>
      <line x1="160" y1="174" x2="220" y2="192" stroke="#8b5cf6" stroke-opacity="0.25" stroke-width="1"/>
      <line x1="300" y1="174" x2="300" y2="192" stroke="#8b5cf6" stroke-opacity="0.25" stroke-width="1"/>
      <line x1="440" y1="174" x2="380" y2="192" stroke="#8b5cf6" stroke-opacity="0.25" stroke-width="1"/>
      <text x="261" y="206" font-family="monospace" font-size="8" fill="#8b5cf6" fill-opacity="0.5">PostgreSQL · Redis</text>
      <!-- K8s hex decorations -->
      <polygon points="545,40 555,46 555,58 545,64 535,58 535,46" fill="none" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.3"/>
      <polygon points="562,60 572,66 572,78 562,84 552,78 552,66" fill="none" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.2"/>
      <polygon points="528,62 538,68 538,80 528,86 518,80 518,68" fill="none" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.2"/>
      <polygon points="50,155 60,161 60,173 50,179 40,173 40,161" fill="none" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.3"/>
      <polygon points="32,135 42,141 42,153 32,159 22,153 22,141" fill="none" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.2"/>
      <!-- Cloud label -->
      <text x="272" y="50" font-family="monospace" font-size="9" fill="#8b5cf6" fill-opacity="0.7">AWS · ECS</text>
    </svg>

    <!-- ─── Systèmes & Réseau ─── -->
    <svg v-else-if="category === 'Systèmes & Réseau'" viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
      <defs>
        <linearGradient id="sys-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0f0800"/>
          <stop offset="100%" stop-color="#1a0d00"/>
        </linearGradient>
        <radialGradient id="sys-glow" cx="40%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#f97316" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#f97316" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="600" height="220" fill="url(#sys-bg)"/>
      <rect width="600" height="220" fill="url(#sys-glow)"/>
      <!-- Circuit board traces horizontal -->
      <g stroke="#f97316" stroke-opacity="0.18" stroke-width="1.5">
        <line x1="0" y1="55" x2="600" y2="55"/>
        <line x1="0" y1="110" x2="600" y2="110"/>
        <line x1="0" y1="165" x2="600" y2="165"/>
      </g>
      <!-- Circuit board traces vertical -->
      <g stroke="#f97316" stroke-opacity="0.18" stroke-width="1.5">
        <line x1="80" y1="0" x2="80" y2="220"/>
        <line x1="200" y1="0" x2="200" y2="220"/>
        <line x1="350" y1="0" x2="350" y2="220"/>
        <line x1="480" y1="0" x2="480" y2="220"/>
        <line x1="560" y1="0" x2="560" y2="220"/>
      </g>
      <!-- Junction dots -->
      <g fill="#f97316" fill-opacity="0.5">
        <circle cx="80" cy="55" r="4"/><circle cx="200" cy="55" r="4"/>
        <circle cx="350" cy="55" r="4"/><circle cx="480" cy="55" r="4"/>
        <circle cx="80" cy="110" r="4"/><circle cx="200" cy="110" r="4"/>
        <circle cx="350" cy="110" r="4"/><circle cx="480" cy="110" r="4"/>
        <circle cx="80" cy="165" r="4"/><circle cx="200" cy="165" r="4"/>
        <circle cx="350" cy="165" r="4"/><circle cx="480" cy="165" r="4"/>
      </g>
      <!-- Gear / Cog (center-right) -->
      <g transform="translate(430, 108)">
        <circle cx="0" cy="0" r="38" fill="none" stroke="#f97316" stroke-width="1.5" stroke-opacity="0.5"/>
        <circle cx="0" cy="0" r="18" fill="#f97316" fill-opacity="0.08" stroke="#f97316" stroke-width="1.5" stroke-opacity="0.6"/>
        <circle cx="0" cy="0" r="7" fill="#f97316" fill-opacity="0.3"/>
        <!-- Gear teeth -->
        <g stroke="#f97316" stroke-width="6" stroke-opacity="0.45" stroke-linecap="square">
          <line x1="0" y1="-38" x2="0" y2="-48"/>
          <line x1="0" y1="38" x2="0" y2="48"/>
          <line x1="-38" y1="0" x2="-48" y2="0"/>
          <line x1="38" y1="0" x2="48" y2="0"/>
          <line x1="-26.9" y1="-26.9" x2="-34" y2="-34"/>
          <line x1="26.9" y1="-26.9" x2="34" y2="-34"/>
          <line x1="-26.9" y1="26.9" x2="-34" y2="34"/>
          <line x1="26.9" y1="26.9" x2="34" y2="34"/>
        </g>
      </g>
      <!-- Memory blocks (left) -->
      <g fill="none" stroke="#f97316" stroke-width="1" stroke-opacity="0.45">
        <rect x="30" y="70" width="30" height="14" rx="2"/>
        <rect x="30" y="90" width="30" height="14" rx="2"/>
        <rect x="30" y="110" width="30" height="14" rx="2"/>
        <rect x="30" y="130" width="30" height="14" rx="2"/>
        <rect x="30" y="150" width="30" height="14" rx="2"/>
      </g>
      <g fill="#f97316" fill-opacity="0.2">
        <rect x="30" y="70" width="22" height="14" rx="2"/>
        <rect x="30" y="90" width="30" height="14" rx="2"/>
        <rect x="30" y="110" width="14" height="14" rx="2"/>
        <rect x="30" y="130" width="26" height="14" rx="2"/>
        <rect x="30" y="150" width="18" height="14" rx="2"/>
      </g>
      <text x="68" y="82" font-family="monospace" font-size="7" fill="#f97316" fill-opacity="0.45">0xFFE4</text>
      <text x="68" y="102" font-family="monospace" font-size="7" fill="#f97316" fill-opacity="0.45">0x00B2</text>
      <text x="68" y="122" font-family="monospace" font-size="7" fill="#f97316" fill-opacity="0.45">0xA1F0</text>
      <text x="68" y="142" font-family="monospace" font-size="7" fill="#f97316" fill-opacity="0.45">0x3C8D</text>
      <text x="68" y="162" font-family="monospace" font-size="7" fill="#f97316" fill-opacity="0.45">0x7E21</text>
      <!-- Labels -->
      <text x="200" y="25" font-family="monospace" font-size="8" fill="#f97316" fill-opacity="0.4">unsafe &#123; ptr::read() &#125;</text>
      <text x="30" y="50" font-family="monospace" font-size="8" fill="#f97316" fill-opacity="0.4">STACK</text>
      <text x="380" y="205" font-family="monospace" font-size="8" fill="#f97316" fill-opacity="0.35">Rust · Systems · Network</text>
    </svg>

    <!-- ─── Web & Backend ─── -->
    <svg v-else-if="category === 'Web & Backend'" viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
      <defs>
        <linearGradient id="web-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#020d18"/>
          <stop offset="100%" stop-color="#041020"/>
        </linearGradient>
        <radialGradient id="web-glow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.18"/>
          <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="600" height="220" fill="url(#web-bg)"/>
      <rect width="600" height="220" fill="url(#web-glow)"/>
      <!-- dots pattern -->
      <g fill="#0ea5e9" fill-opacity="0.1">
        <circle cx="50" cy="50" r="1.5"/><circle cx="110" cy="50" r="1.5"/><circle cx="170" cy="50" r="1.5"/>
        <circle cx="50" cy="100" r="1.5"/><circle cx="110" cy="100" r="1.5"/><circle cx="170" cy="100" r="1.5"/>
        <circle cx="50" cy="150" r="1.5"/><circle cx="110" cy="150" r="1.5"/><circle cx="170" cy="150" r="1.5"/>
        <circle cx="430" cy="50" r="1.5"/><circle cx="490" cy="50" r="1.5"/><circle cx="550" cy="50" r="1.5"/>
        <circle cx="430" cy="100" r="1.5"/><circle cx="490" cy="100" r="1.5"/><circle cx="550" cy="100" r="1.5"/>
        <circle cx="430" cy="150" r="1.5"/><circle cx="490" cy="150" r="1.5"/><circle cx="550" cy="150" r="1.5"/>
      </g>
      <!-- Flow: CLIENT → API → DB -->
      <!-- CLIENT box -->
      <rect x="30" y="88" width="90" height="44" rx="6" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.5"/>
      <text x="53" y="107" font-family="monospace" font-size="9" fill="#0ea5e9" fill-opacity="0.9">CLIENT</text>
      <text x="46" y="121" font-family="monospace" font-size="7" fill="#0ea5e9" fill-opacity="0.5">Browser</text>
      <!-- Arrow 1 -->
      <line x1="120" y1="110" x2="178" y2="110" stroke="#0ea5e9" stroke-opacity="0.5" stroke-width="1.5"/>
      <polygon points="175,106 183,110 175,114" fill="#0ea5e9" fill-opacity="0.6"/>
      <text x="128" y="106" font-family="monospace" font-size="7" fill="#0ea5e9" fill-opacity="0.45">HTTPS</text>
      <!-- API Gateway -->
      <rect x="182" y="75" width="104" height="70" rx="6" fill="#0ea5e9" fill-opacity="0.12" stroke="#0ea5e9" stroke-width="1.5" stroke-opacity="0.6"/>
      <text x="200" y="97" font-family="monospace" font-size="8" fill="#0ea5e9" fill-opacity="0.9">API Gateway</text>
      <text x="192" y="111" font-family="monospace" font-size="7" fill="#38bdf8" fill-opacity="0.7">GET /users</text>
      <text x="192" y="124" font-family="monospace" font-size="7" fill="#34d399" fill-opacity="0.7">POST /auth</text>
      <text x="192" y="137" font-family="monospace" font-size="7" fill="#f97316" fill-opacity="0.7">WS /live</text>
      <!-- Arrow 2 -->
      <line x1="286" y1="110" x2="344" y2="110" stroke="#0ea5e9" stroke-opacity="0.4" stroke-width="1.5"/>
      <polygon points="341,106 349,110 341,114" fill="#0ea5e9" fill-opacity="0.5"/>
      <!-- Service boxes -->
      <rect x="348" y="72" width="84" height="36" rx="5" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.45"/>
      <text x="367" y="87" font-family="monospace" font-size="8" fill="#0ea5e9" fill-opacity="0.8">Business</text>
      <text x="372" y="99" font-family="monospace" font-size="7" fill="#0ea5e9" fill-opacity="0.5">Logic Go</text>
      <rect x="348" y="116" width="84" height="36" rx="5" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.45"/>
      <text x="363" y="131" font-family="monospace" font-size="8" fill="#0ea5e9" fill-opacity="0.8">Auth / JWT</text>
      <text x="365" y="143" font-family="monospace" font-size="7" fill="#0ea5e9" fill-opacity="0.5">bcrypt</text>
      <!-- Arrow 3 -->
      <line x1="432" y1="110" x2="466" y2="110" stroke="#0ea5e9" stroke-opacity="0.4" stroke-width="1.5"/>
      <polygon points="463,106 471,110 463,114" fill="#0ea5e9" fill-opacity="0.5"/>
      <!-- Database cylinder -->
      <ellipse cx="510" cy="90" rx="38" ry="12" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.55"/>
      <rect x="472" y="90" width="76" height="52" fill="#0ea5e9" fill-opacity="0.07" stroke="none"/>
      <ellipse cx="510" cy="142" rx="38" ry="12" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.55"/>
      <line x1="472" y1="90" x2="472" y2="142" stroke="#0ea5e9" stroke-opacity="0.4" stroke-width="1"/>
      <line x1="548" y1="90" x2="548" y2="142" stroke="#0ea5e9" stroke-opacity="0.4" stroke-width="1"/>
      <ellipse cx="510" cy="110" rx="38" ry="12" fill="none" stroke="#0ea5e9" stroke-width="0.8" stroke-opacity="0.3"/>
      <text x="490" y="120" font-family="monospace" font-size="8" fill="#0ea5e9" fill-opacity="0.6">SQLite</text>
      <!-- WebSocket squiggle -->
      <path d="M120 155 Q135 145 150 155 Q165 165 180 155 Q195 145 210 155 Q225 165 240 155" fill="none" stroke="#0ea5e9" stroke-opacity="0.3" stroke-width="1.5"/>
      <text x="122" y="173" font-family="monospace" font-size="7" fill="#0ea5e9" fill-opacity="0.35">WebSocket</text>
      <text x="200" y="205" font-family="monospace" font-size="8" fill="#0ea5e9" fill-opacity="0.3">Go · REST · JWT · SQLite</text>
    </svg>

    <!-- ─── Frontend & JS ─── -->
    <svg v-else-if="category === 'Frontend & JS'" viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
      <defs>
        <linearGradient id="fe-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0f0a00"/>
          <stop offset="100%" stop-color="#18100a"/>
        </linearGradient>
        <radialGradient id="fe-glow" cx="50%" cy="40%" r="55%">
          <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#f59e0b" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="600" height="220" fill="url(#fe-bg)"/>
      <rect width="600" height="220" fill="url(#fe-glow)"/>
      <!-- Browser window -->
      <rect x="60" y="28" width="340" height="180" rx="8" fill="#f59e0b" fill-opacity="0.06" stroke="#f59e0b" stroke-width="1.5" stroke-opacity="0.5"/>
      <!-- Browser chrome -->
      <rect x="60" y="28" width="340" height="28" rx="8" fill="#f59e0b" fill-opacity="0.1"/>
      <rect x="68" y="35" width="2" height="2" rx="1" fill="none"/>
      <circle cx="78" cy="42" r="5" fill="#ef4444" fill-opacity="0.5"/>
      <circle cx="96" cy="42" r="5" fill="#f59e0b" fill-opacity="0.5"/>
      <circle cx="114" cy="42" r="5" fill="#22c55e" fill-opacity="0.5"/>
      <rect x="132" y="36" width="180" height="12" rx="4" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="0.8" stroke-opacity="0.3"/>
      <text x="148" y="46" font-family="monospace" font-size="7" fill="#f59e0b" fill-opacity="0.5">localhost:3000</text>
      <!-- Component tree -->
      <!-- Root -->
      <rect x="170" y="72" width="80" height="24" rx="4" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.6"/>
      <text x="185" y="88" font-family="monospace" font-size="8" fill="#f59e0b" fill-opacity="0.9">&lt;App /&gt;</text>
      <!-- Level 2 -->
      <line x1="210" y1="96" x2="140" y2="122" stroke="#f59e0b" stroke-opacity="0.35" stroke-width="1"/>
      <line x1="210" y1="96" x2="280" y2="122" stroke="#f59e0b" stroke-opacity="0.35" stroke-width="1"/>
      <rect x="96" y="122" width="88" height="24" rx="4" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.45"/>
      <text x="104" y="138" font-family="monospace" font-size="8" fill="#f59e0b" fill-opacity="0.75">&lt;Navbar /&gt;</text>
      <rect x="236" y="122" width="88" height="24" rx="4" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.45"/>
      <text x="244" y="138" font-family="monospace" font-size="8" fill="#f59e0b" fill-opacity="0.75">&lt;Main /&gt;</text>
      <!-- Level 3 -->
      <line x1="280" y1="146" x2="248" y2="168" stroke="#f59e0b" stroke-opacity="0.25" stroke-width="1"/>
      <line x1="280" y1="146" x2="312" y2="168" stroke="#f59e0b" stroke-opacity="0.25" stroke-width="1"/>
      <rect x="210" y="168" width="76" height="22" rx="4" fill="#f59e0b" fill-opacity="0.08" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.35"/>
      <text x="218" y="183" font-family="monospace" font-size="7" fill="#f59e0b" fill-opacity="0.6">&lt;Card /&gt;</text>
      <rect x="296" y="168" width="76" height="22" rx="4" fill="#f59e0b" fill-opacity="0.08" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.35"/>
      <text x="304" y="183" font-family="monospace" font-size="7" fill="#f59e0b" fill-opacity="0.6">&lt;List /&gt;</text>
      <!-- Right side: reactive state -->
      <rect x="438" y="50" width="130" height="130" rx="6" fill="#f59e0b" fill-opacity="0.05" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.3"/>
      <text x="448" y="68" font-family="monospace" font-size="8" fill="#f59e0b" fill-opacity="0.6">state &#123;</text>
      <text x="458" y="82" font-family="monospace" font-size="7" fill="#34d399" fill-opacity="0.7">  count: 42</text>
      <text x="458" y="95" font-family="monospace" font-size="7" fill="#38bdf8" fill-opacity="0.7">  user: &#123;...&#125;</text>
      <text x="458" y="108" font-family="monospace" font-size="7" fill="#f472b6" fill-opacity="0.7">  items: []</text>
      <text x="448" y="122" font-family="monospace" font-size="8" fill="#f59e0b" fill-opacity="0.6">&#125;</text>
      <text x="448" y="140" font-family="monospace" font-size="7" fill="#f59e0b" fill-opacity="0.45">computed()</text>
      <text x="448" y="154" font-family="monospace" font-size="7" fill="#f59e0b" fill-opacity="0.45">watch()</text>
      <text x="448" y="168" font-family="monospace" font-size="7" fill="#f59e0b" fill-opacity="0.45">emit()</text>
      <!-- Event arrow -->
      <path d="M400 155 Q420 130 438 115" fill="none" stroke="#f59e0b" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="4,3"/>
      <polygon points="434,112 442,112 438,119" fill="#f59e0b" fill-opacity="0.4"/>
      <text x="170" y="213" font-family="monospace" font-size="8" fill="#f59e0b" fill-opacity="0.3">JavaScript · Virtual DOM · Reactive</text>
    </svg>

    <!-- ─── CLI & Outils ─── -->
    <svg v-else-if="category === 'CLI & Outils'" viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
      <defs>
        <linearGradient id="cli-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#080c10"/>
          <stop offset="100%" stop-color="#0c1018"/>
        </linearGradient>
        <radialGradient id="cli-glow" cx="45%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#64748b" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#64748b" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="600" height="220" fill="url(#cli-bg)"/>
      <rect width="600" height="220" fill="url(#cli-glow)"/>
      <!-- Diagonal scan line effect -->
      <g stroke="#ffffff" stroke-opacity="0.025" stroke-width="1">
        <line x1="0" y1="20" x2="600" y2="20"/><line x1="0" y1="40" x2="600" y2="40"/>
        <line x1="0" y1="60" x2="600" y2="60"/><line x1="0" y1="80" x2="600" y2="80"/>
        <line x1="0" y1="100" x2="600" y2="100"/><line x1="0" y1="120" x2="600" y2="120"/>
        <line x1="0" y1="140" x2="600" y2="140"/><line x1="0" y1="160" x2="600" y2="160"/>
        <line x1="0" y1="180" x2="600" y2="180"/><line x1="0" y1="200" x2="600" y2="200"/>
      </g>
      <!-- Terminal window -->
      <rect x="30" y="22" width="400" height="175" rx="8" fill="#0f1520" stroke="#334155" stroke-width="1.5"/>
      <!-- Window chrome -->
      <rect x="30" y="22" width="400" height="30" rx="8" fill="#1e293b"/>
      <rect x="30" y="37" width="400" height="15" fill="#1e293b"/>
      <circle cx="52" cy="37" r="5.5" fill="#ef4444" fill-opacity="0.7"/>
      <circle cx="72" cy="37" r="5.5" fill="#f59e0b" fill-opacity="0.7"/>
      <circle cx="92" cy="37" r="5.5" fill="#22c55e" fill-opacity="0.7"/>
      <text x="130" y="42" font-family="monospace" font-size="9" fill="#64748b">adama ~ zsh</text>
      <!-- Terminal content -->
      <text x="48" y="72" font-family="monospace" font-size="9" fill="#4ade80" fill-opacity="0.8">adama@dev:~$</text>
      <text x="155" y="72" font-family="monospace" font-size="9" fill="#e2e8f0"> ./0-shell</text>
      <text x="48" y="88" font-family="monospace" font-size="9" fill="#94a3b8">0-shell v1.0 · type 'help'</text>
      <text x="48" y="106" font-family="monospace" font-size="9" fill="#4ade80" fill-opacity="0.8">$</text>
      <text x="63" y="106" font-family="monospace" font-size="9" fill="#e2e8f0"> ls -la | grep go</text>
      <text x="48" y="121" font-family="monospace" font-size="9" fill="#94a3b8">drwxr-xr-x  main.go</text>
      <text x="48" y="134" font-family="monospace" font-size="9" fill="#94a3b8">drwxr-xr-x  shell.go</text>
      <text x="48" y="149" font-family="monospace" font-size="9" fill="#4ade80" fill-opacity="0.8">$</text>
      <text x="63" y="149" font-family="monospace" font-size="9" fill="#e2e8f0"> ps aux | wc -l</text>
      <text x="48" y="164" font-family="monospace" font-size="9" fill="#94a3b8">42</text>
      <text x="48" y="179" font-family="monospace" font-size="9" fill="#4ade80" fill-opacity="0.8">$</text>
      <text x="63" y="179" font-family="monospace" font-size="9" fill="#64748b"> ▋</text>
      <!-- Pipe diagram right side -->
      <g transform="translate(466, 50)">
        <rect x="0" y="0" width="80" height="24" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="8" y="16" font-family="monospace" font-size="8" fill="#4ade80" fill-opacity="0.8">stdin</text>
        <line x1="80" y1="12" x2="110" y2="12" stroke="#64748b" stroke-opacity="0.6" stroke-width="2"/>
        <text x="86" y="9" font-family="monospace" font-size="9" fill="#64748b">|</text>
        <rect x="0" y="40" width="80" height="24" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="8" y="56" font-family="monospace" font-size="8" fill="#38bdf8" fill-opacity="0.8">cmd</text>
        <line x1="80" y1="52" x2="110" y2="52" stroke="#64748b" stroke-opacity="0.6" stroke-width="2"/>
        <text x="86" y="49" font-family="monospace" font-size="9" fill="#64748b">|</text>
        <rect x="0" y="80" width="80" height="24" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="6" y="96" font-family="monospace" font-size="8" fill="#f59e0b" fill-opacity="0.8">stdout</text>
        <rect x="0" y="120" width="80" height="24" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="10" y="136" font-family="monospace" font-size="8" fill="#f472b6" fill-opacity="0.8">fork()</text>
        <rect x="0" y="155" width="80" height="24" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1"/>
        <text x="10" y="171" font-family="monospace" font-size="8" fill="#a78bfa" fill-opacity="0.8">exec()</text>
      </g>
      <text x="200" y="210" font-family="monospace" font-size="8" fill="#475569" fill-opacity="0.6">Go · Unix · Syscalls · CLI</text>
    </svg>

    <!-- ─── Apps & SaaS ─── -->
    <svg v-else viewBox="0 0 600 220" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" class="w-full h-full">
      <defs>
        <linearGradient id="saas-bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#042f2e"/>
          <stop offset="100%" stop-color="#064e3b"/>
        </linearGradient>
        <radialGradient id="saas-glow" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.15"/>
          <stop offset="100%" stop-color="#10b981" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="600" height="220" fill="url(#saas-bg)"/>
      <rect width="600" height="220" fill="url(#saas-glow)"/>
      <!-- Grid dots -->
      <g fill="#10b981" fill-opacity="0.08">
        <circle cx="30" cy="30" r="1.5"/><circle cx="70" cy="30" r="1.5"/><circle cx="110" cy="30" r="1.5"/><circle cx="150" cy="30" r="1.5"/><circle cx="190" cy="30" r="1.5"/><circle cx="230" cy="30" r="1.5"/><circle cx="270" cy="30" r="1.5"/>
        <circle cx="30" cy="60" r="1.5"/><circle cx="70" cy="60" r="1.5"/><circle cx="110" cy="60" r="1.5"/><circle cx="150" cy="60" r="1.5"/><circle cx="190" cy="60" r="1.5"/><circle cx="230" cy="60" r="1.5"/><circle cx="270" cy="60" r="1.5"/>
        <circle cx="30" cy="90" r="1.5"/><circle cx="70" cy="90" r="1.5"/><circle cx="110" cy="90" r="1.5"/><circle cx="150" cy="90" r="1.5"/><circle cx="190" cy="90" r="1.5"/><circle cx="230" cy="90" r="1.5"/><circle cx="270" cy="90" r="1.5"/>
      </g>
      <!-- Dashboard mockup -->
      <rect x="40" y="28" width="320" height="170" rx="10" fill="#0d1f1b" stroke="#10b981" stroke-opacity="0.3" stroke-width="1.5"/>
      <!-- Top bar -->
      <rect x="40" y="28" width="320" height="28" rx="10" fill="#134e4a"/>
      <rect x="40" y="42" width="320" height="14" fill="#134e4a"/>
      <circle cx="60" cy="42" r="5" fill="#ef4444" fill-opacity="0.7"/>
      <circle cx="78" cy="42" r="5" fill="#f59e0b" fill-opacity="0.7"/>
      <circle cx="96" cy="42" r="5" fill="#22c55e" fill-opacity="0.7"/>
      <text x="120" y="46" font-family="monospace" font-size="8" fill="#6ee7b7" fill-opacity="0.6">dashboard — app</text>
      <!-- Sidebar -->
      <rect x="40" y="56" width="70" height="142" fill="#0a1612"/>
      <rect x="50" y="68" width="50" height="8" rx="2" fill="#10b981" fill-opacity="0.25"/>
      <rect x="50" y="84" width="40" height="6" rx="2" fill="#ffffff" fill-opacity="0.08"/>
      <rect x="50" y="96" width="45" height="6" rx="2" fill="#ffffff" fill-opacity="0.08"/>
      <rect x="50" y="108" width="35" height="6" rx="2" fill="#ffffff" fill-opacity="0.08"/>
      <rect x="50" y="120" width="42" height="6" rx="2" fill="#ffffff" fill-opacity="0.08"/>
      <rect x="50" y="140" width="50" height="8" rx="2" fill="#10b981" fill-opacity="0.15"/>
      <rect x="50" y="156" width="38" height="6" rx="2" fill="#ffffff" fill-opacity="0.08"/>
      <!-- Charts area -->
      <rect x="120" y="64" width="110" height="60" rx="6" fill="#0f2922" stroke="#10b981" stroke-opacity="0.15" stroke-width="1"/>
      <polyline points="130,110 145,95 160,100 175,82 190,88 205,74 220,78" stroke="#10b981" stroke-width="2" fill="none" stroke-linecap="round"/>
      <rect x="240" y="64" width="110" height="60" rx="6" fill="#0f2922" stroke="#10b981" stroke-opacity="0.15" stroke-width="1"/>
      <!-- Bar chart -->
      <rect x="258" y="100" width="12" height="16" rx="2" fill="#10b981" fill-opacity="0.5"/>
      <rect x="278" y="88" width="12" height="28" rx="2" fill="#10b981" fill-opacity="0.7"/>
      <rect x="298" y="95" width="12" height="21" rx="2" fill="#10b981" fill-opacity="0.4"/>
      <rect x="318" y="82" width="12" height="34" rx="2" fill="#10b981" fill-opacity="0.8"/>
      <!-- Stats cards -->
      <rect x="120" y="132" width="70" height="38" rx="5" fill="#0f2922" stroke="#10b981" stroke-opacity="0.15" stroke-width="1"/>
      <text x="130" y="148" font-family="monospace" font-size="7" fill="#6ee7b7" fill-opacity="0.5">Users</text>
      <text x="130" y="162" font-family="monospace" font-size="11" fill="#10b981" font-weight="bold">2,847</text>
      <rect x="198" y="132" width="70" height="38" rx="5" fill="#0f2922" stroke="#10b981" stroke-opacity="0.15" stroke-width="1"/>
      <text x="208" y="148" font-family="monospace" font-size="7" fill="#6ee7b7" fill-opacity="0.5">Revenue</text>
      <text x="208" y="162" font-family="monospace" font-size="11" fill="#10b981" font-weight="bold">$14.2k</text>
      <rect x="276" y="132" width="70" height="38" rx="5" fill="#0f2922" stroke="#10b981" stroke-opacity="0.15" stroke-width="1"/>
      <text x="286" y="148" font-family="monospace" font-size="7" fill="#6ee7b7" fill-opacity="0.5">Uptime</text>
      <text x="286" y="162" font-family="monospace" font-size="11" fill="#10b981" font-weight="bold">99.9%</text>
      <!-- Mobile phone mockup -->
      <g transform="translate(420, 30)">
        <rect x="0" y="0" width="80" height="155" rx="12" fill="#0d1f1b" stroke="#10b981" stroke-opacity="0.3" stroke-width="1.5"/>
        <rect x="25" y="6" width="30" height="4" rx="2" fill="#10b981" fill-opacity="0.2"/>
        <rect x="8" y="18" width="64" height="125" rx="4" fill="#0a1612"/>
        <!-- Mobile content -->
        <rect x="14" y="26" width="52" height="8" rx="2" fill="#10b981" fill-opacity="0.3"/>
        <rect x="14" y="42" width="52" height="30" rx="4" fill="#0f2922" stroke="#10b981" stroke-opacity="0.15" stroke-width="0.8"/>
        <polyline points="22,64 32,55 42,58 52,48 58,52" stroke="#10b981" stroke-width="1.5" fill="none" stroke-linecap="round"/>
        <rect x="14" y="80" width="24" height="18" rx="3" fill="#0f2922" stroke="#10b981" stroke-opacity="0.15" stroke-width="0.8"/>
        <rect x="42" y="80" width="24" height="18" rx="3" fill="#0f2922" stroke="#10b981" stroke-opacity="0.15" stroke-width="0.8"/>
        <rect x="14" y="104" width="52" height="6" rx="2" fill="#ffffff" fill-opacity="0.06"/>
        <rect x="14" y="116" width="52" height="14" rx="4" fill="#10b981" fill-opacity="0.25"/>
        <text x="28" y="126" font-family="monospace" font-size="6" fill="#6ee7b7">Action</text>
      </g>
      <!-- Connection lines -->
      <line x1="360" y1="110" x2="420" y2="110" stroke="#10b981" stroke-opacity="0.2" stroke-width="1" stroke-dasharray="4,3"/>
      <!-- Floating badge -->
      <g transform="translate(520, 60)">
        <rect x="0" y="0" width="55" height="20" rx="10" fill="#10b981" fill-opacity="0.2" stroke="#10b981" stroke-opacity="0.3" stroke-width="1"/>
        <text x="10" y="14" font-family="monospace" font-size="7" fill="#6ee7b7">Private</text>
      </g>
      <g transform="translate(520, 90)">
        <rect x="0" y="0" width="55" height="20" rx="10" fill="#10b981" fill-opacity="0.15" stroke="#10b981" stroke-opacity="0.2" stroke-width="1"/>
        <text x="14" y="14" font-family="monospace" font-size="7" fill="#6ee7b7">SaaS</text>
      </g>
      <text x="170" y="213" font-family="monospace" font-size="8" fill="#10b981" fill-opacity="0.3">Vue · Go · React Native · Supabase</text>
    </svg>

  </div>
</template>
