function Settings(): JSX.Element {
  return (
    <div className="page settings-page">
      <h1>⚙️ Settings</h1>
      <p>This page is lazy-loaded!</p>
      <form className="settings-form">
        <div className="form-group">
          <label>Username</label>
          <input type="text" defaultValue="johndoe" />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input type="email" defaultValue="john@example.com" />
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" defaultChecked />
            Enable notifications
          </label>
        </div>
        <div className="form-group">
          <label>
            <input type="checkbox" />
            Dark mode
          </label>
        </div>
        <button type="button" className="btn-primary">Save Changes</button>
      </form>
    </div>
  );
}

export default Settings;