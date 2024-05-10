 import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home";
import ErrorPage from "../Components/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        errorElement: <ErrorPage />,
       
        // children: [
        //   {
        //     path: "contacts/:contactId",
        //     element: ,
        //   },
        // ],
      },
  ]);
  export default router