import React from 'react'
// import Navbar from './View/Navbar';
import About from './View/About';
import Home from './View/Home';
import Education from './View/Education';
import Projects from './View/Projects';
import Contact from './View/Contact';
import Footer from "./View/Footer";

import './App.css';

function App() {
  
  return (
    <div className="App">
      <Home />
      <About />
      <Education/> 
      <Projects/>
      <Contact />
      <Footer />
    </div>


  );
}

export default App;
