"use client";
import React, { useContext, useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import { FaSignOutAlt,FaThList } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import FirebaseAuthContext from "@/utils/firebaseAuth";
function Header() {
  const { signOut, user, isChatClicked,showChats,setShowChats,openDrawer,setIsChatClicked } = useContext(FirebaseAuthContext);
  const [show, setShow] = useState(false);

  const showMore = () => {
    setShow(!show);
    console.log(show);
  };
  const closeChat = ()=>{
    setIsChatClicked(false)
  }
  
  return (
    <div className="flex items-center  ">
      {/* Left Header*/}
      <div className="items-center justify-between min-h-[70px] bg-primaryColor hidden md:flex  flex-[1_1_0%] flex-grow px-4 relative">
        <div className="flex items-center space-x-2">
          <div className="h-10 w-10 rounded-full cursor-pointer">
            <Image
              src={user.photoURL}
              className="object-cover h-10 w-10 rounded-full"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>
          <h1>{user.displayName} </h1>
        </div>
        <div className="flex items-center space-x-2">
          <BiMessageSquareAdd size={20} className="cursor-pointer" />
          <BsThreeDotsVertical size={20} className="cursor-pointer" onClick={showMore}/>
        </div>
        {show && (
          <div
            className="absolute right-0 top-16
                 w-40 bg-gray-300 hover:bg-gray-100 rounded-md shadow-lg"
          >
           {isChatClicked && (
            <div className="py-1">
              <button
                onClick={closeChat}
                className=" px-4 py-2 text-gray-700   flex items-center w-full "
              >
                <AiOutlineClose className="mr-2" />
                Close chat
              </button>
            </div>
           )}
            <div className="py-1">
              <button
                onClick={signOut}
                className=" px-4 py-2 text-gray-700   flex items-center w-full "
              >
                <FaSignOutAlt className="mr-2" />
                Signout
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Drop Down */}
      <div  className="min-h-[70px] bg-primaryColor  flex md:hidden cursor-pointer  flex-grow px-4 relative" >
        <div onClick={openDrawer} className={showChats ? "items-center  space-x-4 min-h-[70px] bg-primaryColor  flex md:hidden cursor-pointer  flex-grow px-4 relative":"items-center space-x-4 min-h-[70px] bg-primaryColor  flex md:hidden cursor-pointer  flex-grow px-4 relative"}>
        <FaThList />
        <h1>Chats</h1>
        </div>
        <div className="flex items-center space-x-2">
          <BiMessageSquareAdd size={20} className="cursor-pointer" />
          <BsThreeDotsVertical size={20} className="cursor-pointer" onClick={showMore}/>
        </div>
        {show && (
          <div
            className="absolute right-0 top-16
                 w-40 bg-gray-300 hover:bg-gray-100 rounded-md shadow-lg"
          >
            {isChatClicked && (
            <div className="py-1">
              <button
                onClick={closeChat}
                className=" px-4 py-2 text-gray-700   flex items-center w-full "
              >
                <AiOutlineClose className="mr-2" />
                Close chat
              </button>
            </div>
           )}
            <div className="py-1">
              <button
                onClick={signOut}
                className=" px-4 py-2 text-gray-700   flex items-center w-full "
              >
                <FaSignOutAlt className="mr-2" />
                Signout
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right Header */}
      {/* {isChatClicked ? (
        <div className={showChats ? "hidden" : "flex items-center justify-between min-h-[70px] bg-primaryColor flex-[3_3_0%] px-8"}>
          <div className="h-10 w-10 rounded-full cursor-pointer">
            <Image
              src="/images/profile1.jpg"
              className="object-cover h-10 w-10 rounded-full"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>
          <div className="flex items-center space-x-8">
            <CiSearch size={20} className="cursor-pointer" />
            <BsThreeDotsVertical size={20} className="cursor-pointer" />
          </div>
        </div>
      ) : (
        <div className={showChats ? "hidden" : "flex items-center justify-between min-h-[70px] bg-primaryColor flex-[3_3_0%] px-8"}>
          <h1 className="text-center">{user.displayName}</h1>
        </div>
      )} */}
    </div>
  );
}

export default Header;
