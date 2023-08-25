import React from 'react'


const Hero = () => {
    console.log('this is from hero')
    return (
        <div className='relative top-[60px] mt-4 flex justify-between items-center mx-24' >

            <div className="big-side">
                this is big side
            </div>
            <div className="list-side">
                this is list side
            </div>
        </div>
    )
}

export default Hero