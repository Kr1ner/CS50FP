import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement:<div >SOMETHING WENT WRONG</div>
  },{
    path:"/signin",
    element:<div>login</div>
  },{
    path:"/register",
    element:<div>register</div>
  },
  {
    path:"/personal",
    element:<div>personal</div>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
