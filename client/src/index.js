import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.scss';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth } from './context/auth';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Auth>
);
