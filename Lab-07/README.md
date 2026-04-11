# Lab 07: Code Splitting with Suspense

## Lab 7.1: Lazy Loading Components

### What is Code Splitting?
Code splitting is a technique that breaks your application into smaller chunks that load on demand, rather than loading everything upfront. This improves initial load time.

### Why use lazy()?
- `lazy()` lets you define components that load dynamically
- Returns a lazy component that loads the bundle only when rendered
- Reduces initial bundle size

### What does Suspense do?
- Displays fallback content (like a spinner) while child components are loading
- Wraps lazy-loaded components to handle the loading state

### Files
- `task1/pages/` - Page components (Dashboard, Settings, Profile are lazy-loaded)
- `task1/components/LoadingSpinner.tsx` - Fallback UI
- `task1/App.tsx` - Routes with Suspense

## Lab 7.2: Error Handling with Error Boundaries

### What is Error Boundary?
A React component that catches JavaScript errors in its child component tree and displays a fallback UI instead of crashing the app.

### When to use Error Boundary?
- Catching errors in lazy-loaded components
- Preventing entire app crashes from component errors
- Providing user-friendly error messages

### Key Features
- **Class component** with `getDerivedStateFromError`
- **Retry functionality** - reset error state without page reload
- **Error logging** via `componentDidCatch`

### Files
- `task2/ErrorBoundary.tsx` - Error Boundary implementation
- `task2/components/ErrorFallback.tsx` - Error UI
- `task2/pages/BuggyPage.tsx` - Page to test error handling

## Running the Project

```bash
npm install
npm run dev
```