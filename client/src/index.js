import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from "react-router-dom";
import Header from './components/navbar.js'
import Sidebar from './components/sidebar.js'
import Footer from './components/Footer.js'
import { Provider } from 'react-redux';
import Store from './redux-store/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      <Header />
      < Sidebar />
      <App />
      <Footer />
    </BrowserRouter>
  </Provider>


);
