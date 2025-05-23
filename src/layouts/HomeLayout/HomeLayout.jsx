import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import { Outlet, useLoaderData, useNavigation } from 'react-router';
import LatestNews from '../../Components/LatestNews';
import Navbar from '../../Components/Navbar';
import LeftAside from '../../Components/Homelayout/LeftAside';
import RightAside from '../../Components/Homelayout/RightAside';
import Loading from '../../pages/Loading';

const HomeLayout = () => {
    const data = useLoaderData(); 
    const [breakingNews , setBreakingNews] = useState([]); 

    const {state} = useNavigation(); 

    // Handle Side Effect 
    useEffect(() => {
        const filteredNewsData = data.filter(news => news.others.is_today_pick === true ); 
        setBreakingNews(filteredNewsData); 
    }, [data])
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
                <section>
                    <LatestNews breakingNews={breakingNews}></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main className='grid grid-cols-12 gap-4 my-10'>
                <aside className='col-span-3 sticky h-fit top-1'>
                    <LeftAside></LeftAside>
                </aside>
                <section className="main col-span-6">
                    {state === 'loading' ? (<Loading></Loading>) : <Outlet></Outlet>}
                </section>
                <aside className='col-span-3 sticky h-fit top-1'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayout;