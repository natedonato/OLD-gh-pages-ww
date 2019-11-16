import React from 'react';
import './App.css';
import Navbar from './nav';
import Header from './head';

function App() {
  return (
    <div className="App">
      <Header />

      <Navbar />

      <section id="home" style={{height: '1000px'}}>
      HEY
      </section>
    </div>
  );
}

export default App;
