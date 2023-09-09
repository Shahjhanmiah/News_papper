import React from 'react';
import { news } from '../hero_section/news';
import Allnews from '../AllNews/Allnews';

const Viodeo_Section = () => {
    const video = news.filter(item => item.category === 'ভিডিও')
    
    // console.log(national)
    return (

            <div style={{ marginTop: '100px' }}>
             <Allnews news={video} />
            </div>
    
    );
};

export default Viodeo_Section;
