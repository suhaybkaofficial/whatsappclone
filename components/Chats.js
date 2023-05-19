import React, { useContext, useEffect, useState } from "react";
import ChatList from "./ChatList";
import { db } from "@/utils/firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import moment from "moment";
import FirebaseAuthContext from "@/utils/firebaseAuth";

function Chats({ name }) {
  const [chats, setChats] = useState([]);
  const { isChatClicked, setIsChatClicked, setChatSelected,chatSelected, openChat, show } =
    useContext(FirebaseAuthContext);
  useEffect(() => {
    const collectionRef = collection(db, "chats");
    const q = query(collectionRef, orderBy("createdAt", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      setChats(
        snapshot.docs.map((doc) => {
          const data = doc.data();
          const createdAt = data.createdAt && data.createdAt.toDate(); // Check if createdAt exists before calling toDate()

          return {
            id: doc.id,
            chatName: data.chatName,
            user: data.user,
            chatAvatar: data.chatAvatar,
            createdAt,
            formattedCreatedAt: createdAt
              ? moment(createdAt, "MMMM Do YYYY, h:mm:ss a").valueOf()
              : null,
          };
        })
      );
    });
    return () => unsubscribe(); // Cleanup the snapshot listener
  }, []);
  return (
    <div className="mx-4 max-h-fit " id="sidebar">
      {/* Chat */}
      {chats.length > 0 ? (
        <>
          {chats.map(
            ({ id, chatName, chatAvatar, formattedCreatedAt, user }) => {
              const { displayName, email, photoURL, userId } = user;
              return (
                <div
                
                className={chatSelected.id === id ? "bg-[#212e35] px-1 rounded-lg":" px-1 rounded-lg"}
                  key={id}
                  onClick={() =>
                    openChat(
                      id,
                      chatName,
                      chatAvatar,
                      formattedCreatedAt,
                      displayName,
                      email,
                      photoURL,
                      userId
                    )
                  }
                >
                  <ChatList
                    chatName={chatName}
                    message="1st Message"
                    id={id}
                    chatAvatar={chatAvatar}
                    messageCount="3"
                    time={moment(formattedCreatedAt).fromNow()}
                  />
                </div>
              );
            }
          )}
        </>
      ) : (
        <>
          <h1 className="text-center font-semibold">No Chats Available</h1>
        </>
      )}
    </div>
  );
}

export default Chats;
