import React, { useEffect } from 'react';
import {useState} from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Experience = () => {
    const [progress, setProgress] = useState(0);   

    useEffect(() => {
        const progressBar = document.getElementById("progress");
        if (progressBar) {
            gsap.to(progressBar, {
                width: `${progress}%`,
                duration: 3,
                ease: "power1.out",
            });
        }
    }
    , [progress]);


    return (
        <div className='bg-white p-4 sm:p-5 relative flex flex-col items-center justify-center min-h-screen'>
            <div className='h-full w-full p-4 sm:p-15 bg-black rounded-[35px]'>
                <div >
                    <div className='h-1.5 rounded bg-purple-600' id='progress'> </div>
                </div>
                <div>
                <div className='flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 h-auto md:h-1/2 pt-6 md:pt-10'>
                    <div className='w-full md:w-1/3 h-auto min-h-[30vh] bg-black/90 rounded-[35px] p-6 md:p-8 flex flex-col gap-4 border border-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/5 transition-all duration-300' onMouseMove={(e) => {setProgress(25)}}>
                        <h3 className='text-xl md:text-2xl font-mono uppercase tracking-wider text-white/90 bg-gradient-to-r from-white to-white/80 bg-clip-text'>Core Skills</h3>
                        <p className='text-white/60 mt-2 md:mt-4 font-[anzo2] text-sm leading-relaxed line-clamp-4'>
                            Mastered the fundamental pillars of modern web development, creating a solid foundation for building sophisticated digital experiences.
                        </p>
                    </div>
                    <div className='w-full md:w-1/3 h-auto min-h-[30vh] bg-black/90 rounded-[35px] p-6 md:p-8 flex flex-col gap-4 border border-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/5 transition-all duration-300' onMouseMove={(e) => {setProgress(50)}}>
                        <h3 className='text-xl md:text-2xl font-mono uppercase tracking-wider text-white/90 bg-gradient-to-r from-white to-white/80 bg-clip-text'>MERN Stack</h3>
                        <p className='text-white/60 mt-2 md:mt-4 font-[anzo2] text-sm leading-relaxed line-clamp-4'>
                            Proficient in MongoDB, Express, React, and Node.js, enabling the development of robust and scalable web applications.
                        </p>
                    </div>
                    <div className='w-full md:w-1/3 h-auto min-h-[30vh] bg-black/90 rounded-[35px] p-6 md:p-8 flex flex-col gap-4 border border-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/5 transition-all duration-300' onMouseMove={(e) => {setProgress(75)}}>
                        <h3 className='text-xl md:text-2xl font-mono uppercase tracking-wider text-white/90 bg-gradient-to-r from-white to-white/80 bg-clip-text'>Projects Built</h3>
                        <p className='text-white/60 mt-2 md:mt-4 font-[anzo2] text-sm leading-relaxed line-clamp-4'>
                        Successfully completed multiple projects, showcasing a range of skills, and demonstrating adaptability, problem-solving, and a commitment to quality results. 
                        </p>
                    </div>
                </div>
                <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 h-auto md:h-1/2 mb-auto pt-10 md:pt-20'>
                    <div className='w-full md:w-1/2 h-full ml-0 md:ml-4 flex flex-col items-start justify-center'>
                        <h2 className='text-[8vw] md:text-[10vw] font-[anzo4] uppercase text-transparent bg-gradient-to-r from-white via-white/80 to-white/40 bg-clip-text leading-none'>Progress</h2>
                        <p className='text-xl md:text-2xl font-[anzo2] text-purple-400 mt-2 md:mt-4 tracking-wide'>
                            Building something new
                        </p>
                    </div>
                    <div className='w-full md:w-1/3 h-auto min-h-[30vh] bg-black/90 rounded-[35px] p-6 md:p-8 flex flex-col gap-4 border border-white/20 hover:border-white/40 hover:shadow-lg hover:shadow-white/5 transition-all duration-300' onMouseMove={(e) => {setProgress(100)}}>
                        
                        <h3 className='text-xl md:text-2xl font-mono uppercase tracking-wider text-white/90 bg-gradient-to-r from-white to-white/80 bg-clip-text'>Portfolio Creation</h3>
                        <p className='text-white/60 mt-2 md:mt-4 font-[anzo2] text-sm leading-relaxed line-clamp-4'>
                            This portfolio is built to highlight my skills and experience as a full-stack developer, featuring selected projects and technologies I've worked with.
                        </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
    );
};

export default Experience;