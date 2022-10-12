import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navber = () => {
    return (
        <div className="navbar bg-green-500 p-5  flex">
            <div className="flex-1">
                <h1 className="text-white ml-15 text-2xl">Quiz </h1>
            </div>
            <div className="flex-1">
                <div className="flex-none  text-white mr-20 navber">
                    <Link to='/home'> Home</Link>
                    <Link to='/rechart'>Rechart</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            </div>
        </div>



    );
};

export default Navber;