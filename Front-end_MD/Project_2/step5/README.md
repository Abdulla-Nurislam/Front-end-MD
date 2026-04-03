# Project 2 Step 5 - Responsive Layouts and Flexbox

## Student Information
- **Name:** Nurislam Abdulla
- **Date:** 03.04.2026

## Overview
This step implements responsive layouts and safe area handling for the mobile app using React Native's Flexbox system and styling API. 

## Implementation Details
1. **Responsive Grid (`GridLayout.tsx`)**: Utilizes `useWindowDimensions` and Flexbox to dynamically calculate the number of items per row depending on the screen width and spacing.
2. **Safe Area Header (`ResponsiveHeader.tsx`)**: Utilizes `SafeAreaView` from `react-native-safe-area-context` and `Platform.select()` to gracefully adapt around notches and differing home indicators between iOS and Android. Adjustments are dynamically applied for tablets (`isTablet` checks).
3. **Adaptive Content (`AdaptiveLayout.tsx`)**: The main screen changes structure dynamically: features are loaded sequentially on mobile devices and rearranged side-by-side on larger screens/tablets. 

## React Native Flexbox vs Web CSS Flexbox
- **Default Flex Direction**: React Native flex containers default to `column`, whereas Web defaults to `row`. 
- **flex Property**: In React Native, `flex: 1` takes up the available space proportionally and is similar to `flex-grow: 1`. 
- **Inheritance**: React Native components generally do not inherit styles, with the exception of nested `<Text>` components inheriting text-related styles.
