import React from 'react';
import { StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { ProfileCard } from './src/components/ProfileCard';
import { ContactSection } from './src/components/ContactSection';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ProfileCard 
          name="Nurislam Abdulla"
          role="Software Developer"
          bio="Passionate about building great mobile experiences with React Native."
        />
        <ContactSection />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
});
