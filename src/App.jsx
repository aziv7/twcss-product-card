import { useState } from 'react';

function App() {
  const catogories = ['sports', 'sports12', 'fashion', 'black & white'];
  return (
    <div className='App'>
      <div className='flex justify-center items-center h-screen bg-slate-200'>
        <div className='flex flex-col p-6 max-w-md space-y-10 bg-white rounded-2xl cursor-pointer transition-all duration-300  shadow-md hover:shadow-2xl md:space-y-0 md:space-x-10 md:m-0 md:p-8'>
          <div>
            <div className='bg-gray-100 border border-transparent hover:border-black transition-all duration-200 flex items-center justify-center rounded-lg mb-2'>
              <img
                alt='product'
                src='https://freepngimg.com/thumb/shoes/28090-6-sneaker-file.png'
                className=' duration-200 transition-all ease-in-out w-60 p-4 hover:scale-105 '
              />{' '}
            </div>
            <div className='flex flex-col space-y-6'>
              <div className='flex flex-col mb-4 space-y-2 text-center md:text-left'>
                <div className=' flex items-center   md:items-center justify-start md:justify-center flex-wrap flex-row md:space-y-0 space-x-4 '>
                  {catogories.map((c) => (
                    <div
                      key={c}
                      className='  text-center  my-4  transition-all duration-300 hover:bg-white border-black border-2 text-md font-bold ease-in-out hover:text-black hover:animate-bounce text-white  px-3 py-1 bg-black rounded-full '>
                      {c}
                    </div>
                  ))}
                </div>
                <div className='text-2xl font-medium'>
                  Converse Chunk All Star Leather - Top Black
                </div>
                <div className='flex flex-col mb-1 space-y-3 text-center md:text-left'>
                  <p className='line-through '>$89</p>
                  <p className='text-4xl font-bold'>$56</p>
                  <p className='text-sm font-light leading-5 text-gray-400'>
                    This offer is valid until 15 February!
                  </p>
                </div>
                <div className='group'>
                  <button
                    className='w-full bg-blue-700 text-2xl font-bold text-white border-b-8
border-b-blue-700 rounded-lg group-hover:border-t-8
group-hover:bonder-b-0 group-hover:bg-blue-700
group-hover:border-t-blue-700 group-hover:shadow-lg'>
                    <div
                      className='px-8 py-2 group-hover:py-1 transition-all  ease-in-out bg-blue-500 rounded-lg
    duration-200 group-hover:bg-blue-700'>
                      Add to cart
                    </div>
                  </button>
                </div>
                <div className='flex items-center space-x-3 group'>
                  <div className='w-3 h-3 bg-green-400 rounded-full group-hover:animate-ping'></div>
                  <div className='text-sm'>78 pcs. in stock</div>
                </div>
              </div>
            </div>{' '}
          </div>{' '}
        </div>{' '}
      </div>
    </div>
  );
}

export default App;
