import { useState, useEffect } from 'react';

function UserProfile({ userId, onUserIdChange }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Создаем AbortController для отмены запроса при размонтировании
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchUser = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users/${userId}`,
          { signal } // Передаем signal для возможности отмены
        );
        
        if (!response.ok) {
          throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Проверяем, не был ли запрос отменен
        if (!signal.aborted) {
          setUser(data);
          setLoading(false);
        }
      } catch (err) {
        // Игнорируем ошибку отмены запроса (AbortError)
        if (err.name !== 'AbortError') {
          setError(err.message);
          setLoading(false);
        }
      }
    };

    fetchUser();

    /**
     * Cleanup функция: отменяет запрос при размонтировании компонента
     * или при изменении userId (перед следующим запросом)
     * Это предотвращает утечки памяти и состояние гонки (race conditions)
     */
    return () => {
      abortController.abort();
    };
  }, [userId]); 
  /**
   * userId включен в массив зависимостей (dependency array), потому что
   * эффект должен повторно выполняться при изменении userId.
   * Без userId в этом массиве компонент не обновит данные при смене пользователя.
   */

  const handleRefresh = () => {
    // Генерируем случайный ID от 1 до 10
    const randomId = Math.floor(Math.random() * 10) + 1;
    onUserIdChange(randomId);
  };

  if (loading) return <div style={{ padding: '20px' }}>Загрузка...</div>;
  if (error) return <div style={{ padding: '20px', color: 'red' }}>Ошибка: {error}</div>;
  if (!user) return <div style={{ padding: '20px' }}>Нет данных</div>;

  return (
    <div style={{ 
      border: '2px solid #27ae60', 
      padding: '20px', 
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: '#f0fff4'
    }}>
      <h3>Профиль пользователя</h3>
      <div style={{ marginBottom: '8px' }}><strong>ID:</strong> {user.id}</div>
      <div style={{ marginBottom: '8px' }}><strong>Имя:</strong> {user.name}</div>
      <div style={{ marginBottom: '8px' }}><strong>Username:</strong> {user.username}</div>
      <div style={{ marginBottom: '8px' }}><strong>Email:</strong> {user.email}</div>
      <div style={{ marginBottom: '8px' }}><strong>Телефон:</strong> {user.phone}</div>
      <div style={{ marginBottom: '8px' }}><strong>Сайт:</strong> {user.website}</div>
      <div style={{ marginBottom: '8px' }}><strong>Город:</strong> {user.address?.city}</div>
      <div style={{ marginBottom: '8px' }}><strong>Компания:</strong> {user.company?.name}</div>
      
      <button 
        onClick={handleRefresh}
        style={{ 
          marginTop: '10px', 
          padding: '10px 15px',
          backgroundColor: '#3498db',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Обновить (случайный пользователь)
      </button>
    </div>
  );
}

export default UserProfile;