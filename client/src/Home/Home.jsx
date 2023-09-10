import React, { useContext, useEffect, useState } from 'react';
import Hero from '../components/hero_section/Hero';
import Allnews from '../components/AllNews/Allnews';
import BannerAd from '../components/Ads_sections/BannerAd';
import AllCat from '../components/Categories/AllCat';
import { base_url } from '../../base_url/Base_url';
import { MainContext } from '../components/context/PostContext';

// third party libraries
import axios from 'axios'
import Social from '../components/social/Social';
import National from '../components/national/National';


const Home = () => {

    const {posts,setPosts}= useContext(MainContext)

    
    const latestPost = posts[0]
    const headingSubtitle = latestPost?.content?.desc?.substring(0, 100) + '[...]'

    useEffect(() => {
        getAllPosts();
    }, [])

    const getAllPosts = async() => {

      await  axios.get(`${base_url}/getposts`).then(res => {
       setPosts(res.data) 
      }).catch(err => console.log(err));

    }

    return (
        <div className='w-[90%] m-auto flex-col flex gap-3'>
            <Hero BigImage={latestPost} subtitle={headingSubtitle} allnews={posts} />

            <Allnews  />
            <BannerAd />
            <AllCat news={posts}/>
            <Social news={posts}/>
            <National news={posts} />




        </div>
    );
};

export default Home;       