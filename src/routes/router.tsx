import {
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from '../layouts/RootLayout';
import LoginLayout from '../layouts/LoginLayout';
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
  },
  {
    path: '/login',
    element: <LoginLayout></LoginLayout>,
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

