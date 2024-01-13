import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';



function Main(prop) {
  return (
    <>
      <main className={`${prop.backGround} min-h-[100vh] flex flex-col items-center justify-center text-sm text-gray-300`}>
        <h2 className="space-x-2"><FontAwesomeIcon icon={faCode} /><span>{prop.label}</span><FontAwesomeIcon icon={faCode} /></h2>
        <p>{prop.description}</p>
      </main>
    </>
  );
}

export default Main;
