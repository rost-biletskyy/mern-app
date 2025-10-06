"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ChatHeader from "@components/chat/ChatHeader";
import ChatMessages from "@components/chat/ChatMessages";
import ChatInput from "@components/chat/ChatInput";
import { useChat } from "@hooks/useChat";
import { getUsers } from "@lib/api";
import { User } from "@/types/user";

export default function ChatPage() {
  const { id } = useParams();
  const chatId = id as string;
  const { messages, sendMessage } = useChat(chatId);

  const [chatUser, setChatUser] = useState<User | null>(null);

  useEffect(() => {
    async function fetchUser() {
      const users = await getUsers();
      const found = users.find((u) => u._id === chatId);
      setChatUser(found || null);
    }
    fetchUser();
  }, [chatId]);

  return (
    <div className="flex flex-col h-screen bg-[#0f0f1a]">
      <ChatHeader chatUser={chatUser} />
      <ChatMessages messages={messages} />
      <ChatInput onSend={sendMessage} />
    </div>
  );
}
