import ReactDOM from 'react-dom/client'
import './App.css'
import Header from './Components/header.tsx';
import Home from './home.tsx';
import { BrowserRouter, Routes } from 'react-router-dom';
import Details from './Components/Details.tsx';
import { Route } from "react-router-dom"
import * as React from "react";

//import Root, {rootLoader} from "./routes/root";
//import Team, {teamLoader} from ".routes/team";





ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:movieId" element={<Details />} />
      </Routes>
    </BrowserRouter>,
  </React.StrictMode>
)



