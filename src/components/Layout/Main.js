import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Navber from '../navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navber></Navber>

            <Outlet></Outlet>

        </div>
    );
};

export default Main;