import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import Create from './pages/Create.jsx';

import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import AllCharacters from './pages/AllCharacters.jsx'
import SingleCharacter from './pages/SingleCharacter.jsx';
import ViewCharacter from './pages/ViewCharacter.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Login />
      }, {
        path: '/camp',
        element: <Dashboard />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/create',
        element: <Create/>
      }, {
        path: '/allcharacters',
        element: <AllCharacters/>
      }, {
        path: '/character/:characterId',
        element: <SingleCharacter/>
      },
      {
        path: '/viewcharacter/:characterId',
        element: <ViewCharacter/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
