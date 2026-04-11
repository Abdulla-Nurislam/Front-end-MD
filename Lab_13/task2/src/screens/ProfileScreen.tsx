import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation, route }: ProfileScreenProps) {
  const userId = route.params?.userId || 'unknown';

  const profileData = {
    id: userId,
    name: 'John Doe',
    username: '@johndoe',
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.avatarPlaceholder}><Text style={styles.avatarText}>J</Text></View>
          <Text style={styles.name}>{profileData.name}</Text>
          <Text style={styles.username}>{profileData.username}</Text>
        </View>
        <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.editButtonText}>Edit Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  scrollContent: { padding: 20 },
  header: { alignItems: 'center', marginBottom: 24 },
  avatarPlaceholder: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#0066cc', justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  avatarText: { fontSize: 40, fontWeight: 'bold', color: '#ffffff' },
  name: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  username: { fontSize: 16, color: '#666' },
  editButton: { backgroundColor: '#0066cc', borderRadius: 8, padding: 16, alignItems: 'center' },
  editButtonText: { color: '#ffffff', fontSize: 16, fontWeight: '600' }
});
