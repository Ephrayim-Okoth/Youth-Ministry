import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Research from './pages/Research';
import Support from './pages/Support';
import Contact from './pages/Contact';
import YouthResearch from './pages/YouthResearch';
import Navbar from './components/Navbar';
import './App.css';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/youth-research" element={<YouthResearch />} />
      </Routes>
    </Router>
  );
}