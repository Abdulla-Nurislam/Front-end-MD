function LoadingSpinner(): JSX.Element {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Loading page...</p>
    </div>
  );
}

export default LoadingSpinner;