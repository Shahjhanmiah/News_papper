import React from 'react'
import { news } from '../hero_section/news.js'

const Allnews = () => {
     
    return (
        <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  '>
            {news.slice(0,8).map(item => {
                return <div className='m-2 p-2 w-100 '> 
                <img src={item.Img} alt="news" className='w-full py-2 cursor-pointer' />
                 <h1 className='font-bold hover:text-[#1f67ad] cursor-pointer'>{item.title}</h1>
                </div>
            })}
        </div>
    )
}

export default Allnews