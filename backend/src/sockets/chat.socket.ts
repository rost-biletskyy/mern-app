import { Server, Socket } from "socket.io";

export const registerChatHandlers = (io: Server, socket: Socket) => {
  socket.on("sendMessage", (data: { sender: string; message: string }) => {
    // data = { sender, message }
    console.log("Message:", data);

    // send message to all connected clients
    io.emit("receiveMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
};
