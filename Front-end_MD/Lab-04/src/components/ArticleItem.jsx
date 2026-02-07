/**
 * Компонент ArticleItem
 * Лабораторная 4.2: Отдельный элемент статьи с локальным управлением состоянием
 * 
 * Особенности:
 * - Управляет собственным состоянием разворачивания (isOpened) через useState
 * - Функционал переключения для показа/скрытия описания
 * - Кнопка удаления для удаления статьи
 * 
 * Пропсы (Props):
 * - article: Объект содержащий id, title, summary
 * - onClickRemove: Функция для удаления статьи по id
 */

import { useState } from 'react';

const ArticleItem = ({ article, onClickRemove }) => {
  // Локальное состояние для управления видимостью описания (не из родителя)
  const [isOpened, setIsOpened] = useState(false);

  /**
   * Переключает отображение описания статьи
   * @param {React.SyntheticEvent} e - Событие клика
   */
  const handleToggle = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение ссылки
    setIsOpened(!isOpened);
  };

  return (
    <li style={{ 
      marginBottom: '15px', 
      padding: '10px', 
      border: '1px solid #eee',
      listStyle: 'none'
    }}>
      {/* Заголовок статьи с ссылкой для переключения */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <a 
          href={`#${article.id}`}
          title="Показать/скрыть описание"
          onClick={handleToggle}
          style={{ 
            textDecoration: 'none', 
            color: '#007bff',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          {article.title}
        </a>
        
        {/* Кнопка удаления */}
        <button 
          onClick={() => onClickRemove(article.id)}
          style={{
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '30px',
            height: '30px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
          title="Удалить статью"
        >
          ×
        </button>
      </div>

      {/* Параграф с описанием - видимость контролируется локальным состоянием */}
      <p style={{ 
        display: isOpened ? 'block' : 'none',
        marginTop: '10px',
        padding: '10px',
        backgroundColor: '#f8f9fa',
        borderRadius: '4px'
      }}>
        {article.summary}
      </p>
    </li>
  );
};

export default ArticleItem;