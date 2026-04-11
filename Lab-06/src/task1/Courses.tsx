interface Course {
  id: number;
  title: string;
  code: string;
  credits: number;
}

const courses: Course[] = [
  { id: 1, title: "Introduction to Programming", code: "CS101", credits: 3 },
  { id: 2, title: "Data Structures", code: "CS201", credits: 4 },
  { id: 3, title: "Web Development", code: "CS301", credits: 3 },
  { id: 4, title: "Database Systems", code: "CS302", credits: 3 },
  { id: 5, title: "Software Engineering", code: "CS401", credits: 4 },
];

function Courses(): React.ReactElement {
  return (
    <div className="courses-container">
      <h1>Available Courses</h1>
      <ul className="course-list">
        {courses.map((course) => (
          <li key={course.id} className="course-item">
            <div className="course-info">
              <span className="course-code">{course.code}</span>
              <span className="course-title">{course.title}</span>
              <span className="course-credits">{course.credits} credits</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;