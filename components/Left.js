import React from "react";
import Header from "./Header";
import Search from "./Search";
import Chats from "./Chats";

function Left() {
  return (
    <div className="min-h-screen bg-greyColor">
      {/* Header */}
      <Header />

      {/* Search */}
      <Search />
      
      {/* Chats */}
       <Chats />
    </div>
  );
}

export default Left;
