import React from 'react';

function About(prop) {
  return (
    <>
      <main className={`${prop.backGround} min-h-[100vh] flex flex-col items-center justify-center text-gray-300`}>
        <h2 className="text-4xl font-bold">{prop.label}</h2>
        <div className="container mx-auto px-20 text-justify">{prop.description}</div>
      </main>
    </>
  );
}

export default About;
