import './App.css'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { base_url } from '../base_url/Base_url'
import { MainContext } from './components/context/PostContext'

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './Home/Home'
import Allnews from './components/AllNews/Allnews'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import PostPage from './components/PostPage/PostPage'
import Dashboard from './components/admin/Dashboard/Dashboard'
import Error from './components/Error/Error'
import Nav from './Sharinng/Nav'
import Footer from './Sharinng/Footer'
import Users from './components/admin/users/Users'
import Loader from './components/loader/Loader'
import Posts from './components/admin/posts/Posts'
import Addnewpost from './components/admin/posts/Addnewpost'


function App() {

  const { account,posts } = useContext(MainContext)
  
  const [isAdmin, setIsAdmin] = useState(true)
  const [isloading , setIsloading] = useState(false)

  useEffect(() => {
    switch (account.role) {
      case 'admin':
        setIsAdmin(true)
        break;
      case 'moderator':
        setIsAdmin(true)
        break;

      default:
        setIsAdmin(false)
    }
    Loading();
  }, [account])

const Loading = () => {
  setTimeout(() => {
    setIsloading(true)
  }, 3000);
}

  return (
    <div className='w-[90%] m-auto'>
      {isloading ? <Router>
        <Nav account={account} isAdmin={isAdmin} />
        <Routes>
         <Route path='/' element={<Home posts={posts} />} />
          <Route path='/category/:id'  element={<Allnews />} />
          <Route path='/signup' element={Object.keys(account).length !== 0 ? <Navigate to={'/'}/> : <Register />} />
          <Route path='/signin' element={Object.keys(account).length !== 0 ? <Navigate to={'/'}/> : <Login /> } />
          <Route path='/post/:id' element={<PostPage />} />
          <Route path='/dashboard' element={isAdmin ? <Dashboard  account={account} /> : <Navigate to={'/error'}/>  } />
          <Route path='*' element={<Error />} />
          <Route path='/users/:type' element={isAdmin ? <Users  account={account} /> : <Navigate to={'/error'}/> } />
          <Route path='/addnewuser' element={isAdmin ? <Users  account={account} /> : <Navigate to={'/error'}/>  } />  
          <Route path='/posts' element={isAdmin ? <Posts  account={account} posts={posts} /> : <Navigate to={'/error'}/>  } />  
          <Route path='/addnewpost' element={isAdmin ? <Addnewpost  account={account} /> : <Navigate to={'/error'}/>  } />  
          <Route path='/edit/:id' element={isAdmin ? <Addnewpost  account={account} /> : <Navigate to={'/error'}/>  } />  
        </Routes>
        <Footer />
      </Router> : <Loader />}
    </div>

  )
}

export default App

