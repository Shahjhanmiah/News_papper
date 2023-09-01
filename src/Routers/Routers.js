import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Sharinng/Main/Main";
import Hero from "../components/hero_section/Hero";
import International from "../components/International/International_Section";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children:[
          {
            path:'/Home',
            element:<Home></Home>,
          },
          {
            path:'/international',
            element:<International></International>        
          },
          

          
        ]
        
    }
 ])
                                                                                                                                                                 