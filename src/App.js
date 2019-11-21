import React from 'react';
import './App.css';
import Header from './head';
import Navbar from './nav';
import About from './about';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';
import Faq from './faq';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Faq />
      <Contact />
    </div>
  );
}

export default App;
