# Lab 11 - Task 1: Expo Setup and Core Components

## Student Details
- **Name:** Nurislam Abdulla
- **Date:** March 28, 2026

## Overview
This task involved setting up a React Native project using Expo and building a native mobile application using React Native's core components (View, Text, Image, TextInput, etc.).

## React Native vs Web Development
- **Renderer:** Unlike web React which renders standard HTML tags (DOM), React Native renders native OS UI components.
- **Components:** In React Native, `div`, `span`, and `p` are replaced by `View` and `Text`.
- **Styling:** React Native uses an inline JavaScript `StyleSheet` object that mimics CSS with slight property variations (e.g., camelCase property names instead of kebab-case, no web layout models besides Flexbox).
- **Layout:** Flexbox is mainly used, but unlike web CSS where `flexDirection` defaults to `row`, in React Native `flexDirection` defaults to `column`.
- **Events:** `onClick` is replaced by `onPress` (used typically with `TouchableOpacity` or `Pressable`).

## Steps Taken
1. Initialized an Expo project with TypeScript templates.
2. Created a flexible `ProfileCard` using `View`, `Image`, and `Text`.
3. Added a `ContactSection` to handle user input state with `TextInput`.
4. Rendered everything in `App.tsx` and tested via Expo.
