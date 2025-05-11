import React from 'react';

const TheWorq = () => {
  return (
    <div className=' w-screen bg-black p-8 relative '>
            <div className='bg-white p-3 rounded-[35px]'>
                <div className=' overflow-hidden rounded-[35px]'>
                    <video autoPlay loop muted className='h-full w-full object-contain' src="/videos/worq.mp4"></video>
                    <div className='absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center'>
                        <h1 className='font-[anzo4] text-[20vw] leading-[18vw] opacity-65 uppercase left-10'>The</h1> 
                        <h1 className='font-[anzo4] text-[25vw] leading-[18vw] opacity-90 uppercase left-10'>worq</h1>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default TheWorq;
