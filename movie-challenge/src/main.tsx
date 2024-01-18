import ReactDOM from 'react-dom/client'
import './App.css'
import Header from './Components/header.tsx';
import Home from './home.tsx';
import { BrowserRouter } from 'react-router-dom';
import Details from './Components/Details.tsx';

//import {RouterProvider, createBrowserRouter} from "react-router-dom"
//import Root, {rootLoader} from "./routes/root";
//import Team, {teamLoader} from ".routes/team";


 const router = createBrowserRouter([
   {
     path: "/details",
     element: <Root />,
     loader: rootLoader,
     children: [
       {
         path: "team",
         element: <Details/>,
         loader: teamLoader,
       },
     ],
   },
 ]);



















ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
  <BrowserRouter>
    <Header/>
    {/*<Filter/>*/}
    <Home/>
  {/*<RouterProvider router={router}/>
  </React.StrictMode>*/}
  </BrowserRouter>,
)



