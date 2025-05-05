import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-100px)]'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-center text-2xl font-bold py-4 border-b border-b-accent/50 my-4'>Register An Account</h1>
                    <fieldset className="fieldset">

                        {/* Name  */}
                        <label className="label">Name</label>
                        <input type="text" className="input" placeholder="Enter Your Name" />

                        {/* Photo URL  */}
                        <label className="label">Photo URL</label>
                        <input type="text" className="input" placeholder="Enter Your Photo URL" />

                        {/* Email  */}
                        <label className="label">Email</label>
                        <input type="email" className="input" placeholder="Enter Your Email" />

                        {/* password  */}
                        <label className="label">Password</label>
                        <input type="password" className="input" placeholder="Enter Your Password" />

                        {/* Submit or Register  */}
                        <button className="btn btn-neutral mt-4">Register</button>
                    </fieldset>
                    <p className='text-center font-semibold'>Allready Have An Accout ? <Link className='text-secondary hover:underline hover:underline-offset-4' to='/auth/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;