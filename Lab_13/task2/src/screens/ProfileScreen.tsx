import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';
import { useAppContext } from '../context/AppContext';

type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export default function ProfileScreen({ navigation, route }: ProfileScreenProps) {
  const { profile, updateProfile, isDarkMode } = useAppContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editName, setEditName] = useState(profile.name);
  const [editUsername, setEditUsername] = useState(profile.username);
  const [editBio, setEditBio] = useState(profile.bio);

  const handleSave = () => {
    updateProfile({ name: editName, username: editUsername, bio: editBio });
    setIsEditing(false);
    Alert.alert('Success', 'Profile updated successfully!');
  };

  const backgroundColor = isDarkMode ? '#121212' : '#f5f5f5';
  const cardColor = isDarkMode ? '#1f1f1f' : '#ffffff';
  const textColor = isDarkMode ? '#ffffff' : '#333';
  const subTextColor = isDarkMode ? '#aaaaaa' : '#666';

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.avatarPlaceholder}>
            <Text style={styles.avatarText}>
              {profile.name.length > 0 ? profile.name.charAt(0).toUpperCase() : '?'}
            </Text>
          </View>
          
          {isEditing ? (
            <View style={styles.editForm}>
              <TextInput style={[styles.input, { backgroundColor: cardColor, color: textColor }]} value={editName} onChangeText={setEditName} placeholder="Name" placeholderTextColor={subTextColor} />
              <TextInput style={[styles.input, { backgroundColor: cardColor, color: textColor }]} value={editUsername} onChangeText={setEditUsername} placeholder="Username" placeholderTextColor={subTextColor} />
            </View>
          ) : (
            <>
              <Text style={[styles.name, { color: textColor }]}>{profile.name}</Text>
              <Text style={[styles.username, { color: subTextColor }]}>{profile.username}</Text>
            </>
          )}
        </View>

        <View style={[styles.statsContainer, { backgroundColor: cardColor }]}>
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: textColor }]}>42</Text>
            <Text style={[styles.statLabel, { color: subTextColor }]}>Posts</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: isDarkMode ? '#333' : '#e0e0e0' }]} />
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: textColor }]}>1200</Text>
            <Text style={[styles.statLabel, { color: subTextColor }]}>Followers</Text>
          </View>
          <View style={[styles.statDivider, { backgroundColor: isDarkMode ? '#333' : '#e0e0e0' }]} />
          <View style={styles.statItem}>
            <Text style={[styles.statNumber, { color: textColor }]}>890</Text>
            <Text style={[styles.statLabel, { color: subTextColor }]}>Following</Text>
          </View>
        </View>

        <View style={[styles.infoSection, { backgroundColor: cardColor }]}>
          <Text style={[styles.bioLabel, { color: textColor }]}>Bio</Text>
          {isEditing ? (
            <TextInput style={[styles.inputArea, { backgroundColor: isDarkMode ? '#2c2c2c' : '#f9f9f9', color: textColor }]} value={editBio} onChangeText={setEditBio} multiline placeholder="Enter bio" placeholderTextColor={subTextColor} />
          ) : (
            <Text style={[styles.bio, { color: subTextColor }]}>{profile.bio}</Text>
          )}
        </View>

        <View style={styles.actionsContainer}>
          {isEditing ? (
            <TouchableOpacity style={[styles.editButton, { backgroundColor: '#28a745' }]} onPress={handleSave}>
              <Text style={styles.editButtonText}>Save Profile</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
              <Text style={styles.editButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContent: { padding: 20 },
  header: { alignItems: 'center', marginBottom: 24 },
  avatarPlaceholder: { width: 100, height: 100, borderRadius: 50, backgroundColor: '#0066cc', justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  avatarText: { fontSize: 40, fontWeight: 'bold', color: '#ffffff' },
  name: { fontSize: 24, fontWeight: 'bold', marginBottom: 4 },
  username: { fontSize: 16 },
  editForm: { width: '100%', alignItems: 'center', marginVertical: 10 },
  input: { width: '80%', padding: 10, borderRadius: 8, marginBottom: 10, borderWidth: 1, borderColor: '#cccccc' },
  inputArea: { width: '100%', minHeight: 80, padding: 10, borderRadius: 8, borderWidth: 1, borderColor: '#cccccc', marginTop: 8 },
  statsContainer: { flexDirection: 'row', borderRadius: 12, padding: 20, marginBottom: 24, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  statItem: { flex: 1, alignItems: 'center' },
  statNumber: { fontSize: 20, fontWeight: 'bold' },
  statLabel: { fontSize: 12, marginTop: 4 },
  statDivider: { width: 1 },
  infoSection: { borderRadius: 12, padding: 20, marginBottom: 24 },
  bioLabel: { fontSize: 14, fontWeight: '600', marginBottom: 8 },
  bio: { fontSize: 14, lineHeight: 20, marginBottom: 16 },
  actionsContainer: { gap: 12 },
  editButton: { backgroundColor: '#0066cc', borderRadius: 8, padding: 16, alignItems: 'center' },
  editButtonText: { color: '#ffffff', fontSize: 16, fontWeight: '600' }
});
