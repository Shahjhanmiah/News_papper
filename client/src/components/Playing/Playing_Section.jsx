import React from 'react';
import { news } from '../hero_section/news';
import Allnews from '../AllNews/Allnews';

const Playing_Section = () => {


    const sports = news.filter(item => item.category === 'খেলাধুলা')

    // console.log(national)
    return (
        <div style={{ marginTop: '100px' }}>
<Allnews news={sports} />
        </div>
    );
};

export default Playing_Section;