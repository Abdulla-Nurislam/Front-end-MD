export interface Course {
  id: number;
  title: string;
  code: string;
  instructor: string;
  description: string;
  credits: number;
  duration: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Introduction to Programming",
    code: "CS101",
    instructor: "Dr. Sarah Johnson",
    description: "Learn programming fundamentals with Python.",
    credits: 3,
    duration: "16 weeks"
  },
  {
    id: 2,
    title: "Data Structures",
    code: "CS201",
    instructor: "Prof. Michael Chen",
    description: "Deep dive into algorithms and data structures.",
    credits: 4,
    duration: "16 weeks"
  },
  {
    id: 3,
    title: "Web Development",
    code: "CS301",
    instructor: "Dr. Emily Rodriguez",
    description: "Full-stack development with React and Node.js.",
    credits: 3,
    duration: "14 weeks"
  },
  {
    id: 4,
    title: "Database Systems",
    code: "CS302",
    instructor: "Prof. David Kim",
    description: "Relational databases, SQL, and NoSQL.",
    credits: 3,
    duration: "16 weeks"
  }
];

export function getCourseById(id: number): Course | undefined {
  return courses.find(course => course.id === id);
}