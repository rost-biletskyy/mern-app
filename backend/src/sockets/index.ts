import { Server, Socket } from "socket.io";
import { registerChatHandlers } from "./chat.socket";

export function setupSockets(io: Server) {
  io.on("connection", (socket: Socket) => {
    console.log("User connected:", socket.id);
    registerChatHandlers(io, socket);
  });
}
