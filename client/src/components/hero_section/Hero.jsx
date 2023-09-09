import React from 'react'

const Hero = ({ BigImage, subtitle, allnews }) => {


    return (
        <div className='mt-[100px] z-[-2] flex justify-between items-center flex-col lg:flex-row lg:items-start border-2 gap-10 lg:gap-3'  >



            <div className="big-side w-full lg:w-1/2 h-[20rem] bg-cover bg-center bg-no-repeat flex flex-col items-start " style={{ backgroundImage: `url(${BigImage.Img})` }}>
                <div className=' px-2 my-3 '>
                    <span className='px-2 bg-black text-white'>জাতীয়</span>
                </div>



                <div className=' w-[100%]  px-2 text-white  flex flex-col items-start justify-start group-hover:opacity-100 transition-opacity ease-in-out duration-300  bg-opacity-50 mb-3 m-auto'>

                    <h1 className='text-2xl  w-full hover:text-[#1f67ad] cursor-pointer text-start' >{BigImage.title}</h1>
                    <p className='text-sm hidden md:block text-start'>{subtitle}</p>
                </div>



            </div>



            <div className="list-side w-full lg:w-1/2 ml-4 mt-0">
                {
                    allnews.slice(1, 6).map(item => {
                        return <div key={item.id} className='flex items-center justify-between pb-4 border-b'>
                            <h1 className='hover:text-[#1f67ad] cursor-pointer text-base'>{item.title}</h1>
                            <img className='w-12 h-12 cursor-pointer' src={item.Img} alt="" />

                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Hero