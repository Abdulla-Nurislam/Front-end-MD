import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';

interface SearchResult {
  id: string;
  title: string;
  subtitle: string;
  type: 'user' | 'post' | 'hashtag';
}

export default function SearchScreen() {
  const { isDarkMode } = useAppContext();
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [recentSearches] = useState<string[]>(['React Native', 'TypeScript', 'Mobile Development']);

  const mockResults: SearchResult[] = [
    { id: '1', title: 'reactnative', subtitle: '1.2K posts', type: 'hashtag' },
    { id: '2', title: 'John Developer', subtitle: '@johndev', type: 'user' },
    { id: '3', title: 'TypeScript Tips', subtitle: '150 posts', type: 'post' },
    { id: '4', title: 'mobileapps', subtitle: '890 posts', type: 'hashtag' },
    { id: '5', title: 'Jane Smith', subtitle: '@janesmith', type: 'user' },
  ];

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim()) {
      const filtered = mockResults.filter(item => item.title.toLowerCase().includes(query.toLowerCase()) || item.subtitle.toLowerCase().includes(query.toLowerCase()));
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  const backgroundColor = isDarkMode ? '#121212' : '#f5f5f5';
  const cardColor = isDarkMode ? '#1f1f1f' : '#ffffff';
  const textColor = isDarkMode ? '#ffffff' : '#333';
  const subTextColor = isDarkMode ? '#aaaaaa' : '#666';
  const borderColor = isDarkMode ? '#333' : '#f0f0f0';

  const renderResult = ({ item }: { item: SearchResult }) => (
    <TouchableOpacity style={[styles.resultItem, { backgroundColor: cardColor, borderBottomColor: borderColor }]}>
      <View style={[styles.resultIcon, { backgroundColor }]}>
        <Ionicons name={item.type === 'user' ? 'person' : item.type === 'hashtag' ? 'pricetag' : 'document-text'} size={24} color={subTextColor} />
      </View>
      <View style={styles.resultInfo}>
        <Text style={[styles.resultTitle, { color: textColor }]}>{item.title}</Text>
        <Text style={[styles.resultSubtitle, { color: subTextColor }]}>{item.subtitle}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={styles.searchContainer}>
        <View style={[styles.searchInputContainer, { backgroundColor: cardColor }]}>
          <Ionicons name="search" size={20} color={subTextColor} />
          <TextInput style={[styles.searchInput, { color: textColor }]} placeholder="Search users, posts, hashtags..." placeholderTextColor={subTextColor} value={searchQuery} onChangeText={handleSearch} autoCapitalize="none" autoCorrect={false} />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => handleSearch('')}>
              <Ionicons name="close-circle" size={20} color={subTextColor} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {searchQuery.length === 0 ? (
        <View style={styles.recentContainer}>
          <Text style={[styles.recentTitle, { color: subTextColor }]}>Recent Searches</Text>
          {recentSearches.map((search, index) => (
            <TouchableOpacity key={index} style={[styles.recentItem, { borderBottomColor: borderColor }]} onPress={() => handleSearch(search)}>
              <Ionicons name="time-outline" size={16} color={subTextColor} />
              <Text style={[styles.recentText, { color: textColor }]}>{search}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <FlatList
          data={results}
          keyExtractor={(item) => item.id}
          renderItem={renderResult}
          contentContainerStyle={styles.listContent}
          ListEmptyComponent={
            <View style={styles.emptyContainer}>
              <Ionicons name="search-outline" size={48} color={subTextColor} />
              <Text style={[styles.emptyText, { color: subTextColor }]}>No results found</Text>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  searchContainer: { backgroundColor: '#0066cc', paddingHorizontal: 16, paddingVertical: 12 },
  searchInputContainer: { flexDirection: 'row', alignItems: 'center', borderRadius: 10, paddingHorizontal: 12, height: 44 },
  searchInput: { flex: 1, marginLeft: 8, fontSize: 16 },
  recentContainer: { padding: 16 },
  recentTitle: { fontSize: 14, fontWeight: '600', marginBottom: 12 },
  recentItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1 },
  recentText: { marginLeft: 12, fontSize: 16 },
  listContent: { paddingVertical: 8 },
  resultItem: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1 },
  resultIcon: { width: 44, height: 44, borderRadius: 22, justifyContent: 'center', alignItems: 'center' },
  resultInfo: { flex: 1, marginLeft: 12 },
  resultTitle: { fontSize: 16, fontWeight: '500' },
  resultSubtitle: { fontSize: 14, marginTop: 2 },
  emptyContainer: { alignItems: 'center', justifyContent: 'center', paddingVertical: 60 },
  emptyText: { marginTop: 12, fontSize: 16 }
});
