import React from 'react';
import { NavLink } from 'react-router';
import userlogo from '../assets/user.png'; 

const Navbar = () => {
    return (
        <div className='flex justify-between items-center my-5'>
            <section className="start text-transparent">HI Iam Nav bar here are  </section>
            <section className="nav flex gap-4 text-accent font-medium">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </section>
            <section className="end flex gap-3">
                <img src={userlogo} alt="" />
                <button className='btn btn-primary px-10 text-lg'>Login</button>
            </section>
        </div>
    );
};

export default Navbar;