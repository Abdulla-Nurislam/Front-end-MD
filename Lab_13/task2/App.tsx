import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme as NavDarkTheme } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator';
import { AppProvider, useAppContext } from './src/context/AppContext';
import LoginScreen from './src/screens/LoginScreen';

function Root() {
  const { isLoggedIn, isDarkMode } = useAppContext();
  const theme = isDarkMode ? NavDarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      {!isLoggedIn ? <LoginScreen /> : <AppNavigator />}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Root />
    </AppProvider>
  );
}
