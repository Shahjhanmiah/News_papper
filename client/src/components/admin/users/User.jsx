import React, { useContext } from 'react'
import { MainContext } from '../../context/PostContext'

const User = ({ userType, user }) => {
    const { account } = useContext(MainContext)
    const ProfileText = account?.name?.charAt(0)

    console.log(user)


    return (
        <div className='col-start-2 col-end-6  bg-slate-200'>
            <div className=' heading-div h-[80px] w-[100%] text-white bg-slate-700 pr-5  '>
                <h1 className=' sm:text-1xl md:text-2xl lg:text-5xl pl-3 '> All {userType} </h1>
                <div className='admin-div'>
                    <h4> {account?.role}</h4>
                    {account?.photoURL ? <img className=' sm:w-[30px] sm:h-[30px] lg:w-[40px] lg:h-[40px] h-[30px] w-[30px]  rounded-full ' src={account?.photoURL && account?.photoURL} alt="" /> : <span className='mx-2 text-white bg-blue-600 hover:bg-blue-800 p-4 rounded-full font-medium cursor-pointer'>{ProfileText}</span>}
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Profile</th>
                            <th>Name</th>
                            <th>Email/GogleID</th>
                            <th>Role</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className=' gap-5 '>
                        {/* row 1 */}
                      {user?.map(user => {
                        return(
                            <tr  className='h-16 '>
                          
                            <td>
                                <div className="flex items-center  space-x-3">
                                        <div className=" w-12 h-12 flex items-center justify-center">
                                            {user?.photoURL ? <img src={user.photoURL} alt="" /> : <span className='mx-2 text-white bg-blue-600 hover:bg-blue-800 p-4 rounded-full font-medium cursor-pointer' >{user?.name?.charAt(0)}</span>}
                                        </div>                                   
                                </div>
                            </td>
                            <td>
                                <h1>{user?.name}</h1>
                            </td>
                            {user?.email ? <td>{user.email}</td> :<td>{user.gogleId}</td>}
                            <td>{user?.role}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">Delete</button>
                            </th>
                        </tr>
                        )
                      })}

                    </tbody>

                </table>

            </div>
            
        </div>
    )
}

export default User