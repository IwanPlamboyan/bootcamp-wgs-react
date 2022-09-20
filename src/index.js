import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App name="Iwan" pekerjaan="peserta bootcamp batch 3" />
    <App name="coba" pekerjaan="peserta bootcamp batch 3" />
  </React.StrictMode>
);
