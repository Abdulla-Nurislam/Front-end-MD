function Home(): React.ReactElement {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to Student Portal</h1>
        <p className="hero-text">Your gateway to academic excellence.</p>
        <div className="hero-links">
          <a href="/courses" className="btn-primary">Browse Courses</a>
        </div>
      </section>
    </div>
  );
}

export default Home;