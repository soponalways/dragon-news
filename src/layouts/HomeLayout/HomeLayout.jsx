import React from 'react';
import Header from '../../Components/Header';
import { Outlet } from 'react-router';
import LatestNews from '../../Components/LatestNews';
import Navbar from '../../Components/Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header className='w-11/12 mx-auto'>
                <Header></Header>
                <section>
                    <LatestNews></LatestNews>
                </section>
                <nav>
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <section className="left">Left Container</section>
                <section className="main"><Outlet></Outlet></section>
                <section className="right">Right Container</section>
            </main>
        </div>
    );
};

export default HomeLayout;