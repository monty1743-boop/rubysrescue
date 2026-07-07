# Ruby's Rescue and Retreat — Website Refresh

Modern rebuild of [rubysrescueandretreat.org](https://rubysrescueandretreat.org/) using Astro + Tailwind CSS.

## Requirements preserved from original site

| Feature | Implementation |
|---|---|
| **Adoption application** | External link to [Shelter Manager form](https://service.sheltermanager.com/asmservice?account=za1225&method=online_form_html&formid=3) — not rebuilt |
| **Available dogs** | Petfinder embed (org `IL839`) |
| **PayPal donations** | Original hosted button ID preserved |
| **Amazon wishlist** | External link preserved |
| **Chewy wishlist** | External link on Help Us page |
| **Facebook group** | Header link preserved |
| **Google Maps** | Embedded on Find Us page |
| **News content** | Carle Health article + Red Cross award video |
| **Boarding service** | Dedicated page with contact CTA |
| **Contact info** | Phone, email, address, appointment notice |

## Pages

- `/` — Home with photo slideshow
- `/available` — Petfinder adoptable dogs
- `/application` — Instructions + link to Shelter Manager form
- `/boarding` — Boarding services
- `/find-us` — Location, map, contact
- `/help-us` — Chewy & Amazon wishlists
- `/news` — News stories and video

## Development

Requires Node.js 22+.

```bash
nvm use 22
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

The site auto-deploys to GitHub Pages on every push to `main`.

**Live URL:** https://monty1743-boop.github.io/rubysrescue/

### First-time GitHub setup

1. Open the repo on GitHub → **Settings** → **Pages**
2. Under **Build and deployment**, set **Source** to **GitHub Actions**
3. Push to `main` — the workflow builds and publishes automatically

### Manual build

```bash
npm run build
npm run preview
```

Static output is written to `dist/`.
