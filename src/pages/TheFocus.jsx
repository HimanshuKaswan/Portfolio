import React from 'react';

const TheFocus = () => {
  return (
    <div className='h-screen w-screen relative bg-black contain'>
            <div className='bg-white p-3 absolute m-10  overflow-hidden rounded-[35px]'>
                <div className=' overflow-hidden rounded-[35px]'>
                    <video autoPlay loop muted className='h-full w-full object-cover' src="/src/assets/focus.mp4"></video>
                    <div className='absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center'>
                        <h1 className='font-[anzo4] text-[20vw] leading-[18vw] opacity-75 uppercase left-10'>The</h1> 
                        <h1 className='font-[anzo4] text-[25vw] leading-[18vw] uppercase left-10'>focus</h1>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default TheFocus;