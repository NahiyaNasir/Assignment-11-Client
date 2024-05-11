import { createBrowserRouter } from "react-router-dom";

import ErrorPage from "../Components/ErrorPage";
import Login from "../Components/Pages/Login";
import Main from "../Components/Main";

import NeedVolinteer from "../Components/NeedVolinteer";
import Register from "../Components/Pages/Register";

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
          },
        ],
      },
  ]);
  export default router