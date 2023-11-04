"use client";

import React from "react";
import { AccordionCustomIcon } from "../ui/Acc";
import ChatInput from "./ChatInput";
import ChatMessages from "./ChatMessages";

type Props = {};

const Chat = (props: Props) => {
  return (
    <div className="flex justify-between items-center flex-col h-[80vh] md:min-w-[45vw] min-w-[90vw] shadow-xl rounded-xl p-2  my-10">
      Chat
      <div>
        <ChatMessages />
        <ChatInput />
      </div>
      {/* <AccordionCustomIcon /> */}
    </div>
  );
};

export default Chat;
