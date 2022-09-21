import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Comments from './component/Comment';
import { faker } from '@faker-js/faker';

const root = ReactDOM.createRoot(document.getElementById('root'));

const inputComment = [
  { name: 'Iwan', date: '3.00PM', comment: 'Nice Info!', image: faker.image.avatar() },
  { name: 'Dida', date: '5.00PM', comment: 'What a Story!', image: faker.image.avatar() },
  { name: 'Asep', date: '8.00PM', comment: 'WOW!', image: faker.image.avatar() },
];

root.render(
  <React.StrictMode>
    <Comments data={inputComment} />
  </React.StrictMode>
);
