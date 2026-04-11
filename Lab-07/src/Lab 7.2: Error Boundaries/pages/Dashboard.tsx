// Раскомментируйте для тестирования ошибки загрузки
// throw new Error("Failed to load Dashboard!");

function Dashboard(): JSX.Element {
  return (
    <div className="page dashboard-page">
      <h1>📊 Dashboard</h1>
      <p>Lazy-loaded with error handling!</p>
      <div className="stats-grid">
        <div className="stat-card"><h3>Users</h3><p>1,234</p></div>
        <div className="stat-card"><h3>Revenue</h3><p>$12,345</p></div>
      </div>
    </div>
  );
}

export default Dashboard;