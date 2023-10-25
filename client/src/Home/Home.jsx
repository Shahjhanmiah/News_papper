
import Hero from '../components/hero_section/Hero';
import Allnews from '../components/AllNews/Allnews';
import AllCat from '../components/Categories/AllCat';
import { base_url } from '../../base_url/Base_url';
import { MainContext } from '../components/context/PostContext';
import BannerAd from '../components/Ads_sections/BannerAd'


// third party libraries
import axios from 'axios'
import Social from '../components/social/Social';
import National from '../components/national/National';
import { useContext, useEffect } from 'react';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';


const Home = ({posts}) => {

    

    
    const latestPost = posts[0]
    const headingSubtitle = <Markdown rehypePlugins={rehypeRaw}>{latestPost?.content?.desc?.substring(0, 100)}</Markdown>
   


    return (
        <div className=' m-auto flex-col flex gap-3'>
            <Hero BigImage={latestPost} subtitle={headingSubtitle} allnews={posts} />
            <BannerAd/>
            <AllCat news={posts}/>
            <Social news={posts}/>
            <Allnews  />



        </div>
    );
};

export default Home;       