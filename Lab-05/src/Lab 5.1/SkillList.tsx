// SkillList.tsx
import { Skill, SkillLevel } from '../Lab 5.1/types';

interface SkillListProps {
  skills: Skill[]; // Тип массива (Гл.6, стр.93)
}

// Функция для получения цвета в зависимости от уровня
const getLevelColor = (level: SkillLevel): string => {
  switch (level) {
    case 'Beginner':
      return '#4caf50'; // зеленый
    case 'Intermediate':
      return '#ff9800'; // оранжевый
    case 'Expert':
      return '#f44336'; // красный
    default:
      return '#757575';
  }
};

const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {skills.map((skill) => (
        <li 
          key={skill.id}
          style={{
            padding: '8px 12px',
            marginBottom: '6px',
            borderRadius: '4px',
            backgroundColor: '#f0f0f0',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <span>{skill.name}</span>
          <span 
            style={{
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '0.85em',
              fontWeight: 'bold',
              color: 'white',
              backgroundColor: getLevelColor(skill.level)
            }}
          >
            {skill.level}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default SkillList;