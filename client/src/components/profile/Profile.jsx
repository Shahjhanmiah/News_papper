import React, { useContext, useEffect, useRef, useState } from 'react'
import { MainContext } from '../context/PostContext';
import axios from 'axios';
import { base_url } from '../../../base_url/Base_url';
import Swal from 'sweetalert2';

const Profile = () => {
  const imgref = useRef(null);
  const inputRef = useRef(null);
  const [showDrag, setShowDrag] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)

  const [imgUrl, setImgUrl] = useState('')
  const [updateImg, setUpdateImg] = useState('')
  const [id , setID] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [gogleID, setGogleID] = useState('')

  useEffect(() => {
    findUser();
  }, [])


  console.log({ name })

  const handleNameChange = (e) => {
    setName(e.target.value)
    setIsUpdate(true)
  };


  const handleformSubmit = async(e) => {
    e.preventDefault();
    console.log('clicked')
    const updateUser = {
      id,
      name,
      photoURL: updateImg ? updateImg : imgUrl
    }
    console.log(updateUser)
    await axios.post(`${base_url}/update-user`, updateUser, {withCredentials:true}).then(res => {
      Swal.fire({
        title: 'Success!',
        text: 'Profile Updated Successfully!',
        icon: 'success',
        confirmButtonText: 'Confirm'
      })
    }).catch(err => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      })
    });
  }

  const handleImgChange = async (e) => {
    console.log(e.target.files[0])
    const formData = new FormData();
    formData.append('image', e.target.files[0]);

    const Api = "https://api.imgbb.com/1/upload?expiration=63072000&key=7dfd97eb382b65ec8ec1a88ce98dfab1";
    await axios.post(Api, formData).then((res) => {
      console.log(res)
      const url = res.data.data.url;
      console.log({ url })
      setUpdateImg(url);
      setIsUpdate(true)


    })
      .catch((err) => {
        console.log(err);
      });


  }







  const findUser = () => {
    axios.get(`${base_url}/getuser`, { withCredentials: true }).then(res => {
      console.log(res.data);
      setID(res.data._id)
      setName(res.data.name);
      setImgUrl(res.data.photoURL)
      if (res.data.email) {
        setEmail(res.data.email);
      }
      setGogleID(res.data.gogleId)
    }).catch(err => {
      console.log(err.message);
    })
  }

  return (
    <div className='mt-[100px] w-[100%] m-auto '>
      <div className='flex flex-col items-center  mx-auto  bg-base-100 shadow-2xl w-full lg:w-[80%]  '>
        <h1 className='text-3xl font-semibold text-center my-3  '>Profile Info</h1>
          <div className=' flex items-start  lg:justify-between gap-12 rounded-lg px-4 w-full '>
            <form className=' flex  justify-center items-center flex-col w-full  ' onSubmit={handleformSubmit}>
              <div className='flex gap-5 w-full flex-col md:flex-row justify-center p-4' >


                <div >
                  <div className='md:w-96 md:h-96 relative overflow-hidden' onMouseEnter={() => setShowDrag(true)} onMouseLeave={() => setShowDrag(false)}>


                    <label for="dropzone-file">
                      <div className="flex flex-col items-center justify-center transition-all duration-300 "  >

                        {showDrag && <div className='m-auto absolute w-full h-full top-0 left-0 bottom-0 right-0 hover:bg-gray-900 opacity-30 flex flex-col items-center justify-center  cursor-pointer dark:hover:bg-gray-800  drop-shadow-2xl dark:border-gray-600 dark:hover:border-gray-500 '>
                         {showDrag && <div>
                         <svg className=" mb-4  text-white dark:text-white text-center" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                          </svg>
                          <p className="mb-2 text-sm text-white dark:text-white text-center"><span className="font-semibold">Click to upload</span></p>
                          <p className="text-xs text-white dark:white text-center ">SVG, PNG, JPG</p>
                          <span className='inline-block text-white text-xs text-center'>(MAX. 224 x 224px)</span>
                         </div>}
                        </div>}
                        <img src={updateImg ? updateImg : imgUrl} ref={imgref} className='w-full h-full object-cover ' alt="Album" />
                      </div>
                      <input id="dropzone-file" ref={inputRef} type="file" className="hidden" onChange={handleImgChange} />
                    </label>


                  </div>

                </div>



                <div className=' md:w-1/2 px-4'>


                  <div className="form-control">
                    <label htmlFor='name' className="label" >
                      <span className="label-text font-medium text-lg">Name</span>
                    </label>
                    <input id='name' type="text" name='name' className="input input-bordered  focus:outline-blue-600" value={name} onChange={(e) => handleNameChange(e)} />

                  </div>

                  {email && <div className='flex flex-col gap-3'>
                    <label className='font-medium text-lg' htmlFor="name">Email</label>
                    <input type="text" disabled={true} value={email} readOnly={false} placeholder="Type here" className="input input-bordered  " />
                    <input type="text" />
                  </div>}

                  {gogleID && <div className='flex flex-col gap-3  items-start'>
                    <label className='font-medium text-lg' htmlFor="name">GogleID</label>
                    <input type="text" disabled={true} value={gogleID} readOnly={true} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    <input type="text" />
                  </div>}

                </div>

              </div>

             {isUpdate &&  <div className="card-actions justify-start my-4">
                  <button className="btn bg-blue-600 text-white hover:bg-blue-900">Update</button>
                </div>}
            </form>
          </div>
      </div>
    </div>
  )
}

export default Profile