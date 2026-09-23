# Portfolio website

Personal portfolio for Ashwabh Bhatnagar. Static single-page site built with Vite, React, TypeScript, and Tailwind CSS.

## Edit content

All copy lives in two files, no component changes needed:

- `src/data/profile.ts`: name, contact links, intro, about paragraphs, education, skills
- `src/data/projects.ts`: every project card. Set `featured: true` for a large card with media, `false` for the compact grid.

Images and clips live in `public/images/`.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output goes to `dist/`. Preview it with `npm run preview`.

## Deploy

See `DEPLOY.md` for GitHub Pages, Vercel, Netlify, and Cloudflare Pages instructions.
