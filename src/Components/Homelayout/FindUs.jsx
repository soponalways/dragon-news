import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div className='space-y-3'>
            <h2 className='font-bold text-xl'>Find Us on</h2>
            <div className="join join-vertical w-full">
                <button className="btn bg-base-100 justify-start join-item"><FaFacebook/> Facbook</button>
                <button className="btn bg-base-100 justify-start join-item"><FaTwitter/> Twitter</button>
                <button className="btn bg-base-100 justify-start join-item"><FaInstagram/> Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;