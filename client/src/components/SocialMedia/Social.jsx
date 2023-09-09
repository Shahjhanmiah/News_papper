import React from 'react'
import { social_news } from './socila.js';

const Social = () => {
     
    
    return (
    
        <>
        <div className=' w-full flex-auto border-b my-2 '>
             <div className=' flex heading justify-between '>
                <h1 className='font-bold hover:text-[#1f67ad] cursor-pointer text-base '>সোশ্যাল মিডিয়া</h1> 
                <h1 className='  font-bold  hover:text-[#1f67ad] cursor-pointer text-base'>আরও... </h1>
             </div> 

        </div>
        <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-start gap-3'>
            {social_news.slice(0,4).map(item => {            
                return <div > 
                <img src={item.Img} alt="news" className='w-full py-2 cursor-pointer' />
                 <h1 className='font-bold hover:text-[#1f67ad] cursor-pointer text-base'>{item.title}</h1>
                 <p   >{item.desc.slice(0,50)}</p>
                </div>
            })}
        </div>
    
        </>
    )
}

export default Social;                                                                                                             