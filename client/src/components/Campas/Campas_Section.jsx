import React from 'react';
import { news } from '../hero_section/news';
import Allnews from '../AllNews/Allnews';

const Campas_Section = () => {
    const campus = news.filter(item => item.category === 'ক্যাম্পাস',)

    return (
        <div style={{ marginTop: '100px' }}>
<Allnews news={campus} />
        </div>
    );
};

export default Campas_Section;