// App.tsx
import UserCard from './Lab 5.1/UserCard';
import SkillList from './Lab 5.1/SkillList';
import SearchApp from './Lab 5.2/SearchApp';

// Тестовые данные для Лабораторной работы 5.1
const sampleUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  age: 28
};

const sampleSkills = [
  { id: 1, name: "TypeScript", level: "Intermediate" },
  { id: 2, name: "React", level: "Expert" },
  { id: 3, name: "Node.js", level: "Beginner" },
  { id: 4, name: "GraphQL", level: "Intermediate" },
];

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
      <h1>Лабораторная работа 05: TypeScript и проверка пропсов</h1>
      
      {/* Компоненты Лабораторной работы 5.1 */}
      <section style={{ marginBottom: '40px' }}>
        <h2>Лабораторная работа 5.1: Типизированные компоненты</h2>
        
        <h3>Компонент UserCard:</h3>
        <UserCard user={sampleUser} isActive={true}>
          <p>💼 Старший разработчик в Tech Corp</p>
          <p>📍 Сан-Франциско, Калифорния</p>
        </UserCard>
        
        <UserCard user={sampleUser} isActive={false}>
          <p>⏸️ Этот пользователь временно неактивен</p>
        </UserCard>

        <h3>Компонент SkillList:</h3>
        <SkillList skills={sampleSkills} />
      </section>

      <hr style={{ margin: '40px 0' }} />

      {/* Компонент Лабораторной работы 5.2 */}
      <section>
        <h2>Лабораторная работа 5.2: Типизированное состояние и обработчики событий</h2>
        <SearchApp />
      </section>
    </div>
  );
}

export default App;