import React from 'react';
import { news } from '../hero_section/news';
import SingleCat from '../Viodeo/Viodeo';

const Viodeo_Section = () => {
    const national = news.filter(item => item.category === 'জাতীয়')
    const FirstNationNews = national[0];
    const FirstNationalsubtitle = FirstNationNews.desc.substring(1, 100)

    const international = news.filter(item => item.category === 'আন্তর্জাতিক')
    const FirstinternationalNews = international[0];
    const FirstInternationalSubtitle = FirstinternationalNews.desc.substring(1, 100)

    const AllCountry = news.filter(item => item.category === 'সারাদেশ')
    const FirstAllCountryNews = AllCountry[0];
    const FirstAllCountrySubtitle = FirstAllCountryNews.desc.substring(1, 100)
    // console.log(national)
    return (
        <div>
            <div style={{ marginTop: '150px' }}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 border-t'>
                    <SingleCat BigImage={FirstNationNews} subtitle={FirstNationalsubtitle} allnews={national} />
                    <SingleCat allnews={international} BigImage={FirstinternationalNews} subtitle={FirstInternationalSubtitle} />
                    <SingleCat allnews={AllCountry} BigImage={FirstAllCountryNews} subtitle={FirstAllCountrySubtitle} />
                </div>
            </div>
        </div>
    );
};

export default Viodeo_Section;
