import React, { useEffect, useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import app from '../firebase/firebase.config'

const AuthProvider = ({ children }) => {
    // Hook Call Here 
    const [user , setUser] = useState(null)

    const auth = getAuth(app)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password )
    }
    
    const logOut = () => {
        return signOut(auth); 
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
        login, 
        logOut
    }
    
    
    return (
        <AuthContext value={authData}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;