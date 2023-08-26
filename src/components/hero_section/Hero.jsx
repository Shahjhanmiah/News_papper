import React from 'react'
import { news } from './news.js'


const Hero = () => {



    const BigImage = news[0]
    console.log(BigImage.Img)


    const headingSubtitle = BigImage.desc.substring(0,150) + '...'

console.log(headingSubtitle)

    return (
        <div className='relative top-[60px] z-[-2] mt-4 flex justify-between items-center' >

            <div className="big-side w-full md:w-1/2 overflow-hidden  ">
                
                <img src={BigImage.Img} className='w-full ' alt='' />
                <div className=' w-full h-full bg-black opacity-5 '></div>

                <div className='w-[90%] px-2 text-white '>
                <h3 className='absolute top-2 left-2 px-2 bg-black   '>{BigImage.category}</h3>
                <h1 className=' mt:[-2rem] md:mt-[-8rem] md:text-2xl  w-full ' >{BigImage.title}</h1>
                <p className='text-sm hidden md:block '>{headingSubtitle}</p>
                </div>
                
            </div>
            <div className="list-side">
                this is list side
            </div>
        </div>
    )
}

export default Hero