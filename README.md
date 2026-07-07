# Nimbus — Tissue Box Landing Page

A single-page marketing site for a tissue brand, built with Next.js 15 (App Router) and Tailwind CSS.

## Sections
- **Hero** — headline, CTAs, animated illustrated tissue box (pure SVG, no image files needed)
- **Products** — 4-product grid (Classic, Aloe & Vitamin E, Travel Pack, Family Box)
- **Reviews** — star-rated customer testimonials
- **Amazon order** — CTA banner driving to your Amazon listing
- **About** — brand story
- Sticky nav + footer

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build for production

```bash
npm run build
npm run start
```

## Customizing
- **Copy & prices**: edit `components/Products.tsx`, `components/Reviews.tsx`, `components/About.tsx`.
- **Amazon link**: replace the `href="#"` on the "Buy Now on Amazon" button in `components/AmazonOrder.tsx` with your real product URL.
- **Colors**: tweak the palette in `tailwind.config.ts` (`paper`, `ink`, `pine`, `mist`, `bloom`).
- **Illustration**: `components/TissueBoxArt.tsx` is a plain SVG component — pass different `boxColor` / `lidColor` props to recolor per product, or swap it for real product photography later (drop images into `public/` and use `next/image`).
- **Fonts**: `Fraunces` (display/serif) + `Inter` (body), loaded via `next/font/google` in `app/layout.tsx` — requires internet access at build time to fetch the fonts.
