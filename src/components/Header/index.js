import React from 'react';


function Header(prop) {
  const menu = prop.menu;
  return (
    <>
      <header className="bg-blue-500 min-h-[10vh] flex items-center justify-end text-gray-300 font-semibold px-5">
        {menu.map((item, index) => (
          <button key={index} className="uppercase hover:text-blue-300 p-4">
            <a href={item.link}>{item.name}</a>
          </button>
        ))}
      </header>
    </>
  );
}

export default Header;
