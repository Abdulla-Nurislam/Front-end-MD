function Dashboard(): JSX.Element {
  return (
    <div className="page dashboard-page">
      <h1>📊 Dashboard</h1>
      <p>This page is lazy-loaded on demand!</p>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Users</h3>
          <p className="stat">1,234</p>
        </div>
        <div className="stat-card">
          <h3>Revenue</h3>
          <p className="stat">$12,345</p>
        </div>
        <div className="stat-card">
          <h3>Orders</h3>
          <p className="stat">567</p>
        </div>
        <div className="stat-card">
          <h3>Growth</h3>
          <p className="stat">+23%</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;