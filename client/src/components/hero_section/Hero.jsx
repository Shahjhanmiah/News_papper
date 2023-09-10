import React from 'react'
import { Link } from 'react-router-dom'


const Hero = ({ BigImage, subtitle, allnews }) => {

    return (
        <div className='mt-[100px] flex justify-between items-center flex-col lg:flex-row lg:items-start border-2 gap-10 lg:gap-3'  >
            <div className="relative big-side w-full lg:w-1/2 h-[20rem] bg-cover bg-center bg-no-repeat flex flex-col items-start z-[10]" style={{ backgroundImage: `url(${BigImage?.content?.img})` }}>
                <div className='h-[20rem] bg-gradient-to-r from-slate-700 to-slate-500 w-full absolute z-[-10] opacity-50'>

                </div>
                <div className=' px-2 my-5 '>
                    <Link to={'/national'} className='px-4 py-2 rounded bg-black text-white cursor-pointer hover:text-[#1f67ad] hover:shadow-lg shadow-white'>{BigImage?.category}</Link>
                </div>



                <div className=' w-[100%]  px-2 text-white  flex flex-col items-start justify-start group-hover:opacity-100 transition-opacity ease-in-out duration-300  bg-opacity-50 mb-3 m-auto z-10'>

                    <h1 className='text-2xl  w-full hover:text-[#1f67ad] cursor-pointer text-start ' >{BigImage?.title}</h1>
                    <p className='text-sm hidden md:block text-start'>{subtitle}</p>
                </div>



            </div>



            <div className="list-side w-full lg:w-1/2 ml-4 mt-0">
                {
                    allnews.slice(1, 6).map(item => {
                        return <div key={item._id} className='flex items-center justify-between pb-4 border-b'>
                            <h1 className='hover:text-[#1f67ad] cursor-pointer text-base text-start'>{item.title}</h1>
                            <img className='w-12 h-12 cursor-pointer' src={item?.content?.img} alt="images" />

                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Hero