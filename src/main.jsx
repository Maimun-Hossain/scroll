import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Cards from './Pages/Cards/Cards';
import Main from './Pages/Home/Home/Main';
import Payment from './Pages/Payment/Payment';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children: [
      {
        path: "/",
        element: <Main></Main>
      },
      {
        path: "/cards",
        element: <Cards></Cards>
      },
      {
        path: "/payment",
        element: <Payment></Payment>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
