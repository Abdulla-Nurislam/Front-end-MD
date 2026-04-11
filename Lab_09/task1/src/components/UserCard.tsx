import { memo } from "react";

export interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
}

export const UserCard = memo(function UserCard({ user }: UserCardProps) {
  console.log("UserCard render");
  return (
    <div className="card" style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
});

export const UserCardWithCompare = memo(
  function UserCardWithCompare({ user }: UserCardProps) {
    return (
      <div className="card" style={{ border: '1px solid #ccc', padding: '1rem', margin: '1rem 0' }}>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
      </div>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.user.id === nextProps.user.id &&
      prevProps.user.name === nextProps.user.name;
  }
);
