# Lab 13.1: Stack Navigation

**Name:** Nurislam Abdulla
**Student ID:** [Your ID]
**Date:** 2026-04-11

## Navigation Patterns
In this task, we implemented **Stack Navigation** using `@react-navigation/native-stack`. This type of navigation is best for deeply hierarchical content flows (e.g. from Home to Profile, and Profile to Settings) as it creates a literal UI "stack". The user can push a new screen onto the stack and pop it off to go back naturally. 
- We used `NavigationContainer` at the root.
- A `Stack.Navigator` was utilized with defined `Stack.Screen` wrappers.
- We demonstrated route parameters to pass `userId` between the screens.
