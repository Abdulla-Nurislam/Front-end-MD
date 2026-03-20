function Profile(): JSX.Element {
  return (
    <div className="page profile-page">
      <h1>👤 Profile</h1>
      <p>Another lazy-loaded page!</p>
      <div className="profile-card">
        <div className="avatar">JD</div>
        <h2>John Doe</h2>
        <p className="role">Software Developer</p>
        <div className="profile-info">
          <div>
            <strong>Location:</strong> Nev York, USA
          </div>
          <div>
            <strong>Joined:</strong> January 2024
          </div>
          <div>
            <strong>Projects:</strong> 12
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;