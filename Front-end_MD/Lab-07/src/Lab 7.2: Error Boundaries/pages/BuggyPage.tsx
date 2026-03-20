import { useState } from "react";

function BuggyPage(): JSX.Element {
  const [ shouldThrow, setShouldThrow ] = useState(false);

  if (shouldThrow) {
    throw new Error('Intentional error for testing Error Boundary!');
  }

  return (
    <div className="page buggy-page">
      <h1> Buggy Page</h1>
      <p>This page can simulate errors to test Error Boundary.</p>
      <div className="warning-card">
        <h3>⚠️ Warning</h3>
        <p>Clicking the button below will throw an error and trigger the Error Boundary.</p>
        <button 
          onClick={() => setShouldThrow(true)}
          className="btn-danger"
        >
          Trigger Error
        </button>
      </div>
    </div>
  );
}

export default BuggyPage;