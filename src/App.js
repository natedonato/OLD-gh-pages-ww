import React from 'react';
import './App.css';
import Header from './head';
import Navbar from './nav';
import About from './about';
import Projects from './projects';
import Skills from './skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Projects />
      <Skills />
    </div>
  );
}

export default App;
