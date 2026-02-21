import { Link, useSearchParams } from "react-router-dom";
import { courses } from "./data";

type SortOrder = "asc" | "desc";

function Courses(): React.ReactElement {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortOrder: SortOrder = (searchParams.get("sort") as SortOrder) || "asc";

  const sortedCourses = [...courses].sort((a, b) => {
    return sortOrder === "desc" 
      ? b.title.localeCompare(a.title) 
      : a.title.localeCompare(b.title);
  });

  const toggleSort = (): void => {
    setSearchParams({ sort: sortOrder === "asc" ? "desc" : "asc" });
  };

  return (
    <div className="courses-container">
      <div className="courses-header">
        <h1>Available Courses</h1>
        <button onClick={toggleSort} className="sort-button">
          Sort: {sortOrder.toUpperCase()}
        </button>
      </div>
      
      <ul className="course-list">
        {sortedCourses.map((course) => (
          <li key={course.id} className="course-item">
            <Link to={`/courses/${course.id}`} className="course-link">
              <div className="course-info">
                <span className="course-code">{course.code}</span>
                <span className="course-title">{course.title}</span>
                <span className="arrow">→</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;