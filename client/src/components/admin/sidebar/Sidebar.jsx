import React from 'react'
import DashboardLogo from '../../../../public/Logo.png'
import { FaThLarge, FaUserAlt, FaPuzzlePiece, FaSign, FaCogs } from "react-icons/fa";
import { AiOutlineCaretDown } from "react-icons/ai";
import '../Dashboard/Dashboard.css'


const Sidebar = () => {
  return (
    <>
      <div className='Logo'>
          <img style={{width:"100%" , height:'70px', borderRadius:'0px 10px 0px 10px'}} src={DashboardLogo} alt="" />  
      </div>

      <div className='menu mt-3 text-white' >
         <h3 className='text-lg'>Menu</h3>
         <div className='mt-5 '>
            {/* <ul >
              <li className=' font-medium bg-white  text-lg text-black mb-2 br-5 rounded-md flex-auto' ><i >  <FaThLarge /> Dashboard </i> </li>
                
              <li className='font-medium bg-white  text-lg text-black mb-2 br-5 rounded-md flex-auto' ><i >  <FaThLarge /> Dashboard </i> </li>
              <li className='font-medium bg-white  text-lg text-black mb-2 br-5 rounded-md flex-auto' ><i >  <FaSign  /> All Post</i> </li>
              <li className='font-medium bg-white  text-lg text-black mb-2 br-5 rounded-md flex-auto' ><i >  <FaUserAlt /> All Users</i> </li>
              <li className='font-medium bg-white  text-lg text-black mb-2 br-5 rounded-md flex-auto' ><i >  <FaPuzzlePiece /> All Admin</i> </li>
              <li className='font-medium bg-white text-lg text-black mb-2 br-5 rounded-md flex-auto' ><i >  <FaCogs /> Edit</i> </li>
            </ul> */}

            <div className="dropdown w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] ">
             <button className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "> <span >  <i className='flex icon-div '> <FaThLarge />  Dashboard </i> </span>  <sapn  > <AiOutlineCaretDown /> </sapn> </button>    
              <div className="dropdown-content">
                  <a href="#">Home</a>
                  <a href="#"> Dashboard</a>            
              </div>           
            </div>
            <div className="dropdown w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] ">
              <button className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "> <span >  <i className='flex icon-div '> <FaSign />    Post </i> </span>  <sapn  > <AiOutlineCaretDown /> </sapn> </button>
              <div className="dropdown-content">
                <a href="#">All Post</a>
                <a href="#">Add New Post</a>
                <a href="#"> Category</a>
              </div>           
            </div>
            <div className="dropdown w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] ">
              <button className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "> <span >  <i className='flex icon-div '> <FaUserAlt />  Users </i> </span>  <sapn  > <AiOutlineCaretDown /> </sapn> </button>
              <div className="dropdown-content">
                <a href="#">All Users</a>
                <a href="#">Add New Users</a>
                <a href="#">Edite</a>
              </div>           
          </div>
          <div className="dropdown w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] ">
              <button className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "> <span >  <i className='flex icon-div '> <FaPuzzlePiece/>  Admin </i> </span>  <sapn  > <AiOutlineCaretDown /> </sapn> </button>
              <div className="dropdown-content">
                <a href="#">All Admin </a>
                <a href="#">Add New Admin</a>
                <a href="#">Tax</a>
              </div>           
          </div>
           <div className="dropdown w-[100%] sm:w-[100%] md:w-[100%] xl:w-[100%] lg:w-[100%] ">
              <button className="dropbtn font-medium bg-white p-2 text-lg text-black mb-2 br-5 rounded-md "> <span >  <i className='flex icon-div '> <FaCogs /> Edit </i> </span>  <sapn  > <AiOutlineCaretDown /> </sapn> </button>
              <div className="dropdown-content">
                <a href="#">Edit </a>
                <a href="#"> Edit text</a>
                <a href="#">Tax</a>
              </div>           
            </div>


         </div>
      </div>
    
    </>
  
  )
}

export default Sidebar


