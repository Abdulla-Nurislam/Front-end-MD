// types.ts
// Интерфейс для данных пользователя
export interface User {
  name: string;
  email: string;
  age: number;
}

// Псевдоним типа союза для уровня квалификации
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Expert';

// Интерфейс для навыков пользователя
export interface Skill {
  id: number;
  name: string;
  level: SkillLevel;
}