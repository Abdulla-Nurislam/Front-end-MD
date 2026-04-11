// UserCard.tsx
import React from 'react';
import { User } from './types';

// Проверка типов пропсов
interface UserCardProps {
  user: User;
  isActive?: boolean; // необязательный проп
  children: React.ReactNode; // любой отображаемый контент
}

const UserCard = ({
  user,
  isActive = true, // значение по умолчанию
  children
}: UserCardProps) => {
  return (
    <div 
      style={{ 
        opacity: isActive ? 1 : 0.5,
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '12px',
        backgroundColor: isActive ? '#f9f9f9' : '#eee'
      }}
    >
      <h2>{user.name}</h2>
      <p>{user.email} | Возраст: {user.age}</p>
      <div style={{ marginTop: '8px', fontStyle: 'italic' }}>
        {children}
      </div>
    </div>
  );
};

export default UserCard;