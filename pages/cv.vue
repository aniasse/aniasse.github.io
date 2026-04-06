<script setup lang="ts">
definePageMeta({ layout: false })

useHead({
  title: 'CV — Adama Niasse',
  meta: [{ name: 'description', content: 'CV de Adama Niasse — Software Engineer, Cloud-DevOps, Cybersecurity' }],
})

const handlePrint = () => window.print()
</script>

<template>
  <div class="cv-page">
    <!-- Print button (hidden on print) -->
    <div class="no-print fixed top-4 right-4 z-50 flex gap-2">
      <button
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-orange-500 text-white hover:bg-orange-600 shadow-lg transition-colors"
        @click="handlePrint"
      >
        <Icon name="material-symbols:download" size="16" />
        Télécharger PDF
      </button>
      <NuxtLink
        to="/about"
        class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-white text-slate-600 border border-slate-200 hover:border-slate-300 shadow-lg transition-colors"
      >
        <Icon name="material-symbols:arrow-back" size="16" />
        Retour
      </NuxtLink>
    </div>

    <!-- CV Content -->
    <div class="cv-container">

      <!-- ══════════ HEADER ══════════ -->
      <header class="cv-header">
        <div class="cv-header-left">
          <h1 class="cv-name">Adama Niasse</h1>
          <p class="cv-title">Software Engineer · Cloud-DevOps · Cybersecurity</p>
          <p class="cv-location">Pikine, Dakar, Sénégal</p>
        </div>
        <div class="cv-header-right">
          <div class="cv-contact-item">
            <span class="cv-contact-label">Email :</span>
            <a href="mailto:adamaniasse153@gmail.com">adamaniasse153@gmail.com</a>
          </div>
          <div class="cv-contact-item">
            <span class="cv-contact-label">Tél :</span>
            <a href="tel:+221773248663">+221 77 324 86 63</a>
          </div>
          <div class="cv-contact-item">
            <span class="cv-contact-label">LinkedIn :</span>
            <a href="https://www.linkedin.com/in/adama-niasse-82878b211" target="_blank">linkedin.com/in/adama-niasse-82878b211</a>
          </div>
          <div class="cv-contact-item">
            <span class="cv-contact-label">GitHub :</span>
            <a href="https://github.com/aniasse" target="_blank">github.com/aniasse</a>
          </div>
          <div class="cv-contact-item">
            <span class="cv-contact-label">Portfolio :</span>
            <a href="https://aniasse.github.io" target="_blank">aniasse.github.io</a>
          </div>
        </div>
      </header>

      <div class="cv-divider-thick" />

      <!-- ══════════ PROFIL ══════════ -->
      <section class="cv-section">
        <h2 class="cv-section-title">Profil</h2>
        <p class="cv-text">
          Software Engineer avec 3+ ans d'expérience en développement full stack (Go, Rust, TypeScript, Vue.js).
          70+ projets réalisés à 01Talent/Zone01 Dakar — du shell Unix aux architectures cloud, spécialisation Cloud & DevOps.
          Freelance en parallèle : écosystèmes e-commerce, apps communautaires web + mobile pour des clients au Sénégal.
          Formation en ingénierie télécom (ESTM) et administration réseau (ESMT Dakar).
          Certifié Cisco CCNA (1-2-3), Oracle Database@AWS Architect et OCI Generative AI Professional.
        </p>
      </section>

      <div class="cv-divider" />

      <!-- ══════════ EXPERIENCE ══════════ -->
      <section class="cv-section">
        <h2 class="cv-section-title">Expérience Professionnelle</h2>

        <div class="cv-entry">
          <div class="cv-entry-header">
            <div>
              <h3 class="cv-entry-title">Développeur Freelance — Full Stack</h3>
              <p class="cv-entry-company">Dakar & Remote</p>
            </div>
            <span class="cv-entry-date">2025 — 2026</span>
          </div>
          <ul class="cv-list">
            <li>Développement d'un écosystème e-commerce high-tech (Souhibou Télécom) : plateforme Next.js, dashboard CRM admin, app mobile, API Go, paiement CinetPay</li>
            <li>Création d'un écosystème communautaire religieux (Jamah Pikine) : plateforme web + dashboard admin + apps mobiles (React Native + Capacitor), streaming/téléchargement de Zikr, Supabase, S3</li>
            <li>Développement de sites e-commerce (Level Officiel) avec WooNuxt et paiement Stripe</li>
            <li>Réalisation de sites vitrines premium (Vortex Agency) : Nuxt, Three.js, Spline, GSAP, animations 3D</li>
          </ul>
        </div>

        <div class="cv-entry">
          <div class="cv-entry-header">
            <div>
              <h3 class="cv-entry-title">Full Stack Developer</h3>
              <p class="cv-entry-company">01Talent Sénégal — Dakar</p>
            </div>
            <span class="cv-entry-date">Mars 2023 — Avril 2026</span>
          </div>
          <ul class="cv-list">
            <li>Réalisation de 50+ projets en Go, Rust, JavaScript et TypeScript dans un environnement peer-to-peer</li>
            <li>Spécialisation Cloud & DevOps : architectures microservices avec Docker, Kubernetes et Terraform sur AWS</li>
            <li>Implémentation de systèmes temps réel : WebSocket, jeux multijoueurs, forums avec messagerie instantanée</li>
            <li>Systèmes bas niveau en Rust : serveur HTTP from scratch, shell Unix, wget, simulation de trafic</li>
          </ul>
        </div>

        <div class="cv-entry">
          <div class="cv-entry-header">
            <div>
              <h3 class="cv-entry-title">Assistant Responsable Technique</h3>
              <p class="cv-entry-company">Zone01 Dakar</p>
            </div>
            <span class="cv-entry-date">Oct 2022 — Jan 2023</span>
          </div>
          <ul class="cv-list">
            <li>Support technique et accompagnement des apprenants dans le programme de formation</li>
            <li>Gestion de l'infrastructure technique et résolution de problèmes systèmes</li>
            <li>Assistance à la mise en place des environnements de développement</li>
          </ul>
        </div>
      </section>

      <div class="cv-divider" />

      <!-- ══════════ COMPETENCES ══════════ -->
      <section class="cv-section">
        <h2 class="cv-section-title">Compétences Techniques</h2>
        <div class="cv-skills-grid">
          <div class="cv-skill-row">
            <span class="cv-skill-label">Langages</span>
            <span class="cv-skill-value">Go, Rust, JavaScript, TypeScript, Python, C/C++, Java, Bash, GraphQL</span>
          </div>
          <div class="cv-skill-row">
            <span class="cv-skill-label">Frontend</span>
            <span class="cv-skill-value">Vue.js, Nuxt.js, React, React Native, Tailwind CSS, Vuetify, Bootstrap</span>
          </div>
          <div class="cv-skill-row">
            <span class="cv-skill-label">Backend & BDD</span>
            <span class="cv-skill-value">REST API, GraphQL, PostgreSQL, MySQL, SQLite, Supabase, Firebase, Redis, WebSocket</span>
          </div>
          <div class="cv-skill-row">
            <span class="cv-skill-label">DevOps & Cloud</span>
            <span class="cv-skill-value">Docker, Kubernetes, Terraform, Ansible, Jenkins, NGINX, CI/CD, AWS (ECS, S3), Vercel</span>
          </div>
          <div class="cv-skill-row">
            <span class="cv-skill-label">Sécurité</span>
            <span class="cv-skill-value">OAuth2/JWT, TLS/SSL, OWASP Top 10, Pentest, Cryptographie, CSRF/XSS</span>
          </div>
          <div class="cv-skill-row">
            <span class="cv-skill-label">Réseau</span>
            <span class="cv-skill-value">Cisco (CCNA 1-2-3), TCP/UDP, HTTP, Linux/Unix, Syscalls, Arduino</span>
          </div>
          <div class="cv-skill-row">
            <span class="cv-skill-label">Outils</span>
            <span class="cv-skill-value">Git, GitHub, GitLab, Docker, VS Code, Figma, Canva</span>
          </div>
        </div>
      </section>

      <div class="cv-divider" />

      <!-- ══════════ PROJETS CLES ══════════ -->
      <section class="cv-section">
        <h2 class="cv-section-title">Projets Clés</h2>

        <ul class="cv-list">
          <li><strong>Souhibou Télécom</strong> (Freelance) — Écosystème e-commerce high-tech : plateforme Next.js, dashboard CRM admin, app mobile, API Go, paiement CinetPay</li>
          <li><strong>Jamah Pikine</strong> (Freelance) — Écosystème communautaire : plateforme web + dashboard admin + apps mobiles (React Native, Capacitor), streaming audio, Supabase, AWS S3</li>
          <li><strong>Secure-Shield</strong> (Open Source) — Plateforme SOC avec agent IA pour détection d'incidents en temps réel (TypeScript)</li>
          <li><strong>Cloud-Design</strong> (Open Source) — Infrastructure microservices AWS avec Terraform, ECS, auto-scaling, monitoring CloudWatch</li>
          <li><strong>Multiplayer FPS</strong> (Open Source) — Jeu FPS multijoueur en Rust avec Bevy Engine, netcode UDP, prédiction client</li>
          <li><strong>0-Shell</strong> (Open Source) — Shell Unix complet en Go : syscalls fork/exec, signaux, pipes, redirections I/O</li>
        </ul>
        <p class="cv-projects-footer">+ 60 autres projets sur <a href="https://github.com/aniasse">github.com/aniasse</a></p>
      </section>

      <div class="cv-divider" />

      <!-- ══════════ CERTIFICATIONS ══════════ -->
      <section class="cv-section">
        <h2 class="cv-section-title">Certifications</h2>
        <div class="cv-certs-grid">
          <div class="cv-cert">
            <span class="cv-cert-name">CCNA 1 — Introduction to Networks</span>
            <span class="cv-cert-issuer">Cisco</span>
          </div>
          <div class="cv-cert">
            <span class="cv-cert-name">CCNA 2 — Switching, Routing & Wireless</span>
            <span class="cv-cert-issuer">Cisco</span>
          </div>
          <div class="cv-cert">
            <span class="cv-cert-name">CCNA 3 — Enterprise Networking & Security</span>
            <span class="cv-cert-issuer">Cisco</span>
          </div>
          <div class="cv-cert">
            <span class="cv-cert-name">Oracle Database@AWS Certified Architect Professional</span>
            <span class="cv-cert-issuer">Oracle / AWS</span>
          </div>
          <div class="cv-cert">
            <span class="cv-cert-name">OCI 2025 Certified Generative AI Professional</span>
            <span class="cv-cert-issuer">Oracle Cloud Infrastructure</span>
          </div>
        </div>
      </section>

      <div class="cv-divider" />

      <!-- ══════════ FORMATION ══════════ -->
      <section class="cv-section">
        <h2 class="cv-section-title">Formation</h2>

        <div class="cv-entry cv-entry-compact">
          <div class="cv-entry-header">
            <div>
              <h3 class="cv-entry-title">Full Stack Developer — Spécialisation Cloud & DevOps</h3>
              <p class="cv-entry-company">Zone01 Dakar</p>
            </div>
            <span class="cv-entry-date">2022 — 2025</span>
          </div>
        </div>

        <div class="cv-entry cv-entry-compact">
          <div class="cv-entry-header">
            <div>
              <h3 class="cv-entry-title">Licence professionnelle — Administration et Sécurité des Réseaux</h3>
              <p class="cv-entry-company">ESMT Dakar — École Supérieure Multinationale des Télécommunications</p>
            </div>
            <span class="cv-entry-date">Jan 2022 — Jan 2023</span>
          </div>
        </div>

        <div class="cv-entry cv-entry-compact">
          <div class="cv-entry-header">
            <div>
              <h3 class="cv-entry-title">Ingénierie des télécommunications</h3>
              <p class="cv-entry-company">ESTM — École Supérieure de Technologie et de Management</p>
            </div>
            <span class="cv-entry-date">2020 — 2022</span>
          </div>
        </div>

        <div class="cv-entry cv-entry-compact">
          <div class="cv-entry-header">
            <div>
              <h3 class="cv-entry-title">Baccalauréat scientifique</h3>
              <p class="cv-entry-company">Lycée Thierno Saidou Nourou Tall</p>
            </div>
            <span class="cv-entry-date"></span>
          </div>
        </div>
      </section>

      <div class="cv-divider" />

      <!-- ══════════ LANGUES ══════════ -->
      <section class="cv-section">
        <h2 class="cv-section-title">Langues</h2>
        <div class="cv-languages">
          <span><strong>Wolof</strong> — Langue maternelle</span>
          <span class="cv-lang-sep">·</span>
          <span><strong>Français</strong> — Courant</span>
          <span class="cv-lang-sep">·</span>
          <span><strong>Anglais</strong> — Professionnel</span>
        </div>
      </section>

      <!-- Footer -->
      <div class="cv-footer">
        <span>Adama Niasse — <a href="mailto:adamaniasse153@gmail.com">adamaniasse153@gmail.com</a> — <a href="https://github.com/aniasse">github.com/aniasse</a> — <a href="https://aniasse.github.io">aniasse.github.io</a></span>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.cv-page {
  background: #f1f5f9;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 2rem 1rem;
  font-family: 'Inter', -apple-system, sans-serif;
}

