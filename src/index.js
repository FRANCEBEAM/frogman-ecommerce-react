import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
  Router,
  Link,
  Outlet,
} from "react-router-dom";

import Navbar from './components/Navbar';
import Home from './pages/Home';
import GraphicNov from './pages/GraphicNov';
import Shop from './pages/Shop';
import GameInfo from './pages/GameInfo';

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "graphicnovels",
        element: <GraphicNov />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "gameinfo",
        element: <GameInfo />,
      },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);