import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../Components/NewsCard';

const CategoryNews = () => {
    const {id} = useParams(); 
    const data = useLoaderData(); 

    const [categoryNews , setCategoryNews] = useState([]); 

    // Handle Side Effect 
    useEffect(() => {
        if (id === '0') {
            setCategoryNews(data);
            return;
        } else if (id === '1') {
            const breakingNews = data.filter(news => news.others.is_today_pick === true); 
            setCategoryNews(breakingNews); 
            return; 
        } else {
            const filteredData = data.filter(news => news.category_id == id); 
            setCategoryNews(filteredData); 
        }; 

    }, [data, id]); 


    return (
        <div>
            <h1 className="text-3xl font-semibold text-center">Total - {categoryNews.length} News Found</h1>
            <div className='grid grid-cols-1 gap-5 md:gap-7'>
                {
                    categoryNews.map(news => <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;