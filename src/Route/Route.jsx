/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Product from "../ProductCard/ProductCard";
import SingleProd from "../SingleProd/SingleProd";
import DashBoardLayout from "../Layouts/DashboardLayout/DashBoardLayout";
import Dashboard from "../pages/DashBoard/Dashboard";
import Profile from "../Profile/Profile";
import EditProfile from "../EditProfile/EditProfile";

const myCreatedRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products",
        element: <Products></Products>,
        loader: () => fetch(`https://dummyjson.com/products`)
      },
      {
        path: "/products/:id",
        element: <SingleProd></SingleProd>,
        loader: ({params}) => fetch(`https://dummyjson.com/products/${params.id}`)
      },
      {
        path: "/dashboard",
        element: <DashBoardLayout></DashBoardLayout>,
        children: [
          {
            path: "/dashboard",
            element:  <Dashboard></Dashboard>
          },
          {
            path: "/dashboard/profile",
            element:  <Profile></Profile>
          },
          {
            path: "/dashboard/editProfile",
            element:  <EditProfile></EditProfile>
          }
        ]
        
      }
    ]
  }
])

export default myCreatedRouter;