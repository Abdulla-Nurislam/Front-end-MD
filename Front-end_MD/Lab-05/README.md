# React + Vite

## Лабораторная работа 05

Проект на **React + Vite**.

### Lab 5.1: Типизированные компоненты

- `UserCard` — компонент с типизированными пропсами (`user`, `isActive`, `children`).
- `SkillList` — список навыков с типами `Skill` и `SkillLevel`.
- Типы вынесены в `src/Lab 5.1/types.ts`.

### Lab 5.2: Типизированное состояние и обработчики событий

- `SearchApp` — поиск пользователей по имени.
- `useState<User[]>` для массива пользователей.
- Типизированные обработчики `onChange` / `onClick`.

## Запуск

```bash
npm i
npm run dev
```

## Проверки

```bash
npm run lint
npm run typecheck
```
