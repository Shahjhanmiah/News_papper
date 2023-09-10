import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/PostContext';
import { useParams } from 'react-router-dom';

const Allnews = ({news}) => {

    const [category , setCategory] = useState([])
    const {posts}= useContext(MainContext)
    const params = useParams()

    useEffect(()=> {
        FindCat();
    },[params])
  
const FindCat = () => {
   setCategory(posts.filter(post => post.category === params.id))
}



    return (
        <div className=' w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3 mt-5 text-start '>
            {category?.map(item => {
                return <div className=' w-100 ' key={item?._id}> 
                <img src={item?.content?.img} alt="news" className='w-full py-2 cursor-pointer sm:h-40' />
                 <h1 className='font-bold hover:text-[#1f67ad] cursor-pointer text-base'>{item.title}</h1>
                </div>
            })}
        </div>
    )
}

export default Allnews