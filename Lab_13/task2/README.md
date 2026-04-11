# Lab 13.2: Bottom Tab Navigation

**Name:** Nurislam Abdulla
**Student ID:** [Your ID]
**Date:** 2026-04-11

## Navigation Patterns
In this task, we implemented **Bottom Tab Navigation** using `@react-navigation/bottom-tabs` alongside the stack navigators.
- Our primary structure uses `Tab.Navigator` to easily switch between four main sections of the app: Home, Search, Notifications, and Profile.
- To demonstrate how these can be nested flexibly, each tab actually renders its own `Stack.Navigator`! For instance, `HomeStack` and `ProfileStack`.
- This setup isolates "navigation histories" for each tab so that clicking around one tab does not interfere with the route history of another.
