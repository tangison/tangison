# BUILD_PLAN.md — Tangison Technologies Website

## Framework and stack

- Next.js 16.1.1 with App Router
- React 19
- TypeScript 5
- Tailwind CSS 4 with @tailwindcss/postcss
- shadcn/ui components (New York style, customised to zero border-radius)
- Framer Motion for page transitions and modal overlays
- Lucide React for icons
- No database required (static site with contact form)
- No authentication for public pages

## Build mode

Full build. Every route unlocked. No demo locks. No placeholders.

## Implementation order

1. Design system setup: globals.css with Tangison tokens, zero-radius overrides, font imports
2. Layout shell: root layout, header with navigation, footer with credit
3. Home page: hero, services overview, about teaser, subdomain cards, contact CTA
4. About page: mission, story, team, values
5. Services page: AI Operations, Applied AI, Research & Consulting
6. Brand page: type specimens, colour palette, spacing, components, voice
7. Contact page: form with all async states
8. Legal pages: Privacy Policy, Terms & Conditions
9. System pages: 404, 500, loading, error, offline states
10. Machine-readable files: sitemap.xml, robots.txt, manifest, structured data
11. Motion system: scroll reveals, page transitions, reduced-motion
12. Responsive hardening: 320, 375, 414, 768, 1024, 1280, 1440
13. Accessibility: ARIA, keyboard nav, contrast, focus states
14. Verification: type-check, lint, build, browser test

## Route and state matrix

| Route | Purpose | Mode | Required states |
|-------|---------|------|-----------------|
| / | Home | Unlocked | Page entry animation, scroll reveals |
| /about | Company profile | Unlocked | Page entry, scroll reveals |
| /services | Services index | Unlocked | Page entry, scroll reveals |
| /brand | Brand guidelines | Unlocked | Page entry, interactive specimens |
| /contact | Contact form | Unlocked | Idle, loading, success, validation error, server error, offline |
| /privacy | Privacy policy | Unlocked | Loading |
| /terms | Terms & conditions | Unlocked | Loading |
| /404 | Not found | Unlocked | None |
| /500 | Unexpected error | Unlocked | None |
| /sitemap | Human-readable sitemap | Unlocked | Loading |

## Art-direction owner

Hallmark: structural anti-slop gate and final independent audit.
Taste (design-taste-frontend): sets layout-variance, motion-intensity, and density dials.
Impeccable: design context, responsive hardening, critique, and polish.

## Quality gates

- Production build passes
- TypeScript type-check passes
- ESLint passes
- No browser console errors
- Every route renders correctly at all breakpoints
- Every form validates and shows all states
- Reduced-motion works correctly
- Accessibility: semantic HTML, ARIA, keyboard nav, contrast
- Hallmark audit: no slop patterns
- Ponytail audit: no unnecessary dependencies

## Dependency decisions

- framer-motion: kept for route transitions and modals (already in tangison repo)
- lucide-react: kept for functional icons (already in tangison repo)
- shadcn/ui: used for form components (input, button, dialog), customised with zero-radius
- No anime.js or GSAP needed for this scope (CSS-native motion sufficient per Ponytail)
- No additional runtime animation library

## Known limitations

- Missing skills: superpowers, full-output-enforcement, animejs, gsap-scrolltrigger, marketingskills, seojuice-skills (npx skills installer timed out)
- Fallback: use engineering discipline from Webman operating foundation, Ponytail for complexity, existing harness skills for quality
- Contact form: email-based submission (no backend database required)
