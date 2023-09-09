import React from 'react';
import { news } from '../hero_section/news';
import Allnews from '../AllNews/Allnews';

const AllCountry_Section = () => {
    const national = news.filter(item => item.category === 'সারাদেশ' )
    
    // console.log(national)
    return (
        <div style={{ marginTop: '100px'}}>
      <Allnews news={national} />
    </div>
    );
};

export default AllCountry_Section;