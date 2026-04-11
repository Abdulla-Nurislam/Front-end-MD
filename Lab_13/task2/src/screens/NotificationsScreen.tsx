import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { useAppContext } from '../context/AppContext';

interface Notification {
  id: string;
  type: 'like' | 'comment' | 'follow' | 'mention';
  user: { name: string; username: string; avatar?: string };
  message: string;
  time: string;
  read: boolean;
}

export default function NotificationsScreen() {
  const { isDarkMode } = useAppContext();
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: '1', type: 'like', user: { name: 'Jane Smith', username: '@janesmith' }, message: 'liked your post', time: '2m ago', read: false },
    { id: '2', type: 'comment', user: { name: 'Mike Johnson', username: '@mikej' }, message: 'commented: "Great insights!"', time: '15m ago', read: false },
    { id: '3', type: 'follow', user: { name: 'Sarah Wilson', username: '@sarahw' }, message: 'started following you', time: '1h ago', read: false },
    { id: '4', type: 'mention', user: { name: 'Tech Blog', username: '@techblog' }, message: 'mentioned you in a post', time: '3h ago', read: true },
    { id: '5', type: 'like', user: { name: 'Dev Community', username: '@devcom' }, message: 'liked your post', time: '5h ago', read: true },
  ]);
  const [refreshing, setRefreshing] = useState(false);
  const unreadCount = notifications.filter((n) => !n.read).length;

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  };

  const markAsRead = (id: string) => setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, read: true } : n)));
  const markAllAsRead = () => setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));

  const backgroundColor = isDarkMode ? '#121212' : '#f5f5f5';
  const cardColor = isDarkMode ? '#1f1f1f' : '#ffffff';
  const unreadCardColor = isDarkMode ? '#2c3e50' : '#f0f8ff';
  const textColor = isDarkMode ? '#ffffff' : '#333';
  const subTextColor = isDarkMode ? '#aaaaaa' : '#999';
  const borderColor = isDarkMode ? '#333' : '#f0f0f0';

  const getNotificationIcon = (type: Notification['type']) => {
    switch (type) {
      case 'like': return { name: 'heart', color: '#dc3545' as const };
      case 'comment': return { name: 'chatbubble', color: '#0066cc' as const };
      case 'follow': return { name: 'person-add', color: '#28a745' as const };
      case 'mention': return { name: 'at', color: '#ffc107' as const };
    }
  };

  const renderNotification = ({ item }: { item: Notification }) => {
    const icon = getNotificationIcon(item.type);
    const initial = item.user.name.charAt(0).toUpperCase();

    return (
      <TouchableOpacity style={[styles.notificationItem, { backgroundColor: item.read ? cardColor : unreadCardColor, borderBottomColor: borderColor }]} onPress={() => markAsRead(item.id)} activeOpacity={0.7}>
        <View style={styles.avatarContainer}>
          <View style={styles.avatar}><Text style={styles.avatarText}>{initial}</Text></View>
          <View style={[styles.iconBadge, { backgroundColor: icon.color }]}><Ionicons name={icon.name as any} size={10} color="#ffffff" /></View>
        </View>
        <View style={styles.notificationContent}>
          <Text style={[styles.notificationText, { color: textColor }]}><Text style={styles.userName}>{item.user.name}</Text>{' '}{item.message}</Text>
          <Text style={[styles.timeText, { color: subTextColor }]}>{item.time}</Text>
        </View>
        {!item.read && <View style={styles.unreadDot} />}
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <View style={[styles.header, { backgroundColor: cardColor, borderBottomColor: borderColor }]}>
        <Text style={[styles.headerTitle, { color: textColor }]}>Notifications</Text>
        {unreadCount > 0 && (
          <TouchableOpacity onPress={markAllAsRead}>
            <Text style={styles.markAllRead}>Mark all as read</Text>
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={notifications}
        keyExtractor={(item) => item.id}
        renderItem={renderNotification}
        contentContainerStyle={styles.listContent}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="notifications-outline" size={48} color={subTextColor} />
            <Text style={[styles.emptyText, { color: subTextColor }]}>No notifications yet</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, borderBottomWidth: 1 },
  headerTitle: { fontSize: 20, fontWeight: 'bold' },
  markAllRead: { fontSize: 14, color: '#0066cc' },
  listContent: { flexGrow: 1 },
  notificationItem: { flexDirection: 'row', alignItems: 'center', padding: 16, borderBottomWidth: 1 },
  avatarContainer: { position: 'relative' },
  avatar: { width: 44, height: 44, borderRadius: 22, backgroundColor: '#0066cc', justifyContent: 'center', alignItems: 'center' },
  avatarText: { fontSize: 18, fontWeight: 'bold', color: '#ffffff' },
  iconBadge: { position: 'absolute', bottom: -2, right: -2, width: 18, height: 18, borderRadius: 9, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: '#ffffff' },
  notificationContent: { flex: 1, marginLeft: 12 },
  notificationText: { fontSize: 14, lineHeight: 20 },
  userName: { fontWeight: '600' },
  timeText: { fontSize: 12, marginTop: 4 },
  unreadDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#0066cc' },
  emptyContainer: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingVertical: 60 },
  emptyText: { marginTop: 12, fontSize: 16 }
});
