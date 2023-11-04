//@ts-ignore
import { MessagesContext } from "@/context/messages";

import { Message } from "@/lib/validators/message";
import { useMutation } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { nanoid } from "nanoid";
import { useContext, useRef, useState } from "react";
import { Input, Button } from "@material-tailwind/react";
import { toast } from "react-hot-toast";

type Props = {};

const ChatInput = (props: Props) => {
  const textareaRef = useRef(null);
  const [input, setinput] = useState<string>("");
  const onChange = ({ target }: any) => setinput(target.value);
  const {
    messages,
    addMessage,
    removeMessage,
    updateMessage,
    setIsMessageUpdating,
  } = useContext(MessagesContext);

  const { mutate: sendMessage, isPending } = useMutation({
    mutationKey: ["sendMessage"],
    // include message to later use it in onMutate
    mutationFn: async (_message: Message) => {
      try {
        const response = await fetch("/api/message", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ messages }),
        });

        return response.body;
      } catch (error) {
        console.log(error);
      }
    },
    onMutate(message) {
      addMessage(message);
    },
    onSuccess: async (stream) => {
      if (!stream) throw new Error("No stream");

      // construct new message to add
      const id = nanoid();
      const responseMessage: Message = {
        id,
        isUserMessage: false,
        text: "",
      };

      // add new message to state
      addMessage(responseMessage);

      setIsMessageUpdating(true);

      const reader = stream.getReader();
      const decoder = new TextDecoder();
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunkValue = decoder.decode(value);
        updateMessage(id, (prev) => prev + chunkValue);
      }

      // clean up
      setIsMessageUpdating(false);
      setinput("");

      //  setTimeout(() => {
      //    textareaRef.current?.focus();
      //  }, 10);
    },
    onError: (_, message) => {
      toast.error("Something went wrong. Please try again.");
      removeMessage(message.id);
      //  textareaRef.current?.focus();
    },
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
          disabled={isPending}
          // ref={textareaRef}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();

              const message: Message = {
                id: nanoid(),
                isUserMessage: true,
                text: input,
              };

              sendMessage(message);
            }
          }}
        />

        <div className="absolute bottom-0 inset-y-0 right-0 flex py-1.5 pr-1.5">
          <kbd className="inline-flex items-center rounded border bg-white border-gray-200 px-1 font-sans text-xs text-gray-400">
            {isPending ? (
              <Loader2 className="w-3 h-3 animate-spin" />
            ) : (
              <Button
                size="sm"
                color={input ? "gray" : "blue-gray"}
                disabled={!input}
                className="!absolute right-1 top-1 rounded"
                onClick={(e) => {
                  e.preventDefault();

                  const message: Message = {
                    id: nanoid(),
                    isUserMessage: true,
                    text: input,
                  };

                  sendMessage(message);
                }}
              >
                Send
              </Button>
            )}
          </kbd>
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
