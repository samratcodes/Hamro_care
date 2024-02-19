import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Recreational from './Pages/Recreational.jsx';
import Checkups from './Pages/Checkups.jsx';
import Hostel from './Pages/Hostel.jsx';
import Nutritions from './Pages/Nutritions.jsx';
import Personalized from './Pages/Personalized.jsx';
import Transportation from './Pages/Transportation.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    children:[
      {
        path:"Recreational",
        element:<Recreational/>
      },
      {
        path:"home",
        element:<Home/>
      },
      {
        path:"",
        element:<Home/>
      },{
        path:'checkups',
        element:<Checkups/>
      },
      {
        path:'hostel',
        element:<Hostel/>
      },
      {
        path:'nutrition',
        element:<Nutritions/>
      },
      {
        path:'personalized',
        element:<Personalized/>
      },
      {
        path:'transportation',
        element:<Transportation/>
      }
    ]
  },])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>,
)
