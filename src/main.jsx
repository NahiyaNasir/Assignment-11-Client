import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
 
  RouterProvider,
} from "react-router-dom";
import router from './Routs/Routs';
import AuthProvider from './Components/AuthProvider';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')).render(
 <AuthProvider>
   <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  <ToastContainer></ToastContainer>
 </AuthProvider>
)
