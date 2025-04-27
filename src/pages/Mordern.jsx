import React from 'react';

const Mordern = () => {
    return (
        <div className='h-screen p-5  relative bg-white' >
            <div className='h-full w-full flex items-center justify-end overflow-hidden bg-black rounded-[35px]'>
                <img className='h-full w-[70vw] ' src="/src/assets/MODERN.avif" alt="" />
                <img className='absolute right-20 bottom-30 h-[20vw]' src="/src/assets/GROUP.avif" alt="" />
                <h1 className='font-[anzo4] text-[12vw] absolute uppercase left-39 top-20'>[ mordern ]</h1>
            </div>
        </div>
    );
}

export default Mordern;