
import { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword,  getAuth, sendEmailVerification, updateProfile, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, GithubAuthProvider,} from "firebase/auth";

const auth = getAuth(app)
  export const AuthContext = createContext()

const AuthProvidr = ({children}) => {
    const [user,setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider()

    //  Create user

    const createUser = (email, password) => {
      setLoading(true);
        
        return createUserWithEmailAndPassword(auth, email, password)
      }

      //  userdisplsy
      
    //userdisplay 
    const updateName = name => {
      setLoading(true);
      return updateProfile(auth.currentUser, { displayName: name })
    }

    // useerProfile
    const updateUserProfile = (profile) =>{
      setLoading(true);
      return updateUserProfile(auth.currentUser,profile);
  }
    

    // verifay 
    const verifyEmail = () => {
      setLoading(true);
      return sendEmailVerification(auth.currentUser)
    }

    //  google sigin 
    const signGoogle = ()=>{
      setLoading(true);
      return signInWithPopup(auth,googleprovider)
  }
  //  githuv singing 
  const signGithub = ()=>{
    setLoading(true);
    return signInWithPopup(auth,githubprovider)
    
  }
  // login pasword 
  const signin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    //this part will execute once the component is mounted.
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser)
      setLoading(false)
     
    })

    return () => {
      //this part will execute once the component is unmounted.
      unsubscribe()
    }
  }, [])

  
    const authInfo = { user,createUser,updateUserProfile,verifyEmail,updateName,signGoogle, signin,signGithub,loading
    }
       
       
      
    return (
        <div>
            <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        </div>
    );
};


export default AuthProvidr;