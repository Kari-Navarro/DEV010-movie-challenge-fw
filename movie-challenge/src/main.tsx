import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Data from './services.tsx';
import './App.css'
import Header from './Components/header.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header/>
    <Data />
  </React.StrictMode>,
)



