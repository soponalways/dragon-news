import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams(); 
    const data = useLoaderData(); 

    const [categoryNews , setCategoryNews] = useState([]); 
    console.log(categoryNews)

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
            // console.log(filteredData)
            setCategoryNews(filteredData); 
        }; 

    }, [data, id]); 


    return (
        <div>
            <h1 className="text-3xl font-semibold text-center">Total - {categoryNews.length} News Found</h1>
        </div>
    );
};

export default CategoryNews;