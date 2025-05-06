import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config'

const AuthProvider = ({ children }) => {
    // Hook Call Here 
    const [user , setUser] = useState(null); 
    const [loading, setLoading] = useState(true); 

    const auth = getAuth(app)
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password )
    }
    const updateUser = (updated) => {
        return updateProfile(auth.currentUser, updated)
    }
    const forgotPassword = email => {
        return sendPasswordResetEmail(auth, email); 
    }
    
    const logOut = () => {
        setLoading(true);
        return signOut(auth); 
    }
    // Handle Side Effect 
    useEffect(() => {
        const unSubscribe =  onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser); 
            setLoading(false);
        })
        return () =>  {
            unSubscribe(); 
        }
    }, [auth])
    
    const authData = {
        user,
        setUser,  
        createUser,
        login, 
        logOut, 
        loading,
        setLoading,
        updateUser,
        forgotPassword
    }
    
    
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;