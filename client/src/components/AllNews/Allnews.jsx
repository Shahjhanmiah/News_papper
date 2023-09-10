import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../context/PostContext';
import { Link, useParams } from 'react-router-dom';
import { base_url } from '../../../base_url/Base_url';

const Allnews = () => {

    const [category , setCategory] = useState([])
    const {posts,setPosts}= useContext(MainContext)
    // const [posts,setPosts]= useState([])
    const params = useParams()

    useEffect(() => {
        getAllPosts();
    }, [params])

    const getAllPosts = async() => {

      await  axios.get(`${base_url}/getposts`).then(res => {
        setCategory(res.data.filter(post => post?.category === params.id))
      }).catch(err => console.log(err));

    }

  


    return (
        <div className=' w-[90%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-3  text-start mt-[100px]'>
            {category?.map(item => {
                return <div className='' key={item?._id}> 
                <Link to={`/post/${item._id}`}><img src={item?.content?.img} alt="news" className='w-full py-2 cursor-pointer sm:h-40' /></Link>
                 <Link to={`/post/${item._id}`}><h1 className='font-bold hover:text-[#1f67ad] cursor-pointer text-base'>{item.title}</h1></Link>
                </div>
            })}
        </div>
    )
}

export default Allnews