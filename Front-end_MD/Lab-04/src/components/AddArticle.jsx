/**
 * Компонент AddArticle
 * Лабораторная 4.2: Переиспользуемый компонент для добавления статей
 * 
 * Пропсы (Props):
 * - name: Заголовок секции
 * - title: Текущее значение поля заголовка
 * - summary: Текущее значение поля описания
 * - onChangeTitle: Обработчик изменения поля заголовка
 * - onChangeSummary: Обработчик изменения поля описания
 * - onClickAdd: Обработчик нажатия кнопки добавления
 */

const AddArticle = ({ 
  name, 
  title, 
  summary, 
  onChangeTitle, 
  onChangeSummary, 
  onClickAdd 
}) => {
  return (
    <section style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd' }}>
      <h1>{name}</h1>
      
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={onChangeTitle}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        
        <input
          type="text"
          placeholder="Описание"
          value={summary}
          onChange={onChangeSummary}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
      </div>
      
      <button 
        onClick={onClickAdd}
        style={{
          padding: '8px 16px',
          backgroundColor: '#28a745',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Добавить
      </button>
    </section>
  );
};

export default AddArticle;