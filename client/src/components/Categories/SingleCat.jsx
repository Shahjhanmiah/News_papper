import React from 'react'
import { Link } from 'react-router-dom'

const SingleCat = ({ BigImage, subtitle, allnews }) => {
    
    return (
        <div className='flex flex-col text-start gap-2' >
            <div className="heading flex justify-between items-center font-bold">
                <Link to={`/category/${BigImage?.category}`}><h1 className='hover:text-[#1f67ad] cursor-pointer text-base'>{BigImage?.category}</h1></Link>
                <h1 className='hover:text-[#1f67ad] cursor-pointer text-base'>আরও... </h1>
            </div>
            <div className="content ">
                <Link to={`/post/${BigImage?._id}`}><img src={BigImage?.content?.img} alt="" className='cursor-pointer md:h-40 w-full' /></Link>
              <Link to={`/post/${BigImage?._id}`}>  <h1 className='font-bold hover:text-[#1f67ad] cursor-pointer text-base'>{BigImage?.title}</h1></Link>
                <p>{subtitle}</p>
            </div>
            <div className='related-news'>
                {allnews?.slice(1, 6).map(item => {
                    return <div key={item?._id}>
                        <Link to={`/post/${item?._id}`}><p className='py-2 border-b my-2'><span className='hover:text-[#1f67ad] cursor-pointer text-lg'>{item?.title}</span></p></Link>
                    </div>
                })}
            </div>

        </div>
    )
}

export default SingleCat