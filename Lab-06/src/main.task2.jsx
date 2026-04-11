import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import "./App.css";

// ===== TASK 2 =====
import Layout from "./task2/Layout";
import Home from "./task2/Home";
import Courses from "./task2/Courses";
import CourseDetail from "./task2/CourseDetail";
import About from "./task2/About";
import NotFound from "./task2/NotFound";
import { getCourseById } from "./task2/data";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "courses", element: <Courses /> },
      {
        path: "courses/:id",
        element: <CourseDetail />,
        errorElement: <div className="error-page">Course not found</div>,
        loader: async ({ params }) => {
          const courseId = Number(params.id);
          if (isNaN(courseId)) {
            throw new Error("Invalid course ID");
          }
          const course = getCourseById(courseId);
          if (!course) {
            throw new Error("Course not found");
          }
          return { course };
        },
      },
      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
