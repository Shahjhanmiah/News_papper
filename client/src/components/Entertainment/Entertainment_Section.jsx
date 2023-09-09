import React from 'react';
import { news } from '../hero_section/news';
import AllCat from '../Categories/AllCat';
import Allnews from '../AllNews/Allnews';

const Entertainment_Section = () => {
    const entertainment = news.filter(item => item.category === 'বিনোদন' )
   

    return (
        <div style={{ marginTop: '100px'}}>
      <Allnews news={entertainment}/>
    </div>
    );
};

export default Entertainment_Section;