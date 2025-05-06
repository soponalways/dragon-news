import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = ({ breakingNews }) => {
    const [latestNewsTitle, setLatestNewsTitle] = useState([]); 

    // Handle Side Effect 
    useEffect(() => {
        const titles = breakingNews.map(news => news.title); 
       setLatestNewsTitle(titles)
    }, [breakingNews]);
    return (
        <div className='flex gap-5 bg-base-200 py-3 px-3 rounded-md my-3'>
            <h1 className='bg-secondary text-white font-semibold py-2 px-4 rounded-lg'>Latest</h1>
            <Marquee className='flex gap-10'>
                {
                    latestNewsTitle.map(title => <p className='font-medium mr-10'>{title}</p>)
                }
            </Marquee>
        </div>
    );
};

export default LatestNews;
