import React from 'react';
import { news } from '../hero_section/news';
import Allnews from '../AllNews/Allnews';

const National_Section = () => {
    const national = news.filter(item => item.category === 'জাতীয়')
    const FirstNationNews = national[0];
    const FirstNationalsubtitle = FirstNationNews.desc.substring(1, 100)

    
    return (


       <div style={{marginTop:'100px'}}>
       <Allnews news={national} />
       </div>
    );
};

export default National_Section;