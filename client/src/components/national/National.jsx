import React, { useContext, useEffect } from 'react';
import { MainContext } from '../context/PostContext';

const National = () => {
    const {posts} = useContext(MainContext)
    
    useEffect(() => {
        console.log({posts})
},)



    const national = posts.filter(item => item?.category === 'national' )
    // const nationalPosts = posts.filter(post => post?.category === 'national');
    
    return (
    
        <>
        <div className=' w-full flex-auto border-b my-2 '>
             <div className=' flex heading justify-between '>
                <h1 className='font-bold hover:text-[#1f67ad] cursor-pointer text-base '>{national[0]?.category}</h1> 
                <h1 className='  font-bold  hover:text-[#1f67ad] cursor-pointer text-base'>আরও... </h1>
             </div> 

        </div>
        <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-start gap-3'>
            {national?.slice(0,4).map(item => {            
                return <div key={item?._id}> 
                <img src={item?.content?.img} alt="news" className='w-full py-2 cursor-pointer' />
                 <h1 className='font-bold hover:text-[#1f67ad] cursor-pointer text-base'>{item?.title}</h1>
                 <p   >{item?.content?.desc?.slice(0,50)}</p>
                </div>
            })}
        </div>
    
        </>
    )
};

export default National;