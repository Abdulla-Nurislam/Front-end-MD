# Lab 8.2: SSR User Dashboard

**Name:** Nurislam Abdulla
**Student ID:** [Your ID]
**Date:** 2026-03-14

## SSR vs SSG Performance Comparison

### 1. First Load Speed
- **SSG (`/about`)**: Extremely fast. The site is statically pre-rendered during build. The server only needs to send static HTML files from the CDN or server cache, making the initial Time To First Byte (TTFB) very low.
- **SSR (`/about-ssr` and `/dashboard`)**: Slower first load. Because the server has to process logic (such as fetching analytical and notification data using `getServerSideProps`), render the React component, and then return the HTML, the response time relies heavily on database/API speeds.

### 2. Data Freshness
- **SSG**: Data remains the same as it was during build time (unless ISR `revalidate` is specified). Good for content that rarely changes.
- **SSR**: Data is always perfectly fresh. As demonstrated in `/dashboard`, SSR generates everything per request, so the analytics and timestamps are always completely up-to-date.

### 3. Server Load
- **SSG**: Nearly zero server load during browsing because files are just served statically.
- **SSR**: High server load because every visited page requires logic execution and backend data fetching. Should be optimized with caching wherever possible if scaled.
