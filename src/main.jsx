import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Layouts/Root';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Contact from './Pages/Contact';
import AppointMent from './Pages/AppointMent';
import Treatment from './Pages/Treatment';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        // loader: () => fetch("/public/service.json"),
        loader: async () => {
          const servicesRes = await fetch("/public/service.json")
          const servicesData = await servicesRes.json()
          return { servicesData };
        }
      },
      {
        path: '/about',
        element: <About></About>,
        // feedback data load here
        loader: async () => {
          const feedbackRes = await fetch("/public/feedback.json")
          const feedbackData = await feedbackRes.json()
          return { feedbackData };
        }
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path: '/treatment',
        element: <Treatment></Treatment>,
        loader: () => fetch("/public/service.json"),
      },
      {
        path: '/appointment',
        element: <AppointMent></AppointMent>
      },
      
    ]

  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
