import React from 'react';
import Header from './components/header';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Gallery />
      <Contact />
    </div>
  );
}

export default App;