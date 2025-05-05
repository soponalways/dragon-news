import React from 'react';
import { useParams } from 'react-router';

const CategoryNews = () => {
    const {id} = useParams(); 
    return (
        <div>
            <h1 className="text-3xl font-semibold text-center">Category News - {id}</h1>
        </div>
    );
};

export default CategoryNews;