"use client";
import React, { useContext, useState } from "react";
import styles from "../public/customStyles/styles.css";
import Image from "next/image";
import { AiFillLock } from "react-icons/ai";
import FirebaseAuthContext from "@/utils/firebaseAuth";
import Messages from "./Messages";
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
                  Send and receive messages in real-time.
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
         <Messages />
        </>
      )}
    </>
  );
}

export default Right;
