import React from 'react';
import modernImage from '../assets/MODERN.avif';
import groupImage from '../assets/GROUP.avif';

const Mordern = () => {
    return (
        <div className='h-screen p-5 relative bg-white'>
            <div className='h-full w-full flex items-center justify-end overflow-hidden bg-black rounded-[35px]'>
                <img className='h-full w-[70vw]' src={modernImage} alt="Modern design" />
                <img className='absolute right-20 bottom-30 h-[20vw]' src={groupImage} alt="Group" />
                <h1 className='font-[anzo4] text-[12vw] absolute uppercase left-39 top-20'>[ mordern ]</h1>
            </div>
        </div>
    );
}

export default Mordern;