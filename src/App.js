import React from 'react';
import './App.css';
import Header from './head';
import Navbar from './nav';
import About from './about';
import Projects from './projects';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
      <Projects />
    </div>
  );
}

export default App;
