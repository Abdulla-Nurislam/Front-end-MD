# Lab 11 - Task 2: Lists, Navigation, and Platform-Specific Code

## Student Details
- **Name:** Nurislam Abdulla
- **Date:** March 28, 2026

## Overview
This task demonstrates how to effectively build mobile applications using lists with `FlatList`, setting up screen navigation using React Navigation, and implementing platform-specific code.

## Navigation Setup and Execution
To set up navigation in a React Native app with Expo:
1. First, we need to install the necessary packages for React Navigation and React Native Screen: 
   `npm install @react-navigation/native @react-navigation/native-stack react-native-screens react-native-safe-area-context`
2. Then, define the possible screens and parameters using a `RootStackParamList`.
3. Wrap the whole app in `NavigationContainer` (and `SafeAreaProvider`).
4. Utilize `createNativeStackNavigator` to create a `Stack.Navigator` and define `Stack.Screen` for each available screen (e.g., `ProductList` and `ProductDetail`).
5. Options such as the header title and style can be set universally via `screenOptions` or individually per-screen in `options`.

Platform-specific styling was implemented using `Platform.select()` on the Product Detail Screen `Add to Cart` button styles to utilize shadow maps for iOS and elevation for Android.
