import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import NotificationsScreen from '../screens/NotificationsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import { RootStackParamList, TabParamList } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

function HomeStack() {
  const { isDarkMode } = useAppContext();
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: isDarkMode ? '#1f1f1f' : '#0066cc' }, headerTintColor: '#fff', contentStyle: { backgroundColor: isDarkMode ? '#121212' : '#f5f5f5' } }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'Home' }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Stack.Navigator>
  );
}

function SearchStack() {
  const { isDarkMode } = useAppContext();
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: isDarkMode ? '#1f1f1f' : '#0066cc' }, headerTintColor: '#fff', contentStyle: { backgroundColor: isDarkMode ? '#121212' : '#f5f5f5' } }}>
      <Stack.Screen name="SearchMain" component={SearchScreen} options={{ title: 'Search' }} />
    </Stack.Navigator>
  );
}

function NotificationsStack() {
  const { isDarkMode } = useAppContext();
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: isDarkMode ? '#1f1f1f' : '#0066cc' }, headerTintColor: '#fff', contentStyle: { backgroundColor: isDarkMode ? '#121212' : '#f5f5f5' } }}>
      <Stack.Screen name="NotificationsMain" component={NotificationsScreen} options={{ title: 'Notifications' }} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  const { isDarkMode } = useAppContext();
  return (
    <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: isDarkMode ? '#1f1f1f' : '#0066cc' }, headerTintColor: '#fff', contentStyle: { backgroundColor: isDarkMode ? '#121212' : '#f5f5f5' } }}>
      <Stack.Screen name="ProfileMain" component={ProfileScreen as any} options={{ title: 'Profile' }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Stack.Navigator>
  );
}

interface TabIconProps {
  name: keyof typeof Ionicons.glyphMap;
  color: string;
  size: number;
  badge?: number;
}

function TabIcon({ name, color, size, badge }: TabIconProps) {
  return (
    <View style={styles.tabIconContainer}>
      <Ionicons name={name} size={size} color={color} />
      {badge !== undefined && badge > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{badge > 9 ? '9+' : badge}</Text>
        </View>
      )}
    </View>
  );
}

export default function AppNavigator() {
  const { isDarkMode } = useAppContext();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: isDarkMode ? '#bb86fc' : '#0066cc',
        tabBarInactiveTintColor: isDarkMode ? '#888' : '#999',
        tabBarStyle: {
          backgroundColor: isDarkMode ? '#1f1f1f' : '#ffffff',
          borderTopWidth: 1,
          borderTopColor: isDarkMode ? '#333' : '#e0e0e0',
          paddingTop: 8,
          paddingBottom: 8,
          height: 60,
        },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
        headerShown: false,
      }}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ tabBarIcon: ({ color, size }) => <TabIcon name="home" color={color} size={size} /> }} />
      <Tab.Screen name="Search" component={SearchStack} options={{ tabBarIcon: ({ color, size }) => <TabIcon name="search" color={color} size={size} /> }} />
      <Tab.Screen name="Notifications" component={NotificationsStack} options={{ tabBarIcon: ({ color, size }) => <TabIcon name="notifications" color={color} size={size} badge={5} /> }} />
      <Tab.Screen name="Profile" component={ProfileStack} options={{ tabBarIcon: ({ color, size }) => <TabIcon name="person" color={color} size={size} /> }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabIconContainer: { position: 'relative' },
  badge: { position: 'absolute', top: -4, right: -8, backgroundColor: '#dc3545', borderRadius: 10, minWidth: 18, height: 18, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 4 },
  badgeText: { color: '#ffffff', fontSize: 10, fontWeight: 'bold' }
});
