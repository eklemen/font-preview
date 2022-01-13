import React from 'react';
import { Routes, Route } from "react-router-dom";
import FontPicker from './pages/FontPicker';

const RouteManager = () => {
  return (
    <Routes>
      <Route path="/proof" element={<FontPicker />} />
      <Route path="/" element={<FontPicker />} />
    </Routes>
  );
};

export default RouteManager;
