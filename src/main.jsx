import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignUp from './components/SignUp.jsx';
import SignIn from './components/SignIn.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Users from './components/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("https://coffee-store-server-hhaqnjp5z-miasumon-rus-projects.vercel.app/coffee")
  },
  {
    path: "addCoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "updateCoffee/:id",
    element: <UpdateCoffee></UpdateCoffee>,

  },
  {
    path: "/signUp",
    element: <SignUp></SignUp>,

  },
  {
    path: "/signIn",
    element: <SignIn></SignIn>,

  },
  {
    path: "/users",
    element: <Users></Users>,
    loader : () => fetch("https://coffee-store-server-hhaqnjp5z-miasumon-rus-projects.vercel.app/users")

  },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={ router} />
    </AuthProvider>
  </React.StrictMode>,
)
