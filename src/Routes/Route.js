import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../View/Home/index.js';
import Caracters from '../View/Caracters/index.js';
import Header from '../Component/Header/index.js';

export default function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Caracters" element={<Caracters />} />
      </Routes>
    </BrowserRouter>
  );
}
