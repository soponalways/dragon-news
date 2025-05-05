import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../Components/Navbar';

const AuthLayout = () => {
    return (
        <div>
            <header  className='w-11/12 mx-auto py-4'>
                <Navbar></Navbar>
            </header>
            <main  className='w-11/12 mx-auto py-4'>
                <Outlet />
            </main>
        </div>
    );
};

export default AuthLayout;