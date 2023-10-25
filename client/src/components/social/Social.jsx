import React, { useContext } from 'react'
import { MainContext } from '../context/PostContext';
import { Link } from 'react-router-dom';

const Social = () => {
     const {posts} = useContext(MainContext)

     const social = posts.filter(item => item?.category === 'Politics' )
    
    return (
    
        <>
        <div className=' w-full flex-auto border-b my-2 '>
             <div className=' flex heading justify-between '>
                <Link ><h1 className='font-bold hover:text-[#1f67ad] cursor-pointer text-base '>{social[0]?.category}</h1> </Link>
                <h1 className='  font-bold  hover:text-[#1f67ad] cursor-pointer text-base'>আরও... </h1>
             </div> 

        </div>
        <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-start gap-3'>
            {social?.slice(0,4).map(item => {            
                return <div key={item?._id}> 
                <img src={item?.content?.img} alt="news" className='w-full py-2 cursor-pointer' />
                 <h1 className='font-bold hover:text-[#1f67ad] cursor-pointer text-base'>{item?.title}</h1>
                 <p   >{item?.content?.desc.slice(0,50)}</p>
                </div>
            })}
        </div>
    
        </>
    )
}

export default Social;                                                                                                             