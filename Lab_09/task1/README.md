# Lab 9.1: Memoization with React.memo, useMemo, useCallback

**Name:** Nurislam Abdulla
**Student ID:** [Your ID]
**Date:** 2026-03-14

## Optimization Techniques Documented

### `React.memo`
- **When to use:** Use this Higher-Order Component (HOC) to prevent functional components from unnecessarily re-rendering if their props have not changed.
- **Example in Task:** `UserCard` is wrapped in `memo`. Since the `user` state only changes on initialization, modifying the `count` state in the parent does not force a re-rendering of `UserCard`.

### `useMemo`
- **When to use:** Use this hook to cache the result of a very expensive computation (e.g. processing large arrays, complex math calculations) so it isn't recalculated on every render.
- **Example in Task:** The `calculateAnalytics` function inside `AnalyticsChart` has a simulated heavy workload. By using `useMemo`, we recalculate the value only when `items` change. 

### `useCallback`
- **When to use:** Use this hook to memoize a function definition, keeping its memory reference stable between renders. This guarantees that memoized child components receiving these functions as `props` do not needlessly re-render.
- **Example in Task:** `handleClick` and `handleIncrement` in `Dashboard` are wrapped in `useCallback`. This tells React to maintain the same function instances, which prevents the memoized `<Button>` components from re-rendering each time we click `handleIncrement`.
