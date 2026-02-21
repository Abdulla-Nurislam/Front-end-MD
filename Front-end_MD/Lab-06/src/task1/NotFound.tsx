import { Link } from "react-router-dom";

function NotFound(): React.ReactElement {
  return (
    <div className="not-found-container">
      <h1 className="error-code">404</h1>
      <h2>Page Not Found</h2>
      <Link to="/" className="btn-primary">Return to Home</Link>
    </div>
  );
}

export default NotFound;