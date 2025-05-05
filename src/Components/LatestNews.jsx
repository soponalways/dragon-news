import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex gap-5 bg-base-200 py-3 px-3 rounded-md my-3'>
            <h1 className='bg-secondary text-white font-semibold py-2 px-4 rounded-lg'>Latest</h1>
            <Marquee className='flex gap-10'>
                <p className='font-medium'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as</p>
                <p className='font-medium'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as</p>
                <p className='font-medium'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as</p>
                <p className='font-medium'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;
