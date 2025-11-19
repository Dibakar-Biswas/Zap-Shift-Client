import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import Error from "../pages/Error/Error";
import About from "../pages/About/About";
import Story from "../pages/About/Story";
import Mission from "../pages/About/Mission";
import Success from "../pages/About/Success";
import Team from "../pages/About/Team";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <Error></Error>,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/about',
            Component: About,
            children: [
                {
                    path: '/about/story',
                    Component: Story
                },
                {
                    path: '/about/mission',
                    Component: Mission
                },
                {
                    path: '/about/success',
                    Component: Success
                },
                {
                    path: '/about/team',
                    Component: Team
                },
            ]
        },
        {
            path: '/rider',
            element: <PrivateRoute><Rider></Rider></PrivateRoute>
        },
        {
            path: '/coverage',
            Component: Coverage,
            loader: () => fetch('/serviceCenter.json').then(res=>res.json())
        }
    ]
  },
  {
    path: '/',
    Component: AuthLayout,
    children: [
        {
            path: 'login',
            Component: Login
        },
        {
            path: 'register',
            Component: Register
        }
    ]
  }
]);