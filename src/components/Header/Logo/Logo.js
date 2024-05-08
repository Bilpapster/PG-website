import React from 'react';

import content from '../../../content/ContentHeader';

const Logo = (props) => {
    return (
        <h1 className='hidden md:inline-block font-sedgwick text-3xl text-transparent bg-black bg-clip-text hover:bg-gradient-to-r hover:from-secondary-normal hover:to-pink-600 pl-5 pr-5  py-3 hover:cursor-pointer transition ease-in-out duration-500'>
            <a href='#'>{content.logoText}</a>
        </h1>
    );
};

export default Logo;