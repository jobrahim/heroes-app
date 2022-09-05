import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../auth';


export const PublicRoutes = ({children}) => {
    const {logged} = useContext(AuthContext);
    console.log(logged);

    return (!logged) ? children : <Navigate to='/marvel'/>; 
    
}