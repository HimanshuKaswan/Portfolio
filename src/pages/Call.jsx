import React from 'react';

const Call = () => {
    return (
        <div className='h-screen p-5 relative bg-white '>
            <div className='h-full w-full overflow-hidden bg-black rounded-[35px]'>
                <video autoPlay loop muted className='h-full w-full object-cover' src="/videos/moon_vi.mp4"></video>
                <h1 className='font-rajdhani  text-[10vw] absolute top-1/2 translate-x-1/4 -translate-y-1/2 uppercase'>get <span className='text-purple-400'>IN</span> touch</h1>
                <a
                className='absolute mt-6 top-2/3 translate-x-160 -translate-y-1/2 hover:opacity-80 '
                href="https://github.com/HimanshuKaswan"
                target="_blank"
                >
                    <button className="bg-black h-20 w-50 border-4 text-white text-xl px-6 py-3 rounded-full hover:opacity-90 transition">
                        Hire Me
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Call;
