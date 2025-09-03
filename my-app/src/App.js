import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Experiences from './components/Experiences';
import Publications from './components/Publications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />            {/* Home page */}
        <Route path="/about" element={<About />} />
        <Route path="/experiences" element={<Experiences />} />    {/* Resume page */}
        <Route path="/publications" element={<Publications />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />    {/* Resume page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
};

export default App;