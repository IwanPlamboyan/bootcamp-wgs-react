import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SayHello from './component/SayHello';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SayHello name="Iwan Plamboyan" pekerjaan="Peserta Bootcamp batch 3" />
    <SayHello name="coba" pekerjaan="Peserta Bootcamp batch 3" />
  </React.StrictMode>
);
