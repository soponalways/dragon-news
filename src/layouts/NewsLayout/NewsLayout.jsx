import React from 'react';
import Header from '../../Components/Header';

const NewsLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main>
                <section className="left">Content</section>
                <section className="right">Right Nav</section>
            </main>
        </div>
    );
};

export default NewsLayout;