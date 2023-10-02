import './App.css'
import { RouterProvider } from 'react-router-dom'
import {router} from './Routers/Routers'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { base_url } from '../base_url/Base_url'
import  { MainContext } from './components/context/PostContext'

function App() {

const {account} = useContext(MainContext)
console.log(account)

  return (
      <div className='w-[90%] m-auto'>
     <RouterProvider router={router}></RouterProvider>
    </div>
   
  )
}

export default App
