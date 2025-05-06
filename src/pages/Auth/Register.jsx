import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import AuthContext from '../../Provider/AuthContext';

const Register = () => {

    const navigate = useNavigate(); 
    
    // Handle Register 
    const { createUser, setUser, updateUser } = use(AuthContext); 
    const [nameError , setNameError] = useState(''); 
    const [error , setError] = useState(''); 
    
    const handleRegister = e => {
        e.preventDefault();

        // REsett
        setNameError('');
        setError(''); 

        const form = e.target;
        const name = form.name.value;
        if(name.length < 5 ) {
            setNameError("Name Must be 5 charechter "); 
            return; 
        }
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log({ name, photo, password, email })

        // Create User 
        createUser(email, password)
        .then(userCredential => {
            
            updateUser({ displayName: name, photoURL : photo})
            .then(() => {
                setUser({ ...userCredential.user, displayName: name, photoURL: photo }); 
                navigate('/')
                console.log('Update User Successfull'); 
            }).catch(error => {
                setError(error.message); 
                setUser(userCredential.user)
            } )
            // console.log(userCredential)
        }).catch(error => {
            console.log(error.message)
            setError(error.message); 
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
                        <input type="text" required name='name' className="input" placeholder="Enter Your Name" />
                            {nameError && <p className='text-red-500 text-sm'>{nameError}</p>}
                        {/* Photo URL  */}
                        <label className="label">Photo URL</label>
                        <input type="text" required name='photo' className="input" placeholder="Enter Your Photo URL" />

                        {/* Email  */}
                        <label className="label">Email</label>
                        <input type="email" required name='email' className="input" placeholder="Enter Your Email" />

                        {/* password  */}
                        <label className="label">Password</label>
                        <input type="password" required name='password' className="input" placeholder="Enter Your Password" />

                        {/* Error message  */}
                        {error && <p className='text-sm text-red-500'>{error}</p>}
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