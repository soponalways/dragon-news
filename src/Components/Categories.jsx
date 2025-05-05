import React, { use } from 'react';

const categoriesPromise = fetch('/categories.json').then(res => res.json());

const Categories = () => {
    const categories = use(categoriesPromise); 
    return (
        <div>
            <h3 className='text-lg font-semibold'>All Category ({categories.length})</h3>
        </div>
    );
};

export default Categories;