import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import AuthContext from '../../Provider/AuthContext';

const Login = () => {
    const { login, setUser, forgotPassword } = use(AuthContext); 
    const location = useLocation(); 
    const navigate = useNavigate(); 
    const [error , setError] = useState(''); 
    const emailRef = useRef(''); 
    
    const handleLogin = (e) => {
        e.preventDefault(); 
        const form = e.target; 
        const email = form.email.value; 
        const password = form.password.value; 

        // Reset 
        setError('')

        login(email, password) 
        .then(userCredential => {
            setUser(userCredential.user)
            navigate(`${location.state ? location.state : '/' }`)
        })
        .catch(error => {
            const errorCode = error.code; 
            const errorMessage = error.message; 
            // alert(errorCode, errorMessage)
            setError(errorCode, errorMessage); 
        })
    }; 

    // Handle Forgot pasword 
    const handleForgot = () => {
        console.log('User Trying To Forgot Password '); 
        const email = emailRef.current.value; 
        
        // Forgot 
        forgotPassword(email)
        .then(() => {
            alert("We are sent an password reset email ? please Check your inbox")
        }).catch(error => {
            setError(error.message)
        })
    }
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-100px)]'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h1 className='text-center text-2xl font-bold py-4 border-b border-b-accent/50 my-4'>Login Your Account</h1>
                    <form onSubmit={handleLogin} className="fieldset">
                        
                        {/* Email */}
                        <label className="label">Email</label>
                        <input type="email" required ref={emailRef} name='email' className="input" placeholder="Enter Your Email" />

                        {/* Password */}
                        <label className="label">Password</label>
                        <input type="password" required name='password' className="input" placeholder="Enter Your Password " />

                        {/* Forgot Password and Login Button  */}
                        <div><a onClick={handleForgot} className="link link-hover">Forgot password?</a></div>
                        {error && <p className='text-red-600 font-semibold text-sm'>{error}</p>}
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </form>
                    <p className='text-center font-semibold'>Don't Have An Accout ? <Link className='text-secondary hover:underline hover:underline-offset-4' to='/auth/register'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;