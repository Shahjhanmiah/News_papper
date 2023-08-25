import React from 'react'
import { news } from './news.js'


const Hero = () => {



    const BigImage = news[0]
    console.log(BigImage.Img)

    return (
        <div className='relative top-[60px] mt-4 flex justify-between items-center mx-24' >

            <div className="big-side">
                <img src={BigImage.Img} alt='' />
            </div>
            <div className="list-side">
                this is list side
            </div>
        </div>
    )
}

export default Hero