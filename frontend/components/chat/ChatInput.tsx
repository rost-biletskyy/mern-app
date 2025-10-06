"use client";

import { useState } from "react";

type Props = {
  onSend: (text: string) => void;
};

export default function ChatInput({ onSend }: Props) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (!message.trim()) return;
    onSend(message);
    setMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex items-center p-4 border-t border-gray-700 bg-[#14141d]">
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type your message..."
        className="flex-1 bg-transparent border border-gray-600 rounded-xl px-3 py-2 text-white outline-none"
      />
      <button
        onClick={handleSend}
        className="ml-3 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-xl font-semibold"
      >
        Send
      </button>
    </div>
  );
}
