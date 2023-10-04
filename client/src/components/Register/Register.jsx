import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import logo from '../../assets/Mobile-login.jpg'
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { base_url } from '../../../base_url/Base_url';
import axios from 'axios';
import { MainContext } from '../context/PostContext';
import SocialLogin from '../../Sharinng/SocialLogin/SocialLogin';



const Register = () => {

const [passToggle , setPassToggle] = useState(false)
const [cpassToggle , setCpassToggle] = useState(false)
const navigate = useNavigate()


const {account} = useContext(MainContext);

// useEffect(() => {
//     if( Object.keys(account).length !== 0) {
//       navigate('/')
//     }
//   }, [account])


 
// handling user input registration usign formik
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            cpassword: "",
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required!').max(30, 'Must be 30 characters or less').min(6, "Too Short!"),
            email: Yup.string().required('Required!').email("Enter a valid email address"),
            password: Yup.string().min(6, "Too Short!").max(20, "Too Long!").required('Required!'),
            cpassword: Yup.string().min(6, "Too Short!").max(20, "Too Long!").required('Required!').oneOf([Yup.ref('password'), null], 'Passwords must match')
        }),
        onSubmit: async (values) => {
            console.log(values)
            await axios.post(`${base_url}/register`, values).then(res => {
                if (res.status === 200) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Create User as a Successfully',
                        icon: 'success',
                        confirmButtonText: 'Confirm'
                    })
                    navigate('/signin')
                }

            }).catch(err => { 
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                      })
             });
        },

    })











    return (


        <div className="hero w-full my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-3/4' src={logo} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                    <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                    <form onSubmit={formik.handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered" onChange={formik.handleChange}/>
                            {formik.touched.name && formik.errors.name ? (
                                <div>{formik.errors.name}</div>
                            ) : null}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="email" className="input input-bordered"  onChange={formik.handleChange}/>
                            {formik.touched.email && formik.errors.email ? (
                                <div>{formik.errors.email}</div>
                            ) : null}
                        </div>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                           <div className='relative'>
                           <input type={passToggle ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered w-full"  onChange={formik.handleChange}/>
                            <span className=' absolute right-0 bottom-0 bg-gray-700 p-3 text-white rounded-md cursor-pointer hover:bg-gray-800 transition-all duration-150' onClick={()=>setPassToggle(!passToggle)}> {passToggle ? 'hide' : 'show'}</span>
                           </div>
                            {formik.touched.password && formik.errors.password ? (
                                <div>{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                          <div className='relative'>
                          <input type={cpassToggle ? 'text' : 'password'} name='cpassword' placeholder="confirm-password" className="input input-bordered w-full"  onChange={formik.handleChange}/>
                            
                            <span className=' absolute right-0 bottom-0 bg-gray-700 p-3 text-white rounded-md cursor-pointer hover:bg-gray-800 transition-all duration-150' onClick={()=> setCpassToggle(!cpassToggle)}> {cpassToggle ? "hide" : 'show'}</span>
                          </div>
                            {formik.touched.cpassword && formik.errors.cpassword ? (
                                <div>{formik.errors.cpassword}</div>
                            ) : null}
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-blue-600 text-white hover:bg-blue-800 duration-300" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <div className="flex justify-center space-x-4">
                       <SocialLogin></SocialLogin>

                        {/* <button  aria-label="Log in with GitHub" className="p-3 rounded-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
                                <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                            </svg>
                        </button> */}
                    </div>
                    <p className='text-center'>Already have an account? <Link className='text-blue-600 font-bold' to="/signin">Login</Link> </p>
                </div>
            </div>
        </div>



    );
};

export default Register;