"use client"

import React, { FC, HTMLAttributes } from "react";

interface ChatMessagesProps extends HTMLAttributes<HTMLDivElement> {}

const ChatMessages: FC<ChatMessagesProps> = ({ className, ...props }) => {
  return <div className="">ChatMessages</div>;
};

export default ChatMessages;
