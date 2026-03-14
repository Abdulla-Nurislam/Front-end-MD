import { useState, useCallback } from "react";
import { UserCard, User } from "./UserCard";
import { AnalyticsChart } from "./AnalyticsChart";
import { ActivityFeed } from "./ActivityFeed";
import { Button } from "./Button";

export function Dashboard() {
  const [count, setCount] = useState(0);
  const [user] = useState<User>({
    id: 1,
    name: "John Doe",
    email: "john@example.com"
  });
  const [items] = useState(["item1", "item2", "item3"]);

  const handleClick = useCallback(() => {
    console.log("button clicked");
  }, []); 

  const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Dashboard (count: {count})</h1>
      
      {/* Test callbacks */}
      <Button onClick={handleClick} label="Click me (Stable)" />
      <Button onClick={handleIncrement} label="Increment Count" />

      {/* Test memo */}
      <UserCard user={user} />

      {/* Test useMemo */}
      <AnalyticsChart items={items} />

      {/* Another child to test render */}
      <ActivityFeed />
    </div>
  );
}
