import { Vacancies } from "@/pages/Vacancies";
import { Vacancy } from "@/pages/Vacancy";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import React from "react";

export function RouterComponent() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to="/vacancies" />, // Редирект на /vacancies
    },
    {
      path: "/vacancies",
      element: <Vacancies />, // Страница вакансий
    },
    {
      path: "/vacancy/:id", // Параметр id вакансии
      element: (
        <React.Suspense fallback={<div>Загрузка...</div>}>
          <Vacancy />
        </React.Suspense>
      ),
    },
  ]);

  return <RouterProvider router={router} />;
}
