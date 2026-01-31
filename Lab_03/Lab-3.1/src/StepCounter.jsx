import { useState } from 'react';

function StepCounter({ initialValue = 0, step = 1 }) {
  // Основное состояние счетчика, инициализируется из props
  const [count, setCount] = useState(initialValue);
  // История изменений для отслеживания всех значений
  const [history, setHistory] = useState([]);
  // Счетчик количества операций
  const [operationCount, setOperationCount] = useState(0);

  const handleIncrement = () => {
    const newCount = count + step;
    setCount(newCount);
    setHistory(prevHistory => [...prevHistory, newCount]);
    setOperationCount(prev => prev + 1);
  };

  const handleDecrement = () => {
    const newCount = count - step;
    setCount(newCount);
    setHistory(prevHistory => [...prevHistory, newCount]);
    setOperationCount(prev => prev + 1);
  };

  const handleReset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  // Получаем последние 5 значений из истории
  const lastFiveValues = history.slice(-5);

  return (
    <div style={{ 
      border: '2px solid #3498db', 
      padding: '20px', 
      margin: '10px',
      borderRadius: '8px',
      backgroundColor: '#f8f9fa'
    }}>
      <h3>Счетчик (шаг: {step})</h3>
      
      <div style={{ marginBottom: '10px' }}>
        <strong>Текущее значение:</strong> {count}
      </div>
      
      <div style={{ marginBottom: '10px' }}>
        <strong>Всего операций:</strong> {operationCount}
      </div>
      
      <div style={{ marginBottom: '15px' }}>
        <strong>Последние 5 значений:</strong>{' '}
        {lastFiveValues.length > 0 ? lastFiveValues.join(', ') : '—'}
      </div>
      
      <div>
        <button 
          onClick={handleIncrement}
          style={{ marginRight: '8px', padding: '8px 12px' }}
        >
          Увеличить (+{step})
        </button>
        
        <button 
          onClick={handleDecrement}
          style={{ marginRight: '8px', padding: '8px 12px' }}
        >
          Уменьшить (-{step})
        </button>
        
        <button 
          onClick={handleReset}
          style={{ padding: '8px 12px', backgroundColor: '#e74c3c', color: 'white' }}
        >
          Сбросить
        </button>
      </div>
    </div>
  );
}

export default StepCounter;