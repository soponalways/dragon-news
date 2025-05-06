import React, { useContext, useState } from 'react';
import { BsGithub } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import AuthContext from '../../Provider/AuthContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider(); 

const SocialLogin = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const { socialSignIn, setUser } = useContext(AuthContext);

    // Handle google Login 
    const handleGoogleSignIn = () => {
        // Reset 
        setErrorMessage('')
        socialSignIn(googleProvider)
            .then(userCredential => {
                console.log(userCredential)
                setUser({ ...userCredential.user });
            }).catch(error => {
                console.log(error)
                setErrorMessage(error.message)
            })
    };

    // Handle Github Sign in 
    const handleGithubSignIn = () => {
        // Reset 
        setErrorMessage('')
        socialSignIn(githubProvider)
            .then(userCredential => {
                console.log(userCredential)
                const email = userCredential.user.providerData[0].email; 
                setUser({ ...userCredential.user, email });
            }).catch(error => {
                console.log(error)
                setErrorMessage(error.message)
            })
    }
    return (
        <div className='space-y-5'>
            <h2 className='text-xl font-bold'>Login with</h2>
            <div className='space-y-4'>
                <button onClick={handleGoogleSignIn} className='btn w-full btn-outline btn-secondary'><FcGoogle size={24} /> Login with Google</button>
                <button onClick={handleGithubSignIn} className='btn w-full btn-outline btn-primary'><BsGithub size={24} /> Login with Github </button>
                {errorMessage && <p className='text-sm font-medium text-red-500'>{errorMessage} </p>}
            </div>
        </div>
    );
};

export default SocialLogin;