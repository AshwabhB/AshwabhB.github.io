# Deploying the portfolio

The site is a static build (`npm run build` produces `dist/`), so every option below is free for a personal site. Pick one.

## Before you deploy

1. Push this folder to a GitHub repository. For the cleanest URL on GitHub Pages, name it `AshwabhB.github.io`.
2. Make sure `base` in `vite.config.ts` matches where the site will live:
   - `/` for `AshwabhB.github.io`, Vercel, Netlify, or Cloudflare Pages (already set)
   - `/repo-name/` if you deploy to a GitHub project page like `AshwabhB.github.io/repo-name`

## Option 1: GitHub Pages (recommended, free)

A workflow is already included at `.github/workflows/deploy.yml`. It builds the site on every push to `main` and publishes `dist/`.

1. Create the repo on GitHub and push:
   ```bash
   git init
   git add .
   git commit -m "Portfolio site"
   git branch -M main
   git remote add origin https://github.com/AshwabhB/AshwabhB.github.io.git
   git push -u origin main
   ```
2. On GitHub, open the repo, then Settings, then Pages. Under "Build and deployment", set Source to "GitHub Actions".
3. Wait for the "Deploy to GitHub Pages" workflow to finish under the Actions tab. The site is live at `https://AshwabhB.github.io`.

Every later `git push` to `main` redeploys automatically.

## Option 2: Vercel (free)

1. Sign in at vercel.com with GitHub.
2. Click "Add New Project", pick the repo. Vercel detects Vite automatically (build command `npm run build`, output `dist`).
3. Click Deploy. You get a `*.vercel.app` URL, and every push redeploys.

## Option 3: Netlify (free)

1. Sign in at netlify.com with GitHub.
2. "Add new site", then "Import an existing project", pick the repo.
3. Build command `npm run build`, publish directory `dist`. Deploy.

## Option 4: Cloudflare Pages (free)

1. In the Cloudflare dashboard, go to Workers & Pages, then Create, then Pages, then "Connect to Git".
2. Pick the repo, framework preset Vite, build command `npm run build`, output `dist`.

## Custom domain (optional, about $10 to $15 per year)

Buy a domain from Cloudflare Registrar, Namecheap, or Porkbun, then:

- GitHub Pages: add the domain under Settings, then Pages, then "Custom domain", and create the DNS records GitHub shows you (four A records for the apex plus a CNAME for `www`). GitHub issues HTTPS for free.
- Vercel, Netlify, or Cloudflare Pages: add the domain in the project's Domains settings and follow the DNS instructions. HTTPS is automatic.

## Updating content later

Edit `src/data/profile.ts` or `src/data/projects.ts`, run `npm run build` locally to check it compiles, then push. Drop new screenshots into `public/images/projects/` and reference them from the project entry.
