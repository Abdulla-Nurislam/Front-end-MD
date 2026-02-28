import { Suspense, lazy, useState, ReactNode } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import ErrorFallback from "./components/ErrorFallback";
import LoadingSpinner from "./components/LoadingSpinner";
import Home from "./pages/Home";

// Lazy-loaded components
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Settings = lazy(() => import("./pages/Settings"));
const Profile = lazy(() => import("./pages/Profile"));
const BuggyPage = lazy(() => import("./pages/BuggyPage"));

// Wrapper для сброса ошибки при навигации
function ErrorBoundaryWrapper({ children }: { children: ReactNode }): JSX.Element {
  const [key, setKey] = useState(0);
  const navigate = useNavigate();

  const handleReset = (): void => {
    setKey(prev => prev + 1);
    navigate("/");
  };

  return (
    <ErrorBoundary 
      key={key}
      fallback={<ErrorFallback />}
      onReset={handleReset}
    >
      {children}
    </ErrorBoundary>
  );
}

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="app">
        <nav className="navbar">
          <div className="nav-brand">Lazy Dashboard + Error Boundaries</div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/profile">Profile</Link></li>
            <li><Link to="/buggy">Buggy Page</Link></li>
          </ul>
        </nav>
        
        <main className="main-content">
          <ErrorBoundaryWrapper>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/buggy" element={<BuggyPage />} />
              </Routes>
            </Suspense>
          </ErrorBoundaryWrapper>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;