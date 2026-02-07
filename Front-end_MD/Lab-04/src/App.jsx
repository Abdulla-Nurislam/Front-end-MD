/**
 * Компонент App - Главная точка входа приложения
 * Неделя 4 Лабораторная 04: Обработка событий и переиспользуемые компоненты
 * 
 * Этот файл демонстрирует оба задания лабораторной:
 * - Лабораторная 4.1: RegistrationForm с обработкой событий и валидацией
 * - Лабораторная 4.2: ArticleManager с рефакторенными компонентами
 */

import RegistrationForm from './components/RegistrationForm';
import ArticleManager from './components/ArticleManager';
import AddArticle from './components/AddArticle';
import ArticleList from './components/ArticleList';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>
        Неделя 4 Лабораторная: Обработка событий и переиспользуемые компоненты
      </h1>

      {/* Раздел Лабораторной 4.1 */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ borderBottom: '2px solid #007bff', paddingBottom: '10px' }}>
          Лабораторная 4.1: Обработка событий и валидация форм
        </h2>
        <RegistrationForm />
      </section>

      <hr style={{ margin: '40px 0' }} />

      {/* Раздел Лабораторной 4.2 - Стандартное использование */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ borderBottom: '2px solid #28a745', paddingBottom: '10px' }}>
          Лабораторная 4.2: Рефакторенные компоненты (Стандарт)
        </h2>
        <ArticleManager />
      </section>

      <hr style={{ margin: '40px 0' }} />

      {/* Раздел Лабораторной 4.2 - С паттерном Render Props (Опционально) */}
      <section>
        <h2 style={{ borderBottom: '2px solid #6c757d', paddingBottom: '10px' }}>
          Лабораторная 4.2: С паттерном Render Props (Опционально)
        </h2>
        <ArticleManager
          addArticle={(props) => <AddArticle {...props} />}
          articleList={(props) => <ArticleList {...props} />}
        />
      </section>
    </div>
  );
}

export default App;