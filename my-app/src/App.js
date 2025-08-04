import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import Image from './components/Image';
import './App.css'

const App = () => {
  return (
    <div>
    <Router>
    <Navbar />
    <div class="container">
    <div class="segment"> <Image /></div>
    <div class="segment"> Hi, I'm Sanjana Pingali! </div>
    <div class="segment"> A Master's student in Electrical and Computer Engineering at the University of Illinois at Urbana-Champaign</div>
    <div id="example1"><script src="/js/pdfobject.js"></script>
  <script>PDFObject.embed("/Resume.pdf", "#example1");</script></div>
    </div>
  
        <Routes>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
      </Routes>
    </Router>
    </div>
  );
};

export default App;