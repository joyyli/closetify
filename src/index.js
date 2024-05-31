import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App';

// Import the functions you need from the SDKs you need
import './firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);