import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Create from './pages/Create.jsx'

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Dashboard />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
       path: '/create',
      element: <Create/>
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />

);