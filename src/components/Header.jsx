import React from 'react';
import 'remixicon/fonts/remixicon.css';

const Header = () => {
    return(
        <div className='fixed w-full flex items-centre justify-end z-10 p-20'>
            <button className='bg-black border-4 text-xl px-6 py-3 rounded-full'>Hire Me</button>
            <i className="ri-menu-4-line  text-3xl ml-3 mt-3"></i>
        </div>
    )
}

export default Header;