.cv-container {
  background: white;
  width: 100%;
  max-width: 800px;
  padding: 48px 52px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  border-radius: 4px;
  color: #1e293b;
  font-size: 11.5px;
  line-height: 1.6;
}

/* Header */
.cv-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
}
.cv-name {
  font-size: 28px;
  font-weight: 800;
  color: #0f172a;
  letter-spacing: -0.5px;
  margin: 0;
}
.cv-title {
  font-size: 13px;
  color: #ea580c;
  font-weight: 600;
  margin-top: 4px;
}
.cv-header-right {
  display: flex;
  flex-direction: column;
  gap: 3px;
  text-align: right;
  font-size: 10.5px;
  color: #475569;
}
.cv-contact-item {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 6px;
}
.cv-location {
  font-size: 11px;
  color: #64748b;
  margin-top: 2px;
}
.cv-contact-label {
  font-weight: 600;
  color: #64748b;
  min-width: 55px;
}
.cv-header-right a {
  color: #475569;
  text-decoration: none;
}
.cv-header-right a:hover {
  text-decoration: underline;
}
@media print {
  .cv-header-right a {
    color: #475569;
    text-decoration: none;
  }
}

/* Dividers */
.cv-divider-thick {
  height: 2px;
  background: #0f172a;
  margin: 16px 0;
}
.cv-divider {
  height: 1px;
  background: #e2e8f0;
  margin: 14px 0;
}

