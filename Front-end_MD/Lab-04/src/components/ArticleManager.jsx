/**
 * Компонент ArticleManager
 * Лабораторная 4.2: Рефакторинг из монолитного в модульную структуру
 * 
 * Архитектура:
 * - ArticleManager: Контейнерный компонент управляющий состоянием статей
 * - AddArticle: Компонент формы для добавления новых статей
 * - ArticleList: Контейнер списка рендерящий компоненты ArticleItem
 * - ArticleItem: Отдельная статья с локальным состоянием переключения
 * 
 * Опционально: Поддержка паттерна render props для подмены компонентов
 */

import { useState } from 'react';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';

const ArticleManager = ({ 
  addArticle: AddArticleRender, 
  articleList: ArticleListRender 
}) => {
  // Состояние для массива статей
  const [articles, setArticles] = useState([
    { id: 1, title: 'Основы React', summary: 'Введение в компоненты React и JSX' },
    { id: 2, title: 'Управление состоянием', summary: 'Понимание хуков useState и useEffect' }
  ]);

  // Состояния для полей формы
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');

  /**
   * Добавляет новую статью в список
   */
  const onClickAdd = () => {
    if (!title.trim() || !summary.trim()) {
      alert('Пожалуйста, заполните заголовок и описание');
      return;
    }

    const newArticle = {
      id: Date.now(), // Простая генерация уникального ID
      title: title.trim(),
      summary: summary.trim()
    };

    setArticles([...articles, newArticle]);
    setTitle('');
    setSummary('');
  };

  /**
   * Удаляет статью по id
   * @param {number} id - ID статьи для удаления
   */
  const onClickRemove = (id) => {
    setArticles(articles.filter(article => article.id !== id));
  };

  // Обработчики изменения полей ввода
  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeSummary = (e) => setSummary(e.target.value);

  // Рендер с использованием паттерна render props (опционально) или стандартных компонентов
  const renderAddArticle = () => {
    const props = {
      name: 'Статьи',
      title,
      summary,
      onChangeTitle,
      onChangeSummary,
      onClickAdd
    };

    // Используем render prop если передан, иначе стандартный AddArticle
    return AddArticleRender ? AddArticleRender(props) : <AddArticle {...props} />;
  };

  const renderArticleList = () => {
    const props = {
      articles,
      onClickRemove
    };

    // Используем render prop если передан, иначе стандартный ArticleList
    return ArticleListRender ? ArticleListRender(props) : <ArticleList {...props} />;
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      {renderAddArticle()}
      {renderArticleList()}
    </div>
  );
};

export default ArticleManager;