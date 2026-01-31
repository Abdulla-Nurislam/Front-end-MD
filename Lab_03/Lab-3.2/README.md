# Lab 3.2: Data Loading with useEffect

## Запуск проекта
1. Перейдите в папку: `cd Lab_03/task2`
2. Установите зависимости: `npm install`
3. Запустите сервер: `npm start`
4. Откройте http://localhost:3000

## Используемый API
- JSONPlaceholder: https://jsonplaceholder.typicode.com/users/{id}

## Особенности реализации
- **useEffect**: Выполняет побочный эффект (загрузку данных) после рендера
- **AbortController**: Отменяет запрос при размонтировании компонента
- **Dependency Array**: `[userId]` — эффект перезапускается при смене пользователя
- **Состояния**: Обработка loading, error, success состояний

## Структура
- **UserProfile.jsx**: Компонент с логикой получения данных
- **UserProfileParent.jsx**: Управление состоянием userId, кнопки выбора пользователя