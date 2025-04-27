import React from 'react';

const Elegant = () => {
    return (
        <div className='h-screen p-5 mt-40 relative bg-white' >
            <div className='h-full w-full flex items-center justify-center overflow-hidden bg-black rounded-[35px]'>
                <img className='h-[120vh] w-[60vw]' src="/src/assets/ELEGant.avif" alt="" />
                <img className='absolute right-15 h-[25vw]' src="/src/assets/AIR V.avif" alt="" />
                <img className='absolute right-70 bottom-30 h-[15vw]' src="/src/assets/pad.avif" alt="" />
                <h1 className='font-[anzo4] text-[15vw] absolute uppercase left-40 top-10'>[ elegant ]</h1>
            </div>
        </div>
    );
}

export default Elegant;