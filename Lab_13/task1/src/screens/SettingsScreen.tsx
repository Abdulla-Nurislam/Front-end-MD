import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useAppContext } from '../context/AppContext';

type SettingsScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Settings'>;
};

export default function SettingsScreen({ navigation }: SettingsScreenProps) {
  const [notifications, setNotifications] = useState(true);
  const { isDarkMode, toggleDarkMode, logout } = useAppContext();

  const handleLogout = () => {
    Alert.alert('Log Out', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Log Out', style: 'destructive', onPress: () => logout() },
    ]);
  };

  const backgroundColor = isDarkMode ? '#121212' : '#f5f5f5';
  const cardColor = isDarkMode ? '#1f1f1f' : '#ffffff';
  const textColor = isDarkMode ? '#ffffff' : '#333';
  const subTextColor = isDarkMode ? '#aaaaaa' : '#666';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <ScrollView>
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: subTextColor }]}>Preferences</Text>
          <View style={[styles.sectionContent, { backgroundColor: cardColor }]}>
            <View style={[styles.settingRow, { borderBottomColor: isDarkMode ? '#333' : '#f0f0f0' }]}>
              <Text style={[styles.settingLabel, { color: textColor }]}>Push Notifications</Text>
              <Switch value={notifications} onValueChange={setNotifications} />
            </View>
            <View style={styles.settingRow}>
              <Text style={[styles.settingLabel, { color: textColor }]}>Dark Mode</Text>
              <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
            </View>
          </View>
        </View>
        <View style={styles.logoutSection}>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Text style={styles.logoutButtonText}>Log Out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  section: { marginTop: 24 },
  sectionTitle: { fontSize: 14, fontWeight: '600', marginLeft: 20, marginBottom: 8, textTransform: 'uppercase' },
  sectionContent: { borderRadius: 12, marginHorizontal: 16, overflow: 'hidden' },
  settingRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 14, paddingHorizontal: 16, borderBottomWidth: 1 },
  settingLabel: { fontSize: 16 },
  logoutSection: { marginTop: 32, marginBottom: 32, paddingHorizontal: 16 },
  logoutButton: { backgroundColor: '#dc3545', borderRadius: 8, padding: 16, alignItems: 'center' },
  logoutButtonText: { color: '#ffffff', fontSize: 16, fontWeight: '600' }
});
