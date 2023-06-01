import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import GraphicNov from './pages/GraphicNov';
import Shop from './pages/Shop';

const router = createBrowserRouter([
  {
    path: "/",
    element: [<Navbar />, <Outlet />],
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "graphicnovels",
        element: <GraphicNov />
      },
      {
        path: "gearshop",
        element: <Shop />
      }
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);