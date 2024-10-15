import React from 'react'
import {
    createBrowserRouter,
  } from "react-router-dom";
import App from '../App';
import Home from '../pages/home';
import Vision from '../pages/about/vision';
import Responsibilities from '../pages/about/responsibilities';
import People from '../pages/about/people';
import Agencies from '../pages/about/agencies';
import News from '../pages/newsroom/news';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <h1>This is an Error Page</h1>,
      children : [
        {
          path: "home",
          element: <Home/>
        },
        {
          path: "about",
          children: [
            {
              path: "vision",
              element : <Vision/>
            },
            {
              path: "responsibilities",
              element : <Responsibilities/>
            },
            {
              path: "people",
              element : <People/>
            },
            {
              path: "agencies_directorates_units",
              element : <Agencies/>
            }
          ]
        },
        {
          path: "newsroom",
          element : <News/>
        }
      ]
    }
  ]);

  export default router;
  
