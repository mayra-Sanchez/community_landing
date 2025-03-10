import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Portafolio from './components/Portafolio';
import Footer from './components/Footer';
import './styles/global.css';
import Logos from './components/Logos';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Logos />
      <Services />
      <Portafolio />
      <Footer />
    </div>
  );
}

export default App;