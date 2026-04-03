import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ResponsiveHeader } from './src/components/ResponsiveHeader';
import { AdaptiveLayout, FeatureCard, StatsRow, ResponsiveImage } from './src/components/AdaptiveLayout';
import { GridLayout, Card } from './src/components/GridLayout';

export default function App() {
  const stats = [
    { label: 'Active Users', value: '1,200' },
    { label: 'Revenue', value: '$45K' },
    { label: 'Growth', value: '+12%' },
  ];

  return (
    <SafeAreaProvider>
      <ResponsiveHeader 
        title="Dashboard" 
        leftAction={{ icon: 'menu', onPress: () => {} }} 
        rightAction={{ icon: 'person', onPress: () => {} }} 
      />
      <AdaptiveLayout
        content={
          <View style={styles.content}>
            <StatsRow stats={stats} />
            
            <Text style={styles.sectionTitle}>Key Features</Text>
            <GridLayout columns={2}>
              <FeatureCard 
                icon="bar-chart" 
                title="Analytics" 
                description="Real-time data at your fingertips." 
                variant="primary" 
              />
              <FeatureCard 
                icon="flash" 
                title="Performance" 
                description="Lightning fast load times." 
                variant="secondary" 
              />
              <FeatureCard 
                icon="lock-closed" 
                title="Security" 
                description="Your data is safe with us." 
                variant="accent" 
              />
              <FeatureCard 
                icon="phone-portrait" 
                title="Responsive" 
                description="Looks great on all devices." 
                variant="primary" 
              />
            </GridLayout>

            <Text style={styles.sectionTitle}>Recent Activity</Text>
            <GridLayout columns={1}>
              <Card title="User sign up" subtitle="2 mins ago">
                <Text style={styles.cardText}>John Doe created an account.</Text>
              </Card>
              <Card title="New order placed" subtitle="1 hour ago">
                <Text style={styles.cardText}>Order #12345 was placed from NY.</Text>
              </Card>
            </GridLayout>

            <ResponsiveImage source={{ uri: 'https://via.placeholder.com/800x400' }} />
          </View>
        }
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
    marginTop: 8,
  },
  cardText: {
    color: '#666',
    fontSize: 14,
  }
});
