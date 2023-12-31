import React from 'react';
import Header from './components/Header/index'
import Scrollup from './components/Scrollup/index'
import Main from './components/Main/index'
import About from './components/About/index'
import Portfolio from './components/Portfolio/index'
import Footer from './components/Footer/index'
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="top">
        <Header />
      </div>
      <Scrollup />
      <div id="main">
        <Main />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="portfolio">
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default App;
