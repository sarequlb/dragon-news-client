import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
           <h1>here is our terms </h1> 
           <p>Go back to: <Link to={'/register'}>Register</Link></p>
        </div>
    );
};

export default Terms;