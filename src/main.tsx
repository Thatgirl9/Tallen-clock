import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import Login from "./pages/LoginPage/Login.tsx";
import ErrorPage from "./pages/ErrorPage.tsx";
import Dashboard from "./pages/DashboardPage/Dashboard..tsx";
import ReportPage from "./pages/ReportPage/Report.tsx";
import NavBar from "./components/Nav.tsx";
import Users from "./pages/UsersPage/Users.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
    errorElement: <ErrorPage />,
  },

  {
    path: "/app",
    element: <App />,
  },

  {
    path: "/nav",
    element: <NavBar />,
    children: [
      {
        path: "/nav/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/nav/report",
        element: <ReportPage />,
      },
      {
        path: "/nav/users",
        element: <Users />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
