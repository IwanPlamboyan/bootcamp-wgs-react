import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';

// mengambil document file html di folder public dengan id root
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = (
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        Navbar
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/about">
              About
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">
              contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

// merender element di
root.render(element);
