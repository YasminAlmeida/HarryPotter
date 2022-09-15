import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../View/Home/index.js';
export default function Router() {
  return (
    <BrowserRouter>
      {/* <Header rotaHome="Home" rotaCat="Gato" rotaDog="Dog" /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
