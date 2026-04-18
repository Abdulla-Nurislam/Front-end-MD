# Lab 14.1: Performant Infinite List with FlatList

**Name:** Nurislam Abdulla
**Student ID:** [Your ID]
**Date:** 2026-04-18

## FlatList Optimization
This project utilizes `<FlatList>` rather than a `ScrollView` for handling deep lists (100+ items). `FlatList` implements **Virtualization**, managing a sliding window of actively rendered items.
Key performance optimizations:
- `initialNumToRender={15}` controls the initial batch layout cost.
- `windowSize={5}` manages how many viewport-lengths of items are kept in memory (reduced from default 21).
- `getItemLayout` is provided explicitly to avoid dynamic measurement costs, making layout jump-free and calculation lightning fast since height is absolute (`80px`).
- Use of `useCallback` for `renderItem` and `keyExtractor` to prevent unnecessary re-rendering of properties across batches.
