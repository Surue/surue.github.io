# surue.github.io

This repository now uses Astro as the only active site format.

The project keeps the original content focus while modernizing:

- page structure and navigation
- styling and readability
- deployment through GitHub Actions
- editing flow in Visual Studio Code

## Current status

The legacy Jekyll source has been removed from the active repository structure.

The site now relies on:

- Astro pages and content collections in `src/`
- static assets served from `public/assets/`
- GitHub Actions for the target deployment pipeline
- a small set of legacy redirect pages to preserve older public URLs

## Project structure

- `src/` contains the Astro application, routes, content collections, and redirect pages
- `public/assets/` contains static assets used by the site
- `.github/workflows/deploy.yml` defines the GitHub Pages deployment workflow for Astro

## Development

Prerequisites:

- Node.js 20 or newer

Install dependencies:

```bash
npm install
```

Run the Astro dev server:

```bash
npm run dev
```

Build the site:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## What is already done

1. Astro root project created and validated
2. Layout, navigation, tag pages, language pages, and project listings rebuilt in Astro
3. Posts, projects, and language pages moved into Astro content collections
4. Legacy Jekyll URLs covered by redirect routes where practical
5. Legacy Jekyll source folders removed from the repository

## Visual Studio Code

The repository now includes:

- recommended extensions in `.vscode/extensions.json`
- workspace settings in `.vscode/settings.json`
- tasks for `npm run dev` and `npm run build` in `.vscode/tasks.json`

## Deployment target

The deployment model is:

- Astro static output
- GitHub Actions build
- GitHub Pages deployment from the generated `dist` artifact

The workflow is present in the repository and the Astro build is now the site of record.

## GitHub Pages activation (one-time)

Use these steps once on GitHub to enable live deployment from Actions:

1. Open repository settings: `Settings -> Pages`
2. Under `Build and deployment`, set `Source` to `GitHub Actions`
3. Push to `master` (or run the workflow manually from `Actions -> Deploy Astro Site -> Run workflow`)
4. Wait for the `Deploy Astro Site` workflow to finish successfully
5. Verify the live URL: `https://surue.github.io`

Quick validation checklist after first deploy:

- Home page loads
- `/projects/` and `/blog/` load
- legacy redirects like `/about_me.html` and `/projects/pok_engine.html` redirect correctly
- no missing image paths under `public/assets`

## Legacy URL compatibility

Some legacy URLs are preserved with static redirect pages, including:

- top-level `about_me.html`, `blog.html`, and `projects.html`
- old tag and language `.html` pages
- old project `.html` pages
- dated article URLs such as `/2020/04/07/.../`

If you need stricter compatibility for other historical links, add redirect files under `public/`.
