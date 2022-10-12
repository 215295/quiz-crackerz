import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div className='my-10 bg-indigo-700'>
            <div>
                <img className='img-width ' src="logo512.png " />
                <p className='img-width text-2xl text-white  p-7 '>As your application grows, you might want to consider a more integrated setup. There are several JavaScript toolchains we recommend for larger applications. Each of them can work with little to no configuration and lets you take full advantage of the rich React ecosystem. </p>
            </div>
        </div>
    );
};

export default Header;