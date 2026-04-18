# Lab 14.2: Robust Registration Flow & Form Validations

**Name:** Nurislam Abdulla
**Student ID:** [Your ID]
**Date:** 2026-04-18

## Keyboard Handling & Validation
This project implements robust form behaviors.
Key features:
- `KeyboardAvoidingView` dynamically manages the screen layout to prevent the on-screen keyboard from covering inputs on iOS/Android.
- `TouchableWithoutFeedback` wraps the screen to instantly dismiss the keyboard via `Keyboard.dismiss()` when tapping outside inputs.
- Real-time RegExp `validateEmail` strictly manages React state updates, toggling styled border changes (`inputError`) dynamically.
- Used specific OS keyboards like `keyboardType="email-address"` and `autoCapitalize="none"`.
