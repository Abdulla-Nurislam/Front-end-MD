import { memo } from "react";

export const ActivityFeed = memo(function ActivityFeed() {
  console.log("ActivityFeed render");
  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
      <h3>Activity Feed</h3>
      <ul style={{ paddingLeft: '1rem' }}>
        <li>User logged in</li>
        <li>User updated profile</li>
        <li>User clicked a button</li>
      </ul>
    </div>
  );
});
