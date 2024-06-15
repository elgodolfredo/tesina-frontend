import {
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from '../layouts/RootLayout';
import LoginLayout from '../layouts/LoginLayout';
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import { RouterProvider, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";


export default function Router() {

  const { user } = useContext(UserContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: !user ? <Navigate to="/login" replace /> : <RootLayout></RootLayout>,
    },
    {
      path: '/login',
      element: user ? <Navigate to="/" replace /> : <LoginLayout></LoginLayout >,
      children: [
        {
          path: '/login/register',
          element: <RegisterForm></RegisterForm>,
        },
        {
          path: '/login',
          element: <LoginForm></LoginForm>,
        }
      ]
    }
  ]);
  return <RouterProvider router={router}></RouterProvider>
}


