import React from 'react';

const Call = () => {
    return (
        <div className='h-screen p-4 sm:p-5 relative bg-white'>
            <div className='h-full w-full overflow-hidden bg-black rounded-[35px]'>
                <video 
                    autoPlay 
                    loop 
                    muted 
                    className='h-full w-full object-cover' 
                    src="/videos/moon_vi.mp4"
                />
                <h1 className='font-rajdhani text-[8vw] sm:text-[10vw] absolute top-1/2 translate-x-1/4 -translate-y-1/2 uppercase'>
                    get <span className='text-purple-400'>IN</span> touch
                </h1>
                <a
                    className='absolute mt-6 top-2/3 translate-x-160 -translate-y-1/2 hover:opacity-80 transition-opacity duration-300'
                    href="https://github.com/HimanshuKaswan"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-black h-16 sm:h-20 w-auto border-4 text-white text-lg sm:text-xl px-6 py-3 rounded-full hover:opacity-90 transition-opacity duration-300">
                        Hire Me
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Call;
