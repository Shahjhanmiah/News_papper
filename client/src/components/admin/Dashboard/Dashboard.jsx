import React from 'react'
import Sidebar from '../sidebar/Sidebar'

const Dashboard = () => {
  return (
    <div className='mt-[100px] grid lg:grid-cols-5 border-2 gap-3'>
    <div className='cols-start-1 cols-end-2 border-2 border-red-600'>
    <Sidebar />
    </div>
      <div className='col-start-2 col-end-6 border-2 border-green-600'>
dashboard
      </div>
    </div>
  )
}

export default Dashboard