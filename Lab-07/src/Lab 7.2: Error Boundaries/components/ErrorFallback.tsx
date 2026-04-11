interface ErrorFallbackProps {
  error?: Error | null;
}

function ErrorFallback({ error }: ErrorFallbackProps): JSX.Element {
  return (
    <div className="error-fallback">
      <div className="error-icon">⚠️</div>
      <h2>Something went wrong</h2>
      <p>We couldn't load this page. Please try again.</p>
      {error && (
        <details className="error-details">
          <summary>Error details</summary>
          <code>{error.message}</code>
        </details>
      )}
    </div>
  );
}

export default ErrorFallback;