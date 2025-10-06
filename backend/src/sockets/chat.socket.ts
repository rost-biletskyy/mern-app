import { Server, Socket } from "socket.io";

export function registerChatHandlers(io: Server, socket: Socket): void {
  socket.on("join_room", (chatId: string) => {
    socket.join(chatId);
    console.log(`🟢 Socket ${socket.id} joined room ${chatId}`);
  });

  socket.on("send_message", (data) => {
    const { chatId, message } = data;
    console.log(`💬 Message in room ${chatId}:`, message.text);

    socket.to(chatId).emit("receive_message", message);
  });
}
