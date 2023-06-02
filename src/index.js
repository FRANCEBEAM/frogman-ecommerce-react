import React from 'react';
// import ReactDOM from 'react-dom/client';
import ReactDOM from 'react-dom';
import './index.css';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   Router,
//   Link,
//   Outlet,
// } from "react-router-dom";

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


import Navbar from './components/Navbar';
import Home from './pages/Home';
import GraphicNov from './pages/GraphicNov';
import Shop from './pages/Shop';
import GameInfo from './pages/GameInfo';

// const AppLayout = () => {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//     </>
//   )
// }


// const router = createBrowserRouter([
//   {
//     element: <AppLayout />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "graphicnovels",
//         element: <GraphicNov />,
//       },
//       {
//         path: "shop",
//         element: <Shop />,
//       },
//       {
//         path: "gameinfo",
//         element: <GameInfo />,
//       },
//     ],
//   },
// ]);
const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphicnovels" element={<GraphicNov />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/gameinfo" element={<GameInfo />} />
      </Routes>
    </>
  );
};


{/* <Route path="/" element={<Home />} />
<Route path="/graphicnovels" element={<GraphicNov />} />
<Route path="/shop" element={<Shop />} />
<Route path="/gameinfo" element={<GameInfo />} /> */}






// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

ReactDOM.render(
  <Router basename='/frogman-ecommerce-react'>
    <AppLayout />
  </Router>,
  document.getElementById('root')
);
