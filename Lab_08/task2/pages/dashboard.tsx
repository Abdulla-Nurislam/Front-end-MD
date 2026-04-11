import { GetServerSideProps } from "next";
import { User, Notification, getCurrentUser, getUserNotifications, getUserAnalytics } from "@/lib/api";

interface DashboardProps {
  user: User;
  notifications: Notification[];
  analytics: {
    pageViews: number;
    sessions: number;
    bounceRate: number;
  };
  currentTime: string;
}

export default function Dashboard({ user, notifications, analytics, currentTime }: DashboardProps) {
  const unreadCount = notifications.filter(n => !n.read).length;
  
  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <header style={{ marginBottom: '2rem', borderBottom: '1px solid #ddd', paddingBottom: '1rem' }}>
        <h1>Welcome, {user.name}</h1>
        <p>Role: {user.role}</p>
      </header>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Analytics</h2>
        <div style={{ display: 'flex', gap: '2rem', background: '#f5f5f5', padding: '1rem', borderRadius: '8px' }}>
          <div><strong>Page Views:</strong> {analytics.pageViews.toLocaleString()}</div>
          <div><strong>Sessions:</strong> {analytics.sessions.toLocaleString()}</div>
          <div><strong>Bounce Rate:</strong> {analytics.bounceRate.toFixed(1)}%</div>
        </div>
      </section>
      
      <section style={{ marginBottom: '2rem' }}>
        <h2>Notifications ({unreadCount} unread)</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {notifications.map(notif => (
            <li key={notif.id} style={{ 
              padding: '1rem', 
              marginBottom: '0.5rem', 
              borderLeft: `4px solid ${notif.type === 'info' ? 'blue' : notif.type === 'success' ? 'green' : 'orange'}`,
              background: notif.read ? '#fff' : '#f0f8ff'
            }}>
              <span style={{ fontWeight: 'bold', marginRight: '1rem', textTransform: 'uppercase', fontSize: '0.8rem' }}>
                {notif.type}
              </span>
              {notif.message}
            </li>
          ))}
        </ul>
      </section>
      
      <footer style={{ marginTop: '2rem', fontSize: '0.8rem', color: '#666' }}>
        <p>Last updated (SSR timestamp): {currentTime}</p>
      </footer>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const user = getCurrentUser();
  const notifications = await getUserNotifications(user.id);
  const analytics = await getUserAnalytics(user.id);

  return {
    props: {
      user,
      notifications,
      analytics,
      currentTime: new Date().toISOString(),
    },
  };
};
