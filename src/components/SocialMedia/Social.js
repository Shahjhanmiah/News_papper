import React from 'react'
import { social_news } from './socila.js';

const Social = () => {
     
    
    return (
    
        <>
        <div className=' mt-5  w-full flex-auto  mt-5 p-2 border-b my-2'>
             <div className=' flex heading flex justify-between text-xl'>
                <h1 className='font-bold hover:text-[#1f67ad] cursor-pointer '>সোশ্যাল মিডিয়া</h1> 
                <h1 className='  font-bold  hover:text-[#1f67ad] cursor-pointer'>আরও... </h1>
             </div> 

        </div>
        <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {social_news.slice(0,4).map(item => {            
                return <div className='m-2 p-2 w-100 '> 
                <img src={item.Img} alt="news" className='w-full py-2 cursor-pointer' />
                 <h1 className='font-bold hover:text-[#1f67ad] cursor-pointer'>{item.title}</h1>
                 <p   >{item.desc.slice(0,50)}</p>
                </div>
            })}
        </div>
    
        </>
    )
}

export default Social;                                                                                                             