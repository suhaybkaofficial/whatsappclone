import React from 'react'
import Image from 'next/image'
function ChatList({message,chatName,messageCount,time,chatAvatar}) {
  return (
    <div className='flex items-center justify-between my-4 cursor-pointer border-b border-gray-700'>
    <div className='flex items-center pb-4'>
        {/* Profile */}
    <div className="h-12 w-12 rounded-full cursor-pointer mr-3">
      <Image
        src={chatAvatar}
        className="object-cover h-12 w-12 rounded-full"
        width={50}
        height={50}
        alt="Picture of the author"
      />
    </div>
    {/* Contact & Message */}
    <div className='space-y-1'>
        <h3 className="text-whiteColor">{chatName}</h3>
        <p className="text-[#8696a0] text-xs">{message} from {chatName}</p>
    </div>
    </div>
    {/* Time & Message Count */}
    <div className='flex flex-col space-y-1'>
        {/* Time */}
        <h3 className="text-[#8696a0] text-sm">{time}</h3>
        {/* Message Count */}
        <div className='bg-thirdColor h-6 w-6 rounded-full flex items-center justify-center self-end'>
            <p className="text-xs text-greyColor">{messageCount}</p>
        </div>
    </div>
    </div>
  )
}

export default ChatList