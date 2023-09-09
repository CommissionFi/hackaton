import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import User from './User';
import AppFooter from './AppFooter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/u/:input" Component={User} />
        <Route path="/" Component={App} />
      </Routes>
    </BrowserRouter>
    <AppFooter />
  </React.StrictMode>,
);