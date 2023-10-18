import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'

import axios from 'axios'
import { base_url } from '../../../../base_url/Base_url'
import Comment from './Comment'
import { useParams } from 'react-router-dom'
import Swal from 'sweetalert2'

const Comments = () => {
    const [comments , setComments] = useState([])
    const [comment , setComment] = useState()
 
const params = useParams();

useEffect(() => {
    getComments();
},[params ,comment])


const getComments = async() => {
    console.log('it running')
    await axios.get(`${base_url}/comments/${params.type}`,{withCredentials: true}).then(res => {
        setComments(res.data);
    }).catch(err => {
        console.log(err);
    })
}

const handleApprove = async (id) => {
    await axios.get(`${base_url}/approve/comment/${id}`, { withCredentials: true }).then(res => {
        console.log(res.status);
        if (res.status === 200) {
            getComments();
            Swal.fire({
                title: 'Success!',
                text: 'Comment Successfully Approved!',
                icon: 'success',
                confirmButtonText: 'Confirm'
            })
        }
    }).catch(err => {
        Swal.fire({
            icon: 'error',
            title: err.message,
            text: 'Something went wrong!',
          })
    })
}

const handleDelete = async(id) => {
    console.log(id)
    await axios.delete(`${base_url}/delete/comment/${id}`,{withCredentials:true}).then(res=> {
        if (res.status === 200) {
            setComments(res.data)
            Swal.fire({
                title: 'Success!',
                text: 'Comment Successfully deleted!',
                icon: 'success',
                confirmButtonText: 'Confirm'
            })
        }
     }).catch(err => console.log(err) );
}


  return (
    <div className='mt-[100px] grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-4 '>
        <div className='cols-start-1 cols-end-2  p-2 bg-slate-700'> 
            <Sidebar />
        </div>
        <Comment CommentType={params.type} comments={comments} handleApprove={handleApprove} handleDelete={handleDelete}/>
       
    </div>
  )
}

export default Comments