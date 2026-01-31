# Lab 3.1: Component with State — Advanced Counter

## Запуск проекта
1. Перейдите в папку: `cd Lab_03/task1`
2. Установите зависимости: `npm install`
3. Запустите сервер: `npm start`
4. Откройте http://localhost:3000

## Структура компонентов
- **StepCounter.jsx**: Принимает props (initialValue, step), управляет state (count, history, operationCount)
- **CounterApp.jsx**: Родительский компонент, рендерит два независимых счетчика

## Props vs State
См. комментарии в StepCounter.jsx. Props передаются сверху и неизменны, state принадлежит компоненту и изменяется через useState.