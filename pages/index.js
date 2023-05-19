import Header from "@/components/Header";
import Left from "@/components/Left";
import Login from "@/components/Login";
import Right from "@/components/Right";
import FirebaseAuthContext from "@/utils/firebaseAuth";
import React, { useContext } from "react";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "@/utils/firebase";
import CreateChat from "@/components/CreateChat";

function Home() {
  const { user, showChats, isCreateChat } = useContext(FirebaseAuthContext);
  return (
    <>
      {user !== null ? (
        <>
          <main className="min-h-screen relative">
            {/* Header */}
            <div className="fixed top-0 left-0 z-40 w-full">
              <Header />
            </div>
            <div className="h-full min-h-screen flex">
              <div className={showChats ? "flex-[1_1_0%]" : "hidden md:flex"}>
                <Left />
              </div>
              {!isCreateChat ? (
                <>
                  <div className="flex-[3_3_0%]">
                    <Right />
                  </div>
                </>
              ) : (
                <>
                <CreateChat />
                </>
              )}
            </div>
          </main>
        </>
      ) : (
        <>
          <Login />
        </>
      )}
    </>
  );
}

export default Home;
