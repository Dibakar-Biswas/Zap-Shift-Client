import React from 'react';
import cancel from '../../../assets/cancel.jpg';
import { Link } from 'react-router';

const PaymentCancelled = () => {
    return (
        <div>
            <img src={cancel} alt="" className="w-fit max-h-screen" />
            <Link to='/dashboard/my-parcels'><button className='btn btn-primary text-black'>Try Again</button></Link>
        </div>
    );
};

export default PaymentCancelled;