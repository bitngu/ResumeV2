import React from 'react'
// import Navbar from './View/Navbar';
import About from './View/About';
import Home from './View/Home';
import Experience from './View/Experience';
import Projects from './View/Projects';
import Contact from './View/Contact';
import Footer from "./View/Footer";

import './App.css';

function App() {
  
  return (
    <div className="App">
      <Home />
        <div id="padding"> </div>
        <div id= 'transition'>
          <About />
          <Experience/>
          <Projects/>
          <Contact />
          <Footer />
        </div>
    </div>


  );
}

export default App;
