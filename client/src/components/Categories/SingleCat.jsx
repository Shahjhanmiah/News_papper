import React from 'react'
import { news } from '../hero_section/news'

const SingleCat = ({ BigImage, subtitle, allnews }) => {
    console.log({BigImage})
    return (
        <div className='flex flex-col text-start gap-2' >
            <div className="heading flex justify-between items-center font-bold">
                <h1 className='hover:text-[#1f67ad] cursor-pointer text-base'>{BigImage?.category}</h1>
                <h1 className='hover:text-[#1f67ad] cursor-pointer text-base'>আরও... </h1>
            </div>
            <div className="content ">
                <img src={BigImage?.Img} alt="" className='cursor-pointer ' />
                <h1 className='font-bold hover:text-[#1f67ad] cursor-pointer text-base'>{BigImage?.title}</h1>
                <p>{subtitle}</p>
            </div>
            <div className='related-news'>
                {allnews?.slice(1, 6).map(item => {
                    return <div>
                        <p className='py-2 border-b my-2'><span className='hover:text-[#1f67ad] cursor-pointer text-lg'>{item?.title}</span></p>
                    </div>
                })}
            </div>

        </div>
    )
}

export default SingleCat