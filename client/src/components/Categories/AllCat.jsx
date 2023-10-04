import React,{useContext} from 'react'
import SingleCat from './SingleCat'
import { MainContext } from '../context/PostContext';

const AllCat = ({news}) => {

const {posts} = useContext(MainContext)
  
    const national = posts.filter(item => item.category === 'national' )
    const FirstNationNews = national[0];
    const FirstNationalsubtitle = FirstNationNews?.content?.desc.substring(0,100)

    const international = posts.filter(item => item.category === 'international' )
    const FirstinternationalNews = international[0];
    const FirstInternationalSubtitle = FirstinternationalNews?.content?.desc.substring(0,100)

    const AllCountry = posts.filter(item => item.category === 'entertainment' )
    const FirstAllCountryNews = AllCountry[0];
    const FirstAllCountrySubtitle = FirstAllCountryNews?.content?.desc.substring(0,100)
    // console.log(national)
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
        <SingleCat BigImage={FirstNationNews} subtitle={FirstNationalsubtitle} allnews={national} />
        <SingleCat allnews={international} BigImage={FirstinternationalNews} subtitle={FirstInternationalSubtitle}/>
        <SingleCat allnews={AllCountry} BigImage={FirstAllCountryNews} subtitle={FirstAllCountrySubtitle}/>

    </div>
  )
}

export default AllCat