import { useState } from 'react';

function App() {
  return (
    <div className='App'>
      <div className='flex justify-center items-center h-screen bg-slate-200'>
        <div className='flex flex-col p-6 space-y-10 bg-white rounded-2xl cursor-pointer transition-all duration-300  shadow-md hover:shadow-2xl md:space-y-0 md:space-x-10 md:m-0 md:p-8'>
          <div>
            <div className='bg-gray-100 rounded-lg mb-2'>
              <img
                alt='product'
                src='https://freepngimg.com/thumb/shoes/28090-6-sneaker-file.png'
                className=' duration-200 transition-all ease-in-out w-60 p-4 hover:scale-105 '
              />
            </div>
          </div>
        </div>
      </div>
      <div className='flex flex-col space-y-6'>
        <div className='flex flex-col mb-4 space-y-3 text-center md:text-left'></div>
      </div>
    </div>
  );
}

export default App;
