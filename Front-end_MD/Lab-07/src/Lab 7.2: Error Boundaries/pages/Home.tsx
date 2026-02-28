function Home(): JSX.Element {
  return (
    <div className="page home-page">
      <h1>🏠 Home</h1>
      <p>Welcome to the Error Boundary Demo!</p>
      <div className="feature-cards">
        <div className="card">
          <h3>Error Boundaries</h3>
          <p>Catch errors in React components</p>
        </div>
        <div className="card">
          <h3>Retry Functionality</h3>
          <p>Recover from errors without reload</p>
        </div>
      </div>
    </div>
  );
}

export default Home;