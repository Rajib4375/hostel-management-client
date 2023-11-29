import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Meals from "../Pages/Meals/Meals";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";

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
          loader:()=> fetch(`http://localhost:5000/foods`)

        }
      ]
    },
  ]);