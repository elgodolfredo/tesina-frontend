import {
  createBrowserRouter,
} from "react-router-dom";
import RootLayout from '../layouts/RootLayout';
import LoginLayout from '../layouts/LoginLayout';
import LoginForm from "../pages/LoginForm";
import RegisterForm from "../pages/RegisterForm";
import ChartPage from "../pages/ChartPage";
import NewChartPage from "../pages/NewChartPage";
import { RouterProvider, Navigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import NewSensorPage from "../pages/NewSensorPage";


export default function Router() {

  const { user } = useContext(UserContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: !user ? <Navigate to="/login" replace /> : <RootLayout></RootLayout>,
      children: [
        {
          path: '/sensors/new',
          element: <NewSensorPage></NewSensorPage>
        },
        {
          path: '/charts/new',
          element: <NewChartPage></NewChartPage>
        },

        {
          path: '/charts/:id',
          element: <ChartPage></ChartPage>
        },
      ]
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


