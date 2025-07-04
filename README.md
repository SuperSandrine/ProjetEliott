# Astro Starter Kit: Basics

Ce projet est un kit de démarrage Astro simple pour créer un site web de base.

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## Prerequisite
- Node.js - v18.17.1 or **v20.5.0**, v22.0.0 or higher. ( v19 and v21 are not supported.)
- Text editor - We recommend VS Code with our Official Astro extension.
- Terminal - Astro is accessed through its command-line interface (CLI).

## Installation

1.  Clonez le dépôt :

    ```sh
    git clone <votre-repo>
    ```

2.  Installez les dépendances :

    ```sh
    npm install
    ```

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).

----------------------------

# 🌿 Site statique hybride éthique pour artiste engagé·e

Ce projet est un site vitrine **statique hybride, éthique, éco-conçu et accessible**, construit avec des technologies modernes et sobres. Il permet de présenter le travail d'un·e artiste engagé·e de manière autonome, sans dépendance aux GAFAM.
L'expérience utilisateur a été conçu pour être simple et sobre.


## 🚀 Stack technique
Un site statique hybrique, est un site statique dynamique, il est conçu comment un site entièrement statique, mais on peut mettre à jour via DacapCMS + JSON/Md, il intègrera du contenu dynamique plus tard (avec le flux pixelfed)

| Élément       | Technologie choisie                 | Justification                                             |
| ------------- | ----------------------------------- | --------------------------------------------------------- |
| Framework     | Astro                               | Génération statique, ultra performant, modulaire          |
| UI            | Svelte + Tailwind CSS + DaisyUI     | Léger, accessible, rapide à intégrer                      |
| Langage       | TypeScript                          | Sécurisé, lisible                                         |
| CMS           | DecapCMS                            | Interface web simple, contenu en JSON/Markdown, Git-based |
| Contenu       | Markdown + JSON                     | Léger, versionnable                                       |
| Hosting       | Infomaniak / Netlify / Clever Cloud | Déploiement automatique, hors GAFAM                       |
| Git           | Codeberg / Gitea / Forgejo          | Alternatives libres à GitHub                              |
| Images        | WebP / AVIF optimisées via Astro    | Sobriété, performance                                     |
| Analytics     | Plausible                           | Sans cookies, respectueux de la vie privée                |
| Accessibilité | WCAG / RGAA                         | Contrastes, navigation clavier, ARIA                      |

## 🗂 Structure du projet

```bash
📁 src
├── 📁 components         # Composants Svelte/Astro réutilisables
├── 📁 content            # Contenu Markdown ou JSON (biographie, galeries, etc.)
├── 📁 layouts            # Layouts principaux (Accueil, Pages...)
├── 📁 pages              # Pages du site (accueil.astro, contact.astro...)
├── 📁 styles             # Fichiers CSS ou Tailwind config
├── 📁 utils              # Fonctions utilitaires
└── 📁 public             # Images, favicon, manifest
```

## 📏 Conventions de nommage

### Fichiers

- `kebab-case` pour les noms de fichiers et dossiers (`bio.json`, `photo-galerie-2020.md`)
- `.astro` pour les pages et composants Astro, `.svelte` pour les composants Svelte

### Composants

- `PascalCase` pour les composants (`ImageCard.svelte`, `GalleryGrid.astro`)
- Préfixe de type si nécessaire : `PageAccueil.astro`, `LayoutBase.astro`

### Contenu Markdown / JSON

- `bio.json`, `contact.json`, `galerie-2020.json` dans `/content`

## ⚙️ Installation

```bash
pnpm install
pnpm dev
```

## 📦 Build + Déploiement

### Build local

```bash
pnpm build
```

### Déploiement automatique

- Configurez Git (Codeberg, Gitea, etc.)
- Connectez au service (Infomaniak, Netlify, etc.)
- Push = build + mise en ligne automatique

### Déploiement manuel (ex: WebDAV Infomaniak)

```bash
pnpm build
rsync -av dist/ chemin/serveur/webdav
```

## ✍️ Édition de contenu (DecapCMS)

- Accédez à `/admin`
- Authentifiez-vous si besoin
- Modifiez les contenus (`bio`, `galerie`, etc.)
- Enregistrez → commit Git → build auto

## ✅ Contrôle qualité

| Contrôle           | Outil recommandé             |
| ------------------ | ---------------------------- |
| Accessibilité      | WebAIM, Lighthouse, axe      |
| Éco-conception     | EcoIndex, WebsiteCarbon      |
| Performance images | ImageKit, TinyPNG, AVIF/WebP |

## 🌱 Mentions éthiques à afficher

- Ce site est auto-hébergé / hébergé chez un acteur européen.
- Aucune donnée personnelle n’est collectée.
- Aucune dépendance aux GAFAM.
- Conçu avec des outils libres, éco-conçus et accessibles.

---

> Pour toute modification avancée du design ou du fonctionnement, contactez la personne responsable du développement initial ou référez-vous à la documentation d’Astro, Svelte, DecapCMS.

