import React from 'react';
import ReactDOM from 'react-dom/client'
import './App.css'
import Header from './Components/header.tsx';
import Home from './home.tsx';
import {RouterProvider, createBrowserRouter} from "react-router-dom"
//import Root, {rootLoader} from "./routes/root";
//import Team, {teamLoader} from ".routes/team";


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     loader: rootLoader,
//     children: [
//       {
//         path: "team",
//         element: <Team />,
//         loader: teamLoader,
//       },
//     ],
//   },
// ]);



















ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    {/*<Filter/>*/}
    <Home/>
  {/*<RouterProvider router={router}/>*/}
  </React.StrictMode>,
)



