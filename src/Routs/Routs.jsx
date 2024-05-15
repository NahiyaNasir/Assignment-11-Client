import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Components/ErrorPage";
import Login from "../Components/Pages/Login";
import Main from "../Components/Main";


import Register from "../Components/Pages/Register";
import AddPost from "../Components/AddPost";
import Details from "../Components/Pages/Details";
import BeVolunteer from "../Components/Pages/BeVolunteer";
import MyPost from "../Components/Pages/MyPost";
import ProtectedRoute from "../Components/ProtectedRoute";
import NeedVolunteer from "../Components/NeedVolunteer";
import UpdateRequest from "../Components/Pages/UpdateRequest";
import Home from "../Components/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
       
        children: [

          {
            path: "/",
            element:<Home></Home> ,
            loader:()=>fetch(`https://assigment-11-server-two.vercel.app/volunteer`)
          },
          {
            path: "login",
            element:<Login></Login> ,
          },
          {
            path: "register",
            element:<Register></Register>,
          },
         
          {
            path: "need",
            element:<NeedVolunteer></NeedVolunteer> ,
            loader:()=>fetch('https://assigment-11-server-two.vercel.app/volunteer')
          },
          {
            path: "add",
            element:<AddPost></AddPost> ,
          },
          {
            path: "/details/:id",
            element:<ProtectedRoute><Details></Details></ProtectedRoute> ,
            loader:({params})=>fetch(`https://assigment-11-server-two.vercel.app/volunteer/${params.id}`)
          },
          {
            path: "/beVolunteer/:id",
            element:<ProtectedRoute><BeVolunteer></BeVolunteer></ProtectedRoute> ,
            loader:({params})=>fetch(`https://assigment-11-server-two.vercel.app/volunteer/${params.id}`)
           
          },
          {
            path: "myPost",
            element:<ProtectedRoute><MyPost></MyPost></ProtectedRoute> ,
          },
          {
            path: "/update/:id",
            element:<ProtectedRoute><UpdateRequest></UpdateRequest></ProtectedRoute> ,
            loader:({params})=>fetch(`https://assigment-11-server-two.vercel.app/volunteer/${params.id}`)
          },
         
        ],
      },
  ]);
  export default router