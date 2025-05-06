import React, { useContext } from 'react';
import AuthContext from './AuthContext';
import { Navigate, useLocation } from 'react-router';
import Loading from '../pages/Loading';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext); 
    const location = useLocation(); 
    console.log(location)
    
    if(loading) {
        return <Loading></Loading>
    }
    
    if(user && user?.email ) {
        return children; 
    } 
    return <Navigate state={location.pathname} to={'/auth/login'}></Navigate>
};

export default PrivateRoute;