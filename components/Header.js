"use client";
import React, { useContext, useState } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
import { FaSignOutAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import FirebaseAuthContext from "@/utils/firebaseAuth";
function Header() {
  const [isChatClicked, setIsChatClicked] = useState(false);
  const { signOut,user } = useContext(FirebaseAuthContext);
  const [show, setShow] = useState(false);
  const showMore = () => {
    setShow(!show);
    console.log(show);
  };
  return (
    <div className="flex items-center  ">
      {/* Left Header*/}
      <div
        className="flex items-center justify-between min-h-[70px] bg-primaryColor  flex-[1_1_0%] px-4 relative"
        onClick={showMore}
      >
        <div className="flex items-center space-x-2">
          {/* Profile Image */}
          <div className="h-10 w-10 rounded-full cursor-pointer">
            <Image
              src={user.photoURL}
              className="object-cover h-10 w-10 rounded-full"
              width={50}
              height={50}
              alt="Picture of the author"
            />
          </div>
          {/* Your Name */}
          <h1>{user.displayName}</h1>
        </div>
        <div className="flex items-center space-x-8">
          <BiMessageSquareAdd size={20} className="cursor-pointer" />
          <BsThreeDotsVertical size={20} className="cursor-pointer" />
        </div>
        {show && (
          <div
            className="absolute right-0 mt-28
                 w-40 bg-gray-300 hover:bg-gray-100 rounded-md shadow-lg"
          >
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
      {isChatClicked ? (
        <div className="flex items-center justify-between min-h-[70px] bg-primaryColor flex-[3_3_0%] px-8">
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
        <div className="flex items-center justify-between min-h-[70px] bg-primaryColor flex-[3_3_0%] px-8"></div>
      )}
    </div>
  );
}

export default Header;
