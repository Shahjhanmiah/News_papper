import React, { useContext, useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import { MainContext } from '../../context/PostContext'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { base_url } from '../../../../base_url/Base_url'
import Swal from 'sweetalert2'

const Posts = ({ account }) => {

const {posts , setPosts} = useContext(MainContext)

useEffect(()=> {
  
},[posts]);

    const handleDelete = async(id) => {
        await axios.delete(`${base_url}/deleteblog/${id}`,{withCredentials:true}).then(res=> {
           setPosts(res.data)
           Swal.fire(
            'Deleted!',
            'Your Post has been deleted.',
            'success'
        )
        }).catch(err => console.log(err) );
    }


    return (
        <div className='mt-[100px] grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-4'>
            <div className='cols-start-1 cols-end-2  p-2 bg-slate-700'>
                <Sidebar />
            </div>
            <div className='col-start-2 col-end-6  bg-slate-200'>
                <div className=' heading-div h-[80px] w-[100%] text-white bg-slate-700 pr-5  '>
                    <h1 className=' sm:text-1xl md:text-2xl lg:text-5xl pl-3 '> All Posts </h1>
                   
                    <div className='admin-div'>
                    <Link to={'/addnewpost'} className='bg-info px-4 py-2 rounded-sm btn'>Add New Post</Link>
                   
                    </div>
                </div>
                <div className="overflow-x-auto ">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Author</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className=' gap-5 '>
                            {/* row 1 */}
                            {posts?.map(post => {
                                return (
                                    <tr className='h-16 ' key={post._id}>

                                        <td>
                                            <div className="flex items-center  space-x-3">
                                                <div className=" w-12 h-12 flex items-center justify-center">
                                                    <img className='w-10 h-10 rounded-full' src={post?.content?.img} alt="" />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <h1>{post?.title}</h1>
                                        </td>
                                        <td>{post?.category}</td>
                                        <td>{post?.author}</td>
                                        <th className='flex flex-col gap-3 '>
                                            <button className="btn  btn-xs btn-primary text-white" onClick={()=>handleDelete(post._id)}>Delete</button>
                                            <Link to={`/edit/${post._id}`} className="btn btn-accent btn-xs">Edit</Link>
                                        </th>
                                    </tr>
                                )
                            })}

                        </tbody>

                    </table>

                </div>
            </div>
        </div>
    )
}

export default Posts