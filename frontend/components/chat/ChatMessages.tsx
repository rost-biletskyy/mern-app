import { Message } from "@/types/chat";
import { useEffect, useRef } from "react";

export default function ChatMessages({ messages }: { messages: Message[] }) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map((msg, index) => (
        <div key={`${msg.id}-${index}`} className={`max-w-xs px-4 py-2 rounded-2xl ${
          msg.sender === "me"
            ? "bg-purple-600 ml-auto text-white"
            : "bg-gray-700 text-white"
        }`}>
          <div>{msg.text}</div>
          <div className="text-xs text-gray-300 mt-1 text-right">
            {new Date(msg.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </div>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}
