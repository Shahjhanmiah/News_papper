import React from 'react'
import { news } from '../hero_section/news'
import SingleCat from '../Categories/SingleCat';
import Allnews from '../AllNews/Allnews';

const International= () => {
  
    

    const international = news.filter(item => item.category === 'আন্তর্জাতিক' )
    const FirstinternationalNews = international[0];
    const FirstInternationalSubtitle = FirstinternationalNews.desc.substring(1,100)

   
  
  return (
    <div style={{ marginTop: '100px'}}>
        <Allnews  news={international}/>
    </div>
  )
}

export default International    