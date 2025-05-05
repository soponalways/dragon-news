import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import userlogo from '../assets/user.png'; 
import AuthContext from '../Provider/AuthContext';

const Navbar = () => {
    const navigate = useNavigate(); 
    const {user} = use(AuthContext); 
    
    const handelLoginClick = () => {
        navigate('/auth/login')
    }
    return (
        <div className='flex justify-between items-center my-5'>
            <section className="start text-accent">{user && user.email} </section>
            <section className="nav flex gap-4 text-accent font-medium">
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/career'>Career</NavLink>
            </section>
            <section className="end flex gap-3">
                <img src={userlogo} alt="" />
                <button onClick={handelLoginClick} className='btn btn-primary px-10 text-lg'>Login</button>
            </section>
        </div>
    );
};

export default Navbar;