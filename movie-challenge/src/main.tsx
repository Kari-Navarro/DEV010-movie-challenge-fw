import React from 'react';
import ReactDOM from 'react-dom/client'
import './App.css'
import Header from './Components/header.tsx';
//import MovieList from './Components/movielist.tsx';
import Paginator from './Components/pageLink.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    {/*<MovieList/>*/}
    <Paginator/>
  </React.StrictMode>,
)



