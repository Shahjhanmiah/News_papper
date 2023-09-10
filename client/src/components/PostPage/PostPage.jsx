import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { base_url } from '../../../base_url/Base_url';

const PostPage = () => {

  const [post , setPost] = useState();

  const params = useParams();


  useEffect(() => {
    findPost();
  }, [])


  const findPost = async () => {
    await axios.get(`${base_url}/post/${params.id}`).then(res => setPost(res.data[0])).catch(err => console.log(err));
  }

  console.log(post)

  return (
    <div className='mt-[100px] w-[90%] m-auto  grid grid-cols-1 lg:grid-cols-3 py-3'>
      <div className='col-span-2 '>
        <h1 className='text-3xl font-bold m-4'>{post?.title}</h1>
        <div className='flex justify-start items-center gap-2 text-start m-4'>
          <p className='font-thin'>{post?.category}</p>
          <p className='font-medium'><span className='font-thin'>CreatedAt:</span> {post?.createdAt}</p>
          <p className='font-medium'><span className='font-thin'>UpdatedAt:</span> {post?.updatedAt}</p>
        </div>
        <hr />
        <div className='flex flex-col items-center justify-start gap-3 my-5 px-5'>
          <img src={post?.content?.img} alt="PostImg" />
          <p>
            {post?.content?.desc}
          </p>
        </div>
        <h3 className='bold font-bold text-2xl mx-3'>সম্পর্কিত আরও পড়ুন</h3>
        <div className=' grid lg:grid-cols-3 gap-3 m-3'>
          <div className='flex flex-col items-center justify-start gap-3 my-3'>
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" alt="" />
            <h1 className='font-medium text-lg'>This is very long title ... because we need to test how place it takes</h1>
          </div>

          <div className='flex flex-col items-center justify-start gap-3 my-3'>
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" alt="" />
            <h1 className='font-medium text-lg'>This is very long title ... because we need to test how place it takes</h1>
          </div>

          <div className='flex flex-col items-center justify-start gap-3 my-3'>
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" alt="" />
            <h1 className='font-medium text-lg'>This is very long title ... because we need to test how place it takes</h1>
          </div>

        </div>

      </div>
      <div>
        <h1 className='text-2xl font-medium m-3'>সর্বশেষ</h1>
        <div className='flex flex-col items-center justify-start'>
          <div className='flex flex-col items-center justify-start gap-3 my-3 px-3'>
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" alt="" className='w-full h-56' />
            <h1 className='font-medium text-lg'>This is very long title ... because we need to test how place it takes</h1>
          </div>
          <div className='flex flex-col items-center justify-start gap-3 my-3 px-3'>
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" alt="" className='w-full h-56' />
            <h1 className='font-medium text-lg'>This is very long title ... because we need to test how place it takes</h1>
          </div>
          <div className='flex flex-col items-center justify-start gap-3 my-3 px-3'>
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" alt="" className='w-full h-56' />
            <h1 className='font-medium text-lg'>This is very long title ... because we need to test how place it takes</h1>
          </div>
          <div className='flex flex-col items-center justify-start gap-3 my-3 px-3 '>
            <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80" alt="" className='w-full h-56' />
            <h1 className='font-medium text-lg'>This is very long title ... because we need to test how place it takes</h1>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PostPage