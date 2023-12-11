import React from 'react';

const Footer = () => {
    return (
        <div className='absolute left-0 bottom-0 bg-ravel-gray-800 w-full flex flex-wrap md:py-2 md:px-10 p-3' data-cy='f-ravel'>
            <div className='text-center text-white flex-none self-center'>
                <div className='font-bold md:text-xl text-sm'>Ravel</div>
                <div className='font-light md:text-sm text-xs'>Travel Solution</div>
            </div>
            <div className='text-white font-light md:text-sm text-xs flex-1 text-center self-center md:-ml-32'>Copyright ©2023 All rights reserved</div>
        </div>
    )
}

export default Footer;