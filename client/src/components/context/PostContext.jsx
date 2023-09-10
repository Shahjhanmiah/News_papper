import { createContext, useContext, useState } from "react";


export const MainContext = createContext(null);

const PostContext = ({children}) => {

    const [account , setAccount] = useState(null);
    const [posts, setPosts] = useState([]);

    return <MainContext.Provider value={{account , setAccount,posts,setPosts}}>
        {children}
    </MainContext.Provider>
}



export default PostContext;