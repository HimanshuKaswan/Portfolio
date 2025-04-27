import React from 'react';

const Minimal = () => {
    return (
        <div className='h-screen p-5  relative bg-white' >
            <div className='h-full w-full flex items-center justify-center overflow-hidden bg-black rounded-[35px]'>
                <img className='object-cover h-full w-full' src="/src/assets/MINIMAL.avif" alt="" />
                <img className='absolute -right-20 bottom-0 h-[40vw]' src="/src/assets/phone.avif" alt="" />
                <h1 className='font-[anzo4] text-[12vw] absolute uppercase left-39 top-20'>[ minimal ]</h1>
            </div>
        </div>
    );
}

export default Minimal;