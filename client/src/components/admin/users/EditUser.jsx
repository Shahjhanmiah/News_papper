import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { base_url } from '../../../../base_url/Base_url';
import Swal from 'sweetalert2'

const EditUser = () => {

    const [name , setName] = useState();
    const [email , setEmail] = useState();
    const [role , setRole] = useState();
    const [gogleId , setgogleId] = useState();
    const roles = [
        'admin',
        'moderator',
        'user'
    ]
    const navigate  = useNavigate();


    let {id } = useParams();
    console.log(id)

    useEffect(() => {
        findUser();
    }, [])


    const handleSubmit =async (e) => {
        e.preventDefault();
       
        const data  = {
            name ,
            role
        }
        await axios.post(`${base_url}/updateuser/${id}`, data, { withCredentials: true }).then(res => {
            console.log(res)
            if (res.status === 200) {
                setName(''),
                    setRole(''),
                    setEmail(''),
                    setgogleId(''),
                     id = res.data.role

                    navigate(`/users/${id}`)
                    Swal.fire(
                        'AddUserEdite!',
                        'Your AddUser Edite has a SuccessFullay.',
                        'success'
                    )
            }

        }).catch(err => {
            console.log(err);
        })




    }
    


    const findUser = async () => {
        await axios.get(`${base_url}/user/${id}`).then(res => {
            const data = res.data[0]
            console.log(data)
            setName(data.name);
            setRole(data.role);
            setEmail(data.email);
            setgogleId(data.gogleId)
        }).catch(err => console.log(err));
    }

  return (
    <div className='mt-[100px] '>
            <div className='card card-compact bg-base-100 shadow-xl w-[60%] mx-auto'>
                <h1 className='w-full bg-blue-600 text-white rounded py-3 mx-auto text-center font-bold'>Add New Post</h1>
                <div className='mx-auto lg:w-full'>
                    <form className="card-body" onSubmit={(e)=>handleSubmit(e)} >
                        <div className="form-control">
                            <label htmlFor='name' className="label" >
                                <span className="label-text font-medium text-lg">Name</span>
                            </label>
                            <input id='name' type="text" name='name' value={name} placeholder="Name" className="input input-bordered  focus:outline-blue-600"  onChange={(e)=>setName(e.target.value)}/>

                        </div>
                        {email && <div className="form-control">
                            <label htmlFor='email' className="label" >
                                <span className="label-text font-medium text-lg">Email</span>
                            </label>
                            <input id='email' type="email" name='email' value={email} readOnly placeholder="email" className="input input-bordered  focus:outline-blue-600"  />

                        </div>}

                        {gogleId && <div className="form-control">
                            <label htmlFor='gogleid' className="label" >
                                <span className="label-text font-medium text-lg">Gogle ID</span>
                            </label>
                            <input id='gogleid' type="text" name='gogleid' value={gogleId} readOnly placeholder="gogleid" className="input input-bordered  focus:outline-blue-600"  />

                        </div>}

                        <div className="form-control">
                            <label htmlFor='category' className="label">
                                <span className="label-text font-medium text-lg">Role</span>
                            </label>
                            <select id='category' name='category' className="focus:outline-blue-600 select select-bordered w-full" value={role} onChange={(e) => setRole(e.target.value)}>
                                <option disabled selected>Select The Category?</option>

                                {roles.map(item => <option>{item}</option>)}
                            </select>

                        </div>
                        



                        <div className="form-control mt-6">
                            <input className="btn bg-blue-600 text-white hover:bg-blue-800 duration-300" type="submit" value="Add Post" />
                        </div>
                    </form>

                </div>
            </div>
        </div>
  )
}

export default EditUser