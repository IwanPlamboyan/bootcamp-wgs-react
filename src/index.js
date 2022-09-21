import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Comments from './component/Comments';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Comments name="Iwan" date="3.00PM" comment="Nice Info!" />
    <Comments name="Dida" date="5.00PM" comment="What a Story!" />
    <Comments name="Asep" date="8.00PM" comment="WOW!" />
  </React.StrictMode>
);
