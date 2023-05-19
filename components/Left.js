import React, { useContext } from "react";
import Header from "./Header";
import Search from "./Search";
import Chats from "./Chats";

function Left() {
  return (
    <div className="min-h-full bg-greyColor border-r border-r-gray-700 relative">
      <br />
      <br />
      <br />
      {/* Search */}
      <Search />
      {/* Chats */}
      <Chats />
    </div>
  );
}

export default Left;
