import React from 'react';

const About = () => {
    return (
        <div className='h-screen p-5 relative bg-white '>
            <div className='h-full w-full overflow-hidden bg-black rounded-[35px]'>
                <video autoPlay loop muted className='h-full w-full object-cover' src="/public/videos/moon_vi.mp4"></video>
                <h1 className='font-[anzo4] text-[25vw] absolute uppercase left-30 bottom-0'><span className='text-purple-400'>A</span>bout</h1>
            </div>
        </div>
    )
}

export default About;