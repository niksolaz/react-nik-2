import React from 'react';


function Header() {
  return (
    <>
      <header className="bg-blue-900 min-h-[10vh] flex items-center justify-end text-gray-300 text-sm font-semibold px-5">
        <button className="uppercase hover:text-blue-300 p-4">
          <a href="#main">Main</a>
        </button>
        <button className="uppercase hover:text-blue-300 p-4">
          <a href="#about">About</a>
        </button>
        <button className="uppercase hover:text-blue-300 p-4">
          <a href="#portfolio">Portfolio</a>
        </button>
      </header>
    </>
  );
}

export default Header;
