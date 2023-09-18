import './App.css'
import { RouterProvider } from 'react-router-dom'
import {router} from './Routers/Routers'

function App() {
  return (
      <div className='w-[90%] m-auto'>
     <RouterProvider router={router}></RouterProvider>
    </div>
   
  )
}

export default App
