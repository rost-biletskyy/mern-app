import http from "http";
import { Server } from "socket.io";
import app from "./app";
import { setupSockets } from "./sockets";
import { connectDB } from "./config/db";

const PORT = 5000;

connectDB();

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" }
});

setupSockets(io);

server.listen(PORT, () => {
  console.log(`✓  Server on http://localhost:${PORT}`);
});
