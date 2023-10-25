import React, { useContext, useEffect, useState } from 'react'
import DashboardLogo from '../../../assets/hasan/Logo.png'
import { FaThLarge, FaUserAlt, FaPuzzlePiece, FaSign, FaComments, FaSignOutAlt } from "react-icons/fa";
import { AiOutlineCaretDown, AiFillBell } from "react-icons/ai";
import '../Dashboard/Dashboard.css'
import { CiLogout } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { BiSolidUserCircle } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { base_url } from '../../../../base_url/Base_url';
import axios from 'axios';
import { MainContext } from '../../context/PostContext';


const Sidebar = () => {

  const { account, setAccount } = useContext(MainContext)
  const [ approvedComments,setAppprovedComments ] = useState([])
  useEffect(() => {
    getApproveComments();
  },[])

  const getApproveComments = async () => {
    await axios.get(`${base_url}/getcomments/approved`, { withCredentials: true }).then(res => {
      console.log(res.data)
      setAppprovedComments(res.data);
    }).catch(err => {
      console.log(err);
    })
  }

  
  console.log({approvedComments})
console.log(account.name)
  return (

    <>
      <div className='Logo'>
        <img style={{ width: "100%", height: '70px', borderRadius: '0px 10px 0px 10px' }} src={DashboardLogo} alt="" />
      </div>

      <div className='menu mt-3 text-white ' >
        <div className='flex flex-col items-center justify-center text-center mx-auto font-medium bg-blue-600 w-full rounded py-2 mb-3'>
        {account?.photoURL && <img className='w-10 h-10 rounded-full' src={account.photoURL} alt="" /> }
         <span className=' text-white text-2xl rounded-full font-medium cursor-pointer w-full' >{account.name}</span>
        
        <span className='text-xl text-warning'>{account?.role}</span>
        </div>
        
        <h3 className='text-lg'>Menu</h3>
        <div className='mt-5 '>

          <div className="dropdown w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] ">
            <Link to={'/dashboard'} className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "> <span >  <i className='flex icon-div '> <FaThLarge />  Dashboard </i> </span> </Link>

          </div>
          <div className="dropdown w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] ">
            <Link to={'/posts'} className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "> <span >  <i className='flex icon-div '> <FaSign />    Posts </i> </span>   </Link>
          </div>
          <div className="dropdown w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] ">
            <button className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "> <span >  <i className='flex icon-div '> <FaUserAlt />  Users </i> </span>  <span  > <AiOutlineCaretDown /> </span> </button>
            <div className="dropdown-content">
              <Link to={'/users/admin'}>Admins</Link>
              <Link to={'/users/moderator'}>Moderators</Link>
              <Link to={'/users/user'}>Users</Link>
            </div>
          </div>
          <div className="dropdown w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] ">
            <button className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "> <span >  <i className='flex icon-div '> <FaComments />  Comments </i> </span>  <span  > <AiOutlineCaretDown /> </span> </button>
            <div className="dropdown-content">
              <Link to={'/comments/approved'}>Approved Comments <span className='bg-red-600 p-2 text-white text-sm'>{approvedComments.length}</span></Link>
              <Link to={'/comments/unapproved'}>Unapproved Comments</Link>
            </div>
          </div>

          <div className="dropdown w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] ">
            <Link to={'/notifications'} className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "> <span >  <i className='flex icon-div '> <AiFillBell />  Notifications </i> </span> </Link>

          </div>
        </div>
      </div>

    </>

  )
}

export default Sidebar


