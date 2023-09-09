import React from 'react';
import Hero from '../components/hero_section/Hero';
import Allnews from '../components/AllNews/Allnews';
import BannerAd from '../components/Ads_sections/BannerAd';
import { news } from '../components/hero_section/news';
import AllCat from '../components/Categories/AllCat';
import Social from '../components/SocialMedia/Social';
import National_Section from '../components/National/National_Section';


const Home = () => {
    
    const BigImage = news[0]
    const headingSubtitle = BigImage.desc.substring(0, 100) + '[...]'


    return (
        <div className='w-[90%] m-auto flex-col flex gap-3'>
            <Hero BigImage={BigImage} subtitle={headingSubtitle} allnews={news}/>
            
             <Allnews news={news}/>
             <BannerAd />
          <AllCat />
           <Social />
         <National_Section />
            
            
           

          </div>
    );
};

export  default Home;       