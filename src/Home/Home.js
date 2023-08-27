import React from 'react';
import Hero from '../components/hero_section/Hero';
import Allnews from '../components/AllNews/Allnews';
import BannerAd from '../components/Ads_sections/BannerAd';
import SingleCat from '../components/Categories/SingleCat';
import { news } from '../components/hero_section/news';
import AllCat from '../components/Categories/AllCat';

const Home = () => {
    
    const BigImage = news[0]
    const headingSubtitle = BigImage.desc.substring(0, 100) + '[...]'


    return (
        <div className='w-[80%] m-auto'>
            <Hero BigImage={BigImage} subtitle={headingSubtitle} allnews={news}/>
            <Allnews />
            <BannerAd />
            <AllCat />
        </div>
    );
};

export default Home;