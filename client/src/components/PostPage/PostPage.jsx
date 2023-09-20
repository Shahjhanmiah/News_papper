import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from '../../../base_url/Base_url';

const PostPage = () => {

  const [singlePost, setSinglePost] = useState();
  const [posts, setPosts] = useState();

  const params = useParams();


  useEffect(() => {
    findPost();
    getAllPosts();
  }, [])


  const findPost = async () => {
    await axios.get(`${base_url}/post/${params.id}`).then(res => setSinglePost(res.data[0])).catch(err => console.log(err));
  }

  const getAllPosts = async () => {

    await axios.get(`${base_url}/getposts`).then(res => {
      setPosts(res.data)
    }).catch(err => console.log(err));

  }

  const relatedPost = posts?.filter(post => post?.category === singlePost?.category && post._id !== singlePost._id);
  console.log({ relatedPost })

  return (
    <div className='mt-[100px] w-[90%] m-auto  grid grid-cols-1 lg:grid-cols-3 py-3'>
      <div className='col-span-2 '>
        <h1 className='text-3xl font-bold m-4'>{singlePost?.title}</h1>
        <div className='flex justify-start items-center gap-2 text-start m-4'>
          <p className='font-thin'>{singlePost?.category}</p>
          <p className='font-medium'><span className='font-thin'>CreatedAt:</span> {singlePost?.createdAt}</p>
          <p className='font-medium'><span className='font-thin'>UpdatedAt:</span> {singlePost?.updatedAt}</p>
        </div>
        <hr />
        <div className='flex flex-col items-center justify-start gap-3 my-5 px-5'>
          <img src={singlePost?.content?.img} alt="PostImg" />
          <p>
            {singlePost?.content?.desc}
          </p>
        </div>
        <h3 className='bold font-bold text-2xl mx-3'>সম্পর্কিত আরও পড়ুন</h3>
        <div className=' grid lg:grid-cols-3 gap-3 m-3'>
          {relatedPost?.slice(0,3).map(item =>
            <div className='flex flex-col items-center justify-start gap-3 my-3'>
            <img src={item?.content?.img} alt="" />
            <h1 className='font-medium text-lg'>{item?.title}</h1>
          </div>
          )}

          
        </div>

      </div>
      <div>
        <h1 className='text-2xl font-medium m-3'>সর্বশেষ</h1>
        <div className='flex flex-col items-center justify-start'>
         

          {posts?.slice(0, 3).map(item =>
            <div className='flex flex-col items-center justify-start gap-3 my-3 px-3'>
              <img src={item?.content?.img} alt="" className='w-full h-56' />
              <h1 className='font-medium text-lg'>{item?.title}</h1>
            </div>
          )}




        </div>
      </div>
    </div>
  )
}

export default PostPage