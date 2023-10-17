import { Link, useNavigate, } from 'react-router-dom';
import logo from '../../assets/Mobile-login.jpg'
import { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2'
import SocialLogin from '../../Sharinng/SocialLogin/SocialLogin';
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { base_url } from '../../../base_url/Base_url';
import axios from 'axios';
import { MainContext } from '../context/PostContext';



const Login = () => {
    const {account , setAccount} = useContext(MainContext);
    const [passToggle , setPassToggle] = useState(false)
    const navigate = useNavigate();

    useEffect(() => {
      if( Object.keys(account).length !== 0) {
        navigate('/')
      }
    }, [account])
    

    const formik = useFormik({
        initialValues: {
            username: "",
            password: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Required').email("Enter a valid email address"),
            password: Yup.string().min(6, "At least 6 char").max(20, 'Must be 20 characters or less').required('Required'),
        }),
        onSubmit: async (values) => {
            await axios.post(`${base_url}/login`, values, { withCredentials: true }).then(res => {
                console.log(res.data)
                setAccount(res.data)
                if (res.status== 200) {
                    formik.resetForm();
                    Swal.fire({
                        title: 'Success!',
                        text: 'User Successfully Logged In',
                        icon: 'success',
                        confirmButtonText: 'Confirm'
                    })
                    navigate('/')
                }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                      })
                }
            }).catch(err => {
                console.log(err)
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                  })
                   
            })
        },

    })
         
    
    return (
        <div>
            <div className="hero w-full my-20">
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-3/4' src={logo} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                        <h1 className="text-5xl text-center font-bold">Login</h1>
                        <form onSubmit={formik.handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='username' placeholder="email" className="input input-bordered" onChange={formik.handleChange} />
                                {formik.touched.username && formik.errors.username ? (
                                <div>{formik.errors.username}</div>
                            ) : null}
                            </div>
                            <div className="form-control ">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                               <div className='relative'>
                               <input type={passToggle ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered w-full" onChange={formik.handleChange}/>
                                <span className=' absolute right-0 bottom-0 bg-gray-700 p-3 text-white rounded-md cursor-pointer hover:bg-gray-800 transition-all duration-150' onClick={()=>setPassToggle(!passToggle)}> {passToggle ? 'hide' : 'show'}</span>
                               </div>
                                {formik.touched.password && formik.errors.password ? (
                                <div>{formik.errors.password}</div>
                            ) : null}
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn bg-blue-600 hover:bg-blue-800 text-white" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center pb-4'>Don't Have An Account? <Link className='text-blue-600 font-bold' to="/signup">Sign Up</Link> </p>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;