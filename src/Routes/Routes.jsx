import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Meals from "../Pages/Meals/Meals";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import Dashboard from "../Layout/Dashboard";
import RequestMeals from "../Pages/Dashboard/RequestMeals/RequestMeals";




  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element:<Home></Home>
        },
        {
          path: '/meals',
          element: <Meals></Meals>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element:<SignUp></SignUp>
        },
        {
          path: '/details/:id',
          element: <FoodDetails></FoodDetails>,
          loader:()=> fetch(`https://hostel-management-server-alpha.vercel.app/foods`)

        }
      ]
    },
    {
      path:'dashbord',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path: 'requestmeal',
          element:<RequestMeals></RequestMeals>
        }
      ]
    }
  ]);