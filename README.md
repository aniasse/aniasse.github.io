# Adama Niasse — Portfolio

**Software Engineer | DevOps | Cybersecurity**

[![Live](https://img.shields.io/badge/Live-adama.site-orange?style=flat-square)](https://adama.site)
[![GitHub](https://img.shields.io/badge/GitHub-aniasse-181717?style=flat-square&logo=github)](https://github.com/aniasse)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Adama%20Niasse-0A66C2?style=flat-square&logo=linkedin)](https://www.linkedin.com/in/adama-niasse-82878b211)

---

## About

Portfolio personnel presentant mes **70+ projets**, mon parcours et mes competences en tant que Software Engineer base a Dakar, Senegal.

### Highlights

- **41 projets** detailles avec fiches completes (description, features, stack, liens)
- **7 categories** : Apps & SaaS, Securite & IA, DevOps & Cloud, Systemes & Reseau, Web & Backend, Frontend & JS, CLI & Outils
- **6 projets freelance** prives (e-commerce, apps communautaires, mobile, sites vitrines)
- **CV en ligne** imprimable en PDF (`/cv`)
- **5 certifications** : Cisco CCNA 1-2-3, Oracle DB@AWS Architect, OCI GenAI Professional

---

## Tech Stack

| Layer | Technologies |
|---|---|
| **Framework** | [Nuxt 3](https://nuxt.com) (Vue 3, TypeScript) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com) |
| **Animations** | [@vueuse/motion](https://motion.vueuse.org) |
| **Icons** | [nuxt-icon](https://github.com/nuxt-modules/icon) (Iconify) |
| **Images** | [@nuxt/image](https://image.nuxt.com) (WebP) |
| **Deployment** | GitHub Pages (SSG) + GitHub Actions |

---

## Pages

| Route | Description |
|---|---|
| `/` | Accueil : hero, competences, architecture, timeline, projets, CTA |
| `/projects` | 41 projets avec filtres par categorie |
| `/projects/:slug` | Fiche projet detaillee |
| `/about` | Profil, stack technique, experience, formation, certifications |
| `/contact` | Formulaire de contact + liens (email, LinkedIn, GitHub, telephone, Discord) |
| `/cv` | CV complet imprimable en PDF |

---

## Getting Started

```bash
# Install dependencies
pnpm install

# Dev server (localhost:3000)
pnpm dev

# Build for static hosting
npx nuxi generate

# Preview static build
npx serve .output/public
```

---

## Deployment

Le site se deploie automatiquement via **GitHub Actions** a chaque push sur `main`.

Workflow (`.github/workflows/deploy.yml`) :
1. Install Node 20 + pnpm
2. `pnpm install`
3. `npx nuxi generate` (SSG avec preset `github-pages`)
4. Deploy sur GitHub Pages

---

## Project Structure

```
pages/
  index.vue              # Home
  about.vue              # About + skills + certifications
  contact.vue            # Contact form
  cv.vue                 # Printable CV
  projects/
    index.vue            # Projects list + filters
    [slug].vue           # Project detail
components/
  atom/                  # ProjectIllustration, ScrollToTop
  layouts/
    Page/                # Navbar, Footer
    home/                # Hero, Quote, SystemDesign, Timeline, Project, Cta
composables/
  useProjects.ts         # 41 projects data + categories + helpers
.github/workflows/
  deploy.yml             # GitHub Pages CI/CD
nuxt.config.ts           # Nuxt config (SSG, github-pages preset)
```

---

## Author

**Adama Niasse** — 25 ans, Pikine, Dakar, Senegal

- adamaniasse153@gmail.com
- +221 77 324 86 63
- [LinkedIn](https://www.linkedin.com/in/adama-niasse-82878b211)
- [GitHub](https://github.com/aniasse)

> Software Engineer | 01Talent Senegal | Zone01 Dakar | Freelance
>
> Cisco CCNA | Oracle DB@AWS Architect | OCI GenAI Professional
