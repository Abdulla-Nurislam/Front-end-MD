import { useState } from 'react';
import UserProfile from './UserProfile';

function UserProfileParent() {
  const [userId, setUserId] = useState(1);

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Lab 3.2</h1>
      
      <div style={{ marginBottom: '20px', padding: '10px', backgroundColor: '#ecf0f1', borderRadius: '5px' }}>
        <strong>Выбор пользователя:</strong>{' '}
        <button onClick={() => setUserId(1)} style={{ margin: '0 5px' }}>Пользователь 1</button>
        <button onClick={() => setUserId(2)} style={{ margin: '0 5px' }}>Пользователь 2</button>
        <button onClick={() => setUserId(3)} style={{ margin: '0 5px' }}>Пользователь 3</button>
        <span style={{ marginLeft: '15px', fontWeight: 'bold' }}>
          Текущий ID: {userId}
        </span>
      </div>

      <UserProfile 
        userId={userId} 
        onUserIdChange={setUserId}
      />
    </div>
  );
}

export default UserProfileParent;