# Tangison Systems

Sovereign intelligence infrastructure product site.

**Preview:** [https://tangison.com](https://tangison.com)  
**Status:** Product site  
**Visibility:** Public

## What this is

Product site for TANGISON SYSTEMS, the sovereign AI infrastructure line. Distinct from `tangison-studio`, which is the agency arm, and from `tangison-technologies-website`, which is the corporate site.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Radix UI primitives
- Framer Motion
- lucide-react icons
- Prisma ORM
- sharp image pipeline

## Getting started

```bash
git clone https://github.com/tangison/tangison.git
cd tangison
npm install
npm run dev
```

The dev server runs on http://localhost:3000.

## Scripts

| Script | Purpose |
|---|---|
| `npm run dev` | Start the development server. |
| `npm run build` | Production build. |
| `npm run start` | Serve the production build. |
| `npm run lint` | Run ESLint. |
| `npm run db:push` | Push the Prisma schema to the database. |
| `npm run db:generate` | Generate the Prisma client. |
| `npm run db:migrate` | Run Prisma migrations. |
| `npm run db:reset` | Drop and recreate the database. |

## Routes

13 page routes.

```
/
/about
/brand
/company
/contact
/home-
/industries
/privacy
/services
/sitemap
/solutions
/terms
/work
```

## Environment

Create `.env.local` for local secrets. Never commit it.

> **Security note.** This repository currently has `.env` committed to the default branch. It must be removed from the working tree and from git history, and any live value it contains must be rotated first. See `SECURITY.md` in the audit workspace for the full finding and the remediation order.

## Deployment

Deployed on Vercel. No custom domain is attached to this project.

## Maintainer

Built and maintained by **Tangison Technologies**, Windhoek, Namibia.

| | |
|---|---|
| Main line | [+264 83 411 522](tel:+264813411522) (`083411522`) |
| Email | contact@tangison.com |
| Web | https://tangison.com |

## Licence

Proprietary. Copyright Tangison Technologies. All rights reserved.
