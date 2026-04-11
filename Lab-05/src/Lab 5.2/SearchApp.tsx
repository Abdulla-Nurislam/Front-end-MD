// SearchApp.tsx
import { useState } from 'react';
import type { ChangeEvent, MouseEvent } from 'react';
import { User } from '../Lab 5.1/types';
import UserCard from '../Lab 5.1/UserCard';

// Начальные данные с явным типом
const INITIAL_DATA: User[] = [
  { name: "Alice Johnson", email: "alice@mail.com", age: 25 },
  { name: "Bob Smith", email: "bob@mail.com", age: 30 },
  { name: "Charlie Brown", email: "charlie@mail.com", age: 28 },
  { name: "Diana Prince", email: "diana@mail.com", age: 32 },
  { name: "Eve Anderson", email: "eve@mail.com", age: 27 },
  { name: "Frank Miller", email: "frank@mail.com", age: 35 },
];

const SearchApp = () => {
  // Задание 1: Типизированный useState (Гл.6, стр.100)
  // Явное указание generic типа, так как пустой массив не дает вывести тип автоматически
  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  // Здесь тип выводится автоматически из начального значения ""
  const [searchTerm, setSearchTerm] = useState("");

  // Задание 2: Типизированные обработчики событий (Гл.6, стр.101)
  // Гл.6, стр.101: Типизация обработчиков событий
  const handleSearch = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilteredUsers(
      users.filter((u) =>
        u.name.toLowerCase().includes(term.toLowerCase())
      )
    );
  };

  const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchTerm("");
    setFilteredUsers(users);
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h1>Поиск пользователей</h1>
      
      <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Поиск по имени..."
          style={{
            flex: 1,
            padding: '10px',
            fontSize: '16px',
            borderRadius: '4px',
            border: '1px solid #ccc'
          }}
        />
        <button
          onClick={handleClear}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            borderRadius: '4px',
            border: 'none',
            backgroundColor: '#f44336',
            color: 'white',
            cursor: 'pointer'
          }}
        >
          Очистить
        </button>
      </div>

      <div>
        {filteredUsers.length === 0 ? (
          <p style={{ textAlign: 'center', color: '#666', fontStyle: 'italic' }}>
            Результаты не найдены
          </p>
        ) : (
          filteredUsers.map((user, index) => (
            <UserCard 
              key={user.email} 
              user={user} 
              isActive={true}
            >
              <span>Пользователь #{index + 1}</span>
            </UserCard>
          ))
        )}
      </div>
      
      <p style={{ marginTop: '20px', color: '#666', fontSize: '14px' }}>
        Показано {filteredUsers.length} из {users.length} пользователей
      </p>
    </div>
  );
};

export default SearchApp;