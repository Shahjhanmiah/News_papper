import React from 'react'
import { news } from './news.js'


const Hero = () => {



    const BigImage = news[0]
    const headingSubtitle = BigImage.desc.substring(0, 100) + '[...]'


    return (
        <div className='relative top-[60px] z-[-2] mt-4 flex justify-between items-center flex-col lg:flex-row' >

            <div className="big-side w-full lg:w-1/2 overflow-hidden ">

                <img src={BigImage.Img} className='object-cover w-full ' alt='' />
                <div className='w-full  bg-black opacity-10 mb-2'></div>
                <h3 className='absolute top-2 left-2 px-2 bg-black  text-white '>{BigImage.category}</h3>

                <div className='w-[100%]  h-30 px-2 text-white  relative bottom-28  flex flex-col items-center justify-center group-hover:opacity-100 transition-opacity ease-in-out duration-300  bg-opacity-50 '>

                    <h1 className='text-2xl  w-full ' >{BigImage.title}</h1>
                    <p className='text-sm hidden md:block '>{headingSubtitle}</p>
                </div>

            </div>
            <div className="list-side w-full md:w-1/2 ml-4">
                {
                news.slice(1).map(item => {
                    return <div className='flex items-center justify-between py-4 border-b'>
                        <h1>{item.title}</h1>
                        <img className='w-12 h-12' src={item.Img} alt="" />
                        
                    </div>
                })
                }
            </div>
        </div>
    )
}

export default Hero