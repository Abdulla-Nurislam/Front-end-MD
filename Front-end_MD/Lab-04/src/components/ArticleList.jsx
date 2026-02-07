/**
 * Компонент ArticleList
 * Лабораторная 4.2: Контейнер списка для статей
 * 
 * Пропсы (Props):
 * - articles: Массив объектов статей
 * - onClickRemove: Функция передаваемая в ArticleItem для удаления
 */

import ArticleItem from './ArticleItem';

const ArticleList = ({ articles, onClickRemove }) => {
  return (
    <ul style={{ padding: 0 }}>
      {articles.map((article) => (
        <ArticleItem 
          key={article.id} 
          article={article} 
          onClickRemove={onClickRemove}
        />
      ))}
    </ul>
  );
};

export default ArticleList;