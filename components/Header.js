import React from 'react'
import { FiUsers } from "react-icons/fi";
import { BiMessageSquareAdd } from "react-icons/bi";
import { BsThreeDotsVertical } from "react-icons/bs";
import Image from "next/image";
function Header() {
  return (
    <div className="flex items-center justify-between min-h-[70px] bg-primaryColor px-4 pt-4">
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
    <FiUsers  size={20} className="cursor-pointer"/>
    <BiMessageSquareAdd  size={20} className="cursor-pointer"/>
    <BsThreeDotsVertical size={20} className="cursor-pointer" />
    </div>
  </div>
  )
}

export default Header