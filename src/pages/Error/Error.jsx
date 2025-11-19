import React from 'react';
import error from '../../assets/error(2).png'
import { NavLink } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center'>
            <img src={error} alt="" />
            <NavLink className='btn btn-primary font-bold text-black' to='/'>Go Home</NavLink>
        </div>
    );
};

export default Error;