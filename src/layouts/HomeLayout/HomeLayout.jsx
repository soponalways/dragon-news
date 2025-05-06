import React from 'react';
import Header from '../../Components/Header';
import { Outlet, useNavigation } from 'react-router';
import LatestNews from '../../Components/LatestNews';
import Navbar from '../../Components/Navbar';
import LeftAside from '../../Components/Homelayout/LeftAside';
import RightAside from '../../Components/Homelayout/RightAside';
import Loading from '../../pages/Loading';

const HomeLayout = () => {
    const {state} = useNavigation(); 
    return (
        <div className='w-11/12 mx-auto'>
            <header>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
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