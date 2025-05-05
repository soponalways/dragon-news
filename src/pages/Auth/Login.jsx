import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-100px)]'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-center text-2xl font-bold py-4 border-b border-b-accent/50 my-4'>Login Your Account</h1>
                    <fieldset className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Enter Your Email" />
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Enter Your Password " />
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>
                    <p className='text-center font-semibold'>Don't Have An Accout ? <Link className='text-secondary hover:underline hover:underline-offset-4' to='/auth/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;