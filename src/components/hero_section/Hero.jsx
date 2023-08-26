import React from 'react'
import { news } from './news.js'


const Hero = () => {

    const BigImage = news[0]
    const headingSubtitle = BigImage.desc.substring(0, 100) + '[...]'


    return (
        <div className='mt-[100px] z-[-2] flex justify-between items-center flex-col lg:flex-row' >

            <div className="big-side w-full lg:w-1/2 overflow-hidden ">
                <div className='relative top-10 px-2 '>
                    <span className='px-2 bg-black text-white'>জাতীয়</span>
                </div>

                <img src={BigImage.Img} className='object-cover w-full ' alt='' />

                <div className='bg-black w-[100%]  h-30 px-2 text-white  relative bottom-28  flex flex-col items-center justify-center group-hover:opacity-100 transition-opacity ease-in-out duration-300  bg-opacity-50 '>

                    <h1 className='text-2xl  w-full hover:text-[#1f67ad] cursor-pointer' >{BigImage.title}</h1>
                    <p className='text-sm hidden md:block '>{headingSubtitle}</p>
                </div>



            </div>

            <div className="list-side w-full lg:w-1/2 ml-4 mt-0">
                {
                    news.slice(1,6).map(item => {
                        return <div className='flex items-center justify-between pb-4 border-b'>
                            <h1 className='hover:text-[#1f67ad] cursor-pointer'>{item.title}</h1>
                            <img className='w-12 h-12' src={item.Img} alt="" />

                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Hero