import React from "react";
import ChatList from "./ChatList";

function Chats() {
  return (
    <div className="mx-4">
      {/* Chat */}
      <ChatList contactName="Suhaib Hassan" message="Hi From " messageCount="3"  time="7:20Am"/>
      <ChatList contactName="Najib Said"  message="Hi From " messageCount="1" time="1:30Am"/>
      <ChatList contactName="Jamaal Boxer"  message="Hi From " messageCount="2" time="Yesterday"/>
    </div>
  );
}

export default Chats;
