import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Header.js'
import Footer from './components/Footer.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
      <Header/>
      <App />
      <Footer/>
    </BrowserRouter>
  
  
);
