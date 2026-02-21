function Home(): React.ReactElement {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to Student Portal</h1>
        <p className="hero-text">
          Your gateway to academic excellence. Explore our courses and achieve your goals.
        </p>
        <div className="hero-links">
          <a href="/courses" className="btn-primary">Browse Courses</a>
          <a href="/about" className="btn-secondary">Learn More</a>
        </div>
      </section>
    </div>
  );
}

export default Home;