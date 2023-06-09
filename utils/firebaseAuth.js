import { createContext, useEffect, useState } from "react";
import firebase, { auth, db } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { addDoc, collection, getDocs, query, serverTimestamp, where } from "firebase/firestore";

const FirebaseAuthContext = createContext();

export const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isChatClicked, setIsChatClicked] = useState(false);
  const [isCreateChat, setIsCreateChat] = useState(false);
  const [chatSelected, setChatSelected] = useState([]);

  const [show, setShow] = useState(false);
  const [showChats, setShowChats] = useState(false);
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
        let stringified = JSON.stringify(user);
        console.log(user);
        setUser(user);
        // setLoggedInUserId(user.uid);
        // let storeUserData = localStorage.setItem('userInfo', stringified);
        // ...
      })
      .catch((error) => {
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
  const openDrawer = () => {
    setShowChats(!showChats);
  };

  const signOut = async () => {
    try {
      await auth.signOut();
      setIsChatClicked(false);
      setChatSelected([]);
      console.log("Signout");
    } catch (error) {
      console.log(error);
    }
  };
  const closeChat = () => {
    setIsChatClicked(!isChatClicked);
    setChatSelected([]);
    setShow(!show);

    console.log("Chat Closed");
    console.log(isChatClicked);
  };
  const openChat = (
    id,
    chatName,
    chatAvatar,
    formattedCreatedAt,
    displayName,
    email,
    photoURL,
    userId
  ) => {
    const chatInfo = {
      id,
      chatName,
      chatAvatar,
      formattedCreatedAt,
      displayName,
      email,
      photoURL,
      userId,
    };
    const joinChat = async (chatInfo) =>{
      const colRef = collection(db, "chats",id,"participants");
      const q = query(colRef,where("userId","==",user.uid))
      const querySnapshot = await getDocs(q);
     if(querySnapshot.empty === true){
      const data = {
        userId:user.uid,
        displayName:user.displayName,
        joinedAt:serverTimestamp(),
        role:"Member"
      };
       const colRef = collection(db, "chats",id,"participants");
              addDoc(colRef, data)
            .then(docRef => {

            })
            .catch(error => {
              console.log(error);
            })
     }
     
    }
    joinChat()
    if (isChatClicked) {
      setChatSelected(chatInfo);
    }
    else{
      setIsChatClicked(!isChatClicked)
      setChatSelected(chatInfo);
    }
  };
  const showMore = () => {
    setShow(!show);
  };
  const createChat = () => {
    setIsCreateChat(true);
  };
  return (
    <FirebaseAuthContext.Provider
      value={{
        user,
        signInWithGoogle,
        signOut,
        isChatClicked,
        setIsChatClicked,
        showChats,
        setShowChats,
        openDrawer,
        isCreateChat,
        setIsCreateChat,
        setChatSelected,
        chatSelected,
        closeChat,
        openChat,
        show,
        showMore,
        createChat,
      }}
    >
      {children}
    </FirebaseAuthContext.Provider>
  );
};

export default FirebaseAuthContext;
