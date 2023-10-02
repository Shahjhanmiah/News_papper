import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Sharinng/Main/Main";
import Allnews from "../components/AllNews/Allnews";
import PostPage from "../components/PostPage/PostPage";
import Dashboard from "../components/admin/Dashboard/Dashboard";
import Register from "../components/Register/Register";
import Login from "../components/Login/Login";
import Error from "../components/Error/Error";



export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
          {
            path:'/',
            element:<Home></Home>,
          },
          {
            path:'/category/:id',
            element:<Allnews></Allnews>
          },
          {
            path:'/signup',
            element:<Register></Register>

          },
          {
            path:'/signin',
            element:<Login></Login>

          },
          {
            path:'/post/:id',
            element:<PostPage></PostPage>,
          },
          {
           path:'/dashboard',
           element:<Dashboard></Dashboard> 
          },
        
          {
           path:'*',
           element:<Error></Error> 
          },
        

          
        ]
        
    }
 ])
                                                                                                                                                                 