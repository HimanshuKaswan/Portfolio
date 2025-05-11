import React, { useRef, useState } from 'react';
import TiltText from '../components/TiltText';
import Page1Bottom from '../components/Page1Bottom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const page1 = () => {

    const tiltRef = useRef(null)
    const [xVal, setXVal] = useState(0)
    const [yVal, setYVal] = useState(0)

    const mouseMoving = (e) =>{
        setXVal((e.clientX - tiltRef.current.getBoundingClientRect().x - tiltRef.current.getBoundingClientRect().width/2)/30)
        setYVal(-(e.clientY - tiltRef.current.getBoundingClientRect().y - tiltRef.current.getBoundingClientRect().height/2)/10)        
    }

    useGSAP(function(){
        gsap.to(tiltRef.current, {
            transform : `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
            duration: 3,
            ease: 'power4.out'
        })
    },[xVal, yVal])

    return(
        <div id='page-in' onMouseMove={(e) => {
            mouseMoving(e)
        }} className='h-screen relative px-4 py-4 bg-white'>
            <div className='shadow-xl relative p-18 shadow-gray-700 h-full w-full rounded-[40px] bg-cover bg-[url(/hero.png)] bg-no-repeat bg-center'>
                <img className='h-18 ' src="https://static.wixstatic.com/media/f1c650_e7181873180d410ba6848efd4e8cc5ef~mv2.png/v1/fill/w_75,h_60,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/LOGO%20WHITE_edited.png" alt="" />   
                <TiltText ref={tiltRef}/>
                <Page1Bottom /> 
            </div>
        </div>
    )
}

export default page1;