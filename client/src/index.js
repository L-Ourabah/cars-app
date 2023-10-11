import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { BrowserRouter } from "react-router-dom";
import Header from './components/Navbar.js'
import Sidebar from './components/Sidebar.js'
import Footer from './components/Footer.js'
import { Provider } from 'react-redux';
import Store from './redux-store/store';

import { AuthContextProvider } from './context/AuthContext.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
    <Provider store={Store}>
      <BrowserRouter>
        <Header />
        < Sidebar />
        <App />
        <Footer />
      </BrowserRouter>
    </Provider>
  </AuthContextProvider>

);
