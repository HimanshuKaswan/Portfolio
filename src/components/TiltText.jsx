import React from 'react';

const TiltText = (props) =>{
    return (
        <div id='tiltDiv' ref={props.ref} className='mt-30'>
            <h1 className='text-[4.2vw] leading-[4vw] uppercase font-[anzo2]'>I Am <span className='text-black'>DARK MODE</span><span>™</span></h1>
            <h1 className='text-[8.5vw] leading-[7vw] font-[anzo1]'>DESIGNER</h1>
            <h1 className='text-[4.2vw] leading-[4vw] uppercase font-[anzo2]'>To Hire</h1>
        </div>
    )
}

export default TiltText;