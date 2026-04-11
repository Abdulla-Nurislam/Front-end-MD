# Lab 9.2: Virtualization for Large Lists

**Name:** Nurislam Abdulla
**Student ID:** [Your ID]
**Date:** 2026-03-14

## Virtualization Benefits Documented

### Rendering & Scroll Performance
- **Regular List:** Renders all 10,000 items into the DOM immediately. This blocks the main thread for several seconds during the initial mount, making the page entirely unresponsive. Scrolling is laggy on lower-end devices because the browser has to calculate layouts for 10,000 complex nodes.
- **Virtualized List:** Instead of inserting 10,000 DOM nodes, `react-window` calculates the window height (e.g. 500px) against the element height (130px) and renders only the elements currently visible on the screen plus an "overscan" (e.g., around 5-10 elements max). Both the initial rendering and all scrolling are perfectly smooth at 60 FPS, because the number of elements remains consistently low. 

### Chrome DevTools Profiling Comparisons
- **DOM Nodes rendered:** 
  - Regular: ~40,000 to ~60,000 nodes (approx 4-6 nodes per item x 10000 items).
  - Virtual: ~30 to ~50 nodes consistently.
- **Time To Interactive / Render Time:**
  - Regular: Taking anywhere from 400ms to 2-3 seconds depending on hardware for paint.
  - Virtual: Less than ~20-30ms to fully render and calculate visible items.
- **Memory Usage:**
  - The regular list eats significantly more RAM allocations due to retaining massive DOM references compared to virtual.
