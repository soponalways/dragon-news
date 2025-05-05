import React, { use } from 'react';
import { Link } from 'react-router';
import AuthContext from '../../Provider/AuthContext';

const Register = () => {

    // Handle Register 
    const { createUser, setUser } = use(AuthContext); 

    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log({ name, photo, password, email })

        // Create User 
        createUser(email, password)
        .then(userCredential => {
            setUser(userCredential.user)
            console.log(userCredential)
        }).catch(error => {
            console.log(error.message)
        })
    }
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-100px)]'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-center text-2xl font-bold py-4 border-b border-b-accent/50 my-4'>Register An Account</h1>
                    <form onSubmit={handleRegister} className="fieldset">

                        {/* Name  */}
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Enter Your Name" />

                        {/* Photo URL  */}
                        <label className="label">Photo URL</label>
                        <input type="text" name='photo' className="input" placeholder="Enter Your Photo URL" />

                        {/* Email  */}
                        <label className="label">Email</label>
                        <input type="email" name='email' className="input" placeholder="Enter Your Email" />

                        {/* password  */}
                        <label className="label">Password</label>
                        <input type="password" name='password' className="input" placeholder="Enter Your Password" />

                        {/* Submit or Register  */}
                        <button type='submit' className="btn btn-neutral mt-4">Register</button>
                    </form>
                    <p className='text-center font-semibold'>Allready Have An Accout ? <Link className='text-secondary hover:underline hover:underline-offset-4' to='/auth/login'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;