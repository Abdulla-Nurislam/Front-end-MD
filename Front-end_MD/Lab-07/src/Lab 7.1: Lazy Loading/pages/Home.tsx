function Home(): JSX.Element {
  return (
    <div className="page home-page">
      <h1>🏠 Home</h1>
      <p>This page loads immediately as part of the main bundle.</p>
      <div className="feature-cards">
        <div className="card">
          <h3>Instant Load</h3>
          <p>No lazy loading needed for the home page</p>
        </div>
        <div className="card">
          <h3>Navigation</h3>
          <p>Use the nav to see lazy-loaded pages</p>
        </div>
      </div>
    </div>
  );
}

export default Home;