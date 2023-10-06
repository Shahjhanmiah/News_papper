import React, { useContext, useEffect } from 'react'
import './Dashboard.css'
import Chart from './../Dashboard/Chart'
import Sidebar from '../sidebar/Sidebar'
import Social_visitors from './Social_visitors'
import adminImg from '../../../assets/hasan/hasan.jpg'
import { FaThLarge, FaUserAlt,FaPuzzlePiece,FaSign} from "react-icons/fa";
import { MainContext } from '../../context/PostContext'
import { useNavigate } from 'react-router-dom'



const Dashboard = ({account}) => {

  const ProfileText = account?.name?.charAt(0)
  useEffect(() => {
   
  }, [account])
  


  return (
    <div className='mt-[100px] grid sm:grid-cols-1  md:grid-cols-3 lg:grid-cols-5 gap-4 '>
        <div className='cols-start-1 cols-end-2  p-2 bg-slate-700'>
          <Sidebar />
        </div>  

        <div className=' Right-site col-start-2 col-end-6   bg-slate-200'> 
            <div className=' heading-div h-[80px] w-[100%] text-white bg-slate-700 pr-5  '>
                <h1 className=' sm:text-1xl md:text-2xl lg:text-5xl pl-3 '> Admin Dashboard </h1>
                <div className='admin-div'>
                    <h4> {account?.role}</h4>
                    {account?.photoURL ? <img className=' sm:w-[30px] sm:h-[30px] lg:w-[40px] lg:h-[40px] h-[30px] w-[30px]  rounded-full '  src={account?.photoURL && account?.photoURL} alt="" /> : <span  className='mx-2 text-white bg-blue-600 hover:bg-blue-800 p-4 rounded-full font-medium'>{ProfileText}</span>}
                </div>
            </div>
             <div className=' grid lg:grid-cols-3 gap-5 px-5 mt-[50px]'>
                  <div className=' p-5 bg-white'> 
                               <div className='post-icon'> <FaSign  /> </div>         
                       <h1 className='text-3xl font-bold '>All Post </h1>
                       <p className='text-lg font-bold '> Total : 250 +</p>
                  </div>
                  <div className=' p-5 bg-white'> 
                               <div className='post-icon'> <FaUserAlt  /></div>         
                       <h1 className='text-3xl font-bold '>All Users </h1>
                       <p className='text-lg font-bold '> Total : 250 +</p>
                  </div>
                  <div className=' p-5 bg-white'> 
                               <div className='post-icon'> <FaPuzzlePiece  /></div>         
                       <h1 className='text-3xl font-bold '>All Admin </h1>
                       <p className='text-lg font-bold '> Total : 250 +</p>
                  </div>                 
             </div>
             
              <div className=' grid lg:grid-cols-3  gap-5  p-5 mt-[20px]'>
                    <div className=' lg:col-span-2 p-5 bg-white '>
                        <h1> Chart</h1>
                           <Chart/>
                      
                    </div>

                      <div className='bg-white p-5'>
                        <h1 className='text-3xl font-bold mb-[50px]'>  Section </h1>
                        {/* <Social_visitors/> */}
                      </div>
              </div>                   
         </div>
    </div>
  )
}

export default Dashboard