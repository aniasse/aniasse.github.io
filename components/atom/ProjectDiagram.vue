<script setup lang="ts">
defineProps<{ slug: string }>()
</script>

<template>
  <div class="w-full rounded-2xl overflow-hidden border border-slate-200 bg-[#0a0f1a]">

    <!-- ═══════════════════════════════════════════════════
         SÉCURITÉ & IA
    ═══════════════════════════════════════════════════ -->

    <!-- secure-shield -->
    <svg v-if="slug === 'secure-shield'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <marker id="a-sec" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#ef4444" fill-opacity="0.75"/></marker>
        <marker id="a-sec-b" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#ef4444" fill-opacity="0.4"/></marker>
      </defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <g stroke="#ef4444" stroke-opacity="0.04"><line x1="0" y1="60" x2="700" y2="60"/><line x1="0" y1="120" x2="700" y2="120"/><line x1="0" y1="180" x2="700" y2="180"/><line x1="0" y1="240" x2="700" y2="240"/><line x1="100" y1="0" x2="100" y2="300"/><line x1="200" y1="0" x2="200" y2="300"/><line x1="300" y1="0" x2="300" y2="300"/><line x1="400" y1="0" x2="400" y2="300"/><line x1="500" y1="0" x2="500" y2="300"/><line x1="600" y1="0" x2="600" y2="300"/></g>
      <!-- Title -->
      <text x="350" y="30" font-family="monospace" font-size="11" fill="#ef4444" fill-opacity="0.7" text-anchor="middle">Architecture — Secure-Shield SOC Platform</text>
      <!-- Row 1: Data ingestion pipeline -->
      <text x="20" y="65" font-family="monospace" font-size="8" fill="#64748b">INGESTION</text>
      <!-- Threat Sources -->
      <rect x="20" y="72" width="90" height="38" rx="5" fill="#ef4444" fill-opacity="0.08" stroke="#ef4444" stroke-width="1" stroke-opacity="0.4"/>
      <text x="65" y="88" font-family="monospace" font-size="9" fill="#fca5a5" text-anchor="middle">Logs</text>
      <text x="65" y="101" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">syslog · json</text>
      <!-- Collector -->
      <rect x="150" y="72" width="90" height="38" rx="5" fill="#ef4444" fill-opacity="0.1" stroke="#ef4444" stroke-width="1" stroke-opacity="0.5"/>
      <text x="195" y="88" font-family="monospace" font-size="9" fill="#fca5a5" text-anchor="middle">Collector</text>
      <text x="195" y="101" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">normalize</text>
      <!-- AI Agent -->
      <rect x="280" y="62" width="100" height="58" rx="5" fill="#ef4444" fill-opacity="0.15" stroke="#ef4444" stroke-width="1.5" stroke-opacity="0.8"/>
      <text x="330" y="82" font-family="monospace" font-size="10" fill="#ef4444" text-anchor="middle" font-weight="bold">AI Agent</text>
      <text x="330" y="97" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">claude-3-5</text>
      <text x="330" y="110" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">correlation</text>
      <!-- Alert Engine -->
      <rect x="430" y="72" width="90" height="38" rx="5" fill="#ef4444" fill-opacity="0.1" stroke="#ef4444" stroke-width="1" stroke-opacity="0.5"/>
      <text x="475" y="88" font-family="monospace" font-size="9" fill="#fca5a5" text-anchor="middle">Alerts</text>
      <text x="475" y="101" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">severity · triage</text>
      <!-- Dashboard -->
      <rect x="560" y="72" width="110" height="38" rx="5" fill="#ef4444" fill-opacity="0.1" stroke="#ef4444" stroke-width="1" stroke-opacity="0.5"/>
      <text x="615" y="88" font-family="monospace" font-size="9" fill="#fca5a5" text-anchor="middle">Dashboard</text>
      <text x="615" y="101" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">real-time UI</text>
      <!-- Arrows row 1 -->
      <line x1="110" y1="91" x2="143" y2="91" stroke="#ef4444" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-sec)"/>
      <line x1="240" y1="91" x2="273" y2="91" stroke="#ef4444" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-sec)"/>
      <line x1="380" y1="91" x2="423" y2="91" stroke="#ef4444" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-sec)"/>
      <line x1="520" y1="91" x2="553" y2="91" stroke="#ef4444" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-sec)"/>
      <!-- Row 2: Response pipeline -->
      <text x="20" y="165" font-family="monospace" font-size="8" fill="#64748b">RESPONSE</text>
      <rect x="20" y="172" width="100" height="38" rx="5" fill="#ef4444" fill-opacity="0.08" stroke="#ef4444" stroke-width="1" stroke-opacity="0.35"/>
      <text x="70" y="188" font-family="monospace" font-size="9" fill="#fca5a5" text-anchor="middle">Playbooks</text>
      <text x="70" y="201" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">automated</text>
      <rect x="170" y="172" width="100" height="38" rx="5" fill="#ef4444" fill-opacity="0.08" stroke="#ef4444" stroke-width="1" stroke-opacity="0.35"/>
      <text x="220" y="188" font-family="monospace" font-size="9" fill="#fca5a5" text-anchor="middle">Remediate</text>
      <text x="220" y="201" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">block · isolate</text>
      <rect x="320" y="172" width="100" height="38" rx="5" fill="#ef4444" fill-opacity="0.08" stroke="#ef4444" stroke-width="1" stroke-opacity="0.35"/>
      <text x="370" y="188" font-family="monospace" font-size="9" fill="#fca5a5" text-anchor="middle">Forensics</text>
      <text x="370" y="201" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">timeline · IOC</text>
      <rect x="470" y="172" width="100" height="38" rx="5" fill="#ef4444" fill-opacity="0.08" stroke="#ef4444" stroke-width="1" stroke-opacity="0.35"/>
      <text x="520" y="188" font-family="monospace" font-size="9" fill="#fca5a5" text-anchor="middle">Report</text>
      <text x="520" y="201" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">SIEM export</text>
      <!-- Arrows row 2 -->
      <line x1="120" y1="191" x2="163" y2="191" stroke="#ef4444" stroke-opacity="0.4" stroke-width="1.5" marker-end="url(#a-sec-b)"/>
      <line x1="270" y1="191" x2="313" y2="191" stroke="#ef4444" stroke-opacity="0.4" stroke-width="1.5" marker-end="url(#a-sec-b)"/>
      <line x1="420" y1="191" x2="463" y2="191" stroke="#ef4444" stroke-opacity="0.4" stroke-width="1.5" marker-end="url(#a-sec-b)"/>
      <!-- Vertical: Alert Engine → Playbooks -->
      <line x1="475" y1="110" x2="475" y2="148" stroke="#ef4444" stroke-opacity="0.4" stroke-width="1" stroke-dasharray="4,3"/>
      <line x1="475" y1="148" x2="70" y2="148" stroke="#ef4444" stroke-opacity="0.3" stroke-width="1" stroke-dasharray="4,3"/>
      <line x1="70" y1="148" x2="70" y2="165" stroke="#ef4444" stroke-opacity="0.4" stroke-width="1" marker-end="url(#a-sec-b)"/>
      <!-- WebSocket label -->
      <text x="350" y="270" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">TypeScript · LLM API · WebSocket · REST · SIEM</text>
    </svg>

    <!-- ═══════════════════════════════════════════════════
         DEVOPS & CLOUD
    ═══════════════════════════════════════════════════ -->

    <!-- cloud-design -->
    <svg v-else-if="slug === 'cloud-design'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-cd" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#8b5cf6" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <g stroke="#8b5cf6" stroke-opacity="0.04"><line x1="0" y1="60" x2="700" y2="60"/><line x1="0" y1="120" x2="700" y2="120"/><line x1="0" y1="180" x2="700" y2="180"/><line x1="0" y1="240" x2="700" y2="240"/></g>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#a78bfa" fill-opacity="0.8" text-anchor="middle">AWS Infrastructure — Cloud-Design (Terraform + ECS)</text>
      <!-- Internet -->
      <rect x="290" y="38" width="120" height="32" rx="16" fill="#8b5cf6" fill-opacity="0.1" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.4"/>
      <text x="350" y="59" font-family="monospace" font-size="9" fill="#c4b5fd" text-anchor="middle">🌐 Internet</text>
      <line x1="350" y1="70" x2="350" y2="83" stroke="#8b5cf6" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-cd)"/>
      <!-- ALB -->
      <rect x="200" y="88" width="300" height="36" rx="5" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1.5" stroke-opacity="0.7"/>
      <text x="350" y="104" font-family="monospace" font-size="9" fill="#a78bfa" text-anchor="middle" font-weight="bold">Application Load Balancer</text>
      <text x="350" y="116" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">SSL termination · health checks · routing rules</text>
      <!-- Arrows ALB → ECS -->
      <line x1="270" y1="124" x2="220" y2="148" stroke="#8b5cf6" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-cd)"/>
      <line x1="430" y1="124" x2="480" y2="148" stroke="#8b5cf6" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-cd)"/>
      <!-- ECS Cluster boxes -->
      <rect x="50" y="148" width="240" height="60" rx="6" fill="#8b5cf6" fill-opacity="0.07" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.4"/>
      <text x="170" y="166" font-family="monospace" font-size="8" fill="#8b5cf6" fill-opacity="0.7" text-anchor="middle">ECS Cluster — Service A</text>
      <rect x="62" y="172" width="64" height="26" rx="4" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="94" y="189" font-family="monospace" font-size="7" fill="#c4b5fd" text-anchor="middle">Task 1</text>
      <rect x="138" y="172" width="64" height="26" rx="4" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="170" y="189" font-family="monospace" font-size="7" fill="#c4b5fd" text-anchor="middle">Task 2</text>
      <rect x="214" y="172" width="64" height="26" rx="4" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="246" y="189" font-family="monospace" font-size="7" fill="#c4b5fd" text-anchor="middle">Task 3</text>
      <rect x="410" y="148" width="240" height="60" rx="6" fill="#8b5cf6" fill-opacity="0.07" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.4"/>
      <text x="530" y="166" font-family="monospace" font-size="8" fill="#8b5cf6" fill-opacity="0.7" text-anchor="middle">ECS Cluster — Service B</text>
      <rect x="422" y="172" width="64" height="26" rx="4" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="454" y="189" font-family="monospace" font-size="7" fill="#c4b5fd" text-anchor="middle">Task 1</text>
      <rect x="498" y="172" width="64" height="26" rx="4" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="530" y="189" font-family="monospace" font-size="7" fill="#c4b5fd" text-anchor="middle">Task 2</text>
      <rect x="574" y="172" width="64" height="26" rx="4" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="606" y="189" font-family="monospace" font-size="7" fill="#c4b5fd" text-anchor="middle">Task 3</text>
      <!-- Arrows to storage -->
      <line x1="170" y1="208" x2="170" y2="228" stroke="#8b5cf6" stroke-opacity="0.4" stroke-width="1.5" marker-end="url(#a-cd)"/>
      <line x1="530" y1="208" x2="530" y2="228" stroke="#8b5cf6" stroke-opacity="0.4" stroke-width="1.5" marker-end="url(#a-cd)"/>
      <!-- Storage layer -->
      <rect x="50" y="232" width="150" height="34" rx="5" fill="#8b5cf6" fill-opacity="0.08" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.4"/>
      <text x="125" y="248" font-family="monospace" font-size="9" fill="#c4b5fd" text-anchor="middle">RDS PostgreSQL</text>
      <text x="125" y="260" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">Multi-AZ · encrypted</text>
      <rect x="220" y="232" width="110" height="34" rx="5" fill="#8b5cf6" fill-opacity="0.08" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.4"/>
      <text x="275" y="248" font-family="monospace" font-size="9" fill="#c4b5fd" text-anchor="middle">ElastiCache</text>
      <text x="275" y="260" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">Redis · sessions</text>
      <rect x="420" y="232" width="140" height="34" rx="5" fill="#8b5cf6" fill-opacity="0.08" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.4"/>
      <text x="490" y="248" font-family="monospace" font-size="9" fill="#c4b5fd" text-anchor="middle">Secrets Manager</text>
      <text x="490" y="260" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">env vars · creds</text>
      <rect x="575" y="232" width="100" height="34" rx="5" fill="#8b5cf6" fill-opacity="0.08" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.4"/>
      <text x="625" y="248" font-family="monospace" font-size="9" fill="#c4b5fd" text-anchor="middle">CloudWatch</text>
      <text x="625" y="260" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">logs · metrics</text>
      <text x="350" y="290" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">Terraform HCL · AWS · ECS · VPC · IAM · Auto Scaling</text>
    </svg>

    <!-- code-keeper -->
    <svg v-else-if="slug === 'code-keeper'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-ck" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#8b5cf6" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <g stroke="#8b5cf6" stroke-opacity="0.04"><line x1="0" y1="75" x2="700" y2="75"/><line x1="0" y1="150" x2="700" y2="150"/><line x1="0" y1="225" x2="700" y2="225"/></g>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#a78bfa" fill-opacity="0.8" text-anchor="middle">CI/CD Pipeline — Code-Keeper (GitLab CI + Terraform)</text>
      <!-- Pipeline stages -->
      <!-- Stage 1: Commit -->
      <rect x="15" y="100" width="88" height="60" rx="6" fill="#8b5cf6" fill-opacity="0.1" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="59" y="122" font-family="monospace" font-size="9" fill="#a78bfa" text-anchor="middle">git push</text>
      <text x="59" y="136" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">GitLab</text>
      <text x="59" y="150" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">branch rules</text>
      <!-- Stage 2: Build -->
      <rect x="130" y="100" width="88" height="60" rx="6" fill="#8b5cf6" fill-opacity="0.1" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="174" y="122" font-family="monospace" font-size="9" fill="#a78bfa" text-anchor="middle">Build</text>
      <text x="174" y="136" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">Docker</text>
      <text x="174" y="150" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">multi-stage</text>
      <!-- Stage 3: Test -->
      <rect x="245" y="100" width="88" height="60" rx="6" fill="#8b5cf6" fill-opacity="0.1" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="289" y="122" font-family="monospace" font-size="9" fill="#a78bfa" text-anchor="middle">Test</text>
      <text x="289" y="136" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">unit · integ</text>
      <text x="289" y="150" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">coverage</text>
      <!-- Stage 4: Scan -->
      <rect x="360" y="100" width="88" height="60" rx="6" fill="#8b5cf6" fill-opacity="0.1" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="404" y="122" font-family="monospace" font-size="9" fill="#a78bfa" text-anchor="middle">Security</text>
      <text x="404" y="136" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">Trivy scan</text>
      <text x="404" y="150" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">SAST · SCA</text>
      <!-- Stage 5: Deploy -->
      <rect x="475" y="100" width="88" height="60" rx="6" fill="#8b5cf6" fill-opacity="0.15" stroke="#8b5cf6" stroke-width="1.5" stroke-opacity="0.8"/>
      <text x="519" y="122" font-family="monospace" font-size="9" fill="#c4b5fd" text-anchor="middle">Deploy</text>
      <text x="519" y="136" font-family="monospace" font-size="7" fill="#a78bfa" text-anchor="middle">Terraform</text>
      <text x="519" y="150" font-family="monospace" font-size="7" fill="#a78bfa" text-anchor="middle">blue/green</text>
      <!-- Stage 6: Monitor -->
      <rect x="590" y="100" width="95" height="60" rx="6" fill="#8b5cf6" fill-opacity="0.1" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="637" y="122" font-family="monospace" font-size="9" fill="#a78bfa" text-anchor="middle">Monitor</text>
      <text x="637" y="136" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">CloudWatch</text>
      <text x="637" y="150" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">Grafana</text>
      <!-- Arrows -->
      <line x1="103" y1="130" x2="123" y2="130" stroke="#8b5cf6" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-ck)"/>
      <line x1="218" y1="130" x2="238" y2="130" stroke="#8b5cf6" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-ck)"/>
      <line x1="333" y1="130" x2="353" y2="130" stroke="#8b5cf6" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-ck)"/>
      <line x1="448" y1="130" x2="468" y2="130" stroke="#8b5cf6" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-ck)"/>
      <line x1="563" y1="130" x2="583" y2="130" stroke="#8b5cf6" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-ck)"/>
      <!-- Rollback arrow (bottom) -->
      <path d="M519,160 L519,200 L174,200 L174,167" fill="none" stroke="#ef4444" stroke-opacity="0.3" stroke-width="1" stroke-dasharray="5,3" marker-end="url(#a-ck)"/>
      <text x="340" y="214" font-family="monospace" font-size="8" fill="#ef4444" fill-opacity="0.4" text-anchor="middle">rollback on failure</text>
      <!-- Gate labels -->
      <text x="289" y="90" font-family="monospace" font-size="7" fill="#4ade80" fill-opacity="0.6" text-anchor="middle">✓ gate</text>
      <text x="404" y="90" font-family="monospace" font-size="7" fill="#4ade80" fill-opacity="0.6" text-anchor="middle">✓ gate</text>
      <text x="519" y="90" font-family="monospace" font-size="7" fill="#f59e0b" fill-opacity="0.7" text-anchor="middle">⚡ approval</text>
      <text x="350" y="270" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">GitLab CI · Docker · Trivy · Terraform · AWS · Grafana</text>
    </svg>

    <!-- orchestrator -->
    <svg v-else-if="slug === 'orchestrator'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-orch" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#8b5cf6" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#a78bfa" fill-opacity="0.8" text-anchor="middle">Kubernetes Architecture — Orchestrator (K3s)</text>
      <!-- kubectl -->
      <rect x="290" y="38" width="120" height="34" rx="5" fill="#8b5cf6" fill-opacity="0.1" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="350" y="60" font-family="monospace" font-size="9" fill="#c4b5fd" text-anchor="middle">kubectl / CLI</text>
      <line x1="350" y1="72" x2="350" y2="85" stroke="#8b5cf6" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-orch)"/>
      <!-- Control Plane -->
      <rect x="100" y="90" width="500" height="50" rx="6" fill="#8b5cf6" fill-opacity="0.07" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.4"/>
      <text x="350" y="104" font-family="monospace" font-size="8" fill="#8b5cf6" fill-opacity="0.6" text-anchor="middle">CONTROL PLANE (K3s Server)</text>
      <rect x="115" y="110" width="100" height="22" rx="4" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="165" y="125" font-family="monospace" font-size="8" fill="#c4b5fd" text-anchor="middle">API Server</text>
      <rect x="230" y="110" width="100" height="22" rx="4" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="280" y="125" font-family="monospace" font-size="8" fill="#c4b5fd" text-anchor="middle">Scheduler</text>
      <rect x="345" y="110" width="100" height="22" rx="4" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="395" y="125" font-family="monospace" font-size="8" fill="#c4b5fd" text-anchor="middle">etcd</text>
      <rect x="460" y="110" width="125" height="22" rx="4" fill="#8b5cf6" fill-opacity="0.12" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="522" y="125" font-family="monospace" font-size="8" fill="#c4b5fd" text-anchor="middle">Controller Mgr</text>
      <!-- Arrows to nodes -->
      <line x1="220" y1="140" x2="190" y2="162" stroke="#8b5cf6" stroke-opacity="0.45" stroke-width="1.5" marker-end="url(#a-orch)"/>
      <line x1="350" y1="140" x2="350" y2="162" stroke="#8b5cf6" stroke-opacity="0.45" stroke-width="1.5" marker-end="url(#a-orch)"/>
      <line x1="480" y1="140" x2="510" y2="162" stroke="#8b5cf6" stroke-opacity="0.45" stroke-width="1.5" marker-end="url(#a-orch)"/>
      <!-- Worker Nodes -->
      <rect x="60" y="166" width="200" height="72" rx="6" fill="#8b5cf6" fill-opacity="0.06" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.35"/>
      <text x="160" y="181" font-family="monospace" font-size="8" fill="#8b5cf6" fill-opacity="0.55" text-anchor="middle">Worker Node 1</text>
      <rect x="72" y="185" width="80" height="22" rx="4" fill="#4ade80" fill-opacity="0.1" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="112" y="200" font-family="monospace" font-size="7" fill="#86efac" text-anchor="middle">Pod: api</text>
      <rect x="162" y="185" width="80" height="22" rx="4" fill="#4ade80" fill-opacity="0.1" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="202" y="200" font-family="monospace" font-size="7" fill="#86efac" text-anchor="middle">Pod: auth</text>
      <text x="160" y="224" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">kubelet · kube-proxy</text>
      <rect x="250" y="166" width="200" height="72" rx="6" fill="#8b5cf6" fill-opacity="0.06" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.35"/>
      <text x="350" y="181" font-family="monospace" font-size="8" fill="#8b5cf6" fill-opacity="0.55" text-anchor="middle">Worker Node 2</text>
      <rect x="262" y="185" width="80" height="22" rx="4" fill="#4ade80" fill-opacity="0.1" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="302" y="200" font-family="monospace" font-size="7" fill="#86efac" text-anchor="middle">Pod: worker</text>
      <rect x="352" y="185" width="80" height="22" rx="4" fill="#4ade80" fill-opacity="0.1" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="392" y="200" font-family="monospace" font-size="7" fill="#86efac" text-anchor="middle">Pod: db</text>
      <text x="350" y="224" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">kubelet · kube-proxy</text>
      <rect x="440" y="166" width="200" height="72" rx="6" fill="#8b5cf6" fill-opacity="0.06" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.35"/>
      <text x="540" y="181" font-family="monospace" font-size="8" fill="#8b5cf6" fill-opacity="0.55" text-anchor="middle">Worker Node 3</text>
      <rect x="452" y="185" width="80" height="22" rx="4" fill="#4ade80" fill-opacity="0.1" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="492" y="200" font-family="monospace" font-size="7" fill="#86efac" text-anchor="middle">Pod: cache</text>
      <rect x="542" y="185" width="80" height="22" rx="4" fill="#4ade80" fill-opacity="0.1" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="582" y="200" font-family="monospace" font-size="7" fill="#86efac" text-anchor="middle">Pod: monitor</text>
      <text x="540" y="224" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">kubelet · kube-proxy</text>
      <!-- Service overlay -->
      <rect x="60" y="248" width="580" height="22" rx="5" fill="#8b5cf6" fill-opacity="0.06" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.3"/>
      <text x="350" y="263" font-family="monospace" font-size="8" fill="#8b5cf6" fill-opacity="0.55" text-anchor="middle">ClusterIP Services · Ingress NGINX · Helm Charts · Python Automation</text>
    </svg>

    <!-- distributed-media-platform -->
    <svg v-else-if="slug === 'distributed-media-platform'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-dmp" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#8b5cf6" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#a78bfa" fill-opacity="0.8" text-anchor="middle">Distributed Streaming Architecture</text>
      <!-- Producers -->
      <rect x="20" y="55" width="110" height="32" rx="5" fill="#8b5cf6" fill-opacity="0.1" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.45"/>
      <text x="75" y="75" font-family="monospace" font-size="9" fill="#c4b5fd" text-anchor="middle">Producer Node 1</text>
      <rect x="20" y="130" width="110" height="32" rx="5" fill="#8b5cf6" fill-opacity="0.1" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.45"/>
      <text x="75" y="150" font-family="monospace" font-size="9" fill="#c4b5fd" text-anchor="middle">Producer Node 2</text>
      <rect x="20" y="205" width="110" height="32" rx="5" fill="#8b5cf6" fill-opacity="0.1" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.45"/>
      <text x="75" y="225" font-family="monospace" font-size="9" fill="#c4b5fd" text-anchor="middle">Producer Node 3</text>
      <!-- Arrows to bus -->
      <line x1="130" y1="71" x2="217" y2="130" stroke="#8b5cf6" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-dmp)"/>
      <line x1="130" y1="146" x2="217" y2="146" stroke="#8b5cf6" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-dmp)"/>
      <line x1="130" y1="221" x2="217" y2="162" stroke="#8b5cf6" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-dmp)"/>
      <!-- Message Bus -->
      <rect x="222" y="100" width="136" height="92" rx="6" fill="#8b5cf6" fill-opacity="0.15" stroke="#8b5cf6" stroke-width="2" stroke-opacity="0.8"/>
      <text x="290" y="124" font-family="monospace" font-size="10" fill="#8b5cf6" text-anchor="middle" font-weight="bold">Message Bus</text>
      <text x="290" y="140" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">pub/sub routing</text>
      <text x="290" y="154" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">partitioning</text>
      <text x="290" y="168" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">replication × 3</text>
      <text x="290" y="182" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">retention: 7d</text>
      <!-- Arrows to consumers -->
      <line x1="358" y1="120" x2="422" y2="71" stroke="#8b5cf6" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-dmp)"/>
      <line x1="358" y1="146" x2="422" y2="146" stroke="#8b5cf6" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-dmp)"/>
      <line x1="358" y1="172" x2="422" y2="221" stroke="#8b5cf6" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-dmp)"/>
      <!-- Consumers -->
      <rect x="427" y="55" width="112" height="32" rx="5" fill="#8b5cf6" fill-opacity="0.1" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.45"/>
      <text x="483" y="75" font-family="monospace" font-size="9" fill="#c4b5fd" text-anchor="middle">Consumer: Encode</text>
      <rect x="427" y="130" width="112" height="32" rx="5" fill="#8b5cf6" fill-opacity="0.1" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.45"/>
      <text x="483" y="150" font-family="monospace" font-size="9" fill="#c4b5fd" text-anchor="middle">Consumer: Index</text>
      <rect x="427" y="205" width="112" height="32" rx="5" fill="#8b5cf6" fill-opacity="0.1" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.45"/>
      <text x="483" y="225" font-family="monospace" font-size="9" fill="#c4b5fd" text-anchor="middle">Consumer: CDN</text>
      <!-- Arrows to storage -->
      <line x1="539" y1="71" x2="580" y2="90" stroke="#8b5cf6" stroke-opacity="0.4" stroke-width="1.5" marker-end="url(#a-dmp)"/>
      <line x1="539" y1="146" x2="580" y2="146" stroke="#8b5cf6" stroke-opacity="0.4" stroke-width="1.5" marker-end="url(#a-dmp)"/>
      <line x1="539" y1="221" x2="580" y2="200" stroke="#8b5cf6" stroke-opacity="0.4" stroke-width="1.5" marker-end="url(#a-dmp)"/>
      <!-- Storage -->
      <rect x="585" y="78" width="96" height="136" rx="6" fill="#8b5cf6" fill-opacity="0.07" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.35"/>
      <text x="633" y="98" font-family="monospace" font-size="8" fill="#8b5cf6" fill-opacity="0.6" text-anchor="middle">Object Store</text>
      <text x="633" y="114" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">S3-compatible</text>
      <text x="633" y="148" font-family="monospace" font-size="8" fill="#8b5cf6" fill-opacity="0.6" text-anchor="middle">Metadata DB</text>
      <text x="633" y="164" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">PostgreSQL</text>
      <text x="633" y="198" font-family="monospace" font-size="8" fill="#8b5cf6" fill-opacity="0.6" text-anchor="middle">CDN Edge</text>
      <text x="350" y="278" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">Docker · Makefile · Pub/Sub · Distributed Consensus · Multi-node</text>
    </svg>

    <!-- ═══════════════════════════════════════════════════
         SYSTÈMES & RÉSEAU
    ═══════════════════════════════════════════════════ -->

    <!-- multiplayer-fps -->
    <svg v-else-if="slug === 'multiplayer-fps'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <marker id="a-fps" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" fill-opacity="0.75"/></marker>
        <marker id="a-fps-r" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto rotate(180)"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" fill-opacity="0.5"/></marker>
      </defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#fb923c" fill-opacity="0.8" text-anchor="middle">Netcode Architecture — Multiplayer FPS (Rust + Bevy)</text>
      <!-- CLIENT side -->
      <rect x="15" y="44" width="270" height="220" rx="8" fill="#f97316" fill-opacity="0.04" stroke="#f97316" stroke-width="1" stroke-opacity="0.25"/>
      <text x="150" y="62" font-family="monospace" font-size="9" fill="#f97316" fill-opacity="0.5" text-anchor="middle">CLIENT (Bevy + WASM)</text>
      <!-- Client boxes -->
      <rect x="28" y="68" width="106" height="36" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="81" y="84" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">Input Handler</text>
      <text x="81" y="96" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">WASD · mouse</text>
      <rect x="148" y="68" width="124" height="36" rx="5" fill="#f97316" fill-opacity="0.12" stroke="#f97316" stroke-width="1.5" stroke-opacity="0.7"/>
      <text x="210" y="84" font-family="monospace" font-size="9" fill="#fb923c" text-anchor="middle">Client Predict</text>
      <text x="210" y="96" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">simulate locally</text>
      <rect x="28" y="148" width="106" height="36" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="81" y="164" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">Reconcile</text>
      <text x="81" y="176" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">diff + rollback</text>
      <rect x="148" y="148" width="124" height="36" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="210" y="164" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">Interpolate</text>
      <text x="210" y="176" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">smooth remote</text>
      <rect x="70" y="210" width="150" height="36" rx="5" fill="#f97316" fill-opacity="0.08" stroke="#f97316" stroke-width="1" stroke-opacity="0.4"/>
      <text x="145" y="226" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">Bevy Renderer</text>
      <text x="145" y="238" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">ECS · 3D scene</text>
      <!-- Arrows client internal -->
      <line x1="134" y1="86" x2="141" y2="86" stroke="#f97316" stroke-opacity="0.5" stroke-width="1" marker-end="url(#a-fps)"/>
      <line x1="210" y1="104" x2="210" y2="141" stroke="#f97316" stroke-opacity="0.4" stroke-width="1" marker-end="url(#a-fps)"/>
      <line x1="81" y1="184" x2="81" y2="203" stroke="#f97316" stroke-opacity="0.4" stroke-width="1" marker-end="url(#a-fps)"/>
      <line x1="210" y1="184" x2="145" y2="203" stroke="#f97316" stroke-opacity="0.4" stroke-width="1" marker-end="url(#a-fps)"/>
      <!-- SERVER side -->
      <rect x="415" y="44" width="270" height="220" rx="8" fill="#f97316" fill-opacity="0.04" stroke="#f97316" stroke-width="1" stroke-opacity="0.25"/>
      <text x="550" y="62" font-family="monospace" font-size="9" fill="#f97316" fill-opacity="0.5" text-anchor="middle">SERVER (Rust — headless)</text>
      <rect x="428" y="68" width="120" height="36" rx="5" fill="#f97316" fill-opacity="0.15" stroke="#f97316" stroke-width="1.5" stroke-opacity="0.8"/>
      <text x="488" y="84" font-family="monospace" font-size="9" fill="#fb923c" text-anchor="middle">Game Loop</text>
      <text x="488" y="96" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">64 tick/s</text>
      <rect x="562" y="68" width="110" height="36" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="617" y="84" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">Auth + ACL</text>
      <text x="617" y="96" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">anti-cheat</text>
      <rect x="428" y="148" width="120" height="36" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="488" y="164" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">Physics Srv</text>
      <text x="488" y="176" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">authoritative</text>
      <rect x="562" y="148" width="110" height="36" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="617" y="164" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">Broadcast</text>
      <text x="617" y="176" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">delta compress</text>
      <rect x="455" y="210" width="190" height="36" rx="5" fill="#f97316" fill-opacity="0.08" stroke="#f97316" stroke-width="1" stroke-opacity="0.4"/>
      <text x="550" y="226" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">Game State Store</text>
      <text x="550" y="238" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">positions · events · snapshot</text>
      <!-- Server internal arrows -->
      <line x1="488" y1="104" x2="488" y2="141" stroke="#f97316" stroke-opacity="0.4" stroke-width="1" marker-end="url(#a-fps)"/>
      <line x1="562" y1="86" x2="548" y2="86" stroke="#f97316" stroke-opacity="0.4" stroke-width="1" marker-end="url(#a-fps)"/>
      <line x1="488" y1="184" x2="550" y2="203" stroke="#f97316" stroke-opacity="0.4" stroke-width="1" marker-end="url(#a-fps)"/>
      <line x1="617" y1="184" x2="617" y2="141" stroke="#f97316" stroke-opacity="0.4" stroke-width="1" marker-end="url(#a-fps)"/>
      <!-- UDP channel between client and server -->
      <rect x="291" y="100" width="118" height="90" rx="8" fill="#f97316" fill-opacity="0.06" stroke="#f97316" stroke-width="1.5" stroke-opacity="0.5" stroke-dasharray="6,3"/>
      <text x="350" y="124" font-family="monospace" font-size="9" fill="#f97316" fill-opacity="0.8" text-anchor="middle">UDP Channel</text>
      <text x="350" y="140" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">custom protocol</text>
      <text x="350" y="155" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">seq numbers</text>
      <text x="350" y="170" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">ack + NACK</text>
      <!-- Bidirectional arrows -->
      <line x1="285" y1="128" x2="295" y2="128" stroke="#f97316" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-fps)"/>
      <line x1="285" y1="150" x2="295" y2="150" stroke="#f97316" stroke-opacity="0.4" stroke-width="1.5" marker-end="url(#a-fps)"/>
      <line x1="415" y1="128" x2="405" y2="128" stroke="#f97316" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-fps)"/>
      <line x1="415" y1="150" x2="405" y2="150" stroke="#f97316" stroke-opacity="0.4" stroke-width="1.5" marker-end="url(#a-fps)"/>
      <text x="350" y="280" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">Rust · Bevy ECS · UDP · Netcode · Client Prediction · Server Authority</text>
    </svg>

    <!-- localhost -->
    <svg v-else-if="slug === 'localhost'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-lh" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#fb923c" fill-opacity="0.8" text-anchor="middle">HTTP/1.1 Request Lifecycle — Localhost (Rust from scratch)</text>
      <!-- 6 stages pipeline -->
      <rect x="12" y="100" width="95" height="60" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="59" y="124" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">TCP Accept</text>
      <text x="59" y="138" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">TcpListener</text>
      <text x="59" y="150" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">thread pool</text>
      <rect x="124" y="100" width="95" height="60" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="171" y="124" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">Read Buffer</text>
      <text x="171" y="138" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">BufReader</text>
      <text x="171" y="150" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">chunked read</text>
      <rect x="236" y="100" width="95" height="60" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="283" y="124" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">Parse HTTP</text>
      <text x="283" y="138" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">method · path</text>
      <text x="283" y="150" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">headers · body</text>
      <rect x="348" y="100" width="95" height="60" rx="5" fill="#f97316" fill-opacity="0.15" stroke="#f97316" stroke-width="1.5" stroke-opacity="0.8"/>
      <text x="395" y="124" font-family="monospace" font-size="9" fill="#fb923c" text-anchor="middle">Route Match</text>
      <text x="395" y="138" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">regex trie</text>
      <text x="395" y="150" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">middleware</text>
      <rect x="460" y="100" width="95" height="60" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="507" y="124" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">Handler</text>
      <text x="507" y="138" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">fn(req) → res</text>
      <text x="507" y="150" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">static files</text>
      <rect x="572" y="100" width="115" height="60" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="629" y="124" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">Write Response</text>
      <text x="629" y="138" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">status · headers</text>
      <text x="629" y="150" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">keep-alive</text>
      <!-- Arrows -->
      <line x1="107" y1="130" x2="117" y2="130" stroke="#f97316" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-lh)"/>
      <line x1="219" y1="130" x2="229" y2="130" stroke="#f97316" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-lh)"/>
      <line x1="331" y1="130" x2="341" y2="130" stroke="#f97316" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-lh)"/>
      <line x1="443" y1="130" x2="453" y2="130" stroke="#f97316" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-lh)"/>
      <line x1="555" y1="130" x2="565" y2="130" stroke="#f97316" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-lh)"/>
      <!-- Error path -->
      <path d="M395 160 L395 210 L283 210 L283 167" fill="none" stroke="#ef4444" stroke-opacity="0.3" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#a-lh)"/>
      <text x="330" y="223" font-family="monospace" font-size="8" fill="#ef4444" fill-opacity="0.4" text-anchor="middle">400 Bad Request</text>
      <!-- 404 path -->
      <path d="M395 160 L395 240 L507 240 L507 167" fill="none" stroke="#f59e0b" stroke-opacity="0.3" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#a-lh)"/>
      <text x="465" y="253" font-family="monospace" font-size="8" fill="#f59e0b" fill-opacity="0.4" text-anchor="middle">404 Not Found</text>
      <text x="350" y="280" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">Rust · std::net · BufReader · Thread Pool · HTTP/1.1 · keep-alive</text>
    </svg>

    <!-- wget -->
    <svg v-else-if="slug === 'wget'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-wget" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#fb923c" fill-opacity="0.8" text-anchor="middle">Download Pipeline — Wget (Rust reimplementation)</text>
      <!-- Main pipeline -->
      <rect x="12" y="95" width="100" height="56" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="62" y="117" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">URL Parse</text>
      <text x="62" y="130" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">scheme · host</text>
      <text x="62" y="142" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">path · query</text>
      <rect x="130" y="95" width="100" height="56" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="180" y="117" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">DNS Resolve</text>
      <text x="180" y="130" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">trust-dns</text>
      <text x="180" y="142" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">IPv4 / IPv6</text>
      <rect x="248" y="95" width="100" height="56" rx="5" fill="#f97316" fill-opacity="0.15" stroke="#f97316" stroke-width="1.5" stroke-opacity="0.8"/>
      <text x="298" y="117" font-family="monospace" font-size="9" fill="#fb923c" text-anchor="middle">TLS Connect</text>
      <text x="298" y="130" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">rustls</text>
      <text x="298" y="142" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">cert verify</text>
      <rect x="366" y="95" width="100" height="56" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="416" y="117" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">HTTP GET</text>
      <text x="416" y="130" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">Range: bytes</text>
      <text x="416" y="142" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">redirect follow</text>
      <rect x="484" y="95" width="100" height="56" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="534" y="117" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">Stream Read</text>
      <text x="534" y="130" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">async chunks</text>
      <text x="534" y="142" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">progress bar</text>
      <rect x="602" y="95" width="88" height="56" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="646" y="117" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">File Write</text>
      <text x="646" y="130" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">BufWriter</text>
      <text x="646" y="142" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">atomic rename</text>
      <!-- Arrows -->
      <line x1="112" y1="123" x2="123" y2="123" stroke="#f97316" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-wget)"/>
      <line x1="230" y1="123" x2="241" y2="123" stroke="#f97316" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-wget)"/>
      <line x1="348" y1="123" x2="359" y2="123" stroke="#f97316" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-wget)"/>
      <line x1="466" y1="123" x2="477" y2="123" stroke="#f97316" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-wget)"/>
      <line x1="584" y1="123" x2="595" y2="123" stroke="#f97316" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-wget)"/>
      <!-- Mirror mode bottom -->
      <rect x="130" y="190" width="440" height="50" rx="5" fill="#f97316" fill-opacity="0.06" stroke="#f97316" stroke-width="1" stroke-opacity="0.3"/>
      <text x="350" y="208" font-family="monospace" font-size="9" fill="#f97316" fill-opacity="0.6" text-anchor="middle">Mirror Mode: HTML Parser → Recurse Links → Queue → Download Workers</text>
      <text x="350" y="224" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">concurrent downloads · robots.txt · depth limit · domain filter</text>
      <line x1="298" y1="151" x2="298" y2="183" stroke="#f97316" stroke-opacity="0.3" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#a-wget)"/>
      <text x="350" y="275" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">Rust · async/await · tokio · rustls · HTML parsing · concurrent I/O</text>
    </svg>

    <!-- smart-road -->
    <svg v-else-if="slug === 'smart-road'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-sr" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f97316" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#fb923c" fill-opacity="0.8" text-anchor="middle">Simulation Loop — Smart Road (Rust + SDL2)</text>
      <!-- Simulation loop (hexagonal arrangement) -->
      <!-- Spawn (top) -->
      <rect x="275" y="45" width="150" height="44" rx="5" fill="#f97316" fill-opacity="0.12" stroke="#f97316" stroke-width="1.5" stroke-opacity="0.8"/>
      <text x="350" y="63" font-family="monospace" font-size="9" fill="#fb923c" text-anchor="middle">Vehicle Spawner</text>
      <text x="350" y="79" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">rate · direction · random seed</text>
      <!-- Physics (bottom-right) -->
      <rect x="490" y="130" width="150" height="44" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="565" y="148" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">Physics Update</text>
      <text x="565" y="163" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">accel · brake · velocity</text>
      <!-- Collision (right) -->
      <rect x="490" y="210" width="150" height="44" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="565" y="228" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">Collision Check</text>
      <text x="565" y="243" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">AABB · zero-collision</text>
      <!-- Intersection (center) -->
      <rect x="265" y="148" width="170" height="52" rx="6" fill="#f97316" fill-opacity="0.18" stroke="#f97316" stroke-width="2" stroke-opacity="0.9"/>
      <text x="350" y="168" font-family="monospace" font-size="10" fill="#f97316" text-anchor="middle" font-weight="bold">Intersection Mgr</text>
      <text x="350" y="183" font-family="monospace" font-size="7" fill="#fdba74" text-anchor="middle">priority algorithm</text>
      <text x="350" y="195" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">no deadlock guarantee</text>
      <!-- Render (bottom-left) -->
      <rect x="60" y="210" width="150" height="44" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="135" y="228" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">SDL2 Renderer</text>
      <text x="135" y="243" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">60fps · canvas</text>
      <!-- Stats (left) -->
      <rect x="60" y="130" width="150" height="44" rx="5" fill="#f97316" fill-opacity="0.1" stroke="#f97316" stroke-width="1" stroke-opacity="0.5"/>
      <text x="135" y="148" font-family="monospace" font-size="9" fill="#fdba74" text-anchor="middle">Stats Overlay</text>
      <text x="135" y="163" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">throughput · wait time</text>
      <!-- Cycle arrows -->
      <line x1="400" y1="89" x2="510" y2="123" stroke="#f97316" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-sr)"/>
      <line x1="565" y1="174" x2="565" y2="203" stroke="#f97316" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-sr)"/>
      <line x1="490" y1="232" x2="435" y2="193" stroke="#f97316" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-sr)"/>
      <line x1="265" y1="193" x2="210" y2="232" stroke="#f97316" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-sr)"/>
      <line x1="135" y1="210" x2="135" y2="181" stroke="#f97316" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-sr)"/>
      <line x1="210" y1="152" x2="258" y2="168" stroke="#f97316" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-sr)"/>
      <line x1="300" y1="148" x2="300" y2="89" stroke="#f97316" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-sr)"/>
      <text x="350" y="278" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">Rust · SDL2 · ECS pattern · Simulation · Deterministic · 60 FPS</text>
    </svg>

    <!-- ═══════════════════════════════════════════════════
         WEB & BACKEND
    ═══════════════════════════════════════════════════ -->

    <!-- real-time-forum -->
    <svg v-else-if="slug === 'real-time-forum'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-rtf" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0ea5e9" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#38bdf8" fill-opacity="0.8" text-anchor="middle">Real-Time Architecture — Forum (Go + WebSocket)</text>
      <!-- Clients left -->
      <rect x="15" y="60" width="100" height="30" rx="5" fill="#0ea5e9" fill-opacity="0.08" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.4"/>
      <text x="65" y="79" font-family="monospace" font-size="8" fill="#7dd3fc" text-anchor="middle">Client A (WS)</text>
      <rect x="15" y="105" width="100" height="30" rx="5" fill="#0ea5e9" fill-opacity="0.08" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.4"/>
      <text x="65" y="124" font-family="monospace" font-size="8" fill="#7dd3fc" text-anchor="middle">Client B (WS)</text>
      <rect x="15" y="150" width="100" height="30" rx="5" fill="#0ea5e9" fill-opacity="0.08" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.4"/>
      <text x="65" y="169" font-family="monospace" font-size="8" fill="#7dd3fc" text-anchor="middle">Client C (WS)</text>
      <rect x="15" y="195" width="100" height="30" rx="5" fill="#0ea5e9" fill-opacity="0.06" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.3"/>
      <text x="65" y="214" font-family="monospace" font-size="8" fill="#7dd3fc" text-anchor="middle">Client N ...</text>
      <!-- Arrows to WS Hub -->
      <line x1="115" y1="75" x2="198" y2="130" stroke="#0ea5e9" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-rtf)"/>
      <line x1="115" y1="120" x2="198" y2="148" stroke="#0ea5e9" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-rtf)"/>
      <line x1="115" y1="165" x2="198" y2="165" stroke="#0ea5e9" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-rtf)"/>
      <line x1="115" y1="210" x2="198" y2="183" stroke="#0ea5e9" stroke-opacity="0.4" stroke-width="1.5" marker-end="url(#a-rtf)"/>
      <!-- WS Hub (center) -->
      <rect x="203" y="110" width="140" height="110" rx="8" fill="#0ea5e9" fill-opacity="0.14" stroke="#0ea5e9" stroke-width="2" stroke-opacity="0.8"/>
      <text x="273" y="132" font-family="monospace" font-size="10" fill="#0ea5e9" text-anchor="middle" font-weight="bold">WS Hub</text>
      <text x="273" y="148" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">goroutine / client</text>
      <text x="273" y="162" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">channel select{}</text>
      <text x="273" y="176" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">broadcast map</text>
      <text x="273" y="190" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">register/unregister</text>
      <text x="273" y="204" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">ping/pong keepalive</text>
      <!-- Arrows Hub → next -->
      <line x1="343" y1="148" x2="408" y2="100" stroke="#0ea5e9" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-rtf)"/>
      <line x1="343" y1="165" x2="408" y2="165" stroke="#0ea5e9" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-rtf)"/>
      <line x1="343" y1="182" x2="408" y2="230" stroke="#0ea5e9" stroke-opacity="0.4" stroke-width="1.5" marker-end="url(#a-rtf)"/>
      <!-- Right side components -->
      <rect x="413" y="74" width="130" height="42" rx="5" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.5"/>
      <text x="478" y="91" font-family="monospace" font-size="9" fill="#7dd3fc" text-anchor="middle">Auth Middleware</text>
      <text x="478" y="106" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">JWT validate · session</text>
      <rect x="413" y="144" width="130" height="42" rx="5" fill="#0ea5e9" fill-opacity="0.15" stroke="#0ea5e9" stroke-width="1.5" stroke-opacity="0.8"/>
      <text x="478" y="161" font-family="monospace" font-size="9" fill="#38bdf8" text-anchor="middle">Broadcast Engine</text>
      <text x="478" y="176" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">fan-out · filter rooms</text>
      <rect x="413" y="214" width="130" height="42" rx="5" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.5"/>
      <text x="478" y="231" font-family="monospace" font-size="9" fill="#7dd3fc" text-anchor="middle">SQLite DB</text>
      <text x="478" y="246" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">persist messages</text>
      <!-- REST API side -->
      <line x1="543" y1="165" x2="600" y2="130" stroke="#0ea5e9" stroke-opacity="0.4" stroke-width="1.5" marker-end="url(#a-rtf)"/>
      <rect x="605" y="100" width="82" height="120" rx="5" fill="#0ea5e9" fill-opacity="0.07" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.3"/>
      <text x="646" y="122" font-family="monospace" font-size="8" fill="#0ea5e9" fill-opacity="0.6" text-anchor="middle">REST API</text>
      <text x="646" y="138" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">GET /posts</text>
      <text x="646" y="152" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">POST /msg</text>
      <text x="646" y="166" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">GET /users</text>
      <text x="646" y="180" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">DELETE</text>
      <text x="646" y="194" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">/session</text>
      <text x="350" y="278" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">Go · goroutines · channels · WebSocket · JWT · SQLite · SPA</text>
    </svg>

    <!-- forum-security -->
    <svg v-else-if="slug === 'forum-security'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-fs" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0ea5e9" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#38bdf8" fill-opacity="0.8" text-anchor="middle">Security Middleware Chain — Forum Sécurisé (Go)</text>
      <!-- HTTP Request -->
      <rect x="12" y="110" width="80" height="46" rx="5" fill="#0ea5e9" fill-opacity="0.08" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.4"/>
      <text x="52" y="130" font-family="monospace" font-size="9" fill="#7dd3fc" text-anchor="middle">HTTP</text>
      <text x="52" y="144" font-family="monospace" font-size="9" fill="#7dd3fc" text-anchor="middle">Request</text>
      <line x1="92" y1="133" x2="107" y2="133" stroke="#0ea5e9" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-fs)"/>
      <!-- CSRF -->
      <rect x="112" y="98" width="96" height="70" rx="5" fill="#ef4444" fill-opacity="0.1" stroke="#ef4444" stroke-width="1" stroke-opacity="0.5"/>
      <text x="160" y="118" font-family="monospace" font-size="8" fill="#fca5a5" text-anchor="middle">CSRF</text>
      <text x="160" y="130" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">token verify</text>
      <text x="160" y="142" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">SameSite</text>
      <text x="160" y="154" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">Double Submit</text>
      <line x1="208" y1="133" x2="223" y2="133" stroke="#0ea5e9" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-fs)"/>
      <!-- XSS -->
      <rect x="228" y="98" width="96" height="70" rx="5" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5"/>
      <text x="276" y="118" font-family="monospace" font-size="8" fill="#fcd34d" text-anchor="middle">XSS Sanitize</text>
      <text x="276" y="130" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">html.Escape</text>
      <text x="276" y="142" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">CSP headers</text>
      <text x="276" y="154" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">input allowlist</text>
      <line x1="324" y1="133" x2="339" y2="133" stroke="#0ea5e9" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-fs)"/>
      <!-- Rate Limit -->
      <rect x="344" y="98" width="96" height="70" rx="5" fill="#8b5cf6" fill-opacity="0.1" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.5"/>
      <text x="392" y="118" font-family="monospace" font-size="8" fill="#c4b5fd" text-anchor="middle">Rate Limiter</text>
      <text x="392" y="130" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">token bucket</text>
      <text x="392" y="142" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">per IP · user</text>
      <text x="392" y="154" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">backoff exp.</text>
      <line x1="440" y1="133" x2="455" y2="133" stroke="#0ea5e9" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-fs)"/>
      <!-- Auth -->
      <rect x="460" y="98" width="96" height="70" rx="5" fill="#4ade80" fill-opacity="0.08" stroke="#4ade80" stroke-width="1" stroke-opacity="0.5"/>
      <text x="508" y="118" font-family="monospace" font-size="8" fill="#86efac" text-anchor="middle">Auth Check</text>
      <text x="508" y="130" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">bcrypt verify</text>
      <text x="508" y="142" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">session store</text>
      <text x="508" y="154" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">RBAC</text>
      <line x1="556" y1="133" x2="571" y2="133" stroke="#0ea5e9" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-fs)"/>
      <!-- Handler -->
      <rect x="576" y="98" width="110" height="70" rx="5" fill="#0ea5e9" fill-opacity="0.15" stroke="#0ea5e9" stroke-width="1.5" stroke-opacity="0.8"/>
      <text x="631" y="118" font-family="monospace" font-size="9" fill="#38bdf8" text-anchor="middle">Handler</text>
      <text x="631" y="132" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">business logic</text>
      <text x="631" y="146" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">HSTS headers</text>
      <text x="631" y="160" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">X-Frame-Options</text>
      <!-- Rejection paths (downward) -->
      <line x1="160" y1="168" x2="160" y2="200" stroke="#ef4444" stroke-opacity="0.5" stroke-width="1" marker-end="url(#a-fs)"/>
      <rect x="110" y="205" width="100" height="26" rx="4" fill="#ef4444" fill-opacity="0.1" stroke="#ef4444" stroke-width="1" stroke-opacity="0.4"/>
      <text x="160" y="222" font-family="monospace" font-size="8" fill="#fca5a5" text-anchor="middle">403 Forbidden</text>
      <line x1="392" y1="168" x2="392" y2="200" stroke="#8b5cf6" stroke-opacity="0.5" stroke-width="1" marker-end="url(#a-fs)"/>
      <rect x="342" y="205" width="100" height="26" rx="4" fill="#8b5cf6" fill-opacity="0.1" stroke="#8b5cf6" stroke-width="1" stroke-opacity="0.4"/>
      <text x="392" y="222" font-family="monospace" font-size="8" fill="#c4b5fd" text-anchor="middle">429 Too Many</text>
      <line x1="508" y1="168" x2="508" y2="200" stroke="#f97316" stroke-opacity="0.5" stroke-width="1" marker-end="url(#a-fs)"/>
      <rect x="458" y="205" width="100" height="26" rx="4" fill="#f97316" fill-opacity="0.08" stroke="#f97316" stroke-width="1" stroke-opacity="0.4"/>
      <text x="508" y="222" font-family="monospace" font-size="8" fill="#fdba74" text-anchor="middle">401 Unauthorized</text>
      <text x="350" y="270" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">Go · CSRF tokens · html.Escape · bcrypt · OWASP Top 10 · HSTS · CSP</text>
    </svg>

    <!-- forum-authentication -->
    <svg v-else-if="slug === 'forum-authentication'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-fa" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0ea5e9" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#38bdf8" fill-opacity="0.8" text-anchor="middle">OAuth2 Flow — Forum Authentication (Go)</text>
      <!-- Flow top row -->
      <rect x="15" y="70" width="85" height="50" rx="5" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.5"/>
      <text x="57" y="91" font-family="monospace" font-size="8" fill="#7dd3fc" text-anchor="middle">User Login</text>
      <text x="57" y="103" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">click OAuth</text>
      <rect x="135" y="70" width="98" height="50" rx="5" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.5"/>
      <text x="184" y="91" font-family="monospace" font-size="8" fill="#7dd3fc" text-anchor="middle">State + PKCE</text>
      <text x="184" y="103" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">generate nonce</text>
      <rect x="268" y="70" width="110" height="50" rx="5" fill="#4ade80" fill-opacity="0.08" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="323" y="91" font-family="monospace" font-size="8" fill="#86efac" text-anchor="middle">OAuth Provider</text>
      <text x="323" y="103" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">Google · GitHub</text>
      <rect x="413" y="70" width="98" height="50" rx="5" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.5"/>
      <text x="462" y="91" font-family="monospace" font-size="8" fill="#7dd3fc" text-anchor="middle">Callback URL</text>
      <text x="462" y="103" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">verify state</text>
      <rect x="546" y="70" width="98" height="50" rx="5" fill="#0ea5e9" fill-opacity="0.12" stroke="#0ea5e9" stroke-width="1.5" stroke-opacity="0.7"/>
      <text x="595" y="91" font-family="monospace" font-size="8" fill="#38bdf8" text-anchor="middle">Token Exchange</text>
      <text x="595" y="103" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">code → access</text>
      <!-- Arrows top row -->
      <line x1="100" y1="95" x2="128" y2="95" stroke="#0ea5e9" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-fa)"/>
      <line x1="233" y1="95" x2="261" y2="95" stroke="#0ea5e9" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-fa)"/>
      <line x1="378" y1="95" x2="406" y2="95" stroke="#0ea5e9" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-fa)"/>
      <line x1="511" y1="95" x2="539" y2="95" stroke="#0ea5e9" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-fa)"/>
      <!-- Down arrow from token exchange -->
      <line x1="595" y1="120" x2="595" y2="156" stroke="#0ea5e9" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-fa)"/>
      <!-- Flow bottom row (reversed) -->
      <rect x="546" y="161" width="98" height="50" rx="5" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.5"/>
      <text x="595" y="182" font-family="monospace" font-size="8" fill="#7dd3fc" text-anchor="middle">Fetch Profile</text>
      <text x="595" y="194" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">name · email · id</text>
      <rect x="413" y="161" width="98" height="50" rx="5" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.5"/>
      <text x="462" y="182" font-family="monospace" font-size="8" fill="#7dd3fc" text-anchor="middle">Upsert User</text>
      <text x="462" y="194" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">DB create/find</text>
      <rect x="270" y="161" width="108" height="50" rx="5" fill="#0ea5e9" fill-opacity="0.15" stroke="#0ea5e9" stroke-width="1.5" stroke-opacity="0.8"/>
      <text x="324" y="182" font-family="monospace" font-size="8" fill="#38bdf8" text-anchor="middle">Create Session</text>
      <text x="324" y="194" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">UUID token</text>
      <rect x="135" y="161" width="100" height="50" rx="5" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.5"/>
      <text x="185" y="182" font-family="monospace" font-size="8" fill="#7dd3fc" text-anchor="middle">Set Cookie</text>
      <text x="185" y="194" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">httpOnly · Secure</text>
      <rect x="15" y="161" width="85" height="50" rx="5" fill="#4ade80" fill-opacity="0.08" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="57" y="182" font-family="monospace" font-size="8" fill="#86efac" text-anchor="middle">Logged In</text>
      <text x="57" y="194" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">redirect home</text>
      <!-- Arrows bottom row (RTL) -->
      <line x1="546" y1="186" x2="511" y2="186" stroke="#0ea5e9" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-fa)"/>
      <line x1="413" y1="186" x2="378" y2="186" stroke="#0ea5e9" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-fa)"/>
      <line x1="270" y1="186" x2="235" y2="186" stroke="#0ea5e9" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-fa)"/>
      <line x1="135" y1="186" x2="100" y2="186" stroke="#0ea5e9" stroke-opacity="0.55" stroke-width="1.5" marker-end="url(#a-fa)"/>
      <text x="350" y="270" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">Go · OAuth2 · Google · GitHub · PKCE · Sessions · httpOnly Cookies · SQLite</text>
    </svg>

    <!-- net-cat -->
    <svg v-else-if="slug === 'net-cat'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs>
        <marker id="a-nc" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0ea5e9" fill-opacity="0.75"/></marker>
        <marker id="a-nc-b" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0ea5e9" fill-opacity="0.4"/></marker>
      </defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#38bdf8" fill-opacity="0.8" text-anchor="middle">TCP Multicast Architecture — Net-Cat (Go)</text>
      <!-- Clients -->
      <rect x="15" y="70" width="110" height="40" rx="5" fill="#0ea5e9" fill-opacity="0.08" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.4"/>
      <text x="70" y="87" font-family="monospace" font-size="8" fill="#7dd3fc" text-anchor="middle">Client A</text>
      <text x="70" y="100" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">tcp conn goroutine</text>
      <rect x="15" y="130" width="110" height="40" rx="5" fill="#0ea5e9" fill-opacity="0.08" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.4"/>
      <text x="70" y="147" font-family="monospace" font-size="8" fill="#7dd3fc" text-anchor="middle">Client B</text>
      <text x="70" y="160" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">tcp conn goroutine</text>
      <rect x="15" y="190" width="110" height="40" rx="5" fill="#0ea5e9" fill-opacity="0.08" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.4"/>
      <text x="70" y="207" font-family="monospace" font-size="8" fill="#7dd3fc" text-anchor="middle">Client C</text>
      <text x="70" y="220" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">tcp conn goroutine</text>
      <!-- TCP Listener -->
      <rect x="165" y="120" width="110" height="60" rx="5" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.5"/>
      <text x="220" y="142" font-family="monospace" font-size="9" fill="#7dd3fc" text-anchor="middle">TCP Listener</text>
      <text x="220" y="156" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">net.Listen</text>
      <text x="220" y="170" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">Accept() loop</text>
      <!-- Hub central -->
      <rect x="322" y="96" width="140" height="108" rx="8" fill="#0ea5e9" fill-opacity="0.14" stroke="#0ea5e9" stroke-width="2" stroke-opacity="0.8"/>
      <text x="392" y="120" font-family="monospace" font-size="10" fill="#0ea5e9" text-anchor="middle" font-weight="bold">Hub</text>
      <text x="392" y="136" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">clients map[conn]</text>
      <text x="392" y="150" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">broadcast channel</text>
      <text x="392" y="164" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">join/leave announce</text>
      <text x="392" y="178" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">mutex safe</text>
      <text x="392" y="192" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">name registry</text>
      <!-- Arrows Clients → Listener -->
      <line x1="125" y1="90" x2="158" y2="140" stroke="#0ea5e9" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-nc)"/>
      <line x1="125" y1="150" x2="158" y2="150" stroke="#0ea5e9" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-nc)"/>
      <line x1="125" y1="210" x2="158" y2="162" stroke="#0ea5e9" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-nc)"/>
      <!-- Listener → Hub -->
      <line x1="275" y1="150" x2="315" y2="150" stroke="#0ea5e9" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-nc)"/>
      <!-- Hub → Broadcast back to clients -->
      <line x1="322" y1="135" x2="210" y2="90" stroke="#0ea5e9" stroke-opacity="0.35" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#a-nc-b)"/>
      <line x1="322" y1="150" x2="275" y2="150" stroke="#0ea5e9" stroke-opacity="0.35" stroke-width="1.5" stroke-dasharray="5,3"/>
      <line x1="322" y1="165" x2="210" y2="210" stroke="#0ea5e9" stroke-opacity="0.35" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#a-nc-b)"/>
      <!-- History DB and formatter -->
      <line x1="462" y1="150" x2="510" y2="120" stroke="#0ea5e9" stroke-opacity="0.4" stroke-width="1.5" marker-end="url(#a-nc)"/>
      <line x1="462" y1="165" x2="510" y2="200" stroke="#0ea5e9" stroke-opacity="0.4" stroke-width="1.5" marker-end="url(#a-nc)"/>
      <rect x="515" y="92" width="115" height="50" rx="5" fill="#0ea5e9" fill-opacity="0.08" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.4"/>
      <text x="572" y="111" font-family="monospace" font-size="8" fill="#7dd3fc" text-anchor="middle">Message Format</text>
      <text x="572" y="126" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">[time][name]: msg</text>
      <rect x="515" y="175" width="115" height="50" rx="5" fill="#0ea5e9" fill-opacity="0.08" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.4"/>
      <text x="572" y="196" font-family="monospace" font-size="8" fill="#7dd3fc" text-anchor="middle">History Store</text>
      <text x="572" y="211" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">replay on join</text>
      <text x="350" y="275" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">Go · net.Conn · goroutines · channels · sync.Mutex · TCP</text>
    </svg>

    <!-- lem-in -->
    <svg v-else-if="slug === 'lem-in'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-li" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#0ea5e9" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#38bdf8" fill-opacity="0.8" text-anchor="middle">Algorithm Pipeline — Lem-In (Go · Max Flow)</text>
      <!-- Graph preview on right side -->
      <g transform="translate(500, 60)">
        <text x="90" y="12" font-family="monospace" font-size="8" fill="#0ea5e9" fill-opacity="0.5" text-anchor="middle">graph preview</text>
        <circle cx="20" cy="50" r="12" fill="#0ea5e9" fill-opacity="0.15" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.6"/>
        <text x="20" y="54" font-family="monospace" font-size="8" fill="#7dd3fc" text-anchor="middle">##start</text>
        <circle cx="90" cy="30" r="10" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.4"/>
        <text x="90" y="34" font-family="monospace" font-size="7" fill="#7dd3fc" text-anchor="middle">n1</text>
        <circle cx="90" cy="70" r="10" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.4"/>
        <text x="90" y="74" font-family="monospace" font-size="7" fill="#7dd3fc" text-anchor="middle">n2</text>
        <circle cx="150" cy="30" r="10" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.4"/>
        <text x="150" y="34" font-family="monospace" font-size="7" fill="#7dd3fc" text-anchor="middle">n3</text>
        <circle cx="150" cy="70" r="10" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.4"/>
        <text x="150" y="74" font-family="monospace" font-size="7" fill="#7dd3fc" text-anchor="middle">n4</text>
        <circle cx="180" cy="50" r="12" fill="#4ade80" fill-opacity="0.15" stroke="#4ade80" stroke-width="1" stroke-opacity="0.6"/>
        <text x="180" y="54" font-family="monospace" font-size="7" fill="#86efac" text-anchor="middle">##end</text>
        <line x1="32" y1="50" x2="80" y2="32" stroke="#0ea5e9" stroke-opacity="0.4" stroke-width="1"/>
        <line x1="32" y1="50" x2="80" y2="68" stroke="#0ea5e9" stroke-opacity="0.4" stroke-width="1"/>
        <line x1="100" y1="30" x2="140" y2="30" stroke="#f97316" stroke-opacity="0.6" stroke-width="1.5"/>
        <line x1="100" y1="70" x2="140" y2="70" stroke="#f97316" stroke-opacity="0.6" stroke-width="1.5"/>
        <line x1="160" y1="30" x2="168" y2="44" stroke="#0ea5e9" stroke-opacity="0.4" stroke-width="1"/>
        <line x1="160" y1="70" x2="168" y2="56" stroke="#0ea5e9" stroke-opacity="0.4" stroke-width="1"/>
        <text x="90" y="105" font-family="monospace" font-size="7" fill="#f97316" fill-opacity="0.6" text-anchor="middle">orange = chosen paths</text>
      </g>
      <!-- Pipeline stages (left side) -->
      <rect x="12" y="68" width="92" height="56" rx="5" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.5"/>
      <text x="58" y="88" font-family="monospace" font-size="9" fill="#7dd3fc" text-anchor="middle">Input File</text>
      <text x="58" y="102" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">ants count</text>
      <text x="58" y="115" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">rooms · tunnels</text>
      <rect x="122" y="68" width="92" height="56" rx="5" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.5"/>
      <text x="168" y="88" font-family="monospace" font-size="9" fill="#7dd3fc" text-anchor="middle">Parser</text>
      <text x="168" y="102" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">validate graph</text>
      <text x="168" y="115" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">error handling</text>
      <rect x="232" y="68" width="92" height="56" rx="5" fill="#0ea5e9" fill-opacity="0.15" stroke="#0ea5e9" stroke-width="1.5" stroke-opacity="0.8"/>
      <text x="278" y="88" font-family="monospace" font-size="9" fill="#38bdf8" text-anchor="middle">BFS Paths</text>
      <text x="278" y="102" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">find all paths</text>
      <text x="278" y="115" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">start→end</text>
      <rect x="342" y="68" width="120" height="56" rx="5" fill="#0ea5e9" fill-opacity="0.15" stroke="#0ea5e9" stroke-width="1.5" stroke-opacity="0.8"/>
      <text x="402" y="88" font-family="monospace" font-size="9" fill="#38bdf8" text-anchor="middle">Max Flow</text>
      <text x="402" y="102" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">Edmonds-Karp</text>
      <text x="402" y="115" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">disjoint paths</text>
      <!-- Bottom row -->
      <rect x="122" y="168" width="92" height="56" rx="5" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.5"/>
      <text x="168" y="188" font-family="monospace" font-size="9" fill="#7dd3fc" text-anchor="middle">Ant Assign</text>
      <text x="168" y="202" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">distribute ants</text>
      <text x="168" y="215" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">min turns calc</text>
      <rect x="232" y="168" width="92" height="56" rx="5" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.5"/>
      <text x="278" y="188" font-family="monospace" font-size="9" fill="#7dd3fc" text-anchor="middle">Simulate</text>
      <text x="278" y="202" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">move per turn</text>
      <text x="278" y="215" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">no collision</text>
      <rect x="342" y="168" width="92" height="56" rx="5" fill="#0ea5e9" fill-opacity="0.1" stroke="#0ea5e9" stroke-width="1" stroke-opacity="0.5"/>
      <text x="388" y="188" font-family="monospace" font-size="9" fill="#7dd3fc" text-anchor="middle">Output</text>
      <text x="388" y="202" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">Lx-y format</text>
      <text x="388" y="215" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">turn by turn</text>
      <!-- Arrows top row -->
      <line x1="104" y1="96" x2="115" y2="96" stroke="#0ea5e9" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-li)"/>
      <line x1="214" y1="96" x2="225" y2="96" stroke="#0ea5e9" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-li)"/>
      <line x1="324" y1="96" x2="335" y2="96" stroke="#0ea5e9" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-li)"/>
      <!-- Down -->
      <line x1="402" y1="124" x2="278" y2="161" stroke="#0ea5e9" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-li)"/>
      <!-- Bottom arrows -->
      <line x1="232" y1="196" x2="221" y2="196" stroke="#0ea5e9" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-li)"/>
      <line x1="324" y1="196" x2="335" y2="196" stroke="#0ea5e9" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-li)"/>
      <text x="280" y="278" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">Go · BFS · Edmonds-Karp · Graph theory · Max flow · Optimization</text>
    </svg>

    <!-- ═══════════════════════════════════════════════════
         FRONTEND & JS
    ═══════════════════════════════════════════════════ -->

    <!-- mini-framework -->
    <svg v-else-if="slug === 'mini-framework'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-mf" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f59e0b" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#fbbf24" fill-opacity="0.8" text-anchor="middle">Reactive Lifecycle — Mini Framework (JS from scratch)</text>
      <!-- Circular reactive loop -->
      <!-- State (top center) -->
      <rect x="268" y="42" width="164" height="52" rx="6" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-width="2" stroke-opacity="0.9"/>
      <text x="350" y="63" font-family="monospace" font-size="10" fill="#f59e0b" text-anchor="middle" font-weight="bold">Reactive State</text>
      <text x="350" y="78" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">Proxy(ES6) · getter/setter traps</text>
      <!-- Proxy Trap (right top) -->
      <rect x="498" y="80" width="140" height="46" rx="5" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5"/>
      <text x="568" y="100" font-family="monospace" font-size="9" fill="#fcd34d" text-anchor="middle">Proxy Trap</text>
      <text x="568" y="115" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">set → notify deps</text>
      <!-- Scheduler (right) -->
      <rect x="530" y="162" width="140" height="46" rx="5" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5"/>
      <text x="600" y="182" font-family="monospace" font-size="9" fill="#fcd34d" text-anchor="middle">Scheduler</text>
      <text x="600" y="197" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">microtask queue</text>
      <!-- Diff vDOM (bottom center) -->
      <rect x="278" y="210" width="164" height="52" rx="6" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="1.5" stroke-opacity="0.7"/>
      <text x="360" y="232" font-family="monospace" font-size="9" fill="#fbbf24" text-anchor="middle">Diff Algorithm</text>
      <text x="360" y="248" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">vDOM tree compare · patch</text>
      <!-- Patch DOM (left) -->
      <rect x="62" y="162" width="140" height="46" rx="5" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5"/>
      <text x="132" y="182" font-family="monospace" font-size="9" fill="#fcd34d" text-anchor="middle">Patch DOM</text>
      <text x="132" y="197" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">minimal DOM ops</text>
      <!-- Event Handler (left top) -->
      <rect x="62" y="80" width="140" height="46" rx="5" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5"/>
      <text x="132" y="100" font-family="monospace" font-size="9" fill="#fcd34d" text-anchor="middle">Event Handler</text>
      <text x="132" y="115" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">delegation · synthetic</text>
      <!-- Cycle arrows (clockwise) -->
      <line x1="432" y1="68" x2="491" y2="90" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-mf)"/>
      <line x1="568" y1="126" x2="568" y2="155" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-mf)"/>
      <line x1="530" y1="190" x2="450" y2="224" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-mf)"/>
      <line x1="278" y1="236" x2="202" y2="208" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-mf)"/>
      <line x1="132" y1="162" x2="132" y2="133" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-mf)"/>
      <line x1="202" y1="103" x2="261" y2="80" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-mf)"/>
      <!-- Router box -->
      <rect x="268" y="128" width="164" height="36" rx="5" fill="#f59e0b" fill-opacity="0.07" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.3"/>
      <text x="350" y="143" font-family="monospace" font-size="8" fill="#f59e0b" fill-opacity="0.6" text-anchor="middle">Client Router</text>
      <text x="350" y="156" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">history API · hash mode</text>
      <text x="350" y="280" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">JavaScript · Proxy ES6 · Virtual DOM · Diffing · Event Delegation · Router</text>
    </svg>

    <!-- bomberman-dom -->
    <svg v-else-if="slug === 'bomberman-dom'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-bd" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f59e0b" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#fbbf24" fill-opacity="0.8" text-anchor="middle">Game Loop — Bomberman DOM (JS · 60fps without Canvas)</text>
      <!-- Game loop pipeline -->
      <rect x="12" y="96" width="100" height="60" rx="5" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5"/>
      <text x="62" y="120" font-family="monospace" font-size="9" fill="#fcd34d" text-anchor="middle">Input Events</text>
      <text x="62" y="134" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">keydown · up</text>
      <text x="62" y="147" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">4-player map</text>
      <rect x="130" y="96" width="100" height="60" rx="5" fill="#f59e0b" fill-opacity="0.12" stroke="#f59e0b" stroke-width="1.5" stroke-opacity="0.7"/>
      <text x="180" y="120" font-family="monospace" font-size="9" fill="#fbbf24" text-anchor="middle">Game State</text>
      <text x="180" y="134" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">players · bombs</text>
      <text x="180" y="147" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">grid · power-ups</text>
      <rect x="248" y="96" width="100" height="60" rx="5" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5"/>
      <text x="298" y="120" font-family="monospace" font-size="9" fill="#fcd34d" text-anchor="middle">Physics</text>
      <text x="298" y="134" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">movement</text>
      <text x="298" y="147" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">wall check</text>
      <rect x="366" y="96" width="100" height="60" rx="5" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5"/>
      <text x="416" y="120" font-family="monospace" font-size="9" fill="#fcd34d" text-anchor="middle">Bomb Timer</text>
      <text x="416" y="134" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">explosion cross</text>
      <text x="416" y="147" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">chain reaction</text>
      <rect x="484" y="96" width="100" height="60" rx="5" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5"/>
      <text x="534" y="120" font-family="monospace" font-size="9" fill="#fcd34d" text-anchor="middle">DOM Diff</text>
      <text x="534" y="134" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">batch updates</text>
      <text x="534" y="147" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">no reflow</text>
      <rect x="600" y="96" width="90" height="60" rx="5" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5"/>
      <text x="645" y="120" font-family="monospace" font-size="9" fill="#fcd34d" text-anchor="middle">Render</text>
      <text x="645" y="134" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">CSS classes</text>
      <text x="645" y="147" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">60 FPS DOM</text>
      <!-- Arrows -->
      <line x1="112" y1="126" x2="123" y2="126" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-bd)"/>
      <line x1="230" y1="126" x2="241" y2="126" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-bd)"/>
      <line x1="348" y1="126" x2="359" y2="126" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-bd)"/>
      <line x1="466" y1="126" x2="477" y2="126" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-bd)"/>
      <line x1="584" y1="126" x2="593" y2="126" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-bd)"/>
      <!-- Loop back arrow -->
      <path d="M645 156 L645 215 L62 215 L62 163" fill="none" stroke="#f59e0b" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#a-bd)"/>
      <text x="350" y="232" font-family="monospace" font-size="8" fill="#f59e0b" fill-opacity="0.4" text-anchor="middle">rAF loop · next frame</text>
      <!-- Level generator box -->
      <rect x="130" y="248" width="440" height="22" rx="4" fill="#f59e0b" fill-opacity="0.06" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.25"/>
      <text x="350" y="263" font-family="monospace" font-size="8" fill="#f59e0b" fill-opacity="0.5" text-anchor="middle">Procedural Level Generator · 4-player local · AI bots · power-ups</text>
      <text x="350" y="285" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">JavaScript · DOM manipulation · CSS animations · requestAnimationFrame</text>
    </svg>

    <!-- make-your-game -->
    <svg v-else-if="slug === 'make-your-game'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-myg" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#f59e0b" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#fbbf24" fill-opacity="0.8" text-anchor="middle">Optimized Game Loop — Make Your Game (60 FPS · rAF)</text>
      <!-- rAF loop cycle -->
      <rect x="268" y="42" width="164" height="46" rx="6" fill="#f59e0b" fill-opacity="0.15" stroke="#f59e0b" stroke-width="2" stroke-opacity="0.9"/>
      <text x="350" y="62" font-family="monospace" font-size="10" fill="#f59e0b" text-anchor="middle" font-weight="bold">requestAnimationFrame</text>
      <text x="350" y="78" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">browser callback · 16.67ms budget</text>
      <!-- Right: Delta time -->
      <rect x="498" y="90" width="140" height="44" rx="5" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5"/>
      <text x="568" y="109" font-family="monospace" font-size="9" fill="#fcd34d" text-anchor="middle">Delta Time</text>
      <text x="568" y="123" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">dt = now - lastTime</text>
      <!-- Right-bottom: Update Logic -->
      <rect x="498" y="162" width="140" height="44" rx="5" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5"/>
      <text x="568" y="181" font-family="monospace" font-size="9" fill="#fcd34d" text-anchor="middle">Update Logic</text>
      <text x="568" y="195" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">entities · physics</text>
      <!-- Bottom: Object Pool -->
      <rect x="278" y="210" width="164" height="44" rx="6" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1.5" stroke-opacity="0.6"/>
      <text x="360" y="229" font-family="monospace" font-size="9" fill="#fbbf24" text-anchor="middle">Object Pool</text>
      <text x="360" y="244" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">zero GC · reuse entities</text>
      <!-- Left-bottom: Render -->
      <rect x="62" y="162" width="140" height="44" rx="5" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5"/>
      <text x="132" y="181" font-family="monospace" font-size="9" fill="#fcd34d" text-anchor="middle">Canvas Render</text>
      <text x="132" y="195" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">clearRect · drawImage</text>
      <!-- Left-top: Score/HUD -->
      <rect x="62" y="90" width="140" height="44" rx="5" fill="#f59e0b" fill-opacity="0.1" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.5"/>
      <text x="132" y="109" font-family="monospace" font-size="9" fill="#fcd34d" text-anchor="middle">Score / HUD</text>
      <text x="132" y="123" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">localStorage · hi-score</text>
      <!-- Arrows (clockwise) -->
      <line x1="432" y1="65" x2="491" y2="100" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-myg)"/>
      <line x1="568" y1="134" x2="568" y2="155" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-myg)"/>
      <line x1="498" y1="192" x2="445" y2="226" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-myg)"/>
      <line x1="278" y1="232" x2="202" y2="210" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-myg)"/>
      <line x1="132" y1="162" x2="132" y2="141" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-myg)"/>
      <line x1="202" y1="112" x2="261" y2="77" stroke="#f59e0b" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-myg)"/>
      <!-- FPS counter -->
      <rect x="268" y="128" width="164" height="32" rx="4" fill="#f59e0b" fill-opacity="0.07" stroke="#f59e0b" stroke-width="1" stroke-opacity="0.25"/>
      <text x="350" y="144" font-family="monospace" font-size="8" fill="#f59e0b" fill-opacity="0.55" text-anchor="middle">FPS Counter · DevTools profiler</text>
      <text x="350" y="156" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">measure frame budget</text>
      <text x="350" y="278" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">JavaScript · Canvas 2D · requestAnimationFrame · Object Pooling · localStorage</text>
    </svg>

    <!-- ═══════════════════════════════════════════════════
         CLI & OUTILS
    ═══════════════════════════════════════════════════ -->

    <!-- 0-shell -->
    <svg v-else-if="slug === '0-shell'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-sh" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#4ade80" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#4ade80" fill-opacity="0.8" text-anchor="middle">Shell Execution Pipeline — 0-Shell (Go · Syscalls)</text>
      <!-- readline -->
      <rect x="12" y="96" width="82" height="60" rx="5" fill="#4ade80" fill-opacity="0.08" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="53" y="120" font-family="monospace" font-size="9" fill="#86efac" text-anchor="middle">readline</text>
      <text x="53" y="133" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">TTY raw</text>
      <text x="53" y="146" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">history</text>
      <rect x="112" y="96" width="82" height="60" rx="5" fill="#4ade80" fill-opacity="0.08" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="153" y="120" font-family="monospace" font-size="9" fill="#86efac" text-anchor="middle">Lexer</text>
      <text x="153" y="133" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">tokenize</text>
      <text x="153" y="146" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">|  &gt;  $</text>
      <rect x="212" y="96" width="82" height="60" rx="5" fill="#4ade80" fill-opacity="0.1" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.7"/>
      <text x="253" y="120" font-family="monospace" font-size="9" fill="#4ade80" text-anchor="middle">Parser</text>
      <text x="253" y="133" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">AST build</text>
      <text x="253" y="146" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">pipe chain</text>
      <rect x="312" y="96" width="90" height="60" rx="5" fill="#4ade80" fill-opacity="0.08" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="357" y="120" font-family="monospace" font-size="9" fill="#86efac" text-anchor="middle">Executor</text>
      <text x="357" y="133" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">builtin check</text>
      <text x="357" y="146" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">env expand</text>
      <rect x="420" y="96" width="82" height="60" rx="5" fill="#4ade80" fill-opacity="0.1" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.7"/>
      <text x="461" y="118" font-family="monospace" font-size="9" fill="#4ade80" text-anchor="middle">fork()</text>
      <text x="461" y="132" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">syscall.Fork</text>
      <text x="461" y="146" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">child proc</text>
      <rect x="520" y="96" width="82" height="60" rx="5" fill="#4ade80" fill-opacity="0.08" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="561" y="118" font-family="monospace" font-size="9" fill="#86efac" text-anchor="middle">exec()</text>
      <text x="561" y="132" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">syscall.Exec</text>
      <text x="561" y="146" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">PATH lookup</text>
      <rect x="610" y="96" width="80" height="60" rx="5" fill="#4ade80" fill-opacity="0.08" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="650" y="118" font-family="monospace" font-size="9" fill="#86efac" text-anchor="middle">wait()</text>
      <text x="650" y="132" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">SIGCHLD</text>
      <text x="650" y="146" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">exit code</text>
      <!-- Arrows -->
      <line x1="94" y1="126" x2="105" y2="126" stroke="#4ade80" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-sh)"/>
      <line x1="194" y1="126" x2="205" y2="126" stroke="#4ade80" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-sh)"/>
      <line x1="294" y1="126" x2="305" y2="126" stroke="#4ade80" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-sh)"/>
      <line x1="402" y1="126" x2="413" y2="126" stroke="#4ade80" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-sh)"/>
      <line x1="502" y1="126" x2="513" y2="126" stroke="#4ade80" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-sh)"/>
      <line x1="602" y1="126" x2="603" y2="126" stroke="#4ade80" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-sh)"/>
      <!-- Builtins box -->
      <rect x="312" y="185" width="140" height="50" rx="5" fill="#4ade80" fill-opacity="0.06" stroke="#4ade80" stroke-width="1" stroke-opacity="0.3"/>
      <text x="382" y="202" font-family="monospace" font-size="8" fill="#4ade80" fill-opacity="0.6" text-anchor="middle">Builtins</text>
      <text x="382" y="217" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">cd · ls · pwd · echo</text>
      <text x="382" y="229" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">env · export · unset</text>
      <line x1="357" y1="156" x2="357" y2="178" stroke="#4ade80" stroke-opacity="0.35" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#a-sh)"/>
      <!-- Pipe box -->
      <rect x="90" y="185" width="170" height="50" rx="5" fill="#4ade80" fill-opacity="0.06" stroke="#4ade80" stroke-width="1" stroke-opacity="0.3"/>
      <text x="175" y="202" font-family="monospace" font-size="8" fill="#4ade80" fill-opacity="0.6" text-anchor="middle">Pipe / Redirect</text>
      <text x="175" y="217" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">os.Pipe() · io.Copy</text>
      <text x="175" y="229" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">stdin → stdout chain</text>
      <line x1="253" y1="156" x2="210" y2="178" stroke="#4ade80" stroke-opacity="0.35" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#a-sh)"/>
      <!-- Signals box -->
      <rect x="480" y="185" width="170" height="50" rx="5" fill="#4ade80" fill-opacity="0.06" stroke="#4ade80" stroke-width="1" stroke-opacity="0.3"/>
      <text x="565" y="202" font-family="monospace" font-size="8" fill="#4ade80" fill-opacity="0.6" text-anchor="middle">Signal Handling</text>
      <text x="565" y="217" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">SIGINT · SIGTERM</text>
      <text x="565" y="229" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">SIGCHLD · SIGPIPE</text>
      <line x1="561" y1="156" x2="565" y2="178" stroke="#4ade80" stroke-opacity="0.35" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#a-sh)"/>
      <text x="350" y="270" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">Go · syscall · os.Pipe · TTY · POSIX signals · fork/exec/wait</text>
    </svg>

    <!-- ascii-art-web -->
    <svg v-else-if="slug === 'ascii-art-web'" viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-aaw" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#4ade80" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#4ade80" fill-opacity="0.8" text-anchor="middle">Request Flow — ASCII Art Web (Go + Docker)</text>
      <!-- Main pipeline -->
      <rect x="12" y="96" width="96" height="56" rx="5" fill="#4ade80" fill-opacity="0.08" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="60" y="117" font-family="monospace" font-size="9" fill="#86efac" text-anchor="middle">HTTP Request</text>
      <text x="60" y="130" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">POST /ascii</text>
      <text x="60" y="143" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">text · banner</text>
      <rect x="126" y="96" width="96" height="56" rx="5" fill="#4ade80" fill-opacity="0.08" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="174" y="117" font-family="monospace" font-size="9" fill="#86efac" text-anchor="middle">Go Router</text>
      <text x="174" y="130" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">net/http mux</text>
      <text x="174" y="143" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">middleware</text>
      <rect x="240" y="96" width="96" height="56" rx="5" fill="#4ade80" fill-opacity="0.1" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.7"/>
      <text x="288" y="117" font-family="monospace" font-size="9" fill="#4ade80" text-anchor="middle">Font Parser</text>
      <text x="288" y="130" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">shadow · standard</text>
      <text x="288" y="143" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">thinkertoy</text>
      <rect x="354" y="96" width="96" height="56" rx="5" fill="#4ade80" fill-opacity="0.15" stroke="#4ade80" stroke-width="2" stroke-opacity="0.9"/>
      <text x="402" y="117" font-family="monospace" font-size="9" fill="#4ade80" text-anchor="middle">ASCII Engine</text>
      <text x="402" y="130" font-family="monospace" font-size="7" fill="#86efac" text-anchor="middle">char → art map</text>
      <text x="402" y="143" font-family="monospace" font-size="7" fill="#86efac" text-anchor="middle">concat lines</text>
      <rect x="468" y="96" width="110" height="56" rx="5" fill="#4ade80" fill-opacity="0.08" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="523" y="117" font-family="monospace" font-size="9" fill="#86efac" text-anchor="middle">html/template</text>
      <text x="523" y="130" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">render result</text>
      <text x="523" y="143" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">escape safe</text>
      <rect x="596" y="96" width="96" height="56" rx="5" fill="#4ade80" fill-opacity="0.08" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="644" y="117" font-family="monospace" font-size="9" fill="#86efac" text-anchor="middle">Response</text>
      <text x="644" y="130" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">200 OK</text>
      <text x="644" y="143" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">HTML page</text>
      <!-- Arrows -->
      <line x1="108" y1="124" x2="119" y2="124" stroke="#4ade80" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-aaw)"/>
      <line x1="222" y1="124" x2="233" y2="124" stroke="#4ade80" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-aaw)"/>
      <line x1="336" y1="124" x2="347" y2="124" stroke="#4ade80" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-aaw)"/>
      <line x1="450" y1="124" x2="461" y2="124" stroke="#4ade80" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-aaw)"/>
      <line x1="578" y1="124" x2="589" y2="124" stroke="#4ade80" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-aaw)"/>
      <!-- Docker layer below -->
      <rect x="30" y="182" width="640" height="72" rx="8" fill="#2196f3" fill-opacity="0.05" stroke="#2196f3" stroke-width="1.5" stroke-opacity="0.35" stroke-dasharray="6,3"/>
      <text x="350" y="202" font-family="monospace" font-size="9" fill="#2196f3" fill-opacity="0.7" text-anchor="middle">Docker Container (alpine:latest)</text>
      <rect x="60" y="210" width="130" height="28" rx="4" fill="#2196f3" fill-opacity="0.08" stroke="#2196f3" stroke-width="1" stroke-opacity="0.3"/>
      <text x="125" y="228" font-family="monospace" font-size="7" fill="#60a5fa" text-anchor="middle">FROM golang:1.21-alpine</text>
      <rect x="210" y="210" width="130" height="28" rx="4" fill="#2196f3" fill-opacity="0.08" stroke="#2196f3" stroke-width="1" stroke-opacity="0.3"/>
      <text x="275" y="228" font-family="monospace" font-size="7" fill="#60a5fa" text-anchor="middle">COPY . /app</text>
      <rect x="360" y="210" width="130" height="28" rx="4" fill="#2196f3" fill-opacity="0.08" stroke="#2196f3" stroke-width="1" stroke-opacity="0.3"/>
      <text x="425" y="228" font-family="monospace" font-size="7" fill="#60a5fa" text-anchor="middle">RUN go build -o main</text>
      <rect x="510" y="210" width="130" height="28" rx="4" fill="#2196f3" fill-opacity="0.08" stroke="#2196f3" stroke-width="1" stroke-opacity="0.3"/>
      <text x="575" y="228" font-family="monospace" font-size="7" fill="#60a5fa" text-anchor="middle">EXPOSE 8080</text>
      <text x="350" y="275" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">Go · net/http · html/template · Docker · multi-stage build · alpine</text>
    </svg>

    <!-- groupie-tracker-geo -->
    <svg v-else viewBox="0 0 700 300" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <defs><marker id="a-gt" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L0,6 L8,3 z" fill="#4ade80" fill-opacity="0.75"/></marker></defs>
      <rect width="700" height="300" fill="#0a0f1a"/>
      <text x="350" y="28" font-family="monospace" font-size="11" fill="#4ade80" fill-opacity="0.8" text-anchor="middle">Data Flow — Groupie Tracker Geo (Go · Maps)</text>
      <!-- Browser -->
      <rect x="15" y="100" width="90" height="56" rx="5" fill="#4ade80" fill-opacity="0.08" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="60" y="122" font-family="monospace" font-size="9" fill="#86efac" text-anchor="middle">Browser</text>
      <text x="60" y="136" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">search UI</text>
      <text x="60" y="149" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">Leaflet.js</text>
      <!-- Go Handler -->
      <rect x="128" y="100" width="106" height="56" rx="5" fill="#4ade80" fill-opacity="0.1" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.7"/>
      <text x="181" y="122" font-family="monospace" font-size="9" fill="#4ade80" text-anchor="middle">Go Handler</text>
      <text x="181" y="136" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">net/http mux</text>
      <text x="181" y="149" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">concurrent fetch</text>
      <!-- Cache Check -->
      <rect x="252" y="80" width="106" height="56" rx="5" fill="#4ade80" fill-opacity="0.08" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="305" y="103" font-family="monospace" font-size="9" fill="#86efac" text-anchor="middle">Cache</text>
      <text x="305" y="117" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">in-memory</text>
      <text x="305" y="130" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">TTL expiry</text>
      <!-- Hit / Miss paths -->
      <rect x="252" y="156" width="106" height="40" rx="5" fill="#4ade80" fill-opacity="0.06" stroke="#4ade80" stroke-width="1" stroke-opacity="0.25"/>
      <text x="305" y="172" font-family="monospace" font-size="8" fill="#4ade80" fill-opacity="0.5" text-anchor="middle">MISS</text>
      <text x="305" y="185" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">fetch external</text>
      <!-- External API -->
      <rect x="378" y="100" width="120" height="56" rx="5" fill="#4ade80" fill-opacity="0.08" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="438" y="120" font-family="monospace" font-size="9" fill="#86efac" text-anchor="middle">Groupie API</text>
      <text x="438" y="134" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">artists · concerts</text>
      <text x="438" y="147" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">locations · dates</text>
      <!-- Geocoder -->
      <rect x="378" y="178" width="120" height="50" rx="5" fill="#4ade80" fill-opacity="0.1" stroke="#4ade80" stroke-width="1.5" stroke-opacity="0.7"/>
      <text x="438" y="198" font-family="monospace" font-size="9" fill="#4ade80" text-anchor="middle">Geocoder</text>
      <text x="438" y="212" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">addr → lat/lng</text>
      <text x="438" y="222" font-family="monospace" font-size="7" fill="#94a3b8" text-anchor="middle">Nominatim API</text>
      <!-- Map output -->
      <rect x="522" y="130" width="150" height="80" rx="6" fill="#4ade80" fill-opacity="0.08" stroke="#4ade80" stroke-width="1" stroke-opacity="0.4"/>
      <text x="597" y="152" font-family="monospace" font-size="9" fill="#86efac" text-anchor="middle">Leaflet Map</text>
      <text x="597" y="167" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">GeoJSON markers</text>
      <text x="597" y="181" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">cluster popup</text>
      <text x="597" y="195" font-family="monospace" font-size="7" fill="#64748b" text-anchor="middle">filter controls</text>
      <!-- Arrows -->
      <line x1="105" y1="128" x2="121" y2="128" stroke="#4ade80" stroke-opacity="0.6" stroke-width="1.5" marker-end="url(#a-gt)"/>
      <line x1="234" y1="128" x2="245" y2="120" stroke="#4ade80" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-gt)"/>
      <!-- Cache HIT → back to handler -->
      <line x1="252" y1="108" x2="241" y2="108" stroke="#4ade80" stroke-opacity="0.35" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#a-gt)"/>
      <text x="196" y="100" font-family="monospace" font-size="7" fill="#4ade80" fill-opacity="0.4">HIT</text>
      <!-- Cache MISS → external API -->
      <line x1="305" y1="136" x2="305" y2="149" stroke="#4ade80" stroke-opacity="0.4" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#a-gt)"/>
      <line x1="358" y1="176" x2="392" y2="176" stroke="#4ade80" stroke-opacity="0.4" stroke-width="1" marker-end="url(#a-gt)"/>
      <!-- External API to handler -->
      <line x1="378" y1="128" x2="252" y2="128" stroke="#4ade80" stroke-opacity="0.35" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#a-gt)"/>
      <!-- Handler → geocoder -->
      <line x1="438" y1="156" x2="438" y2="171" stroke="#4ade80" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-gt)"/>
      <!-- Geocoder → map -->
      <line x1="498" y1="195" x2="515" y2="182" stroke="#4ade80" stroke-opacity="0.5" stroke-width="1.5" marker-end="url(#a-gt)"/>
      <!-- Map → browser -->
      <path d="M522 170 L130 170 L130 163" fill="none" stroke="#4ade80" stroke-opacity="0.3" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#a-gt)"/>
      <text x="320" y="165" font-family="monospace" font-size="7" fill="#4ade80" fill-opacity="0.4">render JSON response</text>
      <text x="350" y="278" font-family="monospace" font-size="9" fill="#64748b" text-anchor="middle">Go · net/http · Leaflet.js · Nominatim · GeoJSON · In-memory cache · Concurrent</text>
    </svg>

  </div>
</template>
