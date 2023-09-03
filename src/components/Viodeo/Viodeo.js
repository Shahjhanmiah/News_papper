import React from 'react';

const Viodeo = ({ BigImage, subtitle, allnews }) => {
    return (
        <div className='flex flex-col mx-2  ' >
        <div className=" mt-5 heading flex justify-between items-center font-bold text-xl">
            {/* <h1 className='hover:text-[#1f67ad] cursor-pointer'>{BigImage?.category}</h1>
            <h1 className='hover:text-[#1f67ad] cursor-pointer'>আরও...>> </h1> */}
        </div>
       {
           allnews.slice(2.10).map(item=>{
                return(
                    <div className="content ">
                    <img style={{paddingBottom:'10px'}} src={BigImage?.Img} alt="" className='cursor-pointer ' />
                    <h1 className='font-bold hover:text-[#1f67ad] cursor-pointer'>{BigImage?.title}</h1>
                  <p style={{marginTop:'10px'}} className='hover:text-[#1f67ad] cursor-pointer mb-5'><a href="">ভিডিও</a> </p>  
                </div>
                )
           })  
       }           
    </div> 
    );
};

export default Viodeo;