import React from 'react'

const Allnews = ({news}) => {
     
    return (
        <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 mt-5 text-start '>
            {news.slice(0,8).map(item => {
                return <div className=' w-100 '> 
                <img src={item.Img} alt="news" className='w-full py-2 cursor-pointer' />
                 <h1 className='font-bold hover:text-[#1f67ad] cursor-pointer text-base'>{item.title}</h1>
                </div>
            })}
        </div>
    )
}

export default Allnews