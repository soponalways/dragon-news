import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth';
import app from '../firebase/firebase.config'

const AuthProvider = ({ children }) => {
    // Hook Call Here 
    const [user , setUser] = useState(null)

    const auth = getAuth(app)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    
    // Handle Side Effect 
    useEffect(() => {
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser); 
        })
        return () =>  {
            unSubscribe(); 
        }
    }, [auth])
    
    const authData = {
        user,
        setUser,  
        createUser,
    }
    
    
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;