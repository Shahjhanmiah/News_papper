import React, { useContext } from 'react'
import Sidebar from '../sidebar/Sidebar'
import { MainContext } from '../../context/PostContext'

const Posts = ({account,posts}) => {
    
  


    const user = [
        {name: 'John', email: 'masum@gmail.com',photoURL:"http://www.gmail.com",role:"admin"},
        {name: 'John', email: 'masum@gmail.com',photoURL:"http://www.gmail.com",role:"admin"},
    ]

  return (
    <div className='mt-[100px] grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-4'>
         <div className='cols-start-1 cols-end-2  p-2 bg-slate-700'> 
            <Sidebar />
        </div>
        <div className='col-start-2 col-end-6  bg-slate-200'>
        <div className=' heading-div h-[80px] w-[100%] text-white bg-slate-700 pr-5  '>
                <h1 className=' sm:text-1xl md:text-2xl lg:text-5xl pl-3 '> All Posts </h1>
                <div className='admin-div'>
                    <h4> {account?.role}</h4>
                    {account?.photoURL ? <img className=' sm:w-[30px] sm:h-[30px] lg:w-[40px] lg:h-[40px] h-[30px] w-[30px]  rounded-full ' src={account.photoURL} alt="" /> : <span className='mx-2 text-white bg-blue-600 hover:bg-blue-800 p-4 rounded-full font-medium cursor-pointer'>{account?.name?.charAt(0)}</span>}
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
                        return(
                            <tr  className='h-16 ' key={post._id}>
                          
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
                                <button className="btn  btn-xs btn-primary text-white">Delete</button>
                                <button className="btn btn-accent btn-xs">Edit</button>
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