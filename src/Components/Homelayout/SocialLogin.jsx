import React, { useContext } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import AuthContext from '../../Provider/AuthContext';
import { GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider(); 

const SocialLogin = () => {
    const { socialSignIn, setUser } = useContext(AuthContext); 
    
    // Handle google Login 
    const handleGoogleSignIn = () => {
        socialSignIn(googleProvider)
        .then(userCredential => {
            console.log(userCredential)
            setUser({...userCredential.user}); 
        }).catch (error => {
            console.log(error)
        })
    }
    return (
        <div className='space-y-5'>
            <h2 className='text-xl font-bold'>Login with</h2>
            <div className='space-y-4'>
                <button onClick={handleGoogleSignIn} className='btn w-full btn-outline btn-secondary'><FcGoogle size={24}/> Login with Google</button>
                <button className='btn w-full btn-outline btn-primary'><BsGithub size={24}/> Login with Github </button>
            </div>
        </div>
    );
};

export default SocialLogin;