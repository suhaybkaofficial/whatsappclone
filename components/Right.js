'use client'
import React, { useState } from "react";
import styles from "../public/customStyles/styles.css";
import Image from "next/image";
import {AiFillLock} from 'react-icons/ai'
function Right() {
  const [isChatClicked, setIsChatClicked] = useState(false);

  return (
    <>
      {!isChatClicked ? (
        <>
          <div className="flex items-center justify-center min-h-screen bg-primaryColor relative">
          <div className="flex items-center justify-center flex-col">
          <Image
              src="/images/background2.jpg"
              className="object-cover h-72"
              width={400}
              height={400}
              alt="Picture of the author"
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
          <div className="min-h-screen" style={styles.body}>
            <h1>Right</h1>
          </div>
        </>
      )}
    </>
  );
}

export default Right;
