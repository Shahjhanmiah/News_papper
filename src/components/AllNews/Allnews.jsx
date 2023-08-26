import React from 'react'
import { news } from '../hero_section/news.js'

const Allnews = () => {
    return (
        <div className='flex justify-center items-center w-full flex-wrap md:flex-nowrap'>
            {news.map(item => {
                return <div className='m-2 p-2 w-[30rem] h-[10rem]'> 
                    <img src={item.Img} alt="news" className='w-full' />
                    <h1>{item.title}</h1>
                </div>
            })}
        </div>
    )
}

export default Allnews