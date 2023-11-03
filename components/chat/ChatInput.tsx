//@ts-ignore
import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { useMutation } from "@tanstack/react-query";
import { nanoid } from "nanoid";
import { Message } from "@/lib/validators/message";

type Props = {};

const ChatInput = (props: Props) => {
  const [input, setinput] = React.useState<string>("");
  const onChange = ({ target }: any) => setinput(target.value);

  const { mutate: sendMessage } = useMutation({
    mutationFn: async (message: Message) => {
      const response = await fetch("/api/message", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: [message] }),
      });

      return response.body;
    },
    onSuccess: () =>{
      console.log("Success")
      
    }
  });

  return (
    <div>
      <div className="relative flex w-full max-w-[30rem]">
        <Input
          type="message"
          label="New message"
          value={input}
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
          crossOrigin={undefined}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              const message = {
                id: nanoid(),
                isUserMessage: true,
                text: input,
              };

              sendMessage(message);
            }
          }}
        />
        <Button
          size="sm"
          color={input ? "gray" : "blue-gray"}
          disabled={!input}
          className="!absolute right-1 top-1 rounded"
          onClick={(e) => {
            
              e.preventDefault();
              const message = {
                id: nanoid(),
                isUserMessage: true,
                text: input,
              };

              sendMessage(message);
            
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
