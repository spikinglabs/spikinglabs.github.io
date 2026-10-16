# Spiking Labs website

Astro + Tailwind static site, deployed to GitHub Pages on push to `main`.

```
npm install
npm run dev       # http://localhost:4321
npm run build     # type-check + build to ./dist
```

## Editing content (no code needed)

All copy lives in `src/data/`:

| File | Controls |
| :-- | :-- |
| `site.json` | Hero text, nav links, quick facts, principles, call-to-action, About copy, **team** (add `{ "name", "role", "bio" }` objects and a Team section appears), contact emails, address |
| `products.json` | Products. Add or remove an object and the homepage, `/products`, the footer and `/products/<slug>` update. `status` is `Live` or `Coming Soon`; Live products are listed first and get their own call-to-action (`ctaUrl`/`ctaLabel`) |
| `services.json` | Services, grouped by `group`. Each shows on the homepage and on `/services#<slug>` |
| `lab.json` | The Lab page (`/lab`): intro, the four protocol stages, lab rules and the experiments on the bench. `stage` (1–4) sets each experiment's progress bar |

## Design kit

See [`DESIGN.md`](./DESIGN.md) for the tokens, type scale, components and motion rules.

## Stable URLs

`/about`, `/products`, `/products/<slug>`, `/support`, `/products/cityklub/privacy-policy` and `/products/cityklub/delete-account` are linked from outside and must not move. `/pricing` and `/blog` (old template pages) redirect to `/`.
