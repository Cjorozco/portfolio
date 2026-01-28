# Portfolio – Frontend Engineer (React / Next.js)

Personal portfolio built with **Next.js (App Router)** to demonstrate
frontend architecture decisions, data fetching strategies and SEO handling.

## Tech Stack
- React 18
- Next.js (App Router)
- TypeScript
- Server Components
- Incremental Static Regeneration (ISR)
- Vercel (deployment)

## Key Technical Decisions

### 1. App Router & Server Components
The project uses Next.js App Router with Server Components by default
to reduce client-side JavaScript and improve performance.

### 2. Server-side Data Fetching
Projects data is fetched server-side using the GitHub public API.
ISR (`revalidate`) is used to keep data fresh without impacting performance.

### 3. SEO Handling
- Global metadata is defined at layout level
- Page-level metadata is defined per route
- Open Graph metadata is included for social sharing

### 4. What This Project Does NOT Include
- Authentication or backend logic (out of scope for a frontend portfolio)
- UI-heavy animations or visual effects
- Over-engineered architecture or unnecessary abstractions

## Live Demo
https://portfolio-jcom.vercel.app/
