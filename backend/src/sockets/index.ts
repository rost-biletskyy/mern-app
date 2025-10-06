import { Server, Socket } from "socket.io";
import { registerChatHandlers } from "./chat.socket";

export function setupSockets(io: Server): void {
  io.on("connection", (socket: Socket) => {
    console.log(`🟢 User connected: ${socket.id}`);

    registerChatHandlers(io, socket);

    socket.on("disconnect", () => {
      console.log(`🔴 User disconnected: ${socket.id}`);
    });
  });
}
