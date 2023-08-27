import React from 'react';
import Hero from '../components/hero_section/Hero';
import Allnews from '../components/AllNews/Allnews';

const Home = () => {
    return (
        <div className='w-[80%] m-auto'>
            <Hero />
            <Allnews />
        </div>
    );
};

export default Home;