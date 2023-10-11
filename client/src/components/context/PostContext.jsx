import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { base_url } from "../../../base_url/Base_url";


export const MainContext = createContext(null);

const PostContext = ({ children }) => {

  const [account, setAccount] = useState({});
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    getAllPosts();
    getUser();
  }, [])






  const getUser = async () => {
    await axios.get(`${base_url}/getuser`, { withCredentials: true }).then(res => {
      setAccount(res.data)
    }).catch(err => {
      console.log(err)
    })
  }

  const getAllPosts = async () => {

    await axios.get(`${base_url}/getposts`).then(res => {
      setPosts(res.data)
    }).catch(err => console.log(err));

  }


  return <MainContext.Provider value={{ account, setAccount, posts, setPosts}}>
    {children}
  </MainContext.Provider>
}



export default PostContext;