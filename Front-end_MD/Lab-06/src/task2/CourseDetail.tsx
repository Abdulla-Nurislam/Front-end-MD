import { useParams, useLoaderData } from "react-router-dom";
import { Course } from "./data";

interface LoaderData {
  course: Course;
}

function CourseDetail(): React.ReactElement {
  const { id } = useParams<{ id: string }>();
  const { course } = useLoaderData() as LoaderData;

  return (
    <div className="course-detail-container">
      <span className="detail-code">{course.code}</span>
      <h1>{course.title}</h1>
      
      <div className="course-meta">
        <div><strong>Instructor:</strong> {course.instructor}</div>
        <div><strong>Credits:</strong> {course.credits}</div>
        <div><strong>Duration:</strong> {course.duration}</div>
        <div><strong>Course ID:</strong> {id}</div>
      </div>

      <p>{course.description}</p>
      
      <a href="/courses" className="btn-secondary">← Back to Courses</a>
    </div>
  );
}

export default CourseDetail;