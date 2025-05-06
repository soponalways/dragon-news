import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header';
import RightAside from '../../Components/Homelayout/RightAside';
import { useLoaderData, useParams } from 'react-router';
import NewsDetailsCard from '../../Components/NewsDetailsCard';

const NewsLayout = () => {
    const [news, setNews] = useState({});

    const data = useLoaderData();
    const { id } = useParams();

    // handle side effect 
    useEffect(() => {
        const singleNews = data.find(news => {
            return news.id === id;
        });
        setNews(singleNews);
    }, [data, id]);
    console.log(news)

    if (!news) {
        return (
            <>
                <header className='w-11/12 mx-auto my-4'>
                    <Header></Header>
                </header>
                <main className='w-11/12 mx-auto my-10 gap-10 grid grid-cols-12'>
                    <aside className='col-span-9 space-y-3 bg-accent/50 p-10 rounded-2xl'>
                        <h2 className='font-semibold text-lg '>Dragon News</h2>
                        <section className='h-full'>
                            <h2 className='text-5xl text-center my-10 md:my-20 font-bold sticky top-10 '>404 News Not Found</h2>
                        </section>
                    </aside>
                    <aside className='col-span-3'>
                        <RightAside />
                    </aside>
                </main>
            </>
        )
    } else {
    return (
        <div>
            <header className='w-11/12 mx-auto my-4'>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto my-10 gap-10 grid grid-cols-12'>
                <aside className='col-span-9 space-y-3 h-fit'>
                    <h2 className='font-semibold text-lg'>Dragon News</h2>
                    <section>
                        <NewsDetailsCard news={news} />
                    </section>
                </aside>
                <aside className='col-span-3'>
                    <RightAside />
                </aside>
            </main>
        </div>
    );
}
};

export default NewsLayout;