import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Sharinng/Main/Main";
import Allnews from "../components/AllNews/Allnews";
import PostPage from "../components/PostPage/PostPage";
import Dashboard from "../components/admin/Dashboard/Dashboard";
// import Hero from "../components/hero_section/Hero";
// import International from "../components/International/International_Section";
// import National_Section from "../components/National/National_Section";
// import Playing_Section from "../components/Playing/Playing_Section";
// import Entertainment_Section from "../components/Entertainment/Entertainment_Section";
// import Campas_Section from "../components/Campas/Campas_Section";
// import AllCountry_Section from "../components/All_Country/AllCountry_Section";
// import Viodeo_Section from "../components/Viodeo/Viodeo_Section";
// import AllCat from "../components/Categories/AllCat";

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
            path:'/post/:id',
            element:<PostPage></PostPage>,
          },
          {
           path:'/dashboard',
           element:<Dashboard></Dashboard> 
          }
        

          
        ]
        
    }
 ])
                                                                                                                                                                 