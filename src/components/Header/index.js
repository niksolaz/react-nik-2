import React from 'react';
import '../../App.css'

function Header() {
  return (
    <>
      <header className="App-header">
        <button>
          <a href="#main">Main</a>
        </button>
        <button>
          <a href="#about">About</a>
        </button>
        <button>
          <a href="#portfolio">Portfolio</a>
        </button>
      </header>
    </>
  );
}

export default Header;
