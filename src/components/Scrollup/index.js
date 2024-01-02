import React from 'react';
import { ReactComponent as IconArrowUp } from '../../assets/icons/arrow-up.svg';
import { useHeight } from '../../assets/js/useHeight';

function Scrollup() {
  const height = useHeight();
  console.log(height)
  return (
    <>
      <a href="top">
        <button className="fixed right-8 bottom-[50%] w-6 h-6 rounded-full bg-blue-900 hover:bg-gray-50 text-gray-300 hover:text-blue-900">
          <IconArrowUp className='w-4 h-4 mx-auto'/>
        </button>
      </a>
    </>
  );
}

export default Scrollup;
