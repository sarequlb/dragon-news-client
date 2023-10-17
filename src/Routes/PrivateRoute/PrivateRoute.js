import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(AuthContext)
    const location = useLocation();
    if(loader){
        return <Spinner animation="grow" />;
    }

    if(!user){
        return <Navigate to={'/login'} state={{from: location}} replace></Navigate>
    }
    return (
        children
    );
};

export default PrivateRoute;