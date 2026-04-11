import { Link, Outlet } from "react-router-dom";

function Layout(): React.ReactElement {
  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">Student Portal</div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/courses">Courses</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
      <main className="main-content">
        <Outlet />
      </main>
      <footer className="footer">
        <p>Student Portal 2026</p>
      </footer>
    </>
  );
}

export default Layout;