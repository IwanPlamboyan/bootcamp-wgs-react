import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { faker } from '@faker-js/faker';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

const inputComments = [
  { name: 'Iwan', date: '3.00PM', comment: 'Nice Info!', image: faker.image.avatar() },
  { name: 'Dida', date: '5.00PM', comment: 'What a Story!', image: faker.image.avatar() },
  { name: 'Asep', date: '8.00PM', comment: 'WOW!', image: faker.image.avatar() },
];

root.render(
  <React.StrictMode>
    <App data={inputComments} />
  </React.StrictMode>
);
