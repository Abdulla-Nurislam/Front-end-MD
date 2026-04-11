import React from 'react';
import { NavigationContainer, DefaultTheme, DarkTheme as NavDarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import LoginScreen from './src/screens/LoginScreen';
import { RootStackParamList } from './src/navigation/types';
import { AppProvider, useAppContext } from './src/context/AppContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const { isLoggedIn, isDarkMode } = useAppContext();
  const theme = isDarkMode ? NavDarkTheme : DefaultTheme;

  return (
    <NavigationContainer theme={theme}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      {!isLoggedIn ? (
        <LoginScreen />
      ) : (
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: isDarkMode ? '#1f1f1f' : '#0066cc' },
            headerTintColor: '#fff',
            headerTitleStyle: { fontWeight: 'bold' },
            contentStyle: { backgroundColor: isDarkMode ? '#121212' : '#f5f5f5' }
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My App' }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'User Profile' }} />
          <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AppProvider>
      <RootNavigator />
    </AppProvider>
  );
}
