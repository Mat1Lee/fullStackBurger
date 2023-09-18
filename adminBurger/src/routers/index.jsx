import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import Billing from "../pages/Billing";

import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Tab from "../pages/Tab";
import Tables from "../pages/Tables";
import ErrorPage from "./ErrorPage";
import Main from "../components/layout/Main";
import SignIn from "../pages/SignIn";

export const ProtectedRoute = () => {
  const accessToken = localStorage.getItem("accessToken");

  if (!accessToken) {
    return <Navigate to="/sign-in" />;
  }

  return (
    <>
     
      <Outlet />
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default createBrowserRouter([
  {
    element: <SignIn />,
    path: "/sign-in"
  },
  {
    element: <ProtectedRoute />,
    errorElement:<ErrorPage/>,
    children: [
      {
        element: <Main />,
        path: "/",
        children: [
          {
            element: <Home />,
            path: "/"
          },
          {
            element: <Tables />,
            path: "/tables"
          },
     
          {
            element: <Tab />,
            path: "/tb"
          },
          {
            element: <Billing />,
            path: "/billing"
          },
          {
            element: <Profile />,
            path: "/profile/:id"
          }
        ]
      }
    ]
  }
]);