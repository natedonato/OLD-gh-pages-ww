import React from 'react';
import './App.css';
import Navbar from './nav';
import Header from './head';
import About from './about';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <About />
    </div>
  );
}

export default App;
