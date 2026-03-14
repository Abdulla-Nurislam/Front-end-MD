# Lab 8.1: Server-Side Rendering with Next.js (SSG + ISR)

**Name:** Nurislam Abdulla
**Student ID:** [Your ID]
**Date:** 2026-03-14

## SSR vs SSG Differences

### Server-Side Rendering (SSR)
- **When it renders:** At request time.
- **Data freshness:** Always fresh. Every time a user visits the page, the server fetches the latest data and renders HTML.
- **Performance:** Slower TTFB (Time to First Byte) compared to SSG because the server has to process each request dynamically.
- **Use Case:** Perfect for user-specific data like dashboards, real-time metrics, or pages requiring authentication before rendering.

### Static Site Generation (SSG)
- **When it renders:** At build time.
- **Data freshness:** Data can be old until the next rebuild, unless ISR (Incremental Static Regeneration) is used.
- **Performance:** Fastest TTFB since pre-built HTML is served directly from CDN.
- **Use Case:** Best for blog posts, marketing pages, and documentations where content is relatively static.

## Running the project

```bash
npm install
npm run dev
```
