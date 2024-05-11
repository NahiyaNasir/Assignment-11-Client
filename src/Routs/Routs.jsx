import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Components/ErrorPage";
import Login from "../Components/Pages/Login";
import Main from "../Components/Main";

import NeedVolinteer from "../Components/NeedVolinteer";
import Register from "../Components/Pages/Register";
import AddPost from "../Components/AddPost";
import Details from "../Components/Pages/Details";

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
            loader:()=>fetch('http://localhost:5000/volunteer')
          },
          {
            path: "add",
            element:<AddPost></AddPost> ,
          },
          {
            path: "/details/:id",
            element:<Details></Details> ,
            loader:({params})=>fetch(`http://localhost:5000/volunteer/${params.id}`)
          },
          
        ],
      },
  ]);
  export default router