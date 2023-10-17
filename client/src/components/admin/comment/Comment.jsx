import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../context/PostContext'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { base_url } from '../../../../base_url/Base_url'
import { FaUser } from 'react-icons/fa6'
import Swal from 'sweetalert2'


const Comment = ({ CommentType, comments, handleApprove, handleDelete }) => {
    const [comment, setComment] = useState()
    useEffect(() => {

    }, [comment])

console.log(comments)
    return (
        <div className='col-start-2 col-end-6  bg-slate-200'>
            <div className=' heading-div h-[80px] w-[100%] text-white bg-slate-700 pr-5  '>
                <h1 className=' sm:text-1xl md:text-2xl lg:text-5xl pl-3 '> All {CommentType} Comments </h1>

            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Post Image</th>
                            <th>Post ID</th>
                            <th>User Name</th>
                            <th colSpan={3}>Comment</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody >
                        {/* row 1 */}
                        {comments?.map(comment => {
                            return (
                                <tr className='h-16 ' key={comment._id}>
                                    <td>
                                        <div className='w-12 h-12 flex items-center justify-center '>
                                            <img src={comment.PostImg} alt="" className='w-full h-full rounded-full border-2 border-blue-600' />
                                        </div>
                                    </td>

                                    <td>
                                        <span>{comment.postId}</span>
                                    </td>
                                    <td>
                                        <span>{comment.Username}</span>
                                    </td>

                                    <td colSpan={3} >
                                        <span>{comment.text}</span>
                                    </td>



                                    <td className='flex flex-col justify-center items-center gap-3 '>
                                        {comment.isApproved == 'unapproved' && <button onClick={() => handleApprove(comment._id)} className="btn btn-accent btn-sm">Approve</button>}
                                        <button className="btn  btn-sm btn-primary text-white" onClick={() => handleDelete(comment._id)}>Delete</button>

                                    </td>
                                </tr>
                            )
                        })}

                    </tbody>

                </table>

            </div>

        </div>
    )
}

export default Comment