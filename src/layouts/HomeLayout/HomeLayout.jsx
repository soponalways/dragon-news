import React from 'react';
import Header from '../../Components/Header';
import { Outlet } from 'react-router';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
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