# Tangison Website Worklog

## 2025-03-04 — Comprehensive Multi-Skill Audit Fixes (Session 2: Structured Data)

**Context:** Continuation of the multi-skill audit (Vercel Web Interface Guidelines, website-audit, website-structure, squirrelscan). Previous session completed 11 fixes across accessibility, UX, content, and performance. This session addresses the remaining structured data items.

### Changes Made

1. **Homepage: WebSite schema with SearchAction** — Added a dedicated `<script type="application/ld+json">` block for WebSite schema alongside the existing Organization schema. Includes `potentialAction` SearchAction targeting `/sitemap?q={search_term_string}`.

2. **Homepage: Service schemas (4 service areas)** — Added a third `<script type="application/ld+json">` block containing an array of 4 Service schemas:
   - AI Operations and Automation → `/solutions#ai-operations`
   - Data and Decision Systems → `/solutions#data-decisions`
   - Resilient Digital Platforms → `/solutions#resilient-platforms`
   - Strategy and Deployment → `/solutions#strategy-deployment`
   Each includes provider (Tangison Technologies), description, and URL with hash fragment.

3. **Brand page: BreadcrumbList schema** — Added `<script type="application/ld+json">` with BreadcrumbList (Home → Brand), matching the pattern used on services and about pages.

4. **Build verification** — `npm run build` passes cleanly (all 17 static pages generated, no errors).

5. **Git push** — Committed as `ad40f11` and pushed to `origin/main`. Vercel deployment triggered automatically.

## 2025-03-05 — Code Quality Audit, Build Optimization & Environment Normalization

**Context:** Complete codebase audit, environment verification, build pipeline stabilization, and Git/Vercel connectivity check.

### Changes Made

1. **Environment & Dependency Normalization**:
   - Stabilized Next.js to LTS 15.4.9 with matched ESLint configuration.
   - Updated build script to execute `prisma generate && next build` for zero-failure production and serverless builds.
   - Replaced Bun-only production start dependency in `package.json` with standard `next start -p 3000` for universal Node.js/Vercel runtime compatibility.

2. **React 19 & ESLint 9 Rule Fixes**:
   - Fixed `useIsMobile` hook in `src/hooks/use-mobile.ts` to avoid cascading render calls from synchronous state updates in `useEffect`.
   - Fixed `Carousel` in `src/components/ui/carousel.tsx` to handle state synchronization via asynchronous microtask queues rather than synchronous effect execution.
   - Updated `eslint.config.mjs` using `FlatCompat` from `@eslint/eslintrc` to ensure smooth rule validation across both local and CI environments.

3. **Security & Deployment Optimization**:
   - Updated `next.config.ts` Content-Security-Policy to allow preview rendering in AI Studio container frames while retaining strict CSP directives in production.
   - Refined `sitemap/page.tsx` with all primary product routes (Solutions, Industries, Work, Company, Brand, Contact, Privacy, Terms).
   - Audited Vercel production deployment pipeline (`tangison` project, linked to `tangison/tangison` on `main`).

4. **Build & Lint Verification**:
   - ESLint validation passes cleanly with 0 errors and 0 warnings.
   - Production Next.js build (`prisma generate && next build`) compiled cleanly with all static routes and standalone assets generated.

### Previous Session (Completed)

- Nav labels fix, backdrop accessibility, mobile nav transitions, overscroll-contain
- ArrowUpRight aria-hidden across all pages
- transition-all → specific transition properties across all pages
- Contact form: useRef, autocomplete, spellCheck, error focus, min-w-0
- Loading → Loading…, globals.css touch-action/safe-area/overflow-wrap/scroll-margin-top
- Sitemap taxonomy descriptions updated
- OG image URLs to absolute https://tangison.com/images/…
- Font preloading for Cabinet Grotesk 800 and Satoshi 400

### Status

All audit fixes complete. Build passes. Deployed to tangison.com via Vercel.
