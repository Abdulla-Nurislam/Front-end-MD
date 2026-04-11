import { SafeAreaView } from 'react-native-safe-area-context';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAppContext } from '../context/AppContext';

export default function LoginScreen() {
  const { login, isDarkMode } = useAppContext();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#f5f5f5' }]}>
      <View style={styles.content}>
        <Text style={[styles.title, { color: isDarkMode ? '#ffffff' : '#333' }]}>Welcome to Task1</Text>
        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 40 },
  button: { backgroundColor: '#0066cc', padding: 16, borderRadius: 8, width: '100%', alignItems: 'center' },
  buttonText: { color: '#ffffff', fontSize: 16, fontWeight: '600' }
});
