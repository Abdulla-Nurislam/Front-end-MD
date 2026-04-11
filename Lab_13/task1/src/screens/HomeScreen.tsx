import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useAppContext } from '../context/AppContext';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
};

export default function HomeScreen({ navigation }: HomeScreenProps) {
  const { profile, isDarkMode } = useAppContext();
  const unreadNotifications = 5;

  const backgroundColor = isDarkMode ? '#121212' : '#f5f5f5';
  const cardColor = isDarkMode ? '#1f1f1f' : '#ffffff';
  const textColor = isDarkMode ? '#ffffff' : '#333';
  const subTextColor = isDarkMode ? '#aaaaaa' : '#666';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.content}>
        <View style={styles.welcomeSection}>
          <Text style={[styles.welcomeText, { color: subTextColor }]}>Welcome back,</Text>
          <Text style={[styles.userName, { color: textColor }]}>{profile.name}</Text>
        </View>

        <View style={styles.statsSection}>
          <TouchableOpacity style={[styles.statCard, { backgroundColor: cardColor }]} onPress={() => navigation.navigate('Profile', { userId: '123' })}>
            <Text style={styles.statValue}>42</Text>
            <Text style={[styles.statLabel, { color: subTextColor }]}>Posts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.statCard, { backgroundColor: cardColor }]} onPress={() => navigation.navigate('Profile', { userId: '123' })}>
            <Text style={styles.statValue}>1.2K</Text>
            <Text style={[styles.statLabel, { color: subTextColor }]}>Followers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.statCard, { backgroundColor: cardColor }]} onPress={() => navigation.navigate('Profile', { userId: '123' })}>
            <Text style={styles.statValue}>890</Text>
            <Text style={[styles.statLabel, { color: subTextColor }]}>Following</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.actionsSection}>
          <TouchableOpacity style={styles.primaryButton} onPress={() => navigation.navigate('Profile', { userId: '123' })}>
            <Text style={styles.primaryButtonText}>View Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.secondaryButton, { borderColor: isDarkMode ? '#bb86fc' : '#0066cc' }]} onPress={() => navigation.navigate('Settings')}>
            <Text style={[styles.secondaryButtonText, { color: isDarkMode ? '#bb86fc' : '#0066cc' }]}>Settings</Text>
          </TouchableOpacity>
        </View>

        {unreadNotifications > 0 && (
          <View style={styles.notificationBadge}>
            <Text style={styles.notificationText}>You have {unreadNotifications} new notifications</Text>
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, padding: 20 },
  welcomeSection: { marginBottom: 30 },
  welcomeText: { fontSize: 16 },
  userName: { fontSize: 28, fontWeight: 'bold', marginTop: 4 },
  statsSection: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  statCard: { flex: 1, borderRadius: 12, padding: 16, marginHorizontal: 6, alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  statValue: { fontSize: 24, fontWeight: 'bold', color: '#0066cc' },
  statLabel: { fontSize: 12, marginTop: 4 },
  actionsSection: { gap: 12 },
  primaryButton: { backgroundColor: '#0066cc', borderRadius: 8, padding: 16, alignItems: 'center' },
  primaryButtonText: { color: '#ffffff', fontSize: 16, fontWeight: '600' },
  secondaryButton: { backgroundColor: 'transparent', borderWidth: 1, borderRadius: 8, padding: 16, alignItems: 'center' },
  secondaryButtonText: { fontSize: 16, fontWeight: '600' },
  notificationBadge: { backgroundColor: '#fff3cd', borderRadius: 8, padding: 12, marginTop: 20, borderLeftWidth: 4, borderLeftColor: '#ffc107' },
  notificationText: { color: '#856404', fontSize: 14 }
});
