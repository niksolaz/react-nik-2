import React from 'react';

function Portfolio(prop) {
  const lists = prop.lists;
  if(!lists) {
    return (
      <>
        <main className="bg-blue-400 min-h-[100vh] flex flex-col items-center justify-center space-y-3 text-gray-300">No Portfolio</main>
      </>
    );
  } else {
    return (
      <>
        <main className={`${prop.backGround} min-h-[100vh] flex flex-col items-center justify-center space-y-3 text-gray-300`}>
          {lists.map((item, index) => (
            <div key={index} className="border p-20 rounded w-96 shadow-lg">
              {
                <a href={item.link} target="blank">
                  <div>{item.title}</div>
                  <div>{item.description}</div>
                </a>
              }
            </div>
          ))}
        </main>
      </>
    );
  }
}

export default Portfolio;