/* Sections */
.cv-section {
  margin: 0;
}
.cv-section-title {
  font-size: 12px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: #0f172a;
  margin: 0 0 10px 0;
}

/* Text */
.cv-text {
  color: #334155;
  font-size: 11px;
  line-height: 1.7;
  margin: 0;
}

/* Entries */
.cv-entry {
  margin-bottom: 14px;
}
.cv-entry:last-child {
  margin-bottom: 0;
}
.cv-entry-compact {
  margin-bottom: 10px;
}
.cv-entry-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
}
.cv-entry-title {
  font-size: 12px;
  font-weight: 700;
  color: #0f172a;
  margin: 0;
}
.cv-entry-company {
  font-size: 11px;
  color: #64748b;
  margin: 1px 0 0 0;
}
.cv-entry-date {
  font-size: 10px;
  color: #94a3b8;
  white-space: nowrap;
  font-weight: 500;
  flex-shrink: 0;
  padding-top: 2px;
}

/* Lists */
.cv-list {
  margin: 6px 0 0 0;
  padding-left: 16px;
  color: #334155;
}
.cv-list li {
  margin-bottom: 2px;
  font-size: 10.5px;
  line-height: 1.6;
}
.cv-list li::marker {
  color: #ea580c;
}

/* Skills */
.cv-skills-grid {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.cv-skill-row {
  display: flex;
  gap: 12px;
  font-size: 10.5px;
}
.cv-skill-label {
  font-weight: 700;
  color: #0f172a;
  min-width: 100px;
  flex-shrink: 0;
}
.cv-skill-value {
  color: #475569;
}

/* Projects */
.cv-projects-footer {
  font-size: 10px;
  color: #94a3b8;
  margin-top: 8px;
  font-style: italic;
}
.cv-projects-footer a {
  color: #94a3b8;
  text-decoration: none;
}
.cv-footer a {
  color: #94a3b8;
  text-decoration: none;
}

/* Certifications */
.cv-certs-grid {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.cv-cert {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
}
.cv-cert-name {
  font-size: 10.5px;
  font-weight: 600;
  color: #1e293b;
}
.cv-cert-issuer {
  font-size: 10px;
  color: #94a3b8;
  font-weight: 500;
}

/* Languages */
.cv-languages {
  display: flex;
  gap: 8px;
  font-size: 11px;
  color: #334155;
  align-items: center;
}
.cv-lang-sep {
  color: #cbd5e1;
}

/* Footer */
.cv-footer {
  margin-top: 20px;
  padding-top: 12px;
  border-top: 1px solid #e2e8f0;
  text-align: center;
  font-size: 9px;
  color: #94a3b8;
}

/* Print styles */
@media print {
  .no-print { display: none !important; }
  .cv-page {
    background: white;
    padding: 0;
    min-height: auto;
  }
  .cv-container {
    box-shadow: none;
    padding: 32px 40px;
    max-width: none;
    border-radius: 0;
  }
  @page {
    margin: 0.5cm;
    size: A4;
  }
}

/* Mobile */
@media (max-width: 640px) {
  .cv-header {
    flex-direction: column;
  }
  .cv-header-right {
    text-align: left;
  }
  .cv-contact-item {
    justify-content: flex-start;
  }
  .cv-entry-header {
    flex-direction: column;
    gap: 2px;
  }
  .cv-container {
    padding: 24px 20px;
  }
  .cv-languages {
    flex-wrap: wrap;
  }
}
</style>
