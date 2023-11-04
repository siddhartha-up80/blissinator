"use client";

import React from "react";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

type Props = {};

const Chat = (props: Props) => {
  return (
    <div className="dark:bg-purple-900 bg-white flex justify-between items-center flex-col min-h-[40vh] max-h-[70vh] shadow-xl rounded-xl p-2  my-10 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      <div></div>
      <div className="">
        <ChatMessages />
        <ChatInput />
      </div>
      {/* <AccordionCustomIcon /> */}
    </div>
  );
};

export default Chat;
