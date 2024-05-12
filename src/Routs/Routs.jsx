import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Components/ErrorPage";
import Login from "../Components/Pages/Login";
import Main from "../Components/Main";

import NeedVolinteer from "../Components/NeedVolinteer";
import Register from "../Components/Pages/Register";
import AddPost from "../Components/AddPost";
import Details from "../Components/Pages/Details";
import BeVolunteer from "../Components/Pages/BeVolunteer";
import MyPost from "../Components/Pages/MyPost";
import ProtectedRoute from "../Components/ProtectedRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage />,
       
        children: [
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
            element:<NeedVolinteer></NeedVolinteer> ,
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
            element:<BeVolunteer></BeVolunteer> ,
            loader:({params})=>fetch(`https://assigment-11-server-two.vercel.app/volunteer/${params.id}`)
           
          },
          {
            path: "myPost",
            element:<ProtectedRoute><MyPost></MyPost></ProtectedRoute> ,
          },
        ],
      },
  ]);
  export default router