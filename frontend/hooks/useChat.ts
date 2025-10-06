"use client";
import { Message } from "@/types/chat";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000");

export function useChat(chatId: string) {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.emit("join_room", chatId);

    const handleReceive = (message: Message) => {
      setMessages((prev) => {
        // ✅ prevent duplicates
        if (prev.some((m) => m.id === message.id)) return prev;
        return [...prev, message];
      });
    };

    socket.on("receive_message", handleReceive);

    return () => {
      socket.off("receive_message", handleReceive);
    };
  }, [chatId]);

  function sendMessage(text: string) {
    const message: Message = {
      id: Date.now().toString(),
      sender: "me",
      text,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, message]);

    socket.emit("send_message", { chatId, message });
  }

  return { messages, sendMessage };
}
