import React, { useContext, useEffect, useState } from "react";
import styles from "../public/customStyles/styles.css";
import { AiOutlineSend } from "react-icons/ai";
import FirebaseAuthContext from "@/utils/firebaseAuth";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/utils/firebase";
import moment from "moment";
import { ImSad2 } from "react-icons/im";
import Image from "next/image";
function Messages() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const { chatSelected, user } = useContext(FirebaseAuthContext);
  //   Retrieve Messages
  useEffect(() => {
    const collectionRef = collection(db, "chats", chatSelected.id, "messages");
    const q = query(collectionRef, orderBy("sendAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          const sendAt = data.sendAt && data.sendAt.toDate();

          return {
            id: doc.id,
            message: data.message,
            senderDisplayName: data.senderDisplayName,
            senderUserId: data.senderUserId,
            senderAvatar: data.senderAvatar,
            sendAt,
            formattedSendAt: sendAt
              ? moment(sendAt, "MMMM Do YYYY, h:mm:ss a").valueOf()
              : null,
          };
        })
      );
    });
    return () => unsubscribe(); // Cleanup the snapshot listener
  }, [chatSelected]);
  // Send Message
  const sendMessage = (e) => {
    e.preventDefault();
    const data = {
      message: message,
      senderUserId: user.uid,
      senderDisplayName: user.displayName,
      senderAvatar: user.photoURL,
      sendAt: serverTimestamp(),
    };
    const colRef = collection(db, "chats", chatSelected.id, "messages");
    addDoc(colRef, data)
      .then((docRef) => {
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="min-h-full mt-[40px] relative" style={styles.body}>
      <br />
      {/* Messages */}
      <br />
      <br />
      <div className="px-12 my-4 ">
        {Object.keys(messages).length === 0 ? (
          <>
            <div className="flex items-center justify-center flex-col space-y-2  my-4">
              <ImSad2 size={100} />
              <h1 className="text-center text-2xl my-4">
                No conversations yet , start now
              </h1>
            </div>
          </>
        ) : (
          <>
            {messages.map((message) => {
              return (
                <>
                  {message.senderUserId !== user.uid ? (
                    <>
                    <p className="text-sm text-thirdColor italic">{message.senderDisplayName}</p>
                      <div className="flex justify-start">
                    
                        <div className="bg-primaryColor max-w-fit h-fit px-3 py-1  rounded-lg  my-4 flex items-center">
                          <div className="h-8 w-8  cursor-pointer mr-2">
                            <Image
                              src={message.senderAvatar}
                              className="object-cover h-8 w-8 rounded-full"
                              width={30}
                              height={30}
                              alt="Picture of the author"
                            />
                            
                          </div>
                          <p className="text-white text-left whitespace-normal break-words px-4 py-4  ">
                            {message.message}
                          </p>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                    <p className="text-xs text-thirdColor italic text-right">{message.senderDisplayName}</p>
                      <div className="flex justify-end">
                        <div className="bg-thirdColor max-w-fit px-3 py-1  rounded-lg my-4 text-center flex items-center ">
                        <div className="h-8 w-8  cursor-pointer mr-2">
                            <Image
                              src={message.senderAvatar}
                              className="object-cover h-8 w-8 rounded-full"
                              width={30}
                              height={30}
                              alt="Picture of the author"
                            />
                            
                          </div>
                          <p className="text-white  whitespace-normal break-words px-4 py-4 ">
                            {message.message}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </>
              );
            })}
          </>
        )}
      </div>

      {/* Input */}
      <div className="absolute bottom-0 right-0 left-0 bg-primaryColor px-6 py-2 z-10">
        <form className="flex items-center space-x-4" onSubmit={sendMessage}>
          <input
            type="text"
            id="chatName"
            className="text-sm bg-[#2a3942] rounded-xl text-white focus:ring-gray-500 focus:bg-[#2a3942] outline-0 block w-full p-4 "
            placeholder="Type a message..."
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button onClick={sendMessage}>
            <AiOutlineSend size={25} color="#707f89" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Messages;
