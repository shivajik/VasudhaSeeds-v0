# Vasudha Agri Seeds - Seed Manufacturing Company Website

## Overview
A Next.js website for Vasudha Agri Biotech Pvt. Ltd., a pioneering seed company based in Hyderabad, Telangana. Established in 2015, specializing in Hybrid Maize, Hybrid Paddy, Research Paddy, Vegetables, Pulses, and Sunflower. Built with React 19, Next.js 16, Tailwind CSS 4, and shadcn/ui components.

## Project Architecture
- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 with tw-animate-css
- **UI Components**: shadcn/ui (Radix primitives + CVA)
- **Package Manager**: npm

### Directory Structure
- `app/` - Next.js App Router pages (home, about, contact, products, services)
- `app/products/[category]/` - Dynamic product category pages (hybrid-maize, hybrid-paddy, research-paddy, vegetables, pulses, sunflower)
- `app/products/[category]/[product]/` - Individual product detail pages with specifications table
- `lib/product-data.ts` - Centralized product data with detailed specs for all varieties
- `components/` - React components (header, footer, hero, etc.)
- `components/ui/` - shadcn/ui primitives (button, card, input, textarea)
- `lib/` - Utility functions
- `public/` - Static assets, images, and company logo (vasudha-logo.png)
- `styles/` - Global CSS

## Product Categories
- Hybrid Maize (20 varieties with product packaging images)
- Hybrid Paddy (11 varieties with product packaging images)
- Research/Improved Paddy (15 varieties with product packaging images)
- Vegetables - Chilli, Tomato, Bhendi, Bottle Gourd, Ridge Gourd (14 varieties with product packaging images)
- Pulses - Red Gram (2 varieties with product packaging images)
- Sunflower (3 varieties with product packaging images)
- Bajra / Pearl Millet (2 varieties with product packaging images)
- Wheat (2 varieties with product packaging images)
- Mustard (2 varieties with product packaging images)

## Running
- Dev server: `npm run dev` (binds to 0.0.0.0:5000)
- Build: `npm run build`
- Start: `npm run start`

## Configuration
- `next.config.mjs` - Next.js config with `allowedDevOrigins` for Replit proxy
- `tsconfig.json` - TypeScript config
- `postcss.config.mjs` - PostCSS with Tailwind CSS plugin
- `components.json` - shadcn/ui component configuration

## Company Contact
- Email: vasudhaagribiotech@gmail.com
- Phone: +91 8466996092
- Address: Plot No.955/Part, NJR & KLR Nagar, Medchal, Hyderabad - 501401, Telangana
