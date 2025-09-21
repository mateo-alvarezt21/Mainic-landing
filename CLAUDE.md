# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbopack (runs on http://localhost:3000)
- `npm run build` - Build production application with Turbopack
- `npm start` - Start production server (requires build first)
- `npm run lint` - Run ESLint for code quality checks

## Architecture Overview

This is a **Next.js 15** landing page for Mainic Software Services, built with the App Router architecture. The application is optimized for performance and SEO, targeting Spanish-speaking markets (primarily Colombia).

### Tech Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript with strict mode
- **Styling**: TailwindCSS v4 with custom design system
- **Forms**: React Hook Form with Zod validation
- **Animation**: Framer Motion
- **Icons**: Lucide React

### Project Structure

```
src/
├── app/                    # App Router pages and layouts
│   ├── layout.tsx         # Root layout with metadata and SEO
│   ├── page.tsx          # Homepage with section components
│   └── globals.css       # Global styles and Tailwind imports
├── components/
│   ├── forms/            # Form components (ContactForm, Newsletter)
│   ├── layout/           # Layout components (Header, Footer, MobileMenu)
│   ├── sections/         # Page sections (Hero, Services, etc.)
│   └── ui/               # Reusable UI components
├── hooks/                # Custom React hooks
├── lib/                  # Utilities, constants, validations, API helpers
└── types/                # TypeScript type definitions
```

### Key Features

**SEO & Internationalization**:
- Comprehensive metadata configuration in `layout.tsx`
- Spanish language optimization (`lang="es"`, `locale: "es_CO"`)
- Structured data (JSON-LD) for better search engine understanding
- Open Graph and Twitter card optimization

**Design System**:
- Custom color palette in `tailwind.config.js` with primary blue theme and dark mode colors
- Custom animations (fade-in, slide-up) with Framer Motion integration
- Inter font family for consistent typography

**Component Architecture**:
- Atomic design principles with ui/, layout/, sections/, and forms/ organization
- Form validation using Zod schemas in `lib/validations.ts`
- Custom hooks for form handling and mobile menu state
- Animated components using Framer Motion

### Configuration Notes

- **TypeScript**: Uses path aliases (`@/*` maps to `./src/*`)
- **Next.js**: Configured with experimental App Directory, Google user content domains for images, and environment variable for SITE_URL
- **ESLint**: Uses Next.js recommended configuration
- Development uses Turbopack for faster builds and hot reloading

### Content Focus
This is a business landing page for software automation services, with sections for services, technology stack, case studies, statistics, testimonials, and contact forms. All content is in Spanish and targets Colombian businesses.