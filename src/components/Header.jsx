import React from 'react';
import 'remixicon/fonts/remixicon.css';

const Header = () => {
    return(
        <div className='fixed w-full flex items-centre justify-end z-10 p-20'>
            <a
                href="https://github.com/HimanshuKaswan"
                target="_blank"
            >
                <button className="bg-black border-4  text-white text-xl px-6 py-3 rounded-full hover:opacity-60 transition">
                    Hire Me
                </button>
            </a>

            <i className="ri-menu-4-line  text-3xl ml-3 mt-3"></i>
        </div>
    )
}

export default Header;