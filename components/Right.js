"use client";
import React, { useContext, useState } from "react";
import styles from "../public/customStyles/styles.css";
import Image from "next/image";
import { AiFillLock } from "react-icons/ai";
import FirebaseAuthContext from "@/utils/firebaseAuth";
function Right() {
  const { isChatClicked,chatSelected } = useContext(FirebaseAuthContext);

  return (
    <>
      {!isChatClicked ? (
        <>
          <div className="flex items-center justify-center h-full bg-primaryColor relative ">
            <div className="flex items-center justify-center flex-col">
              <Image
                src="/images/background2.jpg"
                className="object-cover h-72"
                width={400}
                height={400}
                alt="Whatsapp Web"
              />
              <div className="flex flex-col items-center justify-center space-y-4">
                <h1 className="text-4xl font-thin">Whatsapp Web</h1>
                <p className="text-gray-400 text-sm tracking-wide">
                  Send and receive messages without keeping your phone online.
                </p>
                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <AiFillLock />
                  <p>End-to-end encrypted</p>
                </div>
              </div>
            </div>
            <div className="absolute bg-thirdColor bottom-0 border-t-4 border-thirdColor w-full"></div>
          </div>
        </>
      ) : (
        <>
          <div className="min-h-screen mt-[75px]" style={styles.body}>
            <br />
            {/* Messages */}
            <div className="px-12 my-4 ">
             {/* Other Messages */}
             <div className="flex justify-start">
               <div className="bg-primaryColor max-w-fit py-1 px-2 rounded-lg  my-4 ">
                <p className="text-white text-left whitespace-normal break-words px-4 py-4  ">
                  {chatSelected.chatName}
                </p>
              </div>
              </div>
              {/* My Messages */}
              <div className="flex justify-end">
              <div className="bg-thirdColor max-w-fit py-1 px-2 rounded-lg my-4 text-center ">
                <p className="text-white  whitespace-normal break-words px-4 py-4 ">
                  I'm fine bro
                </p>
              </div>
              </div>


            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Right;
