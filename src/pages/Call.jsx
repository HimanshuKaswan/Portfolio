import React from 'react';

const Call = () => {
    return (
        <div className='h-screen p-5 relative bg-white '>
            <div className='h-full w-full overflow-hidden bg-black rounded-[35px]'>
                <video autoPlay loop muted className='h-full w-full object-cover' src="/videos/moon_vi.mp4"></video>
                <h1 className='font-rajdhani  text-[10vw] absolute top-1/2 translate-x-1/4 -translate-y-1/2 uppercase'>get <span className='text-purple-400'>IN</span> touch</h1>
            </div>
        </div>
    )
}

export default Call;
