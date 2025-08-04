import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import Image from './components/Image';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <div className="segment"><Image /></div>
        <div className="segment">Hi, I'm Sanjana Pingali!</div>
        <div className="segment">
          A Master's student in Electrical and Computer Engineering at the University of Illinois at Urbana-Champaign
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;