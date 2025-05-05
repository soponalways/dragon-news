import React from 'react';
import swimmingImage from '../../assets/swimming.png'; 
import classImage from '../../assets/class.png'; 
import playGround from '../../assets/playground.png'; 

const QZone = () => {
    return (
        <div className='bg-base-200 p-4'>
            <h2 className="font-bold text-xl">Q-Zone</h2>
            <div className="grid grid-cols-1 gap-5">
                <img src={swimmingImage} alt="" />
                <img src={classImage} alt="" />
                <img src={playGround} alt="" />
            </div>
        </div>
    );
};

export default QZone;