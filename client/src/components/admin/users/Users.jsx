import React, { useEffect, useState } from 'react'
import Sidebar from '../sidebar/Sidebar'
import User from './User'
import { useParams, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { base_url } from '../../../../base_url/Base_url'
import Swal from 'sweetalert2'

const Users = () => {
    const params = useParams()
    
    const {type} = params
    const [user , setUser] = useState([])

console.log(type)
    useEffect(() => {
      getAllUser();
    }, [type])

    
    useEffect(() => {
     
    }, [user])
    
    
console.log({user})

    const getAllUser = async() => {
        await axios.get(`${base_url}/getalluser/${type}`,{withCredentials:true}).then(res => {
            if(res.status===200){
                setUser(res.data)
            }else{
                setUser([])
            }
            Swal.fire(
                'AllUser!',
                ' Alluser  delate has a Successfullay .',
                'success'
            )
            
        }).catch(err => {
            console.log(err);
        })
    }

    const handleDelete = async(id) => {
        await axios.delete(`${base_url}/deleteuser/${id}`,{withCredentials:true}).then(res=> {
           setUser(res.data)
        }).catch(err => console.log(err) );
    }

  return (
    <div className='mt-[100px] grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-4 '>
        <div className='cols-start-1 cols-end-2  p-2 bg-slate-700'> 
            <Sidebar />
        </div>
        <User userType={params.type} user={user} handleDelete={handleDelete} />
    </div>
  )
}

export default Users