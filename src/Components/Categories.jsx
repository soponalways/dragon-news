import React, { use } from 'react';
import { NavLink } from 'react-router';

const categoriesPromise = fetch('/categories.json').then(res => res.json());

const Categories = () => {
    const categories = use(categoriesPromise); 
    const handleScrool = () => {
        window.scrollTo({top: 300, behavior: 'smooth'})
    }
    return (
        <div>
            <h3 className='text-lg font-semibold'>All Category ({categories.length})</h3>
            <div className='grid grid-cols-1 gap-4 my-4'>
                {
                    categories.map(category => <NavLink 
                        onClick={handleScrool}
                        key={category.id} 
                        to={`/category/${category.id}`}
                        className={'text-lg text-accent font-semibold hover:bg-base-300 btn bg-base-100 border-0'}
                        >{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;