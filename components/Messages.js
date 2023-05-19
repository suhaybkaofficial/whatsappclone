import React, { useContext, useState } from "react";
import styles from "../public/customStyles/styles.css";
import {AiOutlineSend} from 'react-icons/ai'
import FirebaseAuthContext from "@/utils/firebaseAuth";
function Messages() {
    const [message,setMessage] = useState("")
    const {chatSelected} = useContext(FirebaseAuthContext)
  return (
    <div className="min-h-[93vh] mt-[40px] relative" style={styles.body}>
      <br />
      {/* Messages */}
      <div className="px-12 my-4 ">
        {/* Other Messages */}
        <div className="flex justify-start">
          <div className="bg-primaryColor max-w-fit py-1 px-2 rounded-lg  my-4 ">
            <p className="text-white text-left whitespace-normal break-words px-4 py-4  ">
              {chatSelected.id}
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
      
      {/* Input */}
      <div className="absolute bottom-0 right-0 left-0 bg-primaryColor px-6 py-2 z-10">
        <form className="flex items-center space-x-4">
        <input
          type="text"
          id="chatName"
          className="text-sm bg-[#2a3942] rounded-xl text-white focus:ring-gray-500 focus:bg-[#2a3942] outline-0 block w-full p-4 "
          placeholder="Type a message..."
          maxLength={15}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>
        <AiOutlineSend size={25} color="#707f89"/>
        </button>
        </form>
      </div>
    </div>
  );
}

export default Messages;
