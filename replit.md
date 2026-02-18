# BharatSeeds - Seed Manufacturing Company Website

## Overview
A Next.js website for BharatSeeds, a seed manufacturing company. Built with React 19, Next.js 16, Tailwind CSS 4, and shadcn/ui components.

## Project Architecture
- **Framework**: Next.js 16 (App Router with Turbopack)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 with tw-animate-css
- **UI Components**: shadcn/ui (Radix primitives + CVA)
- **Package Manager**: npm

### Directory Structure
- `app/` - Next.js App Router pages (home, about, contact, products, services)
- `components/` - React components (header, footer, hero, etc.)
- `components/ui/` - shadcn/ui primitives (button, card, input, textarea)
- `lib/` - Utility functions
- `public/` - Static assets and images
- `styles/` - Global CSS

## Running
- Dev server: `npm run dev` (binds to 0.0.0.0:5000)
- Build: `npm run build`
- Start: `npm run start`

## Configuration
- `next.config.mjs` - Next.js config with `allowedDevOrigins` for Replit proxy
- `tsconfig.json` - TypeScript config
- `postcss.config.mjs` - PostCSS with Tailwind CSS plugin
- `components.json` - shadcn/ui component configuration
