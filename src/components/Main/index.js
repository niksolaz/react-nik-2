import React from 'react';


function Main(prop) {
  return (
    <>
      <main className="bg-blue-900 min-h-[100vh] flex flex-col items-center justify-center text-sm text-gray-300">
        {prop.label}
      </main>
    </>
  );
}

export default Main;
