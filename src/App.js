import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ListBiodata from './component/ListBiodata';
import AddBiodata from './component/AddBiodata';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListBiodata />} />
        <Route path="/add" element={<AddBiodata />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
