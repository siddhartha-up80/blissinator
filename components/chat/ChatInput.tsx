//@ts-ignore
import React from "react";
import { Input, Button } from "@material-tailwind/react";

type Props = {};

const ChatInput = (props: Props) => {
  const [message, setmessage] = React.useState("");
  const onChange = ({ target }: any) => setmessage(target.value);

  return (
    <div>
      <div className="relative flex w-full max-w-[30rem]">
        <Input
          type="message"
          label="New message"
          value={message}
          onChange={onChange}
          className="pr-20"
          containerProps={{
            className: "min-w-0",
          }}
          crossOrigin={undefined}
        />
        <Button
          size="sm"
          color={message ? "gray" : "blue-gray"}
          disabled={!message}
          className="!absolute right-1 top-1 rounded"
        >
        Send
        </Button>
      </div>
    </div>
  );
};

export default ChatInput;
