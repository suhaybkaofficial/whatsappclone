import { createContext, useEffect, useState } from 'react';
import firebase, { auth } from './firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const FirebaseAuthContext = createContext();

export const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);
  
  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        let stringified = JSON.stringify(user)
        console.log(user);
        setUser(user)
        
        // setLoggedInUserId(user.uid);
         let storeUserData = localStorage.setItem('user', stringified);
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
    });
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      let remove = localStorage.removeItem('user')
      console.log("Signout");
    } catch (error) {
      console.log(error);
    }
  };

  const checkIfUserIsLoggedIn = async () =>{
    try{
        const value = await localStorage.getItem('user');
        if(value){
            setUser(JSON.parse(value))
        }
    }
    catch{
  
    }
  }
  useEffect(()=>{
    checkIfUserIsLoggedIn()
  },[])
  return (
    <FirebaseAuthContext.Provider value={{ user, signInWithGoogle, signOut }}>
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export default FirebaseAuthContext;
