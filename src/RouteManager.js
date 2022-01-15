import React from 'react';
import { Routes, Route } from "react-router-dom";
import FontPicker from './pages/FontPicker';
import Proof from './pages/Proof';

const RouteManager = () => {
  return (
    <Routes>
      <Route path="/proof" element={<Proof />} />
      <Route path="/" element={<FontPicker />} />
    </Routes>
  );
};

export default RouteManager;